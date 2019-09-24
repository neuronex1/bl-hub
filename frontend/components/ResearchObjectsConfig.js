//imgSrc: use low-res or small images for unpublished work; link journal articles to journal webpages
//title: This is the title of the work
//venue: This is the meeting or journal name, e.g., SfN, Journal of Neuroscience. If you want to use an apostrophe, use quotation marks around the data.
//authors: Remember to put a comma and space at the end of the leading authors' names; not needed for the last author.
//abstract: Include an abstract or short description of the work

export const RESEARCH_OBJECTS = [
  {
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Petersen-2019-bioRxiv-min.jpg',
    title: "Restoring function after severe spinal cord injury through bioluminescence-driven optogenetics",
    venue: 'bioRxiv; July 22, 2019',
    authors: [
      'E. D. Petersen, ',
      'E. D. Sharkey, ',
      'A. Pal, ',
      'L. O. Shafau, ',
      'J. R. Zenchak, ',
      'A, J. Peña, ',
      'A. Aggarwal, ',
      'M. Prakash, ',
      'U. Hochgeschwender, ',
    ],
    abstract: 'The ability to manipulate specific neuronal populations of the spinal cord following spinal cord injury (SCI) could prove highly beneficial for rehabilitation in patients through maintaining and strengthening still existing neuronal connections and/or facilitating the formation of new connections. A non-invasive and highly specific approach to neuronal stimulation is bioluminescent-optogenetics (BL-OG), where genetically expressed light emitting luciferases are tethered to light sensitive channelrhodopsins (luminopsins, LMO); neurons are activated by the addition of the luciferase substrate coelenterazine (CTZ). This approach utilizes ion channels for current conduction while activating the channels through application of a small chemical compound, thus allowing non-invasive stimulation and recruitment of all targeted neurons. Rats were transduced in the lumbar spinal cord with AAV2/9 to express the excitatory LMO3 under control of a pan-neuronal or motor neuron-specific promoter. A day after contusion injury of the thoracic spine, rats received either CTZ or vehicle every other day for 2 weeks. Activation of either interneuron or motor neuron populations below the level of injury significantly improved locomotor recovery lasting beyond the time of stimulation. Utilizing histological and gene expression methods we identified neuronal plasticity as a likely mechanism underlying the functional recovery. These findings provide a foundation for a rational approach to spinal cord injury rehabilitation, thereby advancing approaches for functional recovery after SCI. <a class=bl-link href="https://www.biorxiv.org/content/10.1101/710194v1" target="_blank">Read more about this work on bioRxiv</a>.'
  },
    {
     imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Gomez-Ramirez+et+al.+J+Neurosci+2019-min.jpg',
     title: "The BioLuminescent-OptoGenetic <i>in vivo</i> response to coelenterazine is proportional, sensitive and specific in neocortex",
     venue: 'bioRxiv; July 22, 2019; Journal of Neuroscience Research, September 23, 2019',
     authors: [
     'M. Gomez-Ramirez, ',
     'A. I. More, ',
     'N. G. Friedman, ',
     'U. Hochgeschwender, ',
     'C. I. Moore'
    ],
    abstract: 'BioLuminescent (BL) light production can modulate neural activity and behavior through coexpressed OptoGenetic (OG) elements, an approach termed ‘BL-OG’. Yet, the relationship between BL-OG effects and bioluminescent photon emission has not been characterized in vivo. Further, the degree to which BL-OG effects strictly depend on optogenetic mechanisms driven by bioluminescent photons is unknown. Crucial to every neuromodulation method is whether the activator shows a dynamic concentration range driving robust, selective, and non-toxic effects. We systematically tested the effects of four key components of the BL-OG mechanism (luciferin, oxidized luciferin, luciferin vehicle, and bioluminescence), and compared these against effects induced by the Luminopsin-3 (LMO3) BL-OG molecule, a fusion of slow burn Gaussia luciferase (sbGLuc) and Volvox ChannelRhodopsin-1 (VChR1). We performed combined bioluminescence imaging and electrophysiological recordings while injecting specific doses of Coelenterazine (substrate for sbGluc), Coelenteramide (CTM, the oxidized product of CTZ), or CTZ vehicle. CTZ robustly drove activity in mice expressing LMO3, with photon production proportional to firing rate. In contrast, low and moderate doses of CTZ, CTM, or vehicle did not modulate activity in mice that did not express LMO3. We also failed to find bioluminescence effects on neural activity in mice expressing an optogenetically non-sensitive LMO3 variant. We observed weak responses to the highest dose of CTZ in control mice, but these effects were significantly smaller than those observed in the LMO3 group. These results show that in neocortex in vivo, there is a large CTZ range wherein BL-OG effects are specific to its active chemogenetic mechanism. <a class=bl-link href=" https://doi.org/10.1002/jnr.24498" target="_blank">Read more about this work in the Journal of Neuroscience</a>.'
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Moore+2019+Brain+Initiative+poster+Final_thumbnail-min.jpg',
      title: "Distinct Advantages of BioLuminescence for Neuroscience",
      venue: '2019 BRAIN Initiative Investigators Meeting; Washington, DC',
      authors: [
      'C. I. Moore, ',
      'D. Lipscombe, ',
      'U. Hochgeschwender, ',
      'N. C. Shaner, ',
      'J. J. Allen (Program Manager)'
      ],
      abstract: 'The overall goal of our Neurotechnology Hub is to develop and disseminate novel and powerful bioluminescent tools for brain science. Bioluminescence is used in imaging for reading out neural activity, and for activating optogenetic elements to control the activity of neurons. The Hub will advance bioluminescence as a transformative tool in neuroscience through three Aims: Innovation, Dissemination and Education. Innovation will target four key goals: Qualitative increases in bioluminescence brightness, an advance that will enable imaging and control broadly; Inter-luminescence, a means of using bioluminescence to drive optogenetic sensors across a synapse, thereby creating a novel optical pathway for neural communication; Testing <i>in vivo</i> new bright and fast calcium-sensitive luciferases, utilizing newly developed instrumentation for bioluminescence imaging; and, elaboration of control and imaging bioluminescence methods to other key models: worm, fly, fish, and primates. Dissemination targets the goal of Horizontal Open Science (sharing among scientists), i.e. developing and implementing strategies for free exchange of tools and information that foments progress and collaboration among disciplines. This is accomplished by a Hub website (http://www.bioluminescencehub.org/), Symposia, and by providing opportunities for direct training in bioluminescence methods, including Workshops and Emissaries, where members of our group visit laboratories and help them adopt our tools. Education targets the goal of Vertical Open Science (sharing across levels of understanding). We are using bioluminescence to energize science knowledge and appreciation in students and the public. We are focusing on developing a new integrated curriculum on bioluminescence that describes its biology, chemistry, physics, and its applications in neuroscience for imaging and control. This curriculum will be taught to students at all levels. Our flagship educational event is an intensive, 1-week Practicum for undergraduate students at the Marine Biological Laboratory. This course includes lectures and hands-on laboratory lessons using bioluminescent animals and engineered bioluminescent constructs.'
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
      title: "BioLuminescent-OptoGenetics (BL-OG) does not create off target neural effects <i>in vivo</i>",
      venue: '2019 BRAIN Initiative Investigators Meeting; Washington, DC',
      authors: [
      'M. Gomez-Ramirez, ',
      'A. I. More, ',
      'N. G. Friedman, ',
      'A. Pal, ',
      'U. Hochgeschwender, ',
      'C. I. Moore'
      ],
      abstract: 'Optogenetics uses light to activate neural channels or pumps genetically-expressed in distinct cell classes, enabling control of cell-specific circuits <i>in vivo</i>. A limitation of current optogenetic approaches is the use of external light sources (e.g., fiber optics) to drive opsins that excite or inhibit cell activity. Fiber optics are typically implanted in the brain, which can create a pathway for infections, and are punitive when manipulating widespread networks, because insertion of several fibers can cause considerable tissue damage. We developed an integrative optical- and chemo-genetic method, termed BioLuminescent-Optogenetics (BL-OG), that leverages internally-generated bioluminescence to activate optogenetic elements without the use of fiber optics. In BL-OG, a genetically-engineered molecule (Luminopsin-3, LMO3) tethers the slow-burn <i>Gaussia</i> Luciferase (sbGLuc) to the opsin Volvox-ChannelRhodopsin (VChR1) that is activated by bioluminescence when the luciferin Coelenterazine (CTZ) binds to sbGLuc. Although we have shown that BL-OG robustly modulates neural activity and behavior, it is unclear whether CTZ and/or its oxidized byproduct Coelenteramide (CTM) can cause non-specific neural effects. Here, we show that BL-OG substantially drives neural activity without creating off target effects <i>in vivo</i>. We performed imaging and electrophysiological recordings in mouse primary somatosensory cortex while injecting CTZ or CTM. We found a CTZ dose (~0.4uL) that substantially modulated multi-unit activity (MUA) without creating off target effects. Specifically, we observed that CTZ enhanced MUA (~25%) in animals expressing LMO3, whereas produced no MUA changes in wild type animals (~3% increase). Similarly, we failed to find MUA changes in wild type mice injected with CTM (~0.5%). Finally, we observed that bioluminescent light very weakly increased MUA (~5%) in animals expressing the sbGLuc without a VChR1 opsin, suggesting that bioluminescence minimally drives neural activity through photovoltaic mechanisms. Our study shows that BL-OG evokes significant and highly selective effects, providing yet an additional advantage over leading chemogenetic methods. <a class=bl-link href="https://www.biorxiv.org/content/10.1101/709931v1" target="_blank">Read more about this work on bioRxiv</a>.'
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Murphy+et+al._BRAIN_meeting_poster_2019_small-min.jpg',
      title: "Techniques for optimal <i>in vivo</i> imaging of genetically engineered bioluminescent indicators and actuators",
      venue: '2019 BRAIN Initiative Investigators Meeting; Washington, DC',
      authors: [
     'J. Murphy ',
     'N. G. Friedman, ',
     'D. Lipscombe, ',
     'N. Shaner, ',
     'U. Hochgeschwender, ',
     'M. Gomez-Ramirez, ',
     'C. I. Moore'
     ],
      abstract: 'Bioluminescent molecules for imaging and modifying neural activity are increasingly becoming viable tools for <i>in vivo</i> use and have the potential to overcome many of the drawbacks of fluorescent imaging and traditional optogenetics and chemigenetics. As opposed to fluorescent indicators of neural activity, bioluminescent indicators require no outside light source, improving the signal-to-noise ratio by reducing autofluorescence, scattering, and photo-bleaching. Further, bioluminescent actuators are advantageous over traditional optogenetics in that light does not have to be externally delivered, as it is self-generated, greatly reducing the invasiveness of the technique. Despite these powerful advances, certain hurdles remain to be overcome to achieve optimal <i>in vivo</i> imaging of bioluminescence. Here we present a suite of techniques for imaging bioluminescent activity in the cortex of awake, behaving mice. A major obstacle of engaging bioluminescent molecules <i>in vivo</i> is that it requires the delivery of a bioluminescent substrate (luciferin) to cells expressing the corresponding enzyme (luciferase). We introduce a microfluidic device that allows for delivery of luciferins directly to cortical neurons expressing luciferases. The device is optically transparent, light weight, and inexpensive to produce. The device is constructed mainly from Polydimethylsiloxane, a widely used silicone-based organic polymer, cured in a 3D printed mold. The microfluidic properties of the device allow for rapid wash-on and wash-off of luciferin, providing for more temporally precise and precisely repeatable measurements. Coupled with an electron multiplying charged-coupled device (Andor iXon) for low-light, fast and high-resolution imaging and wide-field fluorescence co-registration, our strategy offers a systematic approach for high-resolution testing and use of bioluminescent tools.'
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Bryant-BRAIN-2019_small-min.jpg',
      title: "Bimodal control of neural circuits <i>in vivo</i>",
      venue: '2019 BRAIN Initiative Investigators Meeting; Washington, DC',
      authors: [
     'S. Bryant, ',
     'W. E. Medendorp, ',
     'N. Shaner, ',
     'C. I. Moore, ',
     'U. Hochgeschwender'
     ],
      abstract: 'New tools to selectively regulate neurons have revolutionized causal neuroscience experimentation. Optogenetics provides an array of elements for specific biophysical control, while designer chemogenetic receptors provide a minimally invasive method to control circuits in vivo by peripheral injection. We developed a strategy for selective regulation of activity in specific cells that integrates opto- and chemo-genetic approaches, and thus allows manipulation of neuronal activity over a range of spatial and temporal scales in the same experimental animal. Light-sensing molecules, opsins, are activated by biologically produced light through luciferases, bioluminescence, upon peripheral injection of a small molecule (bioluminescence driven optogenetics, BL-OG). Importantly, BL-OG allows conventional fiber optic use of optogenetic sensors, while at the same time providing chemogenetic access to the same sensors. Towards metric-driven validation of the technology under in vivo experimental conditions we quantified effects on neural responses by in vivo multi electrode recordings, directly comparing stimulation of opsins by luciferase emitted bioluminescence versus fiber optics versus DREADDs. In addition to acquiring unique technical skills and deep knowledge across disciplines, this BRAIN project has also us me invaluable experience working as part of a highly collaborative team of scientists.'
  },
    {
        imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Pal-et-al.-SfN-2018-small-min.jpg',
        title: 'A multifunctional bioluminescent calcium indicator ',
        venue: "2018 Society for Neuroscience Meeting; 2018 NeuroNex Investigators' Meeting; San Diego, CA",
        authors: [
            'A. Pal, ',
            'W. E. Medendorp, ',
            'S. Dash, ',
            'T. Brown, ',
            'Z. Zaldi, ',
            'M. Prakash, ',
            'D. Lipscombe, ',
            'C. I. Moore, ',
            'U. Hochgeschwender'
        ],
        abstract: 'Bioluminescent Ca2+ sensors have distinct advantages over fluorescent Ca2+ indicators; first and foremost they function without external illumination. Rather, they produce light in the presence of Ca2+ and of a luciferase substrate, a feature that can be exploited for combining Ca2+ sensing with optogenetic applications. We developed a bioluminescent Ca2+ indicator, Lumicampsin (LMC) that employs a split, mutated <i>Gaussia</i> luciferase (sbGluc) with a CaM-M13 calcium sensing moiety introduced between the two split halves. To date we have several versions of LMC with varying sensitivities to Ca2+ by using different, pre-established CaM-M13s (from GCaMP6f, GCaMP6m, GCaMP6s, etc.). In order to investigate subcellular Ca2+ dynamics, we have fitted the LMC with various organelle localizing sequences that effectively shuttles it to the organelles of interest (ER, Mitochondria and Golgi apparatus). The superior light emission from LMC, capable of producing a delta RLU/RLUo of around 200% <i>in vitro</i>, has motivated us to explore activity dependent neuronal modulation by co-expressing LMCs with various optogenetic elements in primary neuronal cultures. We are currently optimizing conditions to achieve reliable and efficient coupling of Ca2+-induced light production and optogenetic effector activation.',
    },
    {
        imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/PrakashNeuroNex2018-small-min.jpg',
        title: 'Bioluminescence driven optogenetics for investigating functional synaptic communication across co-cultured neuronal networks on multi-electrode arrays',
        venue: "2018 Society for Neuroscience Meeting; 2018 NeuroNex Investigators' Meeting; San Diego, CA",
        authors: [
            'M. Prakash, ',
            'R. St. Laurent, ',
            'A. Pal, ',
            'A. Björefeldt, ',
            'B. W. Connors, ',
            'D. Lipscombe, ',
            'J. A. Kauer, ',
            'C. I. Moore, ',
            'U. Hochgeschwender'
        ],
        abstract: 'In BioLuminescent driven OptoGenetics (BL-OG) a genetically encoded light source, a luciferase, activates a light-sensing optogenetic element, a channelrhodopsin or a pump. When light emitter and light sensor are tethered, as in luciferase-opsin fusion proteins (luminopsins, LMO), application of luciferase substrate coelenterazine (CTZ) and subsequent light production will change the membrane potential of the cell expressing the LMO. Here we co-cultured cortical neurons expressing the luciferase with hippocampal neurons expressing the opsin, with the goal of investigating BL-OG effects across synapses between these two neuronal populations. Neurons isolated from E18 rat cortex and hippocampus were nucleofected with a pre-synaptically targeted luciferase construct and either an excitatory or inhibitory opsin construct, respectively, and were plated on multi-electrode array (MEA) dishes using a two-chamber silicon insert to separate the two populations. Neuronal processes originating from both populations crossed the gap separating them, forming synaptic contacts between cortical and hippocampal neurons. Recordings were carried out between DIVs 14-28. External blue light from an LED source was used to modulate opsin expressing hippocampal neurons directly, while bioluminescence emission by cortical neurons generated with application of CTZ was used to drive hippocampal neurons across synapses. Responses from hippocampal neurons elicited with CTZ were likely due to trans-synaptic communication. Electrical stimulations of cortical neurons by individual electrodes were carried out in parallel to confirm the inter-population connectivity. The overall effect of CTZ application on activity of opsin-expressing hippocampal neurons in the co-cultures was significantly higher compared to that of non-expressing hippocampal neurons and of the cortical neurons in the co-cultures. Such biological light activation, across synaptic partners originating from brain regions known to be synaptically connected, offers the potential to optogenetically dissect synaptic communication non-invasively.',
    },
    {
        imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/MedendorpNeuroNex2018-small-min.jpg',
        title: 'Cortical hyperexcitation in early development results in autistic behavioral phenotypes',
        venue: "2018 Society for Neuroscience Meeting; 2018 NeuroNex Investigators' Meeting; San Diego, CA",
        authors: [
            'W. Medendorp, ',
            'A. Pal, ',
            'U. Hochgeschwender'
        ],
        abstract: 'Early development is marked by spontaneous neuronal activity that occurs without the input of sensory experience. This spontaneous activity has been demonstrated to refine foundational neural circuits before sensory input. By manipulating this activity in genetically-targeted pyramidal neurons within the cortex, we can interfere with the normal formation of specific neural circuits. Many psychiatric disorders are thought to be neurodevelopmental, stemming from malformation of neural circuits in early development. Autism disorders in particular have been associated with increased cortical excitation leading to a cortical imbalance of excitation to inhibition. Early disruptions to cortical activity may result in behavioral changes that correlate with psychiatric phenotypes typical of disorders such as autism. Using optogenetics, we can manipulate neuronal activity using light. Due to the young age of the animals used in this study, a non-invasive light source must be used. Our laboratory has created mice that conditionally express a luciferase protein, sbGLuc, tethered to a channelrhodopsin, VChR1. This luminescent opsin, or luminopsin (LMO3), produces light, and thus a neuronal response, in the presence of the substrate coelenterazine (CTZ), which can be delivered intraperitoneally (IP). Lox-Stop-Lox LMO3 mice were crossed with Emx1-Cre transgenic mice, thus limiting expression of LMO3 to cortical pyramidal neurons. By delivering CTZ IP during post-natal days 4-14, a hyperexcitation can be induced in the cortical pyramidal neurons of developing mouse pups. During adulthood, mice are tested behaviorally, and assessed for morphological and electrophysiological changes. Behavioral results indicate behavioral phenotypes consistent with autism behaviors. Electrophysiology indicates strongly increased excitation to inhibition and a lack of synchrony in the cortex. The results of this research will provide insight into the effect of altered developmental activity and its relationship to psychiatric disease.',
      },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Petersen-NeuroNex-2018-small-min.jpg',
      title: 'Restoring function after severe spinal cord injury through bioluminescence-driven optogenetic stimulation of spinal circuitry',
      venue: "2018 Society for Neuroscience Meeting; 2018 NeuroNex Investigators' Meeting; San Diego, CA",
      authors: [
            'E. D. Peteresen, ',
            'A. Pal, ',
            'J. Zenchak, ',
            'E. D. Sharkey, ',
            'L. Shafau, ',
            'A. Peña, ',
            'M. Prakash, ',
            'U. Hochgeschwender'
      ],
      abstract: 'The ability to manipulate specific neuronal populations of the spinal cord following spinal cord injury (SCI) could potentially prove highly beneficial for rehabilitation in patients through maintaining and strengthening still existing neuronal connections and/or facilitating the formation of new connections. A non-invasive and highly specific approach to neuronal stimulation is bioluminescent-optogenetics, where genetically expressed light emitting luciferases are tethered to light sensitive channelrhodopsins (luminopsins, LMO); neurons are activated by the addition of the luciferase substrate coelenterazine (CTZ). This approach takes advantage of utilizing ion channels for current conduction while activating the channels through application of a small chemical compound, thus allowing non-invasive stimulation and recruitment of all targeted neurons. Rats were transduced in the lumbar spinal cord with AAV2/9 expressing the excitatory LMO3 under control of the synapsin or the Hb9 promoter. A day after contusion injury of the thoracic spine, rats received either CTZ or vehicle every other day for 2 weeks. We found activation of either interneuron or motor neuron populations below the level of injury to significantly improve locomotor recovery. This is the first example of non-invasive activation of an optogenetic component as a potential therapy following spinal cord injury. We are utilizing morphological and histological methods to identify mechanisms underlying improvements in locomotion. The findings will provide a foundation for a rational approach to spinal cord injury, thereby advancing approaches for functional recovery after SCI in the preclinical arena. <a class=bl-link href="https://www.biorxiv.org/content/10.1101/710194v1" target="_blank">Read more about this work on bioRxiv.</a>',
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Gomez-Ramirez-NeuroNex-2018-small.jpg',
      title: 'Tracking neocortical dynamics using genetically-encoded bioluminescent molecules <i>in vivo</i>',
      venue: "2018 Society for Neuroscience Meeting; 2018 NeuroNex Investigators' Meeting; San Diego, CA",
      authors: [
        'M. Gomez-Ramirez, ',
        'J. W. Murphy, ',
        'A. I. More, ',
        'A. Pal, ',
        'D. Lipscombe, ',
        'U. Hochgeschwender, ',
        'C. I. Moore'
      ],
      abstract: 'Fluorescence imaging with genetically-encoded calcium indicators, such as GCaMP, has provided fundamental insights into the role of cell-specific populations in neural coding and perception. Recent advances and pragmatic advantages have made 1-photon imaging a viable strategy for interrogating activity within and across large-scale neural populations. Yet, a limitation of fluorescence imaging is that the technique requires a light source to excite fluorescent proteins. This light creates artifacts that may lead to a reduction in the signal to noise ratio (SNR) of the image. Noise artifacts from the excitation light include: (1) Autofluorescence, (2) Photon scattering from the incoming light, and (3) Photobleaching. As an alternative to fluorescent imaging, we are developing calcium-dependent genetically-encoded molecules using bioluminescent probes. Bioluminescence is chemically generated light that occurs when a photon-containing molecule (luciferin) is catalyzed by a photoenzyme (luciferase). Bioluminescence does not require light excitation and creates very little thermal reaction, thus substantially reducing noise related to autofluoresence, photon-scattering, and photobleaching. Our calcium-dependent bioluminescent molecule, Lumicampsin-4 (LMC4), is a split variant of the slow-burn <i>Gaussia</i> luciferase (sb-GLuc). The two elements are joined by the Ca2+-sensing peptide CaM-M13, thereby providing activity detection. Here, we tested the efficacy of LMC4 to track neural dynamics in mouse somatosensory cortex. To date, we have found that CTZ and a Ca2+ driver (NMDA or L-Glutamic Acid) generate robust bioluminescence signals restricted to the area neighboring the injection pipette. In addition, pilot experiments show that vibrissae deflection generates LMC4-mediated bioluminescence in primary somatosensory neocortex. A key future direction will be to assay the reliability of imaging neural activity across multiple areas using LMC4 while animals engage in perceptual tasks.',
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
      title: "BioLuminescent OptoGenetics (BL-OG): A novel and versatile strategy for neuromodulation",
      venue: '2018 BRAIN Initiative Investigators Meeting; 2019 BRAIN Initiative Investigators Meeting; Washington, DC',
      authors: [
        'U. Hochgeschwender, ',
        'N. Shaner, ',
        'C. I. Moore'
        ],
      abstract: 'We developed a strategy for selective regulation of activity in specific cells that integrates opto- and chemo-genetic approaches, and thus allows manipulation of neuronal activity over a range of spatial and temporal scales in the same experimental animal. Light-sensing molecules (opsins) are activated by biologically produced light through luciferases upon peripheral injection of a small molecule, which crosses the blood-brain barrier. Such bioluminescence-driven optogenetics, BL-OG, is a minimally invasive method like chemogenetics, but one that leverages the full array of bioluminescent and optogenetic options. Importantly, BL-OG allows conventional fiber optic use of optogenetic sensors, while at the same time providing chemogenetic access to the same sensors. This opens, in principle, the entire optogenetic toolbox for complementation by a chemogenetic dimension. In this project we seek to further optimize and validate the technology with the goal to supply the research community with metric-driven validation of the technology, under <i>in vivo</i> experimental conditions, in comparison to current technologies, by 1) generating new luciferases with increased light emission and luciferase/luciferin pairs with non-overlapping substrates to allow multiplexing, 2) developing an extended toolkit of luciferase-opsin combinations and testing their efficacy <i>in vitro</i>, and 3) validating the efficacy of bioluminescence activation of neuronal circuits <i>in vivo</i> through quantifying effects on neuronal response as assessed by <i>in vivo</i> multi electrode recordings. The overall outcome of our work will be the optimization and validation of a novel, highly flexible tool set for bimodal optogenetic and chemogenetic interrogation of neuronal circuits in living animals. The proposed work will give the neuroscience community comparative data aiding in making an informed decision for choosing among the various tools for their specific experimental needs.',
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
      title: 'Employing subcellular calcium to control membrane voltage',
      venue: '2018 BRAIN Initiative Investigators Meeting; Washington, DC',
      authors: [
        'U. Hochgeschwender, ',
        'D. Lipscombe, ',
        'C. I. Moore'
        ],
      abstract: 'The goal of this project is to assess the feasibility of an all-molecular method for activity-dependent feedback control of neuronal activity. We proposed to generate calcium sensitive light emitting molecules (bioluminescent enzymes, luciferases) that drive light sensing optogenetic elements (channels or ion pumps, opsins) to control membrane voltage at the level of single cells for positive and negative feedback control. By adjusting calcium sensitivity and molecule location, light production can be made specific to large events such as bursts, or sensitive to individual spikes or single channel activity. By coupling these Ca2+-dependent luciferases to opsins, highly specific sensing of calcium at its source will trigger opsin activation for augmenting or suppressing neuronal activity, allowing a high degree of temporal and spatial precision in feedback control. We made significant progress towards our goals by pursuing three aims: 1) Developing a calcium sensing split luciferase with significantly improved speed, brightness and range of sensitivity; 2) Targeting these new molecules to subcellular domains to enable highly specific biological outcomes; 3) Linking these new innovations to optogenetic readouts. The molecular tools generated in the context of our aims will be highly valuable in their own right, specifically for imaging Ca2+ activity independent of external light sources. Our experiments have the potential to lead to a novel strategy to regulate activity only during periods of abnormal neuronal firing. Our strategy is non-invasive and it could be applied to large-scale manipulation of neural activity in behaving animals or in humans, where non-invasive, rapid feedback control of neuronal activity could be used to regulate clinically relevant activity in the brain.',
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
      title: "Tracking neocortical dynamics using genetically-encoded bioluminescent molecules <i>in vivo</i>",
      venue: '2018 BRAIN Initiative Investigators Meeting; Washington, DC',
      authors: [
        'M. Gomez-Ramirez, ',
        'A. I. More, ',
        'A. Pal, ',
        'U. Hochgeschwender, ',
        'C. I. Moore'
        ],
      abstract: 'The use of genetically-encoded calcium indicators and actuators has fostered significant progress in determining neural circuits underlying behavior and perception. Our team has made fundamental contributions to this domain by developing genetically-encoded molecules capable of tracking neural dynamics and controlling cell activity using bioluminescent probes. Recently, we tested the efficacy of our strategy for controlling neural activity <i>in vivo</i>, a method referred as BioLuminescent-Optogenetics (BL-OG). In BL-OG, cell activity is controlled by optogenetic elements that are activated via bioluminescent light emitted by a luciferase (e.g., slow-burn <i>Gaussia</i> Luciferase, sbGLuc) tethered to opsins. We showed that BL-OG has a large dynamic range for driving spiking activity <i>in vivo</i>, and can be effectively activated using local and systemic injections of the luciferase s substrate, Coelenterazine (CTZ). More recently, we have been testing the efficacy of our genetically-encoded calcium (Ca2+) indicator molecule to track neural dynamics in mouse somatosensory cortex. This molecule, termed LumiCampsin 4 (LMC4), employs a split sbGLuc photoenzyme and connects the two elements with the Ca2+-sensing peptide CaM-M13, ensuring that bioluminescence only occurs in the presence of both Ca2+ and CTZ. We found that bioluminescence was only emitted when both CTZ and a Ca+2 driver (NMDA or L-Glutamic Acid) were injected. Bioluminescence was restricted to the area neighboring the Ca2+ injection pipette, highlighting the spatial selectivity of this molecule. In addition, pilot experiments show that mechanically driving vibrissa generates LMC4-mediated bioluminescence in representations in primary somatosensory neocortex. Together, these data show that our bioluminescent methods can be effective for interrogating and controlling dynamics of neural circuits underlying perception. A future direction is to assay the reliability of imaging neural activity across multiple areas using LMC4 while animals engage in perceptual tasks. These experiments are fundamental to determining whether LMC4 is an effective molecule for probing cross-cortical neural dynamics underlying perception.'
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
      title: 'A bioluminescent calcium sensor to drive optogenetic elements',
      venue: '2018 BRAIN Initiative Investigators Meeting; Washington, DC',
      authors: [
        'A. Pal, ',
        'U. Hochgeschwender, ',
        'D. Lipscombe, ',
        'C. I. Moore'
        ],
      abstract: 'The overall goal of the BRAIN award “Employing subcellular calcium to control membrane voltage” is to generate calcium-dependent light-emitting molecules (bioluminescent enzymes, luciferases) to activate light-sensing optogenetic elements, thereby achieving all-molecular, non-invasive, rapid feedback control of neural activity of individual cells. Within the broader goals of this ambitious project we have made the following progress: 1) generated a bright, fast, bioluminescent Ca2+ sensor. We inserted the CaM-M13 peptide from GCaMP6f into a split slow burn <i>Gaussia</i> luciferase to generate lumicampsin 4, LMC4. Relative to natural and engineered bioluminescent Ca2+ reporters, LMC4 was significantly brighter and, most importantly, had faster peak kinetics; ideal properties for fast calcium reporting. We recently replaced the CaM-M13 module of LMC4 with equivalent modules from other fluorescent and bioluminescent Ca2+ sensors and increased Ca2+ reporter performance even further. 2) We generated LMC4 variants that localize to specific subcellular domains. Ca2+ dynamics vary extensively in subcellular microdomain regions and intracellular organelles. We added specific signaling sequences to LMC4 for organelle (ER, Golgi, Mitochondria) and general membrane-targeting and detected intracellular Ca2+ signals at these locations. We are now assessing LMC4 in primary neurons by combined electrophysiology and photo-detection. 3) I coupled LMC4 to optogenetic elements. We showed silencing of neuronal spiking in cells co-expressing LMC4 and the proton pump Mac. This suggests that Ca2+-dependent light production from LMC4 can activate Mac. We are currently optimizing conditions to achieve reliable and efficient coupling of Ca2+-induced light production and optogenetic effector activation. In addition to acquiring unique technical skills and deep knowledge across disciplines, this BRAIN project has also given us invaluable experience working as part of a highly collaborative team of scientists.'
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
      title: "Bioluminescent optogenetics activation of transplanted neural precursor cells improves motor deficits in a Parkinson's disease mouse model",
      venue: '2017 Society for Neuroscience Meeting; Washington, DC',
      authors: [
        'B. L. Palmateer, ',
        'N. Dorka, ',
        'L.-M. Wagner, ',
        'E. D. Petersen, ',
        'M. Prakash, ',
        'U. Hochgeschwender '
    ],
    abstract: 'The need to develop efficient therapies for neurodegenerative diseases is urgent, especially given the increasing percentages of the population living longer, with increasing chances of being afflicted with conditions like Parkinson’s Disease (PD). A promising curative approach towards PD and other neurodegenerative diseases is the transplantation of stem cells to halt and potentially reverse neuronal degeneration. However, stem cell therapy suffers from problems with graft efficiency that can lead to adverse side effects and reduced improvement for patients. By using remote stimulation to optogenetically activate cells we attempted to increase graft efficiency. We generated a neuronal precursor cell line expressing luminopsin 3 (LMO3), a luciferase-channelrhodopsin fusion protein, which responds to the luciferase substrate coelenterazine (CTZ) with emission of blue light that in turn activates the opsin. Neuronal precursor cells were injected bilaterally into the striatum of homozygous aphakia mice, which carry a spontaneous mutation leading to lack of dopaminergic neurons and symptoms of PD. Following transplantation, the cells were stimulated over a period of 10 days by intraventricular injections of CTZ. Mice receiving CTZ demonstrated significantly improved motor skills in a rotarod test compared to mice receiving vehicle. Thus, bioluminescent optogenetic stimulation of transplanted neuronal precursor cells shows promising effects in improving graft efficiency in the aphakia PD mouse model and encourages further studies to elucidate the mechanisms and long-term outcomes of the beneficial effects.',
  },
  {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
      title: 'Non-invasive bioluminescence-activated optogenetic stimulation for rehabilitation following traumatic spinal cord injury',
      venue: '2017 Society for Neuroscience Meeting; Washington, DC',
      authors: [
        'E. D. Peteresen, ',
        'A. Pal, ',
        'E. D. Sharkey, ',
        'J. R. Zenchak, ',
        'A. J. Peña, ',
        'P. Otero, ',
        'W. E. Medendorp, ',
        'T. Brown, ',
        'B. Palmateer, ',
        'M. Prakash, ',
        'U. Hochgeschwender'
      ],
    abstract: 'Current methods used to treat spinal cord injury with stimulation include transcutaneous electrical stimulation at the muscle and intrathecal electrical stimulation. Both of these methods can offer quality of life improvements for patients but are not entirely effective at restoring function. Optogenetic stimulation provides a method of stimulation that can be done at the neuronal level and does not result in the rapid fatigue which occurs as a result of electrical stimulation at the neuronal level. The current drawback of traditional optogenetic stimulation is the invasiveness, as this approach requires an implanted light source. Here we describe a method for the activation of optogenetic constructs in a spinal cord injury model where genetically expressed opsins are activated by a light-producing luciferase that is fused to the opsin (luminopsin). Using this approach, cells expressing the construct are activated by the injection of the luciferase substrate allowing for light to be produced by the luciferase. The light sensitive opsin then opens, allowing for non-selective cation flow, exciting the neuron. We found activation of neurons below the level of injury to significantly improve locomotor recovery following spinal cord injury. This new approach can be applied to distinct populations of endogenous neurons. This is the first example of non-invasive activation of an optogenetic component as a potential therapy following spinal cord injury. This approach can likely be applied to other neurological conditions and may prove to be a useful tool in future therapies for patients. <a class=bl-link href="https://www.biorxiv.org/content/10.1101/710194v1" target="_blank">Read more about this work on bioRxiv.</a>',
},
  {
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
    title: 'Hyper-excitation during critical developmental periods results in psychiatric behavioral phenotypes',
    venue: '2017 Society for Neuroscience Meeting; Washington, DC',
    authors: [
      'W. E. Medendorp, ',
      'A. Pal, ',
      'R. Ridgell, ',
      'U. Hochgeschwender'
      ],
    abstract: 'Early development is marked by spontaneous neuronal activity that occurs without the input of sensory experience. This is best demonstrated in the visual system, but has been shown to be a generalized phenomenon. By manipulating this activity in genetically defined neural populations within the prefrontal cortex, we can interfere with the normal formation of specific neural circuits. Many psychiatric disorders are thought to be neurodevelopmental, stemming from malformation of neural circuits. These circuits are primarily found within the prefrontal cortex, where our manipulation will take place. Early disruptions to neural activity may result in behavioral changes that correlate with psychiatric phenotypes typical of disorders such as autism, anxiety, or depression. Using optogenetics, we can manipulate neuronal activity using light. Due to the young age of the animals used in this study, a non-invasive light source must be used. Our laboratory has created mice that conditionally express a luciferase protein, sbGLuc, tethered to a channelrhodopsin, VChR1. This luminescent opsin, or luminopsin (LMO3), produces light, and thus a neuronal response, in the presence of the substrate coelenterazine (CTZ), which can be delivered intraperitoneally (ip). Lox-Stop-Lox LMO3 mice were crossed with Cre driver lines (Emx-1, Dat), thus limiting expression of LMO3 to neuronal populations of interest. By delivering CTZ ip during post-natal days 4-14, alterations in the firing activity of specific neuronal populations can be induced in developing mouse pups. During adulthood, mice are then tested for depressive, anxiety, antisocial, and general locomotive behaviors. The results of this research will provide insight into the effect of altered developmental activity and its relationship to psychiatric disease.'
},
{
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
    title: 'Genetically encoded light sources for non-invasive optogenetics',
    venue: '2017 Society for Neuroscience Meeting; Washington, DC',
    authors: [
      'T. M. Brown, ',
      'G. G. Lambert, ',
      'A. Pal, ',
      'M. Prakash, ',
      'N. C. Shaner, ',
      'U. Hochgeschwender'
      ],
    abstract:'Optogenetics is the use of light to manipulate light sensing molecules, opsins. Activation of these light-gated ion channels and pumps, when expressed by neurons, results in depolarization or hyperpolarization of cell membranes. This allows activation and silencing of neuronal circuits in behaving experimental animals via light fibers implanted into the animal’s brain. We proposed a strategy for non-invasive optogenetics by switching out the light source from an invasive physical to a non-invasive biological one, i.e., a light producing protein, or luciferase. The luciferase emits light, activating the optogenetic actuator upon application of its small-molecule substrate, coelenterazine (CTZ). We engineered fusion proteins of a light-emitting luciferase to an optogenetic light-responsive element, resulting in a luminescent opsin, or luminopsin. Activation of fused opsins will be more efficient as the light emission of the luciferase increases. One way to increase light output of luciferases is to couple them to fluorescent proteins to take advantage of BRET (bioluminescent resonance energy transfer). This class of probe is far brighter than the parental luciferase enzyme because the quantum efficiency of emission is governed not by the luciferase enzyme, but rather by the fluorescence quantum yield of the BRET acceptor. We performed mutant library screenings in E. coli towards directed evolution of luciferases to improve their enzymatic activity and towards linker length, composition, and domain geometry of BRET probes for optimization of their efficiency. The brightest new BRET probes were codon-optimized and fused to optogenetic actuators. Fusion proteins were expressed in primary cultured neurons and assessed for their effects on activating and silencing neurons in multi electrode arrays (MEAs). New luminopsin constructs had robust expression, increased light emission compared to previously used luciferase variants, and showed efficient activation of opsins by increasing and decreasing spiking of cultured neurons.'
},
{
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
    title: 'Bioluminescence driven optogenetics for investigating functional synaptic communication ',
    venue: '2017 Society for Neuroscience Meeting; Washington, DC',
    authors: [
      'M. Prakash, ',
      'R. St. Laurent, ',
      'A. Pal, ',
      'B. W. Connors, ',
      'D. Lipscombe, ',
      'J. A. Kauer, ',
      'C. I. Moore, ',
      'U. Hochgeschwender'
      ],
    abstract:'In BioLuminescent driven OptoGenetics (BL-OG) a genetically encoded light source, a luciferase, activates a light-sensing optogenetic element, a channelrhodopsin or a pump. When light emitter and light sensor are tethered, as in luciferase-opsin fusion proteins (luminopsins, LMO), application of luciferase substrate and subsequent light production will change the membrane potential of the cell expressing the LMO. Here we placed the two moieties in pre- and postsynaptic ends of neurons with the goal of achieving BL-OG across the synapse. Neurons isolated from E18 rat cortex were nucleofected either with a pre-synaptically targeted luciferase construct (sbGLuc) or the anion channelrhodopsin iChloC, and were mixed and plated at a 1:1 ratio on 64 electrode 1-well multi-electrode array (MEA) dishes. The above two populations were also individually plated as controls. Silencing of spontaneous neuronal spiking activity through iChloC activation was assessed between DIV 14-21. Blue light (470 nm) from an arc lamp was used to silence iChloC expressing neurons directly, while application of the luciferase substrate coelenterazine (CTZ; final concentration 100μM) was used to silence iChloC expressing neurons across synapses. Assessment of spiking activity showed that for a number of individual electrodes CTZ treatment resulted in a similar pattern of silencing as seen with blue light stimulation. For electrodes that showed similar responses to CTZ treatment and blue light pulses, silencing with CTZ was likely due to trans-synaptic light-activation of iChloC channels. The overall extent of silencing after CTZ application to MEA cultures with mixed populations of luciferase and iChloC expressing neurons was significantly higher compared to cultures of individual populations. Such light activation across synaptic partners, interluminescence, offers the potential to optogenetically dissect synaptic communication in genetically determined neuronal partner populations.'
},
{
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
    title: 'Imaging and regulation of cortical neurons using bioluminescent molecules: A biological method for tracking neural dynamics and driving optogenetic elements <i>in vivo</i>',
    venue: '2017 Society for Neuroscience Meeting; Washington, DC',
    authors: [
      'M. Gomez-Ramirez, ',
      'A. I. Moore, ',
      'A. Pal, ',
      'B. W. Connors, ',
      'J. A. Kauer, ',
      'D. Lipscombe, ',
      'U. Hochgeschwender, ',
      'C. I. Moore'
      ],
    abstract:'The development of optogenetics has fostered significant progress in neuroscience by enabling high spatio-temporal control of genetically identified cell populations. Optogenetics is an appealing tool for dissecting neural circuits, and controlling dysfunctional cell ensembles underlying pathological disorders. However, there are several barriers that limit the use of optogenetics <i>in vivo</i>. In particular, invasive devices used for light delivery (e.g., optical fibers) can be perilous because implants represent a potential path for pathogens to reach the brain. Further, targeting multiple disparate foci can be punitive because it requires inserting several optical fibers that may cause tissue damage. To partly meet these needs, we devised the BioLuminescence-OptoGenetics (BL-OG) method, which leverages bioluminescence (BL) to activate optogenetic elements. In our BL-OG construct, the slow-burn <i>Gaussia</i> luciferase (sbGLuc) is tethered to Volvox-Channelrhodopsin1 (VCHR1), and BL is generated when coelenterazine (CTZ), the substrate for <i>Gaussia</i> luciferase, is catalyzed by sbGLuc. While we and others have shown that BL-OG can modulate neural activity, there remain major follow-up questions to demonstrate that BL-OG can be a viable strategy for controlling cells’ activity <i>in vivo</i>. Here, we assayed whether BL-OG can be used as a gain modulator by studying whether increases in BL lead to corresponding changes in neural firing. Further, we probed whether BL-OG enhances cells’ sensitivity to sensory stimuli, and whether BL-OG can be used to track and dynamically control cells’ activity <i>in vivo</i>. We injected the sbGLuc+VCHR1 construct in mice primary somatosensory cortex (SI), and performed simultaneous BL imaging and electrophysiological recordings while stimulating animals’ whiskers prior to and after CTZ injections. Our data revealed a positive relationship between BL and neural firing, and that BL-OG enhanced stimulus-evoked activity of SI neurons. These data indicate that BL-OG systematically regulates cells’ activity <i>in vivo</i>. In a separate set of mice, we injected a calcium-sensitive bioluminescent molecule by splitting the sb-GLuc and linking the components with the calmodulin-M13 peptide sequence. Pilot data revealed increased BL activity during periods of high calcium concentrations. Our data provide evidence that BL-OG can be used to dynamically control the gain of cells <i>in vivo</i>.'
},
{
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
    title: 'Characterization, sub-cellular targeting and novel applications of a split <i>Gaussia</i> luciferase based genetically encoded calcium indicator',
    venue: '2017 Society for Neuroscience Meeting; Washington, DC',
    authors: [
      'A. Pal, ',
      'M. Gomez-Ramirez, ',
      'W. E. Medendorp, ',
      'Z. Zaidi, ',
      'J. A. Kauer, ',
      'D. Lipscombe, ',
      'B. W. Connors, ',
      'C. I. Moore, ',
      'U. Hochgeschwender'
      ],
    abstract:'Calcium (Ca2+) is an essential second messenger that is involved in a multitude of physiological functions ranging from cellular apoptosis to neuronal firing. Therefore, <i>in vivo</i> Ca2+ imaging is a very sought after technique. We have split a mutated version of <i>Gaussia</i> luciferase, sbGLuc, known for its high light emission, and introduced the Ca2+ sensing moiety Calmodulin-M13 (CaM-M13) between the two split halves, generating Lumicampsin (LMC). In the presence of both Ca2+ and the luciferase substrate, coelenterazine (CTZ), the enzyme emits light. Since the dynamics of Ca2+ flux vary quite extensively between different organelles and cytoplasmic regions, we have fitted LMC with signaling sequences such that it is localized to various organelles (ER, Golgi, Mitochondria) or is suspended from the inner cell membrane. We transfected HEK293 and Hela cells with these different versions of LMCs and found that they have robust expression, display specific subcellular localization, and faithfully report the calcium dynamics of the site they were localized to. Lastly, LMC reported Ca2+ spikes in Hela cells <i>in vitro</i> and in mouse barrel cortex <i>in vivo</i>.'
},
{
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
    title: 'Novel luminopsins for improved bimodal opto- and chemogenetic control of neural function',
    venue: '2017 Society for Neuroscience Meeting; Washington, DC',
    authors: [
      'S. Park, ',
      'S.-H. Song, ',
      'B. Palmateer, ',
      'A. Pal, ',
      'G. P. Shall, ',
      'R. M. Welchko, ',
      'K. Ibata, ',
      'A, Miyawaki, ',
      'G. J. Augustine, ',
      'U. Hochgeschwender'
      ],
    abstract:'Bioluminescence-driven optogenetics can be useful for bimodal opto- and chemogenetic control of neural activity, including both neuronal activation and silencing. Luminopsins (LMOs), which are composed of an opsin fused to a luciferase, have proven to be versatile tools for controlling neuronal activity and interrogating neuronal circuits (PLoS ONE 8: e59759; PNAS 113: E358). Here we have expanded the luminopsin tool kit by fusing a new version of <i>Gaussia</i> luciferase (GLuc) with high light-emission, GLucM23, to depolarizing and hyperpolarizing channelrhodopsins with increased light sensitivity. The combination of GLucM23 with Volvox channelrhodopsin-1, VChR1, produced LMO4, while combining GLucM23 with the anion channelrhodopsin, iChloC, yielded iLMO4. The efficacy of bioluminescence-driven optogenetic activation and silencing was evaluated by whole-cell patch-clamp recordings and multi-electrode array recordings in cultured neurons. Both luminopsins proved very efficient in activating and silencing neurons upon exposure to the luciferase substrate, coelenterazine (CTZ), to generate light emission mediated by GLucM23. The coupling efficiency - a measure of the ability of light generated by GLuc to activate the channelrhodopsins - was higher for LMO4 and iLMO4 than for all previous luminopsins. Moreover, these new LMOs very efficiently controlled neuronal activity <i>in vivo</i>, as indicated by the ability of injected CTZ to alter amphetamine-induced rotations in rats. We conclude that LMO4 and iLMO4 are novel and effective tools that improve bimodal opto- and chemogenetic control of neuronal activity and brain function, from single-cell to behavioral levels.'
},
  ];
