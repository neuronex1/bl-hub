'use strict';

import React from 'react';
import ResearchObjectsBox from './ResearchObjectsTextBox';
import {
    RESEARCH_OBJECTS_PAPERS,
    RESEARCH_OBJECTS_POSTERS,
    RESEARCH_OBJECTS_THESES,
} from './ResearchObjectsConfig.js';

const ResearchObjects = () => {
    const renderResearchObjectsBoxes = (config) => {
        return config.map(researchBox => {
          return ResearchObjectsBox(researchBox);
      });
    }

    return (
        <React.Fragment>
        <div class='container-xtrawide'>
            <img class='img__fixed-width' src='https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg' />
            <h2 className='text-center'>Our Research</h2>

<h3 className='text-center'><a class='bl-link' href="#Papers">Papers and Manuscripts</a></h3>
<h3 className='text-center'><a class='bl-link' href="#Theses">Theses</a></h3>
<h3 className='text-center'><a class='bl-link' href="#Posters">Posters</a></h3>

<div className="horizontal-divider mtxxl mbxxl" id="Papers"></div>
                <h3 className='text-center'>Papers and Manuscripts</h3>
            <table className='research-objects__table '>
                <tbody>
                    {renderResearchObjectsBoxes(RESEARCH_OBJECTS_PAPERS)}
                </tbody>
            </table>
<div className="horizontal-divider mtxxl mbxxl" id="Theses"></div>
              <h3 className='text-center'>Theses</h3>
        <table className='research-objects__table '>
              <tbody>
                    {renderResearchObjectsBoxes(RESEARCH_OBJECTS_THESES)}
              </tbody>
        </table>
<div className="horizontal-divider mtxxl mbxxl" id="Posters"></div>

                <h3 className='text-center'>Posters</h3>
                <table className='research-objects__table'>
                    <tbody>
                        {renderResearchObjectsBoxes(RESEARCH_OBJECTS_POSTERS)}
                    </tbody>
                </table>
        </div>
        </React.Fragment>
    );
}


export default ResearchObjects;
