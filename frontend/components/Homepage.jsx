'use strict'

import React from 'react';
import Carousel from './Carousel.jsx';
import NavBar from './NavBar.jsx';

const Homepage = (props) => {
    return (
        <React.Fragment>
            <div className='nav-bar-container--home'>
                <NavBar isHomepage={true}/>
            </div>
            <Carousel />
            <div className='mission-statement-container'>
                <img className='bl-icon bl-icon__quote bl-icon__quote--left' src='https://s3.amazonaws.com/bl-hub/right-quotation-mark.svg' />
                <p className='mission-statement'>Our Hub will systematically develop and disseminate novel and powerful bioluminescent (BL) tools for brain science and advance BL as a transformative tool in neuroscience through Innovation, Dissemination and Education. Hub-driven Innovation will greatly enhance BL control and imaging applications, widespread Dissemination of these new BL methods and related technologies will support their use across neuroscience, and Education will use this compelling biological phenomenon as a focus for an interdisciplinary curriculum for high school and undergraduate students.</p>
                <img className='bl-icon bl-icon__quote bl-icon__quote--right' src='https://s3.amazonaws.com/bl-hub/right-quotation-mark.svg' />
            </div>
            <img className='bl-hub__logo mtxl mbxl' src='https://s3.amazonaws.com/bl-hub/logos/BL+Hub+Logo.png'/>
        </React.Fragment>
    );
};

export default Homepage;
