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
            <img className='bl-hub__logo mtxl mbxl' src='https://s3.amazonaws.com/bl-hub/logos/BL+Hub+Logo.png'/>
        </React.Fragment>
    );
};

export default Homepage;
