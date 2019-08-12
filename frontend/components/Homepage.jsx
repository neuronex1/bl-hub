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
        title: 'For Students & Teachers',
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
            <div className='hp-cards'>
                {renderCards()}
            </div>
            <div className='bl-iframe__scaled--wrapper'><iframe src='https://repository.library.brown.edu/viewers/stream/bdr:847082/'></iframe></div>
        </React.Fragment>
    );
};

export default Homepage;
