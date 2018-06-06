'use strict';

import React from 'react';
import AboutUsBox from './AboutUsTextBox';

const ABOUT_US_CONFIG = [
    {
        imgSrc: 'http://gdurl.com/2KAF',
        title: 'Christopher I. Moore, PhD, Brown University',
        positions: [
            'Professor of Neuroscience',
            'Associate Director of the Carney Institute for Brain Science',
            'Principal Investigator'
        ],
        blurb: 'Chris studies neural dynamics and their role in information processing, and develops new technologies to test how phenomena such as ongoing brain activity patterns impact perception. www.themoorelab.org'
    },
    {
        imgSrc: 'http://gdurl.com/jtKr',
        title: 'Diane Lipscombe, PhD, Brown University',
        positions: [
            'Thomas J. Watson, Sr. Professor of Science',
            'Professor of Neuroscience ',
            'Director of the Carney Institute for Brain Science',
            'President of the Society for Neuroscience in 2019',
            'Co-Principal Investigator'
        ],
        blurb: 'Diane studies the expression, regulation, and function of neuronal voltage-gated calcium ion channels, particularly their role in chronic pain and psychiatric disorders. She also studies ALS (Lou Gehrig’s Disease) including the impact of disease-causing mutations on motor neuron excitability.'
    },
    {
        imgSrc: 'http://gdurl.com/xcWc',
        title: 'Ute Hochgeschwender, MD, College of Medicine at Central Michigan University',
        positions: [
            'Professor of Neuroscience',
            'Co-Principal Investigator',
        ],
        blurb: 'Ute studies the role of neural activity in generating and alleviating neurological and psychiatric conditions, and is focused on stimulating or silencing neuronal activity using combinations of bioluminescent light and genetically-targeted, light-sensing opsins.'
    },
    {
        imgSrc: 'http://gdurl.com/7JjY',
        title: 'Nathan Shaner, PhD, Associate Professor at Scintillon Institute for Biomedical and Bioenergy Research',
        positions: [
            'Co-Principal Investigator',
        ],
        blurb: 'Nathan discovers new, naturally occurring bioluminescent and fluorescent molecules, and engineers improved variants for biological research applications, such as imaging.'
    },
    {
        imgSrc: 'http://gdurl.com/5-yM',
        backgroundPos: '-140px',
        title: 'Justine J. Allen, PhD, Brown University',
        positions: [
            'Program Manager'
        ],
        blurb: 'Justine leads efforts to execute the innovation, dissemination, and education goals of the Hub. She provides scientific direction and maintenance of the Hub\'s website and database, coordinates the activities of program workshops, symposia, and emissaries, and develops curricula for education outreach activities at the elementary, high school, undergraduate, and graduate levels.'
    },
    {
        imgSrc: 'http://gdurl.com/3A4i',
        title: 'Krystal Literman, MS, Brown University',
        positions: [
            'Administrative Assistant'
        ],
        blurb: 'Krystal aids in the coordination of both daily and long term activities for the Hub and its leaders. Krystal provides support for the Hub’s goals: innovation and development of neuroscience research tools, dissemination of knowledge, and education outreach for students of all levels as well as the public.  Krystal holds a Master of Science degree in Ecology and Evolutionary Biology and has had a variety of experiences involving STEM-related outreach and education.'
    }
];

const AboutUs = () => {
    const renderAboutBoxes = () => {
        return ABOUT_US_CONFIG.map(aboutBox => {
            return AboutUsBox(aboutBox);
        });
    }

    return (
        <React.Fragment>
            <h2 className='text-center'>About Us</h2>
            <table className='about-us__table'>
                <tbody>
                    {renderAboutBoxes()}
                </tbody>
            </table>
            <div className='text-xs'>Website icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>, <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>, and <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com.</a></div>
        </React.Fragment>
    );
}

export default AboutUs;
