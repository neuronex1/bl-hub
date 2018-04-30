'use strict'

import React from 'react';

class Carousel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.changeSlide = this.changeSlide.bind(this);

        // this.slides = [
        //     {
        //         src: 'http://gdurl.com/WuX6',
        //     },
        //     {
        //         src: 'http://gdurl.com/OZqH',
        //     },
        //     {
        //         src: 'http://gdurl.com/oTfB',
        //     }
        // ];

        this.slides = [
            {
                src: 'http://gdurl.com/nI36',
                caption: 'Education at Many Levels',
                title: 'Applications for the 2019 MBL Undergraduate Practicum open in October 2018!',
                subtitle: '18-23 March 2018 | Marine Biological Laboratory | Woods Hole, MA'
            },
            {
                src: 'http://gdurl.com/BjwD',
                caption: 'Sharing New Tools With Scientists',
                title: 'Register now for our next Workshop!',
                subtitle: '06 August 2018 | Brown University'
            },
            {
                src: 'http://gdurl.com/w-IP',
                caption: 'Developing Best Practices in Vertical and Horizontal Open Science',
                title: '',
                subtitle: ''
            },
            {
                src: 'http://gdurl.com/DjIx',
                caption: 'Symposium: Next Generation Technologies for Neuroscience',
                title: '',
                subtitle: ''
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
                        <p className='slide-subtitle'>{slide.subtitle}</p>
                    </div>
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
