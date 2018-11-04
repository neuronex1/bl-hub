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
        </React.Fragment>
    );
};

export default Homepage;
