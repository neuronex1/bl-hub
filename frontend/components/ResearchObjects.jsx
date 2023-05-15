'use strict';

import React from 'react';
import ResearchObjectsBox from './ResearchObjectsTextBox';
import {
    RESEARCH_OBJECTS_PAPERS,
    RESEARCH_OBJECTS_2023POSTERS,
    RESEARCH_OBJECTS_2022POSTERS,
    RESEARCH_OBJECTS_2021POSTERS,
    RESEARCH_OBJECTS_2020POSTERS,
    RESEARCH_OBJECTS_2019POSTERS,
    RESEARCH_OBJECTS_2018POSTERS,
    RESEARCH_OBJECTS_2017POSTERS,
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
<h3 className='text-center'>Posters: <a class='bl-link' href="#2023Posters">2023</a>, <a class='bl-link' href="#2022Posters">2022</a>, <a class='bl-link' href="#2021Posters">2021</a>, <a class='bl-link' href="#2020Posters">2020</a>, <a class='bl-link' href="#2019Posters">2019</a>, <a class='bl-link' href="#2018Posters">2018</a>, <a class='bl-link' href="#2017Posters">2017</a></h3>

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

<div className="horizontal-divider mtxxl mbxxl" id="2023Posters"></div>

              <h3 className='text-center'>2023 Posters</h3>
              <table className='research-objects__table'>
                <tbody>
                    {renderResearchObjectsBoxes(RESEARCH_OBJECTS_2023POSTERS)}
                </tbody>
          </table>

<div className="horizontal-divider mtxxl mbxxl" id="2022Posters"></div>

                <h3 className='text-center'>2022 Posters</h3>
                <table className='research-objects__table'>
                    <tbody>
                        {renderResearchObjectsBoxes(RESEARCH_OBJECTS_2022POSTERS)}
                    </tbody>
                </table>


<div className="mtxxl mbxxl" id="2021Posters"></div>

                <h3 className='text-center'>2021 Posters</h3>
                <table className='research-objects__table'>
                    <tbody>
                        {renderResearchObjectsBoxes(RESEARCH_OBJECTS_2021POSTERS)}
                    </tbody>
                </table>


<div className="mtxxl mbxxl" id="2020Posters"></div>

                <h3 className='text-center'>2020 Posters</h3>
                <table className='research-objects__table'>
                    <tbody>
                        {renderResearchObjectsBoxes(RESEARCH_OBJECTS_2020POSTERS)}
                    </tbody>
                </table>

<div className="mtxxl mbxxl" id="2019Posters"></div>

                <h3 className='text-center'>2019 Posters</h3>
                <table className='research-objects__table'>
                    <tbody>
                        {renderResearchObjectsBoxes(RESEARCH_OBJECTS_2019POSTERS)}
                    </tbody>
                </table>

<div className="mtxxl mbxxl" id="2018Posters"></div>

                <h3 className='text-center'>2018 Posters</h3>
                <table className='research-objects__table'>
                    <tbody>
                        {renderResearchObjectsBoxes(RESEARCH_OBJECTS_2018POSTERS)}
                    </tbody>
                </table>

<div className="mtxxl mbxxl" id="2017Posters"></div>

                <h3 className='text-center'>2017 Posters</h3>
                <table className='research-objects__table'>
                    <tbody>
                        {renderResearchObjectsBoxes(RESEARCH_OBJECTS_2017POSTERS)}
                    </tbody>
                </table>
        </div>
        </React.Fragment>
    );
}


export default ResearchObjects;
