'use strict';

import React from 'react';
import ResearchObjectsBox from './ResearchObjectsTextBox';
import {
    RESEARCH_OBJECTS,
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
            <h3></h3>
            <table className='research-objects__table '>
                <tbody>
                    {renderResearchObjectsBoxes(RESEARCH_OBJECTS)}
                </tbody>
        </table>
        </div>
        </React.Fragment>
    );
}


export default ResearchObjects;
