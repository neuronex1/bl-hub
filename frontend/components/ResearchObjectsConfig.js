//imgSrc: use low-res or small images for unpublished work; link journal articles to journal webpages
//title: This is the title of the work
//venue: This is the meeting or journal name, e.g., SfN, Journal of Neuroscience. If you want to use an apostrophe, use quotation marks around the data.
//authors: Remember to put a comma and space at the end of the leading authors' names; not needed for the last author.
//abstract: Include an abstract or short description of the work

export const RESEARCH_OBJECTS_PAPERS = [
  {
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/IEEE_2020_web-Banner.png',
    title: 'Miniaturized devices for bioluminescence imaging in freely behaving animals',
    venue: '42nd Annual International Conferences of the IEEE Engineering in Medicine and Biology Society in conjunction with the 43rd Annual Conference of the Canadian Medical and Biological Engineering Society; July 20-24, 2020; bioRxiv: June 16, 2020',
    authors: [
      'D. Celinskis, ',
      'N. Friedman, ',
      'M. Koksharov, ',
      'J. Murphy, ',
      'M. Gomez-Ramirez, ',
      'D. Borton, ',
      'N. Shaner, ',
      'U. Hochgeschwender, ',
      'D. Lipscombe, ',
      'C. I. Moore'],
    abstract: 'Fluorescence miniature microscopy <i>in vivo</i> has recently proven a major advance, enabling cellular imaging in freely behaving animals. However, fluorescence imaging suffers from autofluorescence, phototoxicity, photobleaching and non-homogeneous illumination artifacts. These factors limit the quality and time course of data collection. Bioluminescence provides an alternative kind of activity-dependent light indicator. Bioluminescent calcium indicators do not require light input, instead generating photons through chemiluminescence. As such, limitations inherent to the requirement for light presentation are eliminated.  Further, bioluminescent indicators also do not require excitation light optics: the removal of this component should make lighter and lower cost microscope with fewer assembly parts. While there has been significant recent progress in making brighter and faster bioluminescence indicators, parallel advances in imaging hardware have not yet been realized. A hardware challenge is that despite potentially higher signal-to-noise of bioluminescence, the signal strength is lower than that of fluorescence. An open question we address in this report is whether fluorescent miniature microscopes can be rendered sensitive enough to detect bioluminescence. We demonstrate this possibility <i>in vitro</i> and <i>in vivo</i> by implementing optimizations of the UCLA fluorescent miniscope. These optimizations yielded a miniscope (BLmini) which is 22% lighter in weight, has 45% fewer components, is up to 58% less expensive, offers up to 15 times stronger signal (as dichroic filtering is not required) and is sensitive enough to capture temporal dynamics of bioluminescence in the brain with a signal-to-noise ratio of 67 dB. <a class=bl-link href="https://www.biorxiv.org/content/10.1101/2020.06.15.152546v1" target=_blank>Read more about this work on bioRxiv</a>.'
  },
  {
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Medendorp_bioRxiv_Jan2020-min.jpg',
    title: "Selective postnatal excitation of neocortical pyramidal neurons results in distinctive behavioral and circuit deficits in adulthood",
    venue: 'bioRxiv: January 18, 2020',
    authors: [
      'W. E. Medendorp, ',
      'A. Pal, ',
      'M. Waddell, ',
      'A. Björefeldt, ',
      'C. I. Moore, ',
      'U. Hochgeschwender'
    ],
    abstract: 'In leading models of Autism Spectrum Disorder, and in human data, the efficacy of outgoing cortical connectivity transitions from overly exuberant to languid from early development to adulthood. This transition begs the question of whether the early enhancement in excitation might be a common driver, across etiologies, of these symptoms. We directly tested this concept by chemogenetically driving neuronal activity in neocortical neurons during postnatal days 4-14. Hyperexcitation of Emx1-, but not dopamine transporter-, parvalbumin-, or Dlx5/6-expressing neurons led to decreased social interaction and increased grooming activity in adult animals. <i>In vivo</i> optogenetic interrogation in adults revealed decreased baseline but increased stimulus-evoked firing rates of pyramidal neurons, impaired recruitment of inhibitory neurons and reduced cortico-striatal communication. These results directly support the prediction that changed firing in developing circuits irreversibly alters adult circuit function that leads to maladaptive changes in behaviors. This experimental approach offers a valuable platform to study the impact of disruption of developmental neural activity on the formation and function of adult neural circuits and behavior. <a class=bl-link href="https://www.biorxiv.org/content/10.1101/2020.01.18.911347v1?rss=1" target="_blank">Read more about this work on bioRxiv</a>.'
  },
  {
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Petersen_BioRxiv_2019.png',
    title: "Restoring function after severe spinal cord injury through bioluminescence-driven optogenetics",
    venue: 'bioRxiv: July 22, 2019',
    authors: [
      'E. D. Petersen, ',
      'E. D. Sharkey, ',
      'A. Pal, ',
      'L. O. Shafau, ',
      'J. R. Zenchak, ',
      'A, J. Peña, ',
      'A. Aggarwal, ',
      'M. Prakash, ',
      'U. Hochgeschwender'
    ],
    abstract: 'The ability to manipulate specific neuronal populations of the spinal cord following spinal cord injury (SCI) could prove highly beneficial for rehabilitation in patients through maintaining and strengthening still existing neuronal connections and/or facilitating the formation of new connections. A non-invasive and highly specific approach to neuronal stimulation is bioluminescent-optogenetics (BL-OG), where genetically expressed light emitting luciferases are tethered to light sensitive channelrhodopsins (luminopsins, LMO); neurons are activated by the addition of the luciferase substrate coelenterazine (CTZ). This approach utilizes ion channels for current conduction while activating the channels through application of a small chemical compound, thus allowing non-invasive stimulation and recruitment of all targeted neurons. Rats were transduced in the lumbar spinal cord with AAV2/9 to express the excitatory LMO3 under control of a pan-neuronal or motor neuron-specific promoter. A day after contusion injury of the thoracic spine, rats received either CTZ or vehicle every other day for 2 weeks. Activation of either interneuron or motor neuron populations below the level of injury significantly improved locomotor recovery lasting beyond the time of stimulation. Utilizing histological and gene expression methods we identified neuronal plasticity as a likely mechanism underlying the functional recovery. These findings provide a foundation for a rational approach to spinal cord injury rehabilitation, thereby advancing approaches for functional recovery after SCI. <a class=bl-link href="https://www.biorxiv.org/content/10.1101/710194v1" target="_blank">Read more about this work on bioRxiv</a>.'
  },
    {
     imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Gomez-Ramirez+et+al.+J+Neurosci+2019-min.jpg',
     title: "The BioLuminescent-OptoGenetic <i>in vivo</i> response to coelenterazine is proportional, sensitive and specific in neocortex",
     venue: 'bioRxiv: July 22, 2019; Journal of Neuroscience Research, September 23, 2019',
     authors: [
     'M. Gomez-Ramirez, ',
     'A. I. More, ',
     'N. G. Friedman, ',
     'U. Hochgeschwender, ',
     'C. I. Moore'
    ],
    abstract: 'BioLuminescent (BL) light production can modulate neural activity and behavior through coexpressed OptoGenetic (OG) elements, an approach termed ‘BL-OG.’ Yet, the relationship between BL-OG effects and bioluminescent photon emission has not been characterized <i>in vivo</i>. Further, the degree to which BL-OG effects strictly depend on optogenetic mechanisms driven by bioluminescent photons is unknown. Crucial to every neuromodulation method is whether the activator shows a dynamic concentration range driving robust, selective, and non-toxic effects. We systematically tested the effects of four key components of the BL-OG mechanism (luciferin, oxidized luciferin, luciferin vehicle, and bioluminescence), and compared these against effects induced by the Luminopsin-3 (LMO3) BL-OG molecule, a fusion of slow burn <i>Gaussia</i> luciferase (sbGLuc) and <i>Volvox</i> ChannelRhodopsin-1 (VChR1). We performed combined bioluminescence imaging and electrophysiological recordings while injecting specific doses of Coelenterazine (substrate for sbGluc), Coelenteramide (CTM, the oxidized product of CTZ), or CTZ vehicle. CTZ robustly drove activity in mice expressing LMO3, with photon production proportional to firing rate. In contrast, low and moderate doses of CTZ, CTM, or vehicle did not modulate activity in mice that did not express LMO3. We also failed to find bioluminescence effects on neural activity in mice expressing an optogenetically non-sensitive LMO3 variant. We observed weak responses to the highest dose of CTZ in control mice, but these effects were significantly smaller than those observed in the LMO3 group. These results show that in neocortex <i>in vivo</i>, there is a large CTZ range wherein BL-OG effects are specific to its active chemogenetic mechanism. <a class=bl-link href=" https://doi.org/10.1002/jnr.24498" target="_blank">Read more about this work in the Journal of Neuroscience Research</a>.'
    },
    {
      imgSrc: ' https://bl-hub.s3.amazonaws.com/research-objects/Aequorea_victorias_secrets.png',
      title: "<i>Aequorea victoria's</i> secrets",
      venue: 'bioRxiv: July 7, 2019',
      authors: [
        'G. G. Lambert, ',
        'H. Depernet, ',
        'G. Gotthard, ',
        'D. T. Schultz, ',
        'I. Navizet, ',
        'T. Lambert, ',
        'D. S. Bindels, ',
        'V. Levesque, ',
        'J. N. Moffatt, ',
        'A. Salih, ',
        'A. Royant, ',
        'N. C. Shaner'
      ],
      abstract: 'Using mRNA-Seq and <i>de novo</i> transcriptome assembly, we identified, cloned and characterized nine previously undiscovered fluorescent protein (FP) homologs from <i>Aequorea victoria</i> and a related <i>Aequorea</i> species, with most sequences highly divergent from avGFP. Among these FPs are the brightest GFP homolog yet characterized and a reversibly photochromic FP that responds to UV and blue light. Beyond green emitters, <i>Aequorea</i> species express purple- and blue-pigmented chromoproteins (CPs) with absorbances ranging from green to far-red, including two that are photoconvertible. X-ray crystallography revealed that <i>Aequorea</i> CPs contain a chemically novel chromophore with an unexpected crosslink to the main polypeptide chain. Because of the unique attributes of several of these newly discovered FPs, we expect that <i>Aequorea</i> will, once again, give rise to an entirely new generation of useful probes for bioimaging and biosensing. <a class=bl-link href="https://www.biorxiv.org/content/10.1101/677344v2" target="_blank">Read more about this work on bioRxiv</a>.'
    },
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/Prakash_J_Neurosci_Res_2018.png',
      title:'Defining parameters of specificity for bioluminescent optogenetic activation of neurons using <i>in vitro</i> multi electrode arrays (MEA)',
      venue:'Journal of Neuroscience Research, August 28, 2018',
      authors: [
      'M. Prakash, ',
      'W. E. Medendorp, ',
      'U. Hochgeschwender'
      ],
      abstract: 'In Bioluminescent Optogenetics (BL‐OG) a biological, rather than a physical, light source is used to activate light‐sensing opsins, such as channelrhodopsins or pumps. This is commonly achieved by utilizing a luminopsin (LMO), a fusion protein of a light‐emitting luciferase tethered to a light‐sensing opsin. Light of the wavelength matching the activation peak of the opsin is emitted by the luciferase upon application of its small molecule luciferin, resulting in activation of the fused opsin and subsequent effects on membrane potential. Using optimized protocols for culturing, transforming, and testing primary neurons in multi electrode arrays, we systematically defined parameters under which changes in neuronal activity are specific to bioluminescent activation of opsins, rather than due to off‐target effects of either the luciferin or its solvent on neurons directly, or on opsins directly. We further tested if there is a direct effect of bioluminescence on neurons. Critical for assuring specific BL‐OG effects are testing the concentration and formulation of the luciferin against proper controls, including testing effects of vehicle on LMO expressing and of luciferin on nonLMO expressing targets. <a class=bl-link href=" https://doi.org/10.1002/jnr.24313" target="_blank">Read more about this work in the Journal of Neuroscience Research</a>.'
    },
  ];
  export const RESEARCH_OBJECTS_THESES = [
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/Griffin_MS_figure.png',
      title:'Non-invasive optogenetic stimulatiion in a rat model of spinal cord injury',
      venue:'Thesis completed in partial fulfillment of the requirement for the degree of Master of Science at Central Michigan University, 2020',
      authors: ['Griffin Kendziorski'],
      abstract: 'Despite ever improving treatment methods, there still is no way to effectively restore motor function after a severe spinal cord injury (SCI). A promising approach is to re-engage spinal cord neurons caudal to the injury site. A potential method to achieve this is optogenetics. However, the invasiveness and need for an implanted optical fiber severely limits the viability of this strategy for treating spinal cord injuries. In this study, a light-producing luciferase was used as an internal light source and was fused to a highly light-sensitive step function opsin (SFO, ChR2 (CS/DA). This genetically expressed construct can be activated following an intraperitoneal injection with coelenterazine (CTZ). When activated by the luciferase, the light-sensitive opsin opens, and the flow of cations results in the excitation of the neuron (BioLuminescent OptoGenetics, BL-OG). Rats were transduced with AAV expressing the excitatory sbGLuc-ChR2 CS/DA in the lumbar spinal cord. The human synapsin (hSyn) promotor allowed expression to be confined to neurons. Prior work has demonstrated that BL-OG activated by an injection of CTZ <i>via</i> an intraventricular cannula can improve hind limb motor function following SCI. In the present study, rats were treated with intraperitoneal injections (IPs) of CTZ or vehicle every other day for two weeks following a severe contusion SCI. Interestingly, animals receiving CTZ either had large functional improvements or suffered from chronic muscle spasticity. These findings indicate that the dose of CTZ used was likely too high. In the future, we plan to investigate the effects of changing the dose of CTZ.'
    },
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/CMU+_Logo.png',
      title:'Trans-synaptic neuronal communication <i>via</i> bioluminescent optogenetics',
      venue:'Thesis completed in partial fulfillment of the requirement for the degree of Master of Science at Central Michigan University, 2020',
      authors:['Rachel Schumaker'],
      abstract: 'In this study, we created a trans-synaptic, bioluminescent optogenetics approach to manipulate synaptically connected neurons. Neuronal communication mediates complex computations that underlie physiological and behavioral properties. Mapping of synaptic partners has been achieved through various methods, including GFP Reconstitution Across Synaptic Partners (GRASP). What is currently missing from the neuroscience toolkit is the ability to not only visualize but manipulate neurons that are synaptically connected. Bioluminescence-driven Optogenetics (BL-OG) is the method of harnessing a genetically encoded light source, a luciferase, to activate a light-sensing component, an opsin. In this study, BL-OG was used to create an “optical synapse” with a presynaptic light emitter and a postsynaptic light sensor to manipulate neuronal communication between synaptic partners. Various luciferase designs were tested for optimal bioluminescent emission for post-synaptic opsin activation. By utilizing an intercellular adhesion molecule, ICAM, as a scaffolding protein to help extend the light emitter across the synaptic cleft, excitatory and inhibitory opsins were able to be activated via multiple luciferases. The best performing construct developed was a bioluminescent resonance energy transfer (BRET) probe, NCS2, extended from the pre-synaptic terminal with ICAM. With the developed trans-synaptic tools, it is now possible to test specific neural circuitry <i>in vivo</i>.'
    },
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/CMU+_Logo.png',
      title: 'Developmental hyperexcitation of cortical pyramidal neurons results in disruption of E/I balance, social behavioral deficits, and repetitive behaviors',
      venue:'Thesis completed in partial fulfillment of the requirement for the degree of Doctor of Philosophy at Central Michigan University, 2019',
      authors: ['William Medendorp'],
      abstract: 'Socially isolated mice exhibit behaviors of anxiety, depression, and social disorders. Although these behaviors are well documented, no coherent study has emerged describing the associated neurological changes that accompany these behaviors. Given that prefrontal cortex dysfunction results in behavioral abnormalities similar to those found in isolated mice, it is hypothesized that isolation during adolescence alters the development of this region. Using Thy-1-GFP mice, spine density and morphology was assessed, as well as electrophysiological activity and long-term potentiation. Results indicate an immaturity among dendritic spines among single housed animals, with dendritic spines appearing smaller and thinner. Single housed mice additionally show impaired plasticity through measures of long-term potentiation. Together these suggest an altered development and impairment of the prefrontal cortex of these animals.'
    },
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/Eric_PhD_figure-min.jpg',
      title:'Restoring function after severe spinal cord injury through bioluminescence-driven optogenetics',
      venue:'Thesis completed in partial fulfillment of the requirement for the degree of Doctor of Philosophy at Central Michigan University, 2019',
      authors:['Eric D. Petersen'],
      abstract: 'The ability to manipulate specific neuronal populations of the spinal cord following spinal cord injury (SCI) could potentially prove highly beneficial for rehabilitation in patients through maintaining and strengthening still existing neuronal connections and/or facilitating the formation of new connections. A non-invasive and highly specific approach to neuronal stimulation is bioluminescent-optogenetics (BL-OG), where genetically expressed light emitting luciferases are tethered to light sensitive channelrhodopsins (luminopsins, LMO); neurons are activated by the addition of the luciferase substrate coelenterazine (CTZ).  This approach takes advantage of utilizing ion channels for current conduction while activating the channels through application of a small chemical compound, thus allowing non-invasive stimulation and recruitment of all targeted neurons. Rats were transduced in the lumbar spinal cord with AAV2/9 expressing the excitatory LMO3 under control of the human synapsin or the Homobox 9 promoter. A day after contusion injury of the thoracic spine, rats received either CTZ or vehicle every other day for 2 weeks. We found activation of either interneuron or motor neuron populations below the level of injury to significantly improve locomotor recovery. This is the first example of non-invasive activation of an optogenetic component as a potential therapy following spinal cord injury. Utilizing histological and gene expression methods to identify mechanisms underlying improvements it was determined that neuronal plasticity is the major driving force behind the functional recovery observed. These findings provide a foundation for a rational approach to spinal cord injury rehabilitation, thereby advancing approaches for functional recovery after SCI.'
    },
  ];
  export const RESEARCH_OBJECTS_POSTERS = [
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/Andreas_Bjorefeldt+_Poster_NeuroNex_Meeting_2019-min.jpg',
      title:"BRET Probes for Efficient Activation of <i>Volvox</i> Channel-rhodopsin 1 with Bioluminescent Optogenetics (BL-OG)",
      venue:'2019 NeuroNex Investigator Meeting; Chicago, IL',
      authors:[
        'A. Björefeldt, ',
        'G. G. Lambert, ',
        'M. Prakash, ',
        'C. I. Moore, ',
        'U. Hochgeschwender, ',
        'N. C. Shaner'
      ],
      abstract:'In BioLuminescent OptoGenetics (BL-OG), biological light generated by a luciferase, in presence of its substrate coelenterazine (CTZ), drives activation of a tethered optogenetic actuator (opsin). The fusion between luciferase and opsin is called a LuMinOpsin, or LMO, and enables combined opto- and chemogenetic control in a single molecule. Here we evaluate three newly developed excitatory LMOs alongside LMO3. Using different biological light emitters fused to <i>Volvox</i> Channelrhodopsin 1 (VChR1), the coupling efficiency is measured in individual cells as: CTZ-induced current amplitude / Maximum photocurrent amplitude.'
    },
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/Bjo%CC%88refeldt_Medendorp_SFN_Poster_2019_FINAL-min.jpg',
      title:'Selective behavioral and circuit deficits in adulthood following widespread postnatal excitation of neocortical pyramidal cells',
      venue:'2019 Society for Neuroscience Meeting; Chicago, IL',
      authors: [
        'A. Björefeldt, ',
        'W. E. Medendorp, ',
        'A. Pal, ',
        'M. L. Waddell, ',
        'C. I. Moore, ',
        'U. Hochgeschwender'
      ],
      abstract:'The amount and pattern of neuronal activity present during the early developmental period is believed to guide structural and functional properties of neural circuit assembly that persist into adulthood. Thus, alterations in neuronal activity during this time period may lead to aberrant circuit formation, a mechanism that has been implicated in certain psychiatric disorders such as autism. Here we took advantage of a bimodal experimental approach, bioluminescence-driven optogenetics, to assess the impact of cortical pyramidal cell hyperexcitation during this critical time period. To enable manipulation of cortical pyramidal cell activity during development, mice expressing the excitatory luciferase-opsin fusion LMO3 (sbGluc fused to VChR1) under a Lox-Stop-Lox sequence were crossed with Emx1-Cre mice. In presence of the luciferase substrate coelenterazine (CTZ), light emission from sbGluc drives activation of VChR1 to depolarize the cell and evoke action potential firing. CTZ was delivered intraperitoneally once a day during post-natal days 4-14 in developing mouse pups. Starting at postnatal day 50 (P50), mice that received either CTZ or vehicle treatment during development were tested in a number of behavioral paradigms and effects on morphological and electrophysiological properties were examined. Behavioral testing revealed that CTZ-treated Emx1-Cre/LSL-LMO3 mice display adult behavioral phenotypes similar to those observed in existing animal models of autism. Taking advantage of the option to interrogate the same LMO3-expressing neurons using optogenetics in <i>in vivo</i> and <i>ex vivo</i> electrophysiological recordings from cortex, these animals showed evidence of neurophysiological alterations in the form of altered neuronal network oscillations, excitation-inhibition balance and intrinsic excitability. In conclusion, we leveraged the advantage of a dual chemo- and optogenetic approach to study the impact of neuronal activity during early development on adult neurophysiology and behavior that could aid investigation of pathophysiological mechanisms underlying psychiatric disorders such as autism.'
    },
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/SFN_2019_Dmitrijs_final-min.jpg',
      title:'Miniaturized devices for bioluminescence imaging of brain and spinal cord',
      venue:"2019 Society for Neuroscience Meeting; 2019 NeuroNex Investigator Meeting; Chicago, IL",
      authors: [
        'D. Celinskis, ',
        'M. Gomez-Ramirez, ',
        'D. A. Borton, ',
        'C. I. Moore'
      ],
      abstract:'Over recent years miniature microscopes have become a key tool for <i>in vivo</i> free behavioral studies. This technology offers the ability to measure network dynamics underlying naturalistic animal behaviors by tracking fluorescent activity of genetically encoded calcium indicators. However, these indicators suffer from autofluorescence artifacts, phototoxicity and photobleaching effects, limiting chronic animal studies. These limitations can be overcome by the use of bioluminescent indicators, which offer a lower biological noise floor and do not employ external light delivery. While often significantly higher in signal-to-noise ratio, the overall lower signal intensity of luciferase output is a challenge. As such, imaging calcium or other cofactor-dependent bioluminescent indicators requires minimization of emission light losses, and optimization of the imaging sensor’s sensitivity. Here, we demonstrate a modified version of the open-source UCLA miniscope for bioluminescence imaging. The removal of excitation light optics reduces the number of assembly components by ~60%, and weight by ~20%. The reduction in components and the use of high-resolution stereolitographic (SLA) 3D printing also provides significant flexibility for the optical path design optimization to reduce the photon loss, to add complementary functions such as electrical stimulation or recording, and to adapt the microscope for imaging other parts of the body such as the spinal cord. The studies employing miniature microscopes to date have been primarily focused on brain imaging and existing designs have not been optimized for chronic use to image the spinal cord. Key challenges remain when imaging the spinal cord, in particular significant movement artifact. Here, we will also describe an implant design for attaching the miniature microscope to the spinal cord, and demonstrate the adaptation of motion correction algorithms for spinal cord imaging applications. We are currently validating the above described innovations by demonstrating bioluminescence imaging in the spinal cord of the mouse. A major goal of our project is to expand the utility of open-source miniature microscopes to new avenues of scientific inquiry (e.g., spinal cord imaging). As part of the technology sharing objectives of this NSF Bioluminescence Hub, all designs presented here are available online for use by all members of the scientific community.'
    },
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
      title:'Bioluminescence driven control of photosensory proteins',
      venue:'2019 Society for Neuroscience Meeting; Chicago, IL',
      authors: [
        'E. L. Crespo, ',
        'G. Lambert, ',
        'N. C. Shaner, ',
        'U. Hochgeschwender'
      ],
      abstract: 'Bioluminescence is light emitted by a luciferase oxidizing its substrate. We previously demonstrated that such “biological” light can activate optogenetic elements, such as channelrhodopsins and pumps, effecting membrane potential changes and resulting in activation or silencing of neurons <i>in vitro</i> and <i>in vivo</i>. We explored whether bioluminescent light production can be utilized beyond activating ion-moving photoreceptors to the larger array of photosensory proteins employed as optical switches in cellular processes such as protein translocation and transcription. In initial proof-of-concept experiments we co-transfected HEK293 cells with a blue light emitting luciferase and a blue light sensing photoreceptor. Light emitters were sbGLuc, a copepod luciferase variant, NanoLuc, a luciferase derived from shrimp, as well as two novel engineered synthetic luciferases. Photoreceptors were CRY/CIB, a light-gated dimerization system, and LOV, based on light dependent protein unhinging. Bioluminescence driven activation of these photoreceptors was measured as increased transcription of luminescent and fluorescent reporter proteins in direct comparison to LED driven activation. Quantification of bioluminescence driven photoreceptor activation revealed that both light-gated switches, cryptochrome protein dimerization and light-oxygen-voltage J-alpha helix unfolding can be efficiently activated by biological light sources. Furthermore, the higher light emission of our synthetic luciferases resulted in better activation of transcription. There are many ways to improve further on these basic results. Collectively, bioluminescence driven activation of the larger families of photoreceptors will expand their use for <i>in vivo</i> applications that benefit from non-invasive light sources and engagement of spatially distributed cells.'
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Nina+Friedman+NeuroNex+2019+poster+final-min.jpg',
      title: 'A bright new luciferase driven by intravenous and intraperitoneal injection',
      venue: '2019 NeuroNex Investigator Meeting; Chicago, IL',
      authors: [
        'N. Friedman, ',
        'J. Murphy, ',
        'E. Klein, ',
        'M. Gomez-Ramirez, ',
        'G. Lambert, ',
        'U. Hochgeschwender, ',
        'N. Shaner, ',
        'C. I. Moore'
      ],
      abstract: 'BioLuminescent-OptoGenetic molecules for driving and imaging neural activity have a number of advantages <i>in vivo</i>. In this approach, genetically expressed luciferases bind with injected luciferins to produce cold light. The photons bind to localized to genetically expressed optogenetic and calcium indicating molecules. One benefit of this approach is widespread, genetically-targeted, non-invasive neural activation or read-out through peripheral injection of the luciferin. In past studies, luminescence has been seen through the skull after peripheral injection at low spatial and temporal resolutions. In somatosensory cortex neurons, we expressed NCS-2, a noved bright luciferase composed of mNeonGreen tethered to ekL9H, a shrimp-based luciferase variant. We injected our luciferin, h-CTZ, intraperitoneally(IP) and intravenously(IV) through the lateral tail vein, imaging at a high spatial resolution and quantifying the time course of luciferase activation. We observed a stronger peak activation of NCS2 when h-CTZ was injected IV, and a longer activation when h-CTZ was injected IP. These results show that both IV and IP delivery of h-CTZ can drive robust bioluminescence in cortical neurons.'
    },
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/Griffin_Kendziorski_2019_SFN_Poster-thumbnail-min.jpg',
      title:'Non-invasive optogenetic stimulation in a rat model of spinal cord injury',
      venue:'2019 Society for Neuroscience Meeting; Chicago, IL',
      authors: [
        'G. Kendziorski, ',
        'E. D. Petersen, ',
        'L. Shafau, ',
        'M. Prakash, ',
        'U. Hochgeschwender'
      ],
      abstract: 'The ability to manipulate specific neuronal populations of the spinal cord following spinal cord injury (SCI) could potentially prove highly beneficial for rehabilitation in patients through maintaining and strengthening still existing neuronal connections and/or facilitating the formation of new connections. A non-invasive and highly specific approach to neuronal stimulation is bioluminescent-optogenetics, where genetically expressed light emitting luciferases are tethered to light sensitive channelrhodopsins (luminopsins, LMO); neurons are activated by the addition of the luciferase substrate coelenterazine (CTZ). This approach takes advantage of utilizing ion channels for current conduction while activating the channels through application of a small chemical compound, thus allowing non-invasive stimulation and recruitment of all targeted neurons. We previously showed the efficacy of this approach in improving locomotor recovery following severe spinal cord injury in rats expressing the excitatory LMO3 under control of a pan-neuronal and motor neuron specific promoter; CTZ was applied through a lateral ventricle cannula. Here we transduced spinal cord neurons with a synapsin-driven step function LMO, SFLMO(CS). In this construct the Gaussia luciferase variant sbGLuc is fused to the step function opsin ChR2(CS). As SFOs are significantly more light sensitive than other opsins, we stimulated transduced lumbar neurons by intraperitoneal application of CTZ, allowing for a less invasive treatment.'
    },
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/Koksharov_Poster-NeuroNex-Workshop-2019-min.jpg',
      title:'Bioluminescent sensing of intracellular calcium at calcium channels',
      venue: '2019 NeuroNex Investigator Meeting; Chicago, IL',
      authors: [
        'M. Koksharov, ',
        'S. Gratz, ',
        "K. O'Connor-Giles, ",
        'D. Lipscombe, ',
        'C. I. Moore'
      ],
      abstract:'Bioluminescent sensors of intracellular calcium offer a number of advantages <i>in vitro</i> and <i>in vivo</i>. Calcium-sensing luciferases can be further tethered to specific voltage-gated Ca channels to sense calcium in specific neural microdomains and to potentially enable activity-dependent cell-cell communication through post-synaptic optogenetic elements. We discuss the ongoing work on sensor design and their implementation in cultured cells and <i>in vivo</i> in <i>Drosophila</i> flies.'
    },
    {
      imgSrc:'https://bl-hub.s3.amazonaws.com/research-objects/Literman_SfN_2019-min.jpg',
      title: 'Building a bioluminescent and optogenetic learning community through immersive outreach experiences',
      venue: "2019 Society for Neuroscience Meeting; 2019 NeuroNex Investigator Meeting; Chicago, IL",
      authors: [
        'K. R. Literman, ',
        'J. J. Allen, ',
        'D. Lipscombe, ',
        'U. Hochgeschwender, ',
        'N. C. Shaner, ',
        'C. I. Moore'
      ],
      abstract:'The Bioluminescence Hub, a National Science Foundation NeuroNex Technology Hub, is dedicated both to the development of novel bioluminescent and optogenetic tools and to the broad dissemination of those tools and the scientific concepts underlying their development. We are committed to education at all levels: the general public, grade and high school, undergraduate, and postgraduate. At the public and K-12 levels, we introduce participants to living bioluminescent organisms and leverage the captivating nature of these organisms to illustrate how these natural lights can illuminate the path toward discovery. In addition to mentoring undergraduate interns at each of our three partner universities, our Hub hosts an annual Undergraduate Practicum at the Marine Biological Laboratory in Woods Hole, MA, an immersive experience where students from around the country meet for lectures, hands-on laboratory experiments and demonstrations, and hone team science skills through a technology venture proposal competition. Our postgraduate training is twofold: we maximize the accessibility and utility of our tools by hosting training Workshops and sending research Emissaries to interested laboratories. In addition to providing recipient laboratories new ways to pursue their research questions, these activities provide our postgraduate team members with the opportunity to serve as educators. By tailoring unique and immersive outreach and education experiences for audiences across learning levels, the Bioluminescence Hub is building a large and diverse community that understands the innovation potential of bioluminescence- and optogenetics-based research.'
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Jeremy_Murphy_SFN_2019_POSTER-min.jpg',
      title:'Cell-Target Specific BioLuminescent-OptoGenetic Synaptic Signaling in vivo: BioLumInescent Trans-Emitters (B-LiTE)',
      venue:'2019 Society for Neuroscience Meeting; 2019 NeuroNex Investigator Meeting; Chicago, IL',
      authors: [
        'J. W. Murphy, ',
        'N. G. Friedman, ',
        'M. Prakash, ',
        'D. Celinskis, ',
        'R. St. Laurent, ',
        'D. Lipscombe, ',
        'N. C. Shaner, ',
        'U. Hochgeschwender, ',
        'C. I. Moore'
      ],
      abstract:'Fluorescence-based optogenetic tools are powerful methods for dissecting cell-type specific circuit dynamics in the nervous system. These tools, however, rely on external, generic modification of cellular excitability rather than on the intrinsic inputs a given cell receives from synaptically coupled afferents. Here we present a tool developed by our group to selectively regulate the impact of afferents on a specific subset of their targets, and only when these afferents are active. Our tool targets bioluminescent enzymes to presynaptic vesicles and optogenetic elements to postsynaptic membranes. When the presynaptic cell releases the enzyme containing vesicles into the synaptic cleft, in the presence of the corresponding bioluminescent substrate, light is produced causing a conformational change in the optogenetic element on the postsynaptic side. We call these optical synapses BioLumInescent Tran-Emitters (B-LiTE). Here we present preliminary data demonstrating that B-LiTE is a viable tool for regulating cell-type specific activity using the intrinsic activity of a pre-synaptic afferents <i>in vivo</i>.'
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Mansi+NeuroNex+2019+Poster-min.jpg',
      title: 'Interluminescence: Trans-Synaptic Modulation through BioLuminescent OptoGenetics',
      venue: '2019 NeuroNex Investigator Meeting; Chicago, IL',
      authors: [
        'M. Prakash, ',
        'R. St. Laurent, ',
        'A. Pal, ',
        'K. M. Riselay, ',
        'Y. Bhagat, ',
        'A. Björefeldt, ',
        'B. W. Connors, ',
        'D. Lipscombe, ',
        'J. A. Kauer, ',
        'C. I. Moore, ',
        'U. Hochgeschwender'
      ],
      abstract:'In BioLuminescent OptoGenetics (BL-OG), the light sensing opsin, such as a channelrhodopsin or a pump, is activated by biological light emitted from a luciferase that emits photons upon application of a luciferin, a small molecule substrate. When light emitter and sensor are tethered, as in luciferase-opsin fusion proteins (luminopsin, LMO), membrane potential changes occur in the cell expressing the LMO. BL-OG is not limited, in concept, to single cell (intra-luminescent) applications. As both light emitter and light sensor are genetically encoded, they can be expressed separately, including in separate cells. Thus, light may be transmitted between cells to drive an effect (inter-luminescence), a form of optical communication. Here, we show experiments where we co-cultured cortical neurons expressing the luciferase with hippocampal/striatal neurons expressing the opsin, with the goal of investigating BL-OG effects across synapses between these neuronal populations, thus testing the feasibility of an optical synapse.'
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Rachel_Schumaker_Chicago_SfN_2019-min.jpg',
      title: "Transsynaptic neuronal activation <i>via</i> bioluminescent optogenetics",
      venue: '2019 Society for Neuroscience Meeting; Chicago, IL',
      authors: [
        'R. Schumaker, ',
        'M. Prakash, ',
        'A. Pal, ',
        'E. Crespo, ',
        'U. Hochgeschwender'
      ],
      abstract: 'Biological light activation of optogenetic sensors across synaptic partners offers the potential to optogenetically dissect synaptic communication non-invasively. The genetically encoded light source, a luciferase, is expressed pre-synaptically, and the light-sensing opsin is expressed post-synaptically. In the presence of the luciferase substrate, coelenterazine (CTZ), the pre- and post-synaptic partners will be in close proximity to allow activation of the opsin by luciferase-produced light. In order to improve the specificity of trans-synaptic signaling, we are exploring several designs of trans-synaptic reconstitution of split molecules. First, <i>Gaussia</i> luciferase (GLuc) is split into inactive N- and C-terminal portions, each of which are then tethered to the pre-synaptic membrane or post-synaptic opsin, respectively. Second, in a luciferase-fluorescent protein fusion construct the fluorescent protein is split such that resonance energy transfer from the luciferase and subsequent light emission for opsin activation only occurs in the presence of CTZ in synapses allowing reconstitution of the fluorescent protein. Experiments are carried out in HEK cells and cultured primary neurons.'
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
            'E. D. Petersen, ',
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
        'E. D. Petersen, ',
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
    imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Mansi+SfN+2017+Poster+BL-OG-min.jpg',
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
