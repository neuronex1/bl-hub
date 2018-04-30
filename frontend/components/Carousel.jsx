'use strict'

import React from 'react';

class Carousel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.changeSlide = this.changeSlide.bind(this);

        this.slides = [
            'http://gdurl.com/nI36',
            'http://gdurl.com/BjwD',
            'http://gdurl.com/w-IP'
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
            window.setInterval(this.changeSlide, 3000);
        }
    }

    componentWillUnmount() {
        window.clearInterval(this.changeSlide);
    }

    renderSlides() {
        return this.slides.map((src, idx) => {
            let className = 'hero-img-container';
            if (idx === this.state.currentSlideIdx) {
                className += ' current';
            }

            const style = {
                background: 'url(' + src + ') no-repeat center center / cover'
            };

            return (
                <div className={className} key={idx} style={style} >
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
