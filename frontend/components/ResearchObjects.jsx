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
            <h2 className='text-center'>Our Research</h2>
            <h3></h3>
            <table className='research-objects__table'>
                <tbody>
                    {renderResearchObjectsBoxes(RESEARCH_OBJECTS)}
                </tbody>
            </table>

        </React.Fragment>
    );
}

export default ResearchObjects;
