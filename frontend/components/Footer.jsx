'use strict'

import React from 'react';

const Footer = (props) => {
    return (
        <div className='footer-contents'>
            <p>© 2018 Sail High Productions</p>
            <div className='text-center'>
                <a href='https://twitter.com/biolumhub'><img class='bl-logo bl-logo--twitter' src='https://s3.amazonaws.com/bl-hub/Twitter_Logo_Blue.svg'/></a>
                <a href='https://www.instagram.com/biolumhub/'><img class='bl-logo bl-logo--ig' src='https://s3.amazonaws.com/bl-hub/logos/IG_Glyph_Fill-min.png'/></a>
            </div>
        </div>
    );
};

export default Footer;
