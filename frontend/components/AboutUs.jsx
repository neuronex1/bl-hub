'use strict';

import React from 'react';
import AboutUsBox from './AboutUsTextBox';
import {
    CURRENT_MEMBERS,
    ALUMNI,
} from './AboutUsConfig.js';

const AboutUs = () => {
    const renderAboutBoxes = (config) => {
        return config.map(aboutBox => {
            return AboutUsBox(aboutBox);
        });
    }

    return (
        <React.Fragment>

        <h2 className='text-center'>About Us</h2>

        <div className='mission-statement mtxl'>
            <img className='bl-hub__logo mrxl' src='https://bl-hub.s3.amazonaws.com/logos/BL+Hub+Logo_FINAL_with+number-min.jpg'/>
            <div className='mission-statement__text-container'>
                <img className='bl-icon bl-icon__quote bl-icon__quote--left' src='https://s3.amazonaws.com/bl-hub/right-quotation-mark.svg' />
                <p className='mission-statement__text'>Our Hub will systematically develop and disseminate novel and powerful bioluminescent (BL) tools for brain science and advance BL as a transformative tool in neuroscience through Innovation, Dissemination and Education. Hub-driven Innovation will greatly enhance BL control and imaging applications, widespread Dissemination of these new BL methods and related technologies will support their use across neuroscience, and Education will use this compelling biological phenomenon as a focus for an interdisciplinary curriculum for high school and undergraduate students.</p>
                <img className='bl-icon bl-icon__quote bl-icon__quote--right' src='https://s3.amazonaws.com/bl-hub/right-quotation-mark.svg' />
            </div>
        </div>

            <h3></h3>
            <table className='about-us__table'>
                <tbody>
                    {renderAboutBoxes(CURRENT_MEMBERS)}
                </tbody>
            </table>
            <div className="horizontal-divider mtxxl mbxxl"></div>
            <h3 className='text-center'>Alumni</h3>
            <table className='about-us__table'>
                <tbody>
                    {renderAboutBoxes(ALUMNI)}
                </tbody>
            </table>
            <div className="horizontal-divider mtxxl mbxxl"></div>
            <p className='text-m'>Our Hub is supported by National Science Foundation <a href='https://nsf.gov/awardsearch/showAward?AWD_ID=1707352' className='bl-link'>NeuroNex 1707352</a>.</p>
            <br/>
            <p className='text-m'>Website icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>, <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>, and <a href="http://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com.</a></p>
            <p className='text-m'>Additional icons: Clker-Free-Vector-Image (Pixabay).</p>
            <br/>
            <p className='text-m'>Glow worms on Education page: Flickr; Eden, Janine and Jim.</p>
            <p className='text-m'><span className='italics'>Gaussia princeps</span> on Emissary button: Hopcroft/UAF/CMarZ hopcroft@ims.uaf.edu.</p>
            <p className='text-m'>Fungi on Education page: Ylem, WikiCommons and Angus Veitch.</p>
            <p className='text-m'>Jellyfish on Education page: E. Widder, Operation Deep Scope 2005, NOAA's National Ocean Service.</p>
            <p className='text-m'>Firefly on Education page: Art Farmer, Evansville, IN.</p>
            <p className='text-m'>Dinoflagellates in ocean on Education page: Jed Sundwall, San Diego, CA, WikiCommons.</p>
            <p className='text-m'>Bathysphere on Education page: Commercial Fisheries Review (1946), digitized by Biodiversity Heritage Library.</p>
            <p className='text-m'>Luminescing Bamboo Coral on Education page: Bioluminescence 2009 Expedition, NOAA/OER</p>
            <br/>
            <p className='text-m'>Thanks to <a class='bl-link' href='https://www.maxlaumeister.com/articles/hide-related-videos-in-youtube-embeds/' target='_blank'>Maximillian Laumeister</a> for code used to embed videos used on the Education pages.</p>
        </React.Fragment>
    );
}

export default AboutUs;
