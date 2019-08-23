export const RESEARCH_OBJECTS = [
    {
        imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Pal-et-al.-SfN-2018-small-min.jpg', //use low-res or small images for unpublished work; link journal articles to journal webpages
        title: 'A multifunctional bioluminescent calcium indicator ', //This is the title of the work
        venue: '2018 Society for Neuroscience Meeting, San Diego, CA', //This is the meeting or journal name, e.g., SfN, Journal of Neuroscience
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
        ], //Remember to put a comma and space at the end of the leading authors' names; not needed for the last author.
        abstract: 'Bioluminescent Ca2+ sensors have distinct advantages over fluorescent Ca2+ indicators; first and foremost they function without external illumination. Rather, they produce light in the presence of Ca2+ and of a luciferase substrate, a feature that can be exploited for combining Ca2+ sensing with optogenetic applications. We developed a bioluminescent Ca2+ indicator, Lumicampsin (LMC) that employs a split, mutated <i>Gaussia</i> luciferase (sbGluc) with a CaM-M13 calcium sensing moiety introduced between the two split halves. To date we have several versions of LMC with varying sensitivities to Ca2+ by using different, pre-established CaM-M13s (from GCaMP6f, GCaMP6m, GCaMP6s, etc.). In order to investigate subcellular Ca2+ dynamics, we have fitted the LMC with various organelle localizing sequences that effectively shuttles it to the organelles of interest (ER, Mitochondria and Golgi apparatus). The superior light emission from LMC, capable of producing a delta RLU/RLUo of around 200% <i>in vitro</i>, has motivated us to explore activity dependent neuronal modulation by co-expressing LMCs with various optogenetic elements in primary neuronal cultures. We are currently optimizing conditions to achieve reliable and efficient coupling of Ca2+-induced light production and optogenetic effector activation.',
        //Include an abstract or short description of the work
    },
    {
        imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/PrakashNeuroNex2018-small-min.jpg',
        title: 'Bioluminescence driven optogenetics for investigating functional synaptic communication across co-cultured neuronal networks on multi-electrode arrays',
        venue: '2018 Society for Neuroscience Meeting, San Diego, CA',
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
        venue: '2018 Society for Neuroscience Meeting, San Diego, CA',
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
      venue: '2018 Society for Neuroscience Meeting, San Diego, CA',
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
      venue: '2018 Society for Neuroscience Meeting, San Diego, CA',
      authors: [
        'M. Gomez-Ramirez, ',
        'J. W. Murphy, ',
        'A. I. More, ',
        'A. Pal, ',
        'D. Lipscombe, ',
        'U. Hochgeschwender, ',
        'C. I. Moore'
      ],
      abstract: 'Fluorescence imaging with genetically-encoded calcium indicators, such as GCaMP, has provided fundamental insights into the role of cell-specific populations in neural coding and perception. Recent advances and pragmatic advantages have made 1-photon imaging a viable strategy for interrogating activity within and across large-scale neural populations. Yet, a limitation of fluorescence imaging is that the technique requires a light source to excite fluorescent proteins. This light creates artifacts that may lead to a reduction in the signal to noise ratio (SNR) of the image. Noise artifacts from the excitation light include: (1) Autofluorescence, (2) Photon scattering from the incoming light, and (3) Photobleaching. As an alternative to fluorescent imaging, we are developing calcium-dependent genetically-encoded molecules using bioluminescent probes. Bioluminescence is chemically generated light that occurs when a photon-containing molecule (luciferin) is catalyzed by a photoenzyme (luciferase). Bioluminescence does not require light excitation and creates very little thermal reaction, thus substantially reducing noise related to autofluoresence, photon-scattering, and photobleaching. Our calcium-dependent bioluminescent molecule, Lumicampsin-4 (LMC4), is a split variant of the slow-burn Gaussia luciferase (sb-GLuc). The two elements are joined by the Ca2+-sensing peptide CaM-M13, thereby providing activity detection. Here, we tested the efficacy of LMC4 to track neural dynamics in mouse somatosensory cortex. To date, we have found that CTZ and a Ca2+ driver (NMDA or L-Glutamic Acid) generate robust bioluminescence signals restricted to the area neighboring the injection pipette. In addition, pilot experiments show that vibrissae deflection generates LMC4-mediated bioluminescence in primary somatosensory neocortex. A key future direction will be to assay the reliability of imaging neural activity across multiple areas using LMC4 while animals engage in perceptual tasks.',
    },
    {
      imgSrc: 'https://bl-hub.s3.amazonaws.com/research-objects/Brain-key-terms-fig-min.jpg',
      title: 'Bioluminescent optogenetics activation of transplanted neural precursor cells improves motor deficits in a Parkinson disease mouse model',
      venue: '2017 Society for Neuroscience Meeting, Washington, DC',
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
      venue: '2017 Society for Neuroscience Meeting, Washington, DC',
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
    venue: '2017 Society for Neuroscience Meeting, Washington, DC',
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
    venue: '2017 Society for Neuroscience Meeting, Washington, DC',
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
  ];
