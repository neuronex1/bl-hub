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
                        <a href='/what-is-BL-OG'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/What+is+BL-OG+button-min.jpg' alt='What is BL-OG?'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mlxl'>
                        <a href='/LMO3'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/LMO3+Primer+Button_new-min.jpg' alt='Get Started with LMO3'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mll'>
                        <a href='/data'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/BL-OG+in+Action+button_2-min.jpg' alt='BL-OG Tools in Action'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mlxl'>
                        <a href='/BLOGfaqs'>
                            <img src='https://bl-hub.s3.amazonaws.com/about-bl-og/BL-OG_FAQs_button-min.jpg' alt='BL-OG FAQs'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mll'>
                        <a href='/publications'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/BL-OG_publications_button-min.jpg' alt='BL-OG Publications'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mll'>
                        <a href='/research-objects'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/Our+Research+button-min.jpg' alt='Our Research'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mlxl'>
                        <a href='/constructs'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/Constructs+Database+button-min.jpg' alt='Constructs Database'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mlxl'>
                        <a href='/dissemination'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/Dissemination-button-for-home-page-min.jpg' alt='Dissemination'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mll'>
                        <a href='/education'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/Students-and-Teachers-button-min.jpg' alt='For Students & Teachers'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
                    <div class='button-img mlxl'>
                        <a href='/mbl'>
                            <img src='https://bl-hub.s3.amazonaws.com/home+buttons/Direct+practicum+button+for+home+page-min.jpg' alt='NeuroNex Practicum'/>
                            <div class='button-img__overlay'></div>
                        </a>
                    </div>
            </div>
<div class='container'>
  <div>
    <iframe class='float-left prl mll mrxl' src="https://scratch.mit.edu/projects/329586725/embed" allowtransparency="true" width="483" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
  </div>
  <div class='clearfix mtxxl mlxl'>
      <p><i> Click the green flag to begin.</i></p>
      <p class='mtxl'> BL-OG combines bioluminescence with optogenetics to allow ion channels to be opened with an external light OR chemical ligand.</p>
      <p class='mtxl'>Here, the chemical ligand is the luciferin coelenterazine (CTZ). The CTZ is broken down by its luciferase (yellow), releasing bioluminescent light. This nearby bioluminescent light is sensed by the opsin, opening the channel.</p>
  </div>
</div>

            <h3 class='text-center'>What are the differences between bioluminescence, fluorescence, and phosphorescence?</h3>
            <div className='bl-iframe__scaled--wrapper'><iframe src='https://repository.library.brown.edu/viewers/stream/bdr:847082/'></iframe></div>
        </React.Fragment>
    );
};

export default Homepage;
