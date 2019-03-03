require 'rest-client'
require 'json'
require 'set'

class BdrController < ApplicationController
    def index
        url = 'https://repository.library.brown.edu/api/collections/827/'
        response = RestClient.get(url)
        collectionsData = JSON.parse(response)

        constructs = collectionsData['items']['docs'].map do |doc|
            JSON.parse(RestClient.get(doc['json_uri']))
        end

        @facets = Hash.new()

        constructs.each_with_index do |construct, idx|
            construct.each do |facet, propertyArr|
                matches = facet.match(/mods_note_construct_(\w+)_ssim/)
                if matches && matches[1]
                    next if matches[1] == 'feature'
                    facetName = matches[1].capitalize
                    property = propertyArr.first

                    facetKey = "#{facetName}_#{idx}"
                    isChecked = params[facetKey] && params[facetKey] == property

                    propertyObj = {
                        property: property,
                        isChecked: isChecked
                    }

                    if !@facets[facetName]
                        @facets[facetName] = []
                    end

                    @facets[facetName] << propertyObj
                end
            end
        end

        inUseFacetsAndProps = Hash.new()

        @facets.each do |facetName, propArr|
            next if propArr.all? {|prop| prop[:isChecked]}

            propsToFilterOn = propArr.select {|prop| prop[:isChecked]}
            propsToFilterOn.each do |propertyObj|
                inUseFacetsAndProps[facetName] = propertyObj[:property]
            end
        end

        @searchResults = constructs.select do |construct|
            #each in use facet property exists on this objet
            inUseFacetsAndProps.all? do |facetName, prop|
                facetStr = facetName.downcase
                constructField = "mods_note_construct_#{facetStr}_ssim"
                construct[constructField][0] == prop
            end
        end

        render :index
    end
end
