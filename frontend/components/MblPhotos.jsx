'use strict'

import React from 'react';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

const PHOTO_PREFIX = 'https://s3.amazonaws.com/bl-hub/mbl-2018-photos/2018+MBL+Practicum_';
const NUM_PHOTOS = 21;

class MblPhotos extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renderPhotos = this.renderPhotos.bind(this);
        this.showLightbox = this.showLightbox.bind(this);
        this.getLightboxPhotos = this.getLightboxPhotos.bind(this);
    }

    getLightboxPhotos() {
        return [...Array(NUM_PHOTOS).keys()].map(idx => {
            return {
                src: `${PHOTO_PREFIX}${idx + 1}-min.jpg`,
                w: 800,
                h: 600
            }
        });
    }

    showLightbox(idx) {
        const lightboxElement = document.querySelectorAll('.pswp')[0];
        const lightboxPhotos = this.getLightboxPhotos();
        const options = {
            bgOpacity: 0.9,
            index: idx
        };

        const lightbox = new PhotoSwipe(lightboxElement, PhotoSwipeUI_Default, lightboxPhotos, options);
        lightbox.init();
    }

    renderPhotos() {
        return [...Array(NUM_PHOTOS).keys()].map((idx) => {
            const src = `${PHOTO_PREFIX}${idx + 1}-min.jpg`;
            return (
                <img className='mbl__photo'
                    onClick={this.showLightbox.bind(this, idx)}
                    src={src}
                    key={idx} />
            );
        });
    }

    render() {

        return (
            <div className='mbl__photo-container'>
                {this.renderPhotos()}
            </div>
        );
    }
}

export default MblPhotos;
