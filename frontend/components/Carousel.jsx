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
              src: 'https://bl-hub.s3.amazonaws.com/Beyond_Neurons_Meeting.png',
                caption: 'Join us for Seminars, Posters, and Workshops!',
                subtitle: [
                ],
                buttonLabel: 'REGISTER NOW',
                link: '/BeyondNeurons',
                photoCredit: ''
              },
            {
                src: 'https://bl-hub.s3.amazonaws.com/LMO3+mouse+at+JAX_2.png',
                caption: 'LMO3 Mouse Now Available at JAX',
                subtitle: [
                  'BL-OG',
                  'Development',
                  'Behavior'
                ],
                buttonLabel: 'LEARN MORE',
                link: '/LMO3',
                photoCredit: 'Drawing: Raisa Khan'
            },
            {
                src: 'https://s3.amazonaws.com/bl-hub/mbl-min.jpg',
                caption: 'NeuroNex Practicum for Undergraduates',
                title: 'A',
                subtitle: ['Lectures', 'Synopses', 'Photos', 'Interviews with Experts'],
                buttonLabel: 'LEARN MORE',
                link: '/mbl',
                photoCredit: ''
            },
            {
                src: 'https://s3.amazonaws.com/bl-hub/test_tubes-min.jpg',
                caption: 'Sharing New Tools With Scientists',
                subtitle: ['Brown University', 'Central Michigan University', 'University of California, San Diego'],
                buttonLabel: 'LEARN MORE',
                link: '/constructs',
                photoCredit: ''
            },
            {
              src: 'https://bl-hub.s3.amazonaws.com/home+buttons/Dissemination+Slide_V2-min.jpg',
              caption: 'Disseminating Knowledge Broadly',
              subtitle: ['Workshops', 'Emissaries', 'Practicum for Undergraduates', 'Plasmids'],
              buttonLabel: 'LEARN MORE',
              link: '/dissemination',
              photoCredit: ''
            },
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
                        <p className='slide-title'>{slide.caption}</p>
                        <p className='slide-subtitle'>{this.renderSubtitle(slide.subtitle)}</p>
                        <a className='slide-button' href={slide.link}>
                            {slide.buttonLabel}
                            <i className="fa fa-caret fa-caret-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <img className='bl-hub-logo' src='https://bl-hub.s3.amazonaws.com/logos/BL+Hub+Logo_FINAL_inverse_transparent+background.png'/>
                    <p className='slide-photo-credit'>{slide.photoCredit}</p>
                </div>
            );
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
