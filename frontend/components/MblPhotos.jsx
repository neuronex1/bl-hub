'use strict'

import React from 'react';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

class MblPhotos extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renderPhotos = this.renderPhotos.bind(this);
        this.showLightbox = this.showLightbox.bind(this);
        this.getLightboxPhotos = this.getLightboxPhotos.bind(this);

        if (this.props.year === 2018) {
            this.PHOTO_PREFIX = 'https://s3.amazonaws.com/bl-hub/mbl-2018-photos/2018+MBL+Practicum_';
            this.NUM_PHOTOS = 21;
        } else {

            this.PHOTO_PREFIX = 'https://s3.amazonaws.com/bl-hub/mbl-2019/MBL-2019-photos/2019_MBL_Practicum_';
            this.NUM_PHOTOS = 39;
        }
    }

    getLightboxPhotos(year) {
        return [...Array(this.NUM_PHOTOS).keys()].map(idx => {
            let src = year === 2018 ? `${this.PHOTO_PREFIX}${idx + 1}-min.jpg` : `${this.PHOTO_PREFIX}${idx + 1}.jpg`;
            return {
                src: src,
                w: 800,
                h: 600
            }
        });
    }

    showLightbox(idx) {
        const lightboxElement = document.querySelectorAll('.pswp')[0];
        const lightboxPhotos = this.getLightboxPhotos(this.props.year);
        const options = {
            bgOpacity: 0.9,
            index: idx
        };

        const lightbox = new PhotoSwipe(lightboxElement, PhotoSwipeUI_Default, lightboxPhotos, options);
        lightbox.init();
    }

    renderPhotos(year) {
        return [...Array(this.NUM_PHOTOS).keys()].map((idx) => {
            let src = year === 2018 ? `${this.PHOTO_PREFIX}${idx + 1}-min.jpg` : `${this.PHOTO_PREFIX}${idx + 1}.jpg`;
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
                {this.renderPhotos(this.props.year)}
            </div>
        );
    }
}

export default MblPhotos;
