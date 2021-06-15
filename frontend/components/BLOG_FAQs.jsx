'use strict'

import React from 'react';
import BLOG_FAQsPanel from './BLOG_FAQsPanel.jsx';

const BLOGfaqs = [
    {
      question: 'What is bioluminescence?',
      answer: "<p>Bioluminescence is light that is produced by a chemical reaction within or nearby a living or formerly living thing. To learn more, read our <a class='bl-link' href='/bioluminescence_intro'>introduction to bioluminescence</a>. <img class='container--nobottom prl pll' src='https://bl-hub.s3.amazonaws.com/education/bioluminescence+simple+fig.png' alt='Simple Bioluminescence Figure'>"
    },
    {
      question: 'What is optogenetics?',
      answer: "<p>Optogenetics is a field of research where living things are engineered to express opsins, molecules that are sensitive to light. Light is used to activate these molecules, causing a conformational change that affects the function of a particular structure of interest (such as an ion channel). Thus, light can be used to indirectly change the biochemical properties of cells and infleunce their function. To learn more, read our <a class='bl-link' href='/optogenetics_intro'>introduction to optogenetics</a>.<img class='container--nobottom prl pll' src='https://bl-hub.s3.amazonaws.com/about-bl-og/OG+channels-min.jpg' alt='Simple Optogenetics Figure'>"
    },
    {
      question: 'What is BL-OG?',
      answer: "<p>BL-OG is a technique that leverages the advantages of both <a class='bl-link' href='/bioluminescence_intro'>BioLuminescence</a> and <a class='bl-link' href='/optogenetics_intro'>OptoGenetics</a> to create a reversible, multi-functional, molecular construct such as our <a class='bl-link' href='/LMO3'>LMOs</a>. These constructs can be activated chemogenetically by adding the corresponding small molecule luciferin; the luciferin is broken down by the luciferase, creating bioluminescent light that activates the optogenetic element. The same BL-OG construct can also be activated with a traditional optogentic approach: by applying an external light source. To learn more, read our <a class='bl-link' href='/what-is-BL-OG'>introduction to BL-OG</a>. <img class='prl pll' src='https://bl-hub.s3.amazonaws.com/LMO3-card/BL-OG+figure+for+LMO3+card_simple.png' alt='Schematic of Basic BL-OG'/>"
    },
    {
        question: 'How does BL-OG compare with DREADDs?',
        answer: "<p>There are many classes of chemogenetic tools. The most often utilized are DREADDs, Designer Receptors Exclusively Activated by Designer Drugs, modified G-protein coupled receptors that are activated by the ligand chemical clozapine-N-oxide (CNO). CNO is possibly converted to the anti-psychotic clozapine. The different DREADD receptors signal through specific intrinsic G-protein signaling pathways, enabling either neuron activation or inhibition. <br><br>Luminopsins (LMOs) used in <a class='bl-link' href='/what-is-BL-OG'>BL-OG</a> are light-sensing channelrhodopsins with a tethered luciferase that emits light in the presence of its luciferin, coelenterazine (CTZ). Depending on the channelrhodopsin’s ion permeability, CTZ application and thus light emission will lead to neuron activation or inhibition. CTZ has no known toxic or other side effects. Unique to BL-OG, ligand–actuator interaction can be monitored in real time through bioluminescence imaging, as photons are released as bioluminescence when the luciferin reaches its target luciferase.</p>"
    },
    {
        question: 'What are the distinct/unique advantages of BL-OG? What kinds of experiments could be performed with BL-OG and not with other approaches?',
        answer: "<p>1. BL-OG allows chemo- and opto-genetic control in the same cell, and local and global control in the same animal. In other words, you can stimulate a particular circuit by exciting the optogenetic element with an external light source, and activate the entire system of neurons that express the construct by introducing the luciferin to the bloodstream. Similarly, you can stimulate an entire system non-invasively and repeatedly, then assess the induced changes on neural communication by interrogating individual connections with the temporal precision afforded by physical light application. <br><br>2. Because BL-OG builds on and enhances existing optogenetic tools, advancements and innovation in optogenetics can almost immediately be translated into advancements in BL-OG. <br><br>3. The lucifern-luciferase pair specificity that evolved for bioluminescence in nature can be leveraged to use multiple chemogenetic systems at the same time, in the same animal. <br><br>4. When activating the system, the researcher gets an optical report (i.e., photons are released) when the luciferin reaches its target luciferase, removing the question of whether the small molecule reached its target. <br><br>5. Bioluminescence can be used in a variety of applications that depend on light, such as ion channel opening, triggering G-protein cascades, or monitoring transcription.<br><br>6. As the two components of BL-OG, light emitting luciferase and light sensing opsin, are both genetically encoded, they can, in principle, be used as interacting individual components in addition to their interactions in a fusion molecule.<br><br>To get started with one of our most vetted constructs, luminopsin-3 (LMO3), and to learn more about its use in vivo, go here. So far, LMO3 has been used to investigate development in a mouse model of autism (<a class='bl-link' href='https://doi.org/10.1016/j.isci.2021.102157' target='_blank'>Medendorp et al., 2021</a>), to recover spinal cord function in rats (<a class='bl-link' href='https://www.biorxiv.org/content/10.1101/710194v1' target='_blank'>Petersen et al., bioRxiv</a>), to visualize the choroid plexus (<a class='bl-link' href='https://doi.org/10.1016/j.neuron.2020.08.024' target='_blank'>Shipley et al., 2020</a>; see also <a class='bl-link' href='https://www.bioluminescencehub.org/data#data-iframes'>our videos</a>), and to study stroke (<a class='bl-link' href='https://doi.org/10.1523/JNEUROSCI.2010-18.2019' target='_blank'>Yu et al., J Neurosci 2019</a>).<br><br>References to publications that use BL-OG can be found <a class='bl-link' href='/data'>here</a>.</p>"
    },
    {
        question: 'What are the side-effects/non-specific effects of bioluminescence? Of coelenterazine?',
        answer:"<p>BL-OG is specific and safe. Using our LMO3 BL-OG construct and the corresponding luciferin coelenterazine (CTZ), we showed that the firing rate of neocortical neurons was proportional to the bioluminescence (i.e., photons produced) generated by the construct expressed in those neurons. Further, the bioluminescence (and thus firing rate) was proportional to the CTZ dose. For details, including results from various controls, see <a class='bl-link' href=' https://doi.org/10.1002/jnr.24498' target='_blank'>Gomez-Ramirez et al., J Neurosci Res, 2019</a>.<br><br>Coelenterazine has shown no toxicity concerns in our work or in toxicology screens performed by Prolume (H. Schmidt, in prep.). Details can be found on <a class='bl-link' href='https://nanolight.com/Uploads/file/NanoFuels/303%20CTZ%20natice%20correct%20files/303_CTZ_MSDS_02-16.pdf' target='_blank'>Prolume’s Material Safety Data Sheet</a> for coelenterazine.</p>"
    },
    {
        question: 'Does coelenterazine cross the blood-brain barrier?',
        answer:"<p>Yes, coelenterazine (CTZ) crosses the blood-brain barrier, as evidenced by bioluminescence in luciferase-expressing cells in the cortex and choroid plexus after peripheral luciferin injection (research in progress) or intranasal administration <a class='bl-link' href='https://doi.org/10.1523/JNEUROSCI.2010-18.2019' target='_blank'>(Yu et al., J Neurosci, 2019)</a>.</p>"
    },
    {
        question: 'What is FRET/BRET?',
        answer: '<p>Biological things that are sensitive to light, such as the opsin proteins in your retina at the back of your eye, have a molecular region called a chromophore. When light interacts with a chromophore, the chromophore responds by changing its shape. This conformational change shifts the shape and/or orientation of the entire protein. For example, when the chromophore retinal in the opsins in your retina senses light, the retinal changes shape and triggers an intracellular response in the rod or cone cell containing the opsin that, via several steps, is converted into an electrical signal in your brain, allowing vision.<br><br>Energy can be transferred between chromophores, depending on their properties and relative orientation before and after sensing light. FRET (Förster Resonance Energy Transfer) is the non-radiative (i.e., no release of photons; not visible) transfer of energy from one chromophore to another, and the efficiency of this transfer can be measured to estimate the size of proteins, locate intracellular structures, and measure biochemical reactions. <br><br>Fluorescent proteins contain chromophores, and FRET can be observed in some fluorescent and phosphorescent proteins. When one half of a fluorescent protein pair is excited by light, it can transfer energy via FRET to the other half of the pair. This phenomenon allows scientists to engineer fluorescent proteins that have different properties (e.g., are brighter or emit different colors) than their natural counterparts.<br><br>BRET (Bioluminescence Resonance Energy Transfer) also involves the transfer of energy between nearby proteins. In this case, one protein is a luciferase enzyme while the second is a fluorescent protein. When the luciferase catalyzes a compatible luciferin, a photon is released. If the photon is a suitable wavelength, it can excite the nearby fluorescent protein and cause it to emit light.</p>'
    },
    {
        question: 'What is <i>Gaussia</i>?',
        answer: "<p><i>Gaussia</i> is a genus of marine copepods; the luciferase protein we use is chemically identical to that discovered in <i>Gaussia princeps</i> or carries changes that improve its light emission. When startled, these animals quickly secrete vesicles containing luciferin (or its precusors) and luciferase from pores along its body into the surrounding water. The luciferase oxidizes the luciferin, a chemical reaction that creates bioluminescence and presumably startles or distract predators while the <i>Gaussia</i> escapes. <br><br>For more information, check out these (non-affiliate) sites: <a class='bl-link' href='https://biolum.eemb.ucsb.edu/organism/photo.html' target='_blank'>The Bioluminescence Web Page</a>, <a class='bl-link' href='http://www.marinespecies.org/copepoda/aphia.php?p=taxdetails&id=104625' target='_blank'>marinespecies.org</a>. To learn more about bioluminescence in <i>Gaussia princeps</i>, see <a class='bl-link' href='https://doi.org/10.1016/0022-0981(72)90056-1' target='_blank'>Barnes & Case, J Exp Mar Biol & Ecol, 1972</a> and <a class='bl-link' href='https://www.journals.uchicago.edu/doi/pdfplus/10.2307/1542344' target='_blank'>Bowlby & Case, Biol Bull, 1991</a>.</p>"
    },
    {
        question:'Why do we use <i>Gaussia</i> luciferase?',
        answer: "<p>The <i>Gaussia</i> luciferase (Gluc)-coelenterazine (CTZ) luciferin system is only one of several luciferase-luciferin pairs we use. Gluc is small, sensitive, robust to changes in its physical environment, stable and functional in mammalian cells, and more active than many of its counterparts. To learn more about the merits of Gluc, consider e.g., <a class='bl-link' href='https://doi.org/10.1016/j.ymthe.2004.10.016' target='_blank'>Tannous et al., Molec Therapy, 2005</a>, <a class='bl-link' href='https://dx.doi.org/10.1038%2Fnprot.2009.28' target='_blank'>Tannous, Nat Proc, 2009</a>,  and <a class='bl-link' href='https://doi.org/10.1128/AEM.06670-11' target='_blank'>Wille et al., Applied & Env Microbiol, 2011</a>. <br><br><i>Gaussia</i> luciferase is available from vendors such as <a class='bl-link' href='https://nanolight.com/Luciferase_proteins/_Gaussia_Luciferae_Protein.html' target='_blank'>Prolume-Nanolight</a>.</p>"
    },
    {
        question: 'What about other luciferases (i.e., not <i>Gaussia</i>)?',
        answer: "<p>Other luciferases are still being discovered. Meanwhile, we and others are engineering known luciferases to have properties such as brighter light emission when they break down their luciferin, a property that affects the nearby opsin. A prominent example is <a class='bl-link' href='https://www.promega.com/resources/technologies/nanoluc-luciferase-one-enzyme-endless-capabilities/' target='_blank'>NanoLuc</a> and its variants. While NanoLuc works well to study protein dynamics, a NanoLuc-based LMO does not perform as well as a Gluc-based LMO when tethered to channelrhodopsin for BL-OG applications.</p>"
    },
];

class Carousel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renderBLOGfaqs = this.renderBLOGfaqs.bind(this);

        this.state = {
            visibleBLOGfaqs: null
        };
    }

    toggleAnswer(answerIdx) {
        let visibleFaqIdx = (this.state.visibleBLOGfaqs === answerIdx) ? null : answerIdx;

        this.setState({
            visibleBLOGfaqs: visibleFaqIdx
        });
    }

    renderBLOGfaqs() {
        return BLOGfaqs.map((faq, idx) => {
            return (
                <BLOG_FAQsPanel
                    key={idx}
                    question={faq.question}
                    answer={faq.answer}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <div className='img__hero-bg img__hero-bg--BLOGfaqs mbxl'>
                    <h2 className='hero-img__title text-center'>BL-OG FAQs</h2>
                </div>
                {this.renderBLOGfaqs()}
                <p>Have a question that is not answered here? <a class='bl-link' href='mailto:bioluminescencehub@gmail.com?subject=BL-OG%20FAQ'>Contact us!</a></p>
            </div>
        );
    }
}

export default Carousel;
