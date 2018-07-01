'use strict';

import React from 'react';
import AboutUsBox from './AboutUsTextBox';

const ABOUT_US_CONFIG = [
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/chris_moore-min.jpg',
        title: 'Christopher I. Moore, PhD, Brown University',
        positions: [
            'Professor of Neuroscience',
            'Associate Director of the Robert J. and Nancy D. Carney Institute for Brain Science',
            'Principal Investigator'
        ],
        blurb: 'Chris studies neural dynamics and their role in information processing, and develops new technologies to test how phenomena such as ongoing brain activity patterns impact perception. Learn more on the <a class="bl-link" href="http://www.themoorelab.org">Moore Lab website.</a>'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/diane_lipscombe-min.jpg',
        title: 'Diane Lipscombe, PhD, Brown University',
        positions: [
            'Thomas J. Watson, Sr. Professor of Science',
            'Professor of Neuroscience ',
            'Director of the Robert J. and Nancy D. Carney Institute for Brain Science',
            'President of the Society for Neuroscience in 2019',
            'Co-Principal Investigator'
        ],
        blurb: 'Diane studies the expression, regulation, and function of neuronal voltage-gated calcium ion channels, particularly their role in chronic pain and psychiatric disorders. She also studies ALS (Lou Gehrig’s Disease) including the impact of disease-causing mutations on motor neuron excitability.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/Ute-min.jpg',
        title: 'Ute Hochgeschwender, MD, College of Medicine at Central Michigan University',
        positions: [
            'Professor of Neuroscience',
            'Co-Principal Investigator',
        ],
        blurb: 'Ute studies the role of neural activity in generating and alleviating neurological and psychiatric conditions, and is focused on stimulating or silencing neuronal activity using combinations of bioluminescent light and genetically-targeted, light-sensing opsins.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/Nathan-min.jpg',
        title: 'Nathan Shaner, PhD, Scintillon Institute for Biomedical and Bioenergy Research',
        positions: [
            'Associate Professor',
            'Co-Principal Investigator',
        ],
        blurb: 'Nathan discovers new, naturally occurring bioluminescent and fluorescent molecules, and engineers improved variants for biological research applications, such as imaging.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/justine_allen-min.jpg',
        title: 'Justine J. Allen, PhD, Brown University',
        positions: [
            'Program Manager'
        ],
        blurb: 'Justine leads efforts to execute the innovation, dissemination, and education goals of the Hub. She provides scientific direction and maintenance of the Hub\'s website and database, coordinates the activities of program workshops, symposia, and emissaries, and develops curricula for education outreach activities at the elementary, high school, undergraduate, and graduate levels.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/Krystal-min.jpg',
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
            <p className='mbxl mtxl'>Our Hub will systematically develop and disseminate novel and powerful bioluminescent (BL) tools for brain science and advance BL as a transformative tool in neuroscience through Innovation, Dissemination and Education. Hub-driven Innovation will greatly enhance BL control and imaging applications, widespread Dissemination of these new BL methods and related technologies will support their use across neuroscience, and Education will use this compelling biological phenomenon as a focus for an interdisciplinary curriculum for high school and undergraduate students.</p>
            <table className='about-us__table'>
                <tbody>
                    {renderAboutBoxes()}
                </tbody>
            </table>
            <p className='text-m pull-right'>Our Hub is supported by National Science Foundation <a href='https://nsf.gov/awardsearch/showAward?AWD_ID=1707352' className='bl-link'>NeuroNex 1707352</a>.</p>
            <p className='text-m pull-right'>Website icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>, <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>, and <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com.</a></p>
        </React.Fragment>
    );
}

export default AboutUs;
