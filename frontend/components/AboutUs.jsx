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
            <p className='text-m pull-right'>Our Hub is supported by National Science Foundation <a href='https://nsf.gov/awardsearch/showAward?AWD_ID=1707352' className='bl-link'>NeuroNex 1707352</a>.</p><br/>
            <p className='text-m pull-right'>Website icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>, <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>, and <a href="http://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com.</a></p><br/>
            <p className='text-m pull-right'>Additional icons: Clker-Free-Vector-Image (Pixabay).</p>
            <br/>
            <p className='text-m pull-right'>Glow worms: Flickr; Eden, Janine and Jim.</p>
            <br/>
            <p className='text-m pull-right'><span className='italics'>Gaussia princeps</span> on Emissary button: Hopcroft/UAF/CMarZ hopcroft@ims.uaf.edu.</p>
            <br/>
            <p className='text-m pull-right'>Fungi on Education page: Ylem, WikiCommons and Angus Veitch.</p>
            <br/>
            <p className='text-m pull-right'>Jellyfish on Education page: NOAA's National Ocean Service.</p>
            <br/>
            <p className='text-m pull-right'>Firefly on Education page: Art Farmer, Evansville, IN.</p>
            <br/>
        </React.Fragment>
    );
}

export default AboutUs;
