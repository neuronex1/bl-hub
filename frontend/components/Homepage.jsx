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
            <div id='homecards' class='container'>
                    <div class='button-img mll'>
                        <a href='https://www.bioluminescencehub.org/what-is-BL-OG'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/What-is-BL-OG-button.jpg' alt='What is BL-OG?'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mlxl'>
                        <a href=''>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/LMO3-Primer-Button-min.jpg' alt='Get Started with LMO3'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mll'>
                        <a href='https://www.bioluminescencehub.org/research-objects'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/Our-Research-button-min.jpg' alt='Our Research?'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mlxl'>
                        <a href='https://www.bioluminescencehub.org/constructs'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/Constructs-Database-button-min.jpg' alt='Constructs Database'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mll'>
                        <a href='https://www.bioluminescencehub.org/data'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/BL-OG-in-Action-button-min.jpg' alt='BL-OG Tools in Action'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mlxl'>
                        <a href='https://www.bioluminescencehub.org/education'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/Students-and-Teachers-button-min.jpg' alt='For Students & Teachers'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
            </div>
            <h3 class='text-center'>What are the differences between bioluminescence, fluorescence, and phosphorescence?</h3>
            <div className='bl-iframe__scaled--wrapper'><iframe src='https://repository.library.brown.edu/viewers/stream/bdr:847082/'></iframe></div>
        </React.Fragment>
    );
};

export default Homepage;
