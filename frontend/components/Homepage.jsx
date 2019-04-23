'use strict'

import React from 'react';
import Carousel from './Carousel.jsx';
import NavBar from './NavBar.jsx';

const CARDS_DATA = [
    {
        title: 'What is BL-OG?',
        imgSrc: 'https://s3.amazonaws.com/bl-hub/about-bl-og/BL-OG+channels-min.jpg',
        destinationLink: '/what-is-BL-OG'
    },
    {
        title: 'For Students',
        imgSrc: 'https://s3.amazonaws.com/bl-hub/education/Scintillon-students-min.jpg',
        destinationLink: '/education'
    },
    {
        title: 'Research & Constructs',
        imgSrc: 'https://s3.amazonaws.com/bl-hub/open-science-fig-min.jpg',
        destinationLink: 'constructs'
    },
];

const Homepage = (props) => {
    const renderCards = () => {
        return CARDS_DATA.map(card => {
            return (
                <a className='hp-card-link' href={card.destinationLink} key={card.title}>
                    <div className='hp-card mtxl mlxl mrxl mbxl'>
                            <div className='hp-card__title'>{card.title}</div>
                            <div className='hp-card__img' style={{backgroundImage: 'url(\'' + card.imgSrc + '\') '}} />
                            <div className='hp-card__img-container' />
                    </div>
                </a>

            );
        })
    }

    return (
        <React.Fragment>
            <div className='nav-bar-container--home'>
                <NavBar isHomepage={true}/>
            </div>
            <Carousel />
            <div className='mission-statement mtxl'>
                <img className='bl-hub__logo mrxl' src='https://s3.amazonaws.com/bl-hub/logos/BL+Hub+Logo.png'/>
                <div className='mission-statement__text-container'>
                    <img className='bl-icon bl-icon__quote bl-icon__quote--left' src='https://s3.amazonaws.com/bl-hub/right-quotation-mark.svg' />
                    <p className='mission-statement__text'>Our Hub will systematically develop and disseminate novel and powerful bioluminescent (BL) tools for brain science and advance BL as a transformative tool in neuroscience through Innovation, Dissemination and Education. Hub-driven Innovation will greatly enhance BL control and imaging applications, widespread Dissemination of these new BL methods and related technologies will support their use across neuroscience, and Education will use this compelling biological phenomenon as a focus for an interdisciplinary curriculum for high school and undergraduate students.</p>
                    <img className='bl-icon bl-icon__quote bl-icon__quote--right' src='https://s3.amazonaws.com/bl-hub/right-quotation-mark.svg' />
                </div>
            </div>
            <div className='hp-cards'>
                {renderCards()}
            </div>
            <div className='bl-iframe__scaled--wrapper'><iframe src='https://repository.library.brown.edu/viewers/stream/bdr:847082/'></iframe></div>
        </React.Fragment>
    );
};

export default Homepage;
