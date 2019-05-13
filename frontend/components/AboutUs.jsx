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
        blurb: 'Chris studies neural dynamics and their role in information processing, and develops new technologies to test how phenomena such as ongoing brain activity patterns impact perception. Learn more on the <a class="bl-link" href="http://www.themoorelab.org">Moore Lab website</a>.'
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
        blurb: 'Diane studies the expression, regulation, and function of neuronal voltage-gated calcium ion channels, particularly their role in chronic pain and psychiatric disorders. She also studies ALS (Lou Gehrig’s Disease) including the impact of disease-causing mutations on motor neuron excitability. Learn more about the Learn more about <a class="bl-link" href="https://vivo.brown.edu/display/dlipscom">Diane</a> and the <a class="bl-link" href="https://www.brown.edu/academics/brain-science/">Carney Institute for Brain Science</a>.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/Ute-min.jpg',
        title: 'Ute Hochgeschwender, MD, College of Medicine at Central Michigan University',
        positions: [
            'Professor of Neuroscience',
            'Co-Principal Investigator',
        ],
        blurb: 'Ute studies the role of neural activity in generating and alleviating neurological and psychiatric conditions, and is focused on stimulating or silencing neuronal activity using combinations of bioluminescent light and genetically-targeted, light-sensing opsins. Learn more on the <a class="bl-link" href="https://www.cmich.edu/colleges/se/neuroscience/Pages/Bioluminescent-Optogenetics-Lab.aspx">Hochgeschwender Lab website</a>.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/Nathan-min.jpg',
        title: 'Nathan Shaner, PhD, University of Californa, San Diego',
        positions: [
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
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Andreas_Bjorefeldt-min.jpg',
        title: 'Andreas Björefeldt, PhD, Central Michigan University',
        positions: [
            'Postdoctoral Fellow'
        ],
        blurb: 'Andreas tests the performance of bioluminescent effectors and reporters developed in the lab, using whole cell patch clamp recordings. Andreas is interested in the role of cortical interneuron subtypes in information processing and memory functions.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Sheenah_Lynn_Bryant-min.jpg',
        title: 'Sheenah Lynn Bryant, PhD, Central Michigan University',
        positions: [
            'Postdoctoral Fellow'
        ],
        blurb: 'Sheenah develops optimal experimental platforms for studying bioluminescence-optogenetics proteins, and researches how these proteins can be used to enlighten our understanding of neural plasticity.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Manuel_Gomez-Ramirez-min.jpg',
        title: 'Manuel Gomez-Ramirez, PhD, Brown University',
        positions: [
            'Research Associate in Neuroscience'
        ],
        blurb: 'Manny tests bioluminescent constructs <i>in vivo</i>, including both Lumiporeins and calcium-dependent bioluminescence in response to tactile stimulation in a mouse model.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Misha_Koksharov-min.jpg',
        title: 'Mikhail Koksharov, PhD, Brown University',
        positions: [
            'Postdoctoral Research Associate'
        ],
        blurb: 'Misha is developing and testing Lumiporeins and Lumicampsins (luciferases that are modified to be calcium-sensitive) for use as calcium sensors.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Jeremy_Murphy-min.jpg',
        title: 'Jeremy Murphy, PhD, Brown University',
        positions: [
            'Postdoctoral Research Associate'
        ],
        blurb: 'Jeremy is testing bioluminescent constructs <i>in vivo</i>, including investigating the effects of coelenterazine administration parameters on bioluminescence in awake, behaving mice and calcium sensor performance.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Mansi_Prakash-min.jpg',
        title: 'Mansi Parkash, PhD, Central Michigan University',
        positions: [
            'Postdoctoral Research Associate'
        ],
        blurb: 'Mansi is currently involved in bioluminescence-driven optogenetics for investigating functional synaptic communication.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Dmitrijs_Celinskis.jpg',
        title: 'Dmitrijs Celinskis, Brown University',
        positions: [
            'Graduate Student'
        ],
        blurb: 'Dmitrijs is improving implanted miniscopes for viewing bioluminescence during head-fixed and free behavior.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Emanuel_Crespo-min.jpg',
        title: 'Emanuel Crespo, Central Michigan University',
        positions: [
            'Graduate Student'
        ],
        blurb: 'Manny is focusing on driving non-ion-exchanging optical sensors with bioluminescence.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Eric_Klein-min.JPG',
        title: 'Eric Klein, Brown University',
        positions: [
            'Graduate Student'
        ],
        blurb: 'Eric is researching neuronal activity along blood vessels in the brain using viruses injected into mouse tail veins for systemic infection.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Ian_More-min.jpg',
        title: 'A. Ian More, Brown University',
        positions: [
            'Graduate Student'
        ],
        blurb: 'Ian has tested bioluminescent molecules <i>in vivo</i>, with simultaneous bioluminescent imaging and electrophysiology.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Akash_Pal-min.jpg',
        title: 'Akash Pal, Central Michigan University',
        positions: [
            'Graduate Student'
        ],
        blurb: 'Akash is engineering and testing new luminopsin constructs for activating and silencing neuronal activity.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Eric_Petersen-min.jpg',
        title: 'Eric Petersen, Central Michigan University',
        positions: [
            'Graduate Student'
        ],
        blurb: 'Eric is working on two projects. First, he is refining the generation of neural stem cells from adipose tissue. Second, he is applying luminopsins as a novel therapeutic method for stimulation at the neuronal level to improve recovery after spinal cord injury in a rat model.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Rachel_Schumaker-min.jpg',
        title: 'Rachel Schumaker, Central Michigan University',
        positions: [
            'Graduate Student'
        ],
        blurb: 'Rachel is is focused on molecular engineering of luciferase-driven tools.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Robyn_St.Laurent-min.jpeg',
        title: 'Robyn St. Laurent, Brown University',
        positions: [
            'Graduate Student'
        ],
        blurb: 'Robyn works on trans-synaptic bioluminescent modulation of opsins via activity-dependent release of bioluminescent enzymes.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Nina_Friedman-min.jpeg',
        title: 'Nina Friedman, Brown University',
        positions: [
            'Research Assistant'
        ],
        blurb: 'Nina assists efforts to test bioluminescent constructs <i>in vivo</i> with guidance from postdoctoral researchers.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Sophie_Marsh-min.jpg',
        title: 'Sophie Marsh, Brown University',
        positions: [
            'Research Assistant'
        ],
        blurb: 'Sophie assists efforts to test bioluminescent constructs <i>in vivo</i> with guidance from postdoctoral researchers.'
    },
    {
        imgSrc: 'https://s3.amazonaws.com/bl-hub/portraits/Kathleen_Riselay-min.jpg',
        title: 'Kathleen Riselay, Central Michigan University',
        positions: [
            'Research Assistant'
        ],
        blurb: 'Kathleen is the Hochgeschwender lab manager and has generated large scale plasmid DNA preparations of constructs and high titer AAV viral stocks.'
    },
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
            <p className='text-m pull-right'>Our Hub is supported by National Science Foundation <a href='https://nsf.gov/awardsearch/showAward?AWD_ID=1707352' className='bl-link'>NeuroNex 1707352</a>.</p><br/>
            <p className='text-m pull-right'>Website icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>, <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>, and <a href="http://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com.</a></p><br/>
            <p className='text-m pull-right'>Additional icons: Clker-Free-Vector-Image (Pixabay).</p>
            <br/>
            <p className='text-m pull-right'>Glow worms: Flickr; Eden, Janine and Jim.</p>
            <br/>
            <p className='text-m pull-right'><span class='italics'>Gaussia princeps</span> on Emissary button: Hopcroft/UAF/CMarZ hopcroft@ims.uaf.edu.</p>
            <br/>
            <p className='text-m pull-right'>Fungi on Education page: Ylem; WikiCommons.</p>
            <br/>
            <p className='text-m pull-right'>Jellyfish on Education page: NOAA's National Ocean Service.</p>
            <br/>
            <p className='text-m pull-right'>Firefly on Education page: Art Farmer, Evansville, IN.</p>
            <br/>
        </React.Fragment>
    );
}

export default AboutUs;
