'use strict'

import React from 'react';

class Carousel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.changeSlide = this.changeSlide.bind(this);
        this.changeSlideClick = this.changeSlideClick.bind(this);
        this.renderSubtitle = this.renderSubtitle.bind(this);

        this.slides = [
            {
                src: 'https://s3.amazonaws.com/bl-hub/aquorea_victoria-min.jpg',
                caption: 'Symposium: Next Generation Technologies for Neuroscience',
                title: 'June 11-12, 2018 | Brown University',
                subtitle: [
                    'Invited Speakers',
                    'Industry Panel',
                    'Networking Opportunities',
                    'Poster Session'
                ],
                buttonLabel: 'LEARN MORE',
                link: '/symposium/learn-more'
            },
            {
                src: 'https://s3.amazonaws.com/bl-hub/mbl-min.jpg',
                caption: 'Education at Many Levels',
                title: 'Applications open October 2018!',
                subtitle: ['March 18-23, 2018', 'Marine Biological Laboratory', 'Woods Hole, MA'],
                buttonLabel: 'LEARN MORE',
                link: '/mbl/about'
            },
            {
                src: 'https://s3.amazonaws.com/bl-hub/test_tubes-min.jpg',
                caption: 'Sharing New Tools With Scientists',
                title: 'Register now for our next Workshop!',
                subtitle: ['August 6, 2018', 'Brown University'],
                buttonLabel: 'LEARN MORE',
                link: '/research/workshops'
            }
        ];

        this.state = {
            currentSlideIdx: 0
        }
    }

    changeSlide(direction = 'next') {
        let newSlideIdx = (this.state.currentSlideIdx + 1) % this.slides.length;

        if (direction === 'prev') {
            newSlideIdx = (this.state.currentSlideIdx - 1) % this.slides.length;
            if (this.state.currentSlideIdx === 0) {
                newSlideIdx = this.slides.length - 1;
            }
        }

        this.setState({
            currentSlideIdx: newSlideIdx
        });
    }

    changeSlideClick(direction = 'next') {
        window.clearInterval(this.slideInterval);
        this.changeSlide(direction);
        this.slideInterval = window.setInterval(this.changeSlide, 5000);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.slideInterval = window.setInterval(this.changeSlide, 5000);
        }
    }

    componentWillUnmount() {
        window.clearInterval(this.slideInterval);
    }

    renderSubtitle(subtitle) {
        return subtitle.map(str => {
            return <span key={str} className='subtitle'>{str}</span>;
        });
    }

    renderSlides() {
        return this.slides.map((slide, idx) => {
            let className = 'hero-img-container';
            if (idx === this.state.currentSlideIdx) {
                className += ' current';
            }

            const style = {
                background: 'url(' + slide.src + ') no-repeat center center / cover' // contain
            };

            return (
                <div className={className} key={slide.src} style={style}>
                    <img className='bl-icon bl-icon__arrow' src='https://s3.amazonaws.com/bl-hub/right-arrow.svg'
                    onClick={this.changeSlideClick} />
                    <img className='bl-icon bl-icon__arrow bl-icon__arrow--left' src='https://s3.amazonaws.com/bl-hub/right-arrow.svg'
                    onClick={this.changeSlideClick.bind(this, 'prev')} />
                    <div className='text-container'>
                        <p className='slide-caption'>{slide.caption}</p>
                        <p className='slide-title'>{slide.title}</p>
                        <p className='slide-subtitle'>{this.renderSubtitle(slide.subtitle)}</p>
                        <a className='slide-button' href={slide.link}>
                            {slide.buttonLabel}
                            <i className="fa fa-caret fa-caret-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            );

            // <div className={className} key={idx} style={style}>
            //     <div className='text-container'>
            //         <p className='slide-caption'>{slide.caption}</p>
            //         <p className='slide-title'>{slide.title}</p>
            //         <p className='slide-subtitle'>{slide.subtitle}</p>
            //     </div>
            // </div>
        });
    }

    render() {
        return (
            <div className="carousel">
                {this.renderSlides()}
            </div>
        );
    }
}

export default Carousel;
