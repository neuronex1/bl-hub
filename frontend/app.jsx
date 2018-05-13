'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import Homepage from './components/Homepage.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
        <NavBar />,
        document.getElementById('nav-bar-container')
    );

    switch (window.location.pathname) {
        case '/':
            ReactDOM.render(
                <Homepage />,
                document.getElementById('home')
            );
            break;
        case '/contact-us':
            ReactDOM.render(
                <ContactForm />,
                document.getElementById('contact-us')
            );
            break;

    }

    ReactDOM.render(
        <Footer />,
        document.getElementById('footer')
    );
});
