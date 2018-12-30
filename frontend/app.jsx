'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import Homepage from './components/Homepage.jsx';
import AboutUs from './components/AboutUs.jsx';
import FAQs from './components/FAQs.jsx';
import MblPhotos from './components/MblPhotos.jsx';
import ContactForm from './components/ContactForm.jsx';
import DataIframes from './components/DataIframes.jsx';
import Footer from './components/Footer.jsx';

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname === '/') {
        ReactDOM.render(
            <Homepage />,
            document.getElementById('home')
        );
    } else {
        ReactDOM.render(
            <NavBar />,
            document.getElementById('nav-bar-container')
        );
    }

    switch (window.location.pathname) {
        case '/':
            ReactDOM.render(
                <Homepage />,
                document.getElementById('home')
            );
            break;
        case '/about-us':
            ReactDOM.render(
                <AboutUs />,
                document.getElementById('about-us')
            );
            break;
        case '/mbl/faqs':
            ReactDOM.render(
                <FAQs />,
                document.getElementById('mbl-faqs')
            );
            break;
        case '/mbl/2018-practicum/photos':
            ReactDOM.render(
                <MblPhotos />,
                document.getElementById('mbl-photos')
            );
            break;
        case '/data':
            ReactDOM.render(
                <DataIframes />,
                document.getElementById('data-iframes')
            );

    }
});
