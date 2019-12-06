'use strict'

import React from 'react';

const DATA = [
    {
        title: 'Bioluminescence in the choroid plexus',
        bdrId: 788093,
        description: 'This movie shows bioluminescence of the choroid plexus in an anesthetized, transgenic mouse expressing the LMO3 BL-OG construct. Water-soluble coelenterazine (CTZ) by Nanolight was injected at a concentration of 1μg/μl (2.34mM concentration, 10μl volume) directly into the ventricle.',
        credit: 'Created by Manuel Gomez-Ramirez, PhD and Eric Klein',
        doi: '10.7301/Z0BK19VB',
    },
    {
        title: 'Bioluminescence when injecting coelenterazine directly in cortex (1/2)',
        bdrId: 788094,
        description: 'This movie shows bioluminescence in left primary somatosensory cortex in an anesthetized, transgenic mouse expressing the LMO3 molecule. Water-soluble coelenterazine (CTZ) by Nanolight was injected at a concentration of 1μg/μl (2.34mM concentration, 2.5μl volume) directly in the cortex.',
        credit: 'Created by Manuel Gomez-Ramirez, PhD',
        doi: '10.7301/Z0GB22JM',
    },
    {
        title: 'Bioluminescence when injecting coelenterazine directly in cortex (2/2)',
        bdrId: 788095,
        description: 'This movie shows bioluminescence in left primary somatosensory cortex in an anesthetized, transgenic mouse expressing the LMO3 molecule. Water-soluble coelenterazine (CTZ) by Nanolight was injected at a concentration of 1μg/μl (2.34mM concentration, 2.5μl volume) directly in the cortex.',
        credit: 'Created by Manuel Gomez-Ramirez, PhD',
        doi: '10.7301/Z0M32T8Z',
    },
    {
        title: 'Calcium-dependent bioluminescence when applying coelenterazine systemically through lateral ventricle and a calcium agonist directly in cortex (1/2)',
        bdrId: '788096',
        description: 'This movie shows calcium-dependent bioluminescence in an anesthetized, transgenic mouse expressing LMC4 in left primary somatosensory cortex. Water-soluble coelenterazine (CTZ) was injected at a concentration of 1μg/μl (2.34mM concentration, 2.5μl volume) in the lateral ventricle of the right hemisphere, while the calcium agonist (NMDA) was injected directly in cortex. Bioluminescence was maximal when both CTZ and NMDA were present at the same time.',
        credit: 'Created by Manuel Gomez-Ramirez, PhD',
        doi: '10.7301/Z0ZC81CX',
    },
    {
        title: 'Calcium-dependent bioluminescence when applying coelenterazine systemically through lateral ventricle and a calcium agonist directly in cortex (2/2)',
        bdrId: '788097',
        description: 'This movie shows calcium-dependent bioluminescence in an anesthetized, transgenic mouse expressing LMC4 in left primary somatosensory cortex. Water-soluble coelenterazine (CTZ) was injected at a concentration of 1μg/μl (2.34mM concentration, 2.5μl volume) in the lateral ventricle of the right hemisphere, while the calcium agonist (NMDA) was injected directly in cortex. Bioluminescence was maximal when both CTZ and NMDA were present at the same time.',
        credit: 'Created by Manuel Gomez-Ramirez, PhD',
        doi: '10.7301/Z0348HW8',
    },
];

const DataIframes = () => {
    return DATA.map((data, idx) => {
        const src = `https://repository.library.brown.edu/viewers/stream/bdr:${data.bdrId}`;

        return (
            <div class='mtxl clearfix' key={idx}>
                <h3>{data.title}</h3>
                <iframe src={src}  class='float-left mrxl' width='560' height='315' frameBorder='0' allowFullScreen></iframe>
                <br/>
                <p class='mtxl'>{data.description}</p>
                <br/>
                <br/>
                <br/>
                <p>{data.credit}</p>
                <p>DOI: <a class='bl-link' href={`https://doi.org/${data.doi}`}>{data.doi}</a></p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {idx !== DATA.length - 1 && <div class='horizontal-divider mtxl'/>}
                <br/>
            </div>
        );
    });
}

export default DataIframes;

//in jsx you have to use <br/> instead of <br>
