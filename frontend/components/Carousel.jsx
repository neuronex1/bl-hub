'use strict'

import React from 'react';

class Carousel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.changeSlide = this.changeSlide.bind(this);
        this.renderSubtitle = this.renderSubtitle.bind(this);

        this.slides = [
            {
                src: 'http://gdurl.com/IYMt',
                caption: 'Symposium: Next Generation Technologies for Neuroscience',
                title: 'June 11-12, 2018 | Brown University',
                subtitle: [
                    'Invited Speakers',
                    'Industry Panel',
                    'Networking Opportunities',
                    'Poster Session'
                ],
                buttonLabel: 'REGISTER',
                link: '/symposium/register'
            },
            {
                src: 'http://gdurl.com/nI36',
                caption: 'Education at Many Levels',
                title: 'Applications open October 2018!',
                subtitle: ['18-23 March 2018', 'Marine Biological Laboratory', 'Woods Hole, MA'],
                buttonLabel: 'LEARN MORE',
                link: '/mbl/apply'
            },
            {
                src: 'http://gdurl.com/2Dnb',
                caption: 'Sharing New Tools With Scientists',
                title: 'Register now for our next Workshop!',
                subtitle: ['06 August 2018', 'Brown University'],
                buttonLabel: 'LEARN MORE',
                link: '/symposium/schedule'
            }
        ];

        this.state = {
            currentSlideIdx: 0
        }
    }

    changeSlide() {
        let nextSlideIdx = (this.state.currentSlideIdx + 1) % this.slides.length;
        this.setState({
            currentSlideIdx: nextSlideIdx
        });
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.setInterval(this.changeSlide, 5000);
        }
    }

    componentWillUnmount() {
        window.clearInterval(this.changeSlide);
    }

    renderSubtitle(subtitle) {
        return subtitle.map(str => {
            return <span className='subtitle'>{str}</span>;
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
                <div className={className} key={idx} style={style}>
                    <div className='text-container'>
                        <p className='slide-caption'>{slide.caption}</p>
                        <p className='slide-title'>{slide.title}</p>
                        <p className='slide-subtitle'>{this.renderSubtitle(slide.subtitle)}</p>
                        <a className='slide-button' href={slide.link}>
                            {slide.buttonLabel}
                            <i class="fa fa-caret fa-caret-right" aria-hidden="true"></i>
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
