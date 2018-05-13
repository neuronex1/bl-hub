'use strict'

import React from 'react';

const contactForm = () => {
    const onSubmit = () => {
        console.log('submitting');

    };

    return (
        <React.Fragment>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Name
                    <input type='text' />
                </label>
                <label>
                    Subject
                    <input type='text' />
                </label>
            </form>
        </React.Fragment>
    );
};

export default contactForm;
