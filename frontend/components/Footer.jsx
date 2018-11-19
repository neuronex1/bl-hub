'use strict'

import React from 'react';

const Footer = (props) => {
    return (
        <div className='footer-contents'>
            <p className='float-left'>© 2018 Sail High Productions</p>
            <p class='text-center footer-center'>The Bioluminescence Hub</p>
            <div className='float-right'>
                <a href='https://twitter.com/biolumhub'><img class='bl-logo bl-logo--twitter' src='https://s3.amazonaws.com/bl-hub/Twitter_Logo_Blue.svg'/></a>
                <a href='https://www.instagram.com/biolumhub/'><img href='#' class='bl-logo bl-logo--ig' src='https://s3.amazonaws.com/bl-hub/logos/IG_Glyph_Fill-min.png'/></a>
            </div>
        </div>
    );
};

export default Footer;
