// Additional dynasties data — to be merged with main dynasties.js
// Contains: Shunga, Satavahana, Kushan, Pallava, Chalukya, Rashtrakuta, Hoysala, Kakatiya, Pala, Pandya, Sikh

export const EXPANDED_DYNASTIES = {
    'shunga': {
        id: 'shunga', name: 'Shunga Dynasty', era: 'ancient',
        period: '185 BCE – 73 BCE', color: '#C084FC',
        founded: 'Pushyamitra Shunga', capital: 'Pataliputra / Vidisha',
        overview: 'The Shunga dynasty succeeded the Maurya Empire after the assassination of Brihadratha by Pushyamitra Shunga. They revived Brahmanical traditions and patronized art and architecture. The Bharhut and Sanchi stupas were significantly expanded during their rule. Despite being Brahmanical rulers, they did not destroy Buddhism — Buddhist art flourished.',
        legacy: ['Bharhut Stupa sculptural panels', 'Sanchi Stupa toranas (gateways)', 'Revival of Brahmanical traditions', 'Patanjali\'s Mahabhashya composed', 'Heliodorus Pillar at Vidisha', 'Greek–Shunga cultural exchange'],
        decline: 'The last Shunga ruler Devabhuti was assassinated by his minister Vasudeva Kanva in 73 BCE, establishing the Kanva dynasty.',
        rulers: [
            {
                name: 'Pushyamitra Shunga', period: '185–149 BCE', title: 'Founder & Brahmanical Revivalist',
                coronation: 'Assassinated the last Mauryan emperor Brihadratha during a military review and seized the throne.',
                bio: 'A Brahmin general who overthrew the last Mauryan emperor and re-established Brahmanical supremacy. He performed two Ashvamedha ceremonies to assert his sovereignty. He successfully defended India against the Greco-Bactrian invasions of Menander I. He patronized Sanskrit learning — Patanjali composed his Mahabhashya during his reign.',
                death: 'Died around 149 BCE, likely of natural causes.',
                achievements: ['Overthrew Mauryan dynasty', 'Performed Ashvamedha sacrifices', 'Repelled Greco-Bactrian invasions', 'Patronized Sanskrit scholarship'],
                wars: ['War against Greeks (Menander I)', 'Conquest of Vidarbha'],
                conquests: [{ title: 'Repulsion of Greek Invasion (~180 BCE)', desc: 'Successfully defended Pataliputra against the Greco-Bactrian king Demetrius/Menander.' }],
                coins: [{ name: 'Cast copper coins', desc: 'Simple cast copper coins with Brahmi legends and Hindu symbols' }],
                constructions: [
                    { name: 'Bharhut Stupa expansion', desc: 'Major expansion and sculptural decoration of the Bharhut Stupa with jataka tale panels' },
                    { name: 'Sanchi Stupa restoration', desc: 'Enlarged the original Sanchi Stupa to double its size and added stone railings' }
                ],
                events: [
                    { year: '185 BCE', text: 'Assassinated Brihadratha Maurya; founded Shunga dynasty' },
                    { year: '~180 BCE', text: 'Repelled Greco-Bactrian invasion; defended Pataliputra' },
                    { year: '~175 BCE', text: 'Performed two Ashvamedha sacrifices' },
                    { year: '~150 BCE', text: 'Patanjali composed Mahabhashya on Sanskrit grammar' }
                ]
            }
        ]
    },

    'satavahana': {
        id: 'satavahana', name: 'Satavahana Dynasty', era: 'ancient',
        period: '230 BCE – 220 CE', color: '#F97316',
        founded: 'Simuka', capital: 'Pratishthana (Paithan) / Amaravati',
        overview: 'The Satavahanas were one of the most powerful dynasties of ancient India, ruling the Deccan for over 400 years. They controlled vital trade routes and patronized both Sanskrit and Prakrit. The Amaravati Stupa and early Ajanta Caves belong to this period.',
        legacy: ['Amaravati Stupa — finest Buddhist sculpture', 'Ajanta Caves (early phase)', 'First rulers to issue portrait coins in India', 'Bridge between North & South Indian cultures', 'International trade with Rome'],
        decline: 'The dynasty fragmented in the 3rd century CE.',
        rulers: [
            {
                name: 'Gautamiputra Satakarni', period: '78–102 CE', title: 'Greatest Satavahana Emperor',
                coronation: 'Restored Satavahana power after the Shakas conquered western India.',
                bio: 'The greatest Satavahana ruler who destroyed the Shaka king Nahapana around 78 CE. He called himself "the uprooter of the Shakas, Yavanas, and Pahlavas." His mother\'s Nasik inscription praises him as the restorer of dynasty glory. He controlled both western and eastern ports, dominating the Indo-Roman trade.',
                death: 'Died around 102 CE.',
                achievements: ['Destroyed Shaka power', 'Coast-to-coast empire', 'Controlled Indo-Roman trade routes'],
                wars: ['Destruction of Shaka Nahapana'],
                conquests: [{ title: 'Destruction of Shaka Nahapana (~78 CE)', desc: 'Decisively defeated and killed Nahapana, over-striking his silver coins and reclaiming the western Deccan.' }],
                coins: [
                    { name: 'Over-struck Nahapana coins', desc: 'Re-struck Nahapana\'s silver coins with his own name — a political statement of conquest' },
                    { name: 'Lead coins with ship motifs', desc: 'Lead coins depicting a ship with two masts — reflecting maritime trade dominance' }
                ],
                constructions: [
                    { name: 'Nasik Caves (Cave 3)', desc: 'Patronized Buddhist cave monasteries at Nasik — the inscription by his mother Gautami Balashri is preserved here' },
                    { name: 'Karla Caves patronage', desc: 'The magnificent Karla Chaitya hall, one of the largest rock-cut Buddhist prayer halls in India' }
                ],
                events: [
                    { year: '~78 CE', text: 'Defeated and killed Shaka Kshatrapa Nahapana' },
                    { year: '~85 CE', text: 'Restored Satavahana rule from coast to coast' },
                    { year: '102 CE', text: 'Death of Gautamiputra; succeeded by Vasishthiputra Pulumayi' }
                ]
            }
        ]
    },

    'kushan': {
        id: 'kushan', name: 'Kushan Empire', era: 'ancient',
        period: '30 CE – 375 CE', color: '#EC4899',
        founded: 'Kujula Kadphises', capital: 'Purushapura (Peshawar) / Mathura',
        overview: 'The Kushan Empire was one of the four great empires of the ancient world. Under Kanishka, it stretched from Central Asia through Afghanistan to the Gangetic plain. The Kushans created the Gandhara school of art (first Buddhist images) and facilitated the Silk Road trade between Rome and China.',
        legacy: ['Gandhara School — first Buddha images', 'Mathura School of Art', 'Silk Road trade facilitation', 'Spread of Mahayana Buddhism', 'Gold coins with highest purity in ancient world', 'Fourth Buddhist Council'],
        decline: 'Fragmented under Sassanid Persian and Gupta pressure.',
        rulers: [
            {
                name: 'Kanishka the Great', period: '127–150 CE', title: 'Patron of Buddhism & the Arts',
                coronation: 'Ascended the Kushan throne around 127 CE.',
                bio: 'The greatest Kushan emperor. He convened the Fourth Buddhist Council in Kashmir, systematizing Mahayana Buddhist texts. Under his patronage, the Gandhara school created Greco-Buddhist sculptures depicting the Buddha in human form for the first time. His empire was a crucial Silk Road link connecting Roman, Chinese, Indian, and Persian civilizations.',
                death: 'Killed by his own soldiers exhausted by constant campaigns.',
                achievements: ['Fourth Buddhist Council in Kashmir', 'Patronized Gandhara & Mathura art', 'First Buddha images in human form', 'Gold coins of exceptional quality'],
                wars: ['Conquest of Kashmir', 'Campaigns in the Gangetic plain'],
                conquests: [{ title: 'Conquest of Kashmir & northern plains', desc: 'Extended Kushan control into Kashmir and the upper Gangetic plain including Pataliputra.' }],
                coins: [
                    { name: 'Gold dinars', desc: 'Exceptionally pure gold coins (98%+ purity) depicting Kanishka in royal dress — among the finest gold coins of the ancient world' },
                    { name: 'Buddha coin', desc: 'First coin in history to depict the Buddha — a standing Buddha with Greek legend "BODDO"' }
                ],
                constructions: [
                    { name: 'Kanishka Stupa', desc: 'Built the great stupa at Peshawar — reportedly 400 feet tall, described by Xuanzang as one of the world\'s greatest structures' },
                    { name: 'Gandhara monasteries', desc: 'Patronized hundreds of Buddhist monasteries where magnificent Greco-Buddhist sculptures were created' }
                ],
                events: [
                    { year: '~127 CE', text: 'Ascended the Kushan throne' },
                    { year: '~130 CE', text: 'Convened Fourth Buddhist Council in Kashmir' },
                    { year: '~135 CE', text: 'Gandhara art reached its zenith — first Buddha images in human form' },
                    { year: '~150 CE', text: 'Killed by his own soldiers during a campaign' }
                ]
            }
        ]
    },

    'pallava': {
        id: 'pallava', name: 'Pallava Dynasty', era: 'medieval',
        period: '275 CE – 897 CE', color: '#14B8A6',
        founded: 'Simhavishnu (Imperial line)', capital: 'Kanchipuram',
        overview: 'The Pallavas were pioneers of Dravidian temple architecture, creating the Shore Temple and rock-cut monuments at Mahabalipuram (UNESCO). Their architectural innovations laid the foundation for later Chola and Vijayanagara styles.',
        legacy: ['Shore Temple, Mahabalipuram (UNESCO)', 'Five Rathas', 'Descent of the Ganges bas-relief', 'Pioneer of Dravidian temple architecture', 'Pallava Grantha script'],
        decline: 'Overthrown by Chola king Aditya I around 897 CE.',
        rulers: [
            {
                name: 'Narasimhavarman I (Mamalla)', period: '630–668 CE', title: 'Mahamalla (Great Wrestler)',
                coronation: 'Succeeded his father Mahendravarman I, swearing to avenge his defeat by Pulakeshin II.',
                bio: 'The greatest Pallava king. He achieved one of the most dramatic revenges in Indian history — defeating and killing Chalukya emperor Pulakeshin II in 642 CE and sacking Vatapi (Badami). He commissioned the rock-cut monuments at Mahabalipuram including the Five Rathas and Descent of the Ganges. He also sent naval expeditions to Sri Lanka.',
                death: 'Died around 668 CE. Mahabalipuram is named after him (Mamallapuram).',
                achievements: ['Defeated and killed Pulakeshin II', 'Sacked Vatapi (Badami)', 'Commissioned Mahabalipuram monuments', 'Naval expeditions to Sri Lanka'],
                wars: ['Three invasions of Chalukya territory', 'Naval expeditions to Sri Lanka'],
                conquests: [{ title: 'Sack of Vatapi (642 CE)', desc: 'Defeated and killed Chalukya emperor Pulakeshin II — one of the most dramatic military victories in South Indian history.' }],
                coins: [{ name: 'Gold coins with lion motif', desc: 'Gold coins featuring a seated lion — the Pallava emblem' }],
                constructions: [
                    { name: 'Five Rathas (Pancha Rathas)', desc: 'Five monolithic rock-cut temples at Mahabalipuram, each carved from a single granite boulder' },
                    { name: 'Descent of the Ganges', desc: 'One of the largest open-air rock reliefs in the world (27m × 9m)' }
                ],
                events: [
                    { year: '630 CE', text: 'Ascended the throne' },
                    { year: '642 CE', text: 'Defeated and killed Chalukya emperor Pulakeshin II; sacked Vatapi' },
                    { year: '~650 CE', text: 'Commissioned Five Rathas and Descent of the Ganges at Mahabalipuram' }
                ]
            },
            {
                name: 'Narasimhavarman II (Rajasimha)', period: '700–728 CE', title: 'Rajasimha (Lion Among Kings)',
                coronation: 'Ascended peacefully. Known as a great builder rather than warrior.',
                bio: 'The greatest Pallava builder-king. He built the Shore Temple at Mahabalipuram (UNESCO) and the Kailasanatha Temple at Kanchipuram. His architectural innovations became the foundation of all later Dravidian temple architecture.',
                death: 'Died around 728 CE.',
                achievements: ['Built Shore Temple (UNESCO)', 'Built Kailasanatha Temple', 'Pioneer of structural Dravidian temples'],
                wars: [],
                conquests: [],
                coins: [{ name: 'Gold coins with Shiva motif', desc: 'Gold coins depicting Shiva as Nataraja' }],
                constructions: [
                    { name: 'Shore Temple, Mahabalipuram', desc: 'One of the oldest structural stone temples in South India — UNESCO World Heritage Site standing on the Bay of Bengal shore' },
                    { name: 'Kailasanatha Temple, Kanchipuram', desc: 'The architectural blueprint for all subsequent Dravidian temples, with 58 sub-shrines around the main sanctum' }
                ],
                events: [
                    { year: '700 CE', text: 'Ascended the throne; began building program' },
                    { year: '~710 CE', text: 'Shore Temple construction begun' },
                    { year: '~720 CE', text: 'Kailasanatha Temple completed' }
                ]
            }
        ]
    },

    'chalukya': {
        id: 'chalukya', name: 'Chalukya Dynasty (Badami)', era: 'medieval',
        period: '543 CE – 757 CE', color: '#EAB308',
        founded: 'Pulakeshin I', capital: 'Vatapi (Badami)',
        overview: 'The Badami Chalukyas controlled the Deccan plateau. Under Pulakeshin II, they defeated the mighty Harsha of Kanauj. Aihole is called the "cradle of Indian temple architecture," and the Pattadakal temples are a UNESCO World Heritage Site.',
        legacy: ['Aihole — Cradle of temple architecture', 'Pattadakal temples (UNESCO)', 'Badami cave temples', 'Defeated Emperor Harsha', 'Vesara architectural style'],
        decline: 'Overthrown by feudatory Dantidurga of the Rashtrakuta dynasty in 757 CE.',
        rulers: [
            {
                name: 'Pulakeshin II', period: '610–642 CE', title: 'Greatest Chalukya Emperor',
                coronation: 'Seized the throne from his uncle Mangalesha after civil war.',
                bio: 'The most famous Chalukya king. His defeat of Emperor Harsha on the Narmada river (~618 CE) prevented Harsha from extending his empire south. Xuanzang visited his court and described a powerful kingdom. He sent an embassy to Sassanid Persia. He was killed by Pallava Narasimhavarman I in 642 CE.',
                death: 'Defeated and killed by Pallava Narasimhavarman I when the Pallavas sacked Vatapi in 642 CE.',
                achievements: ['Defeated Emperor Harsha on the Narmada', 'Embassy exchange with Sassanid Persia', 'Xuanzang praised his kingdom'],
                wars: ['Battle of Narmada vs Harsha', 'Killed by Narasimhavarman I (642 CE)'],
                conquests: [{ title: 'Defeat of Emperor Harsha (~618 CE)', desc: 'The Battle of Narmada — stopped Harsha from crossing into the Deccan, preserving South Indian independence.' }],
                coins: [{ name: 'Gold pagoda with boar emblem', desc: 'Gold coins with the Varaha (boar) emblem — sacred symbol of the Chalukyas' }],
                constructions: [
                    { name: 'Badami Cave Temples', desc: 'Four magnificent rock-cut cave temples at Badami — Hindu and Jain caves with elaborate sculptural panels' },
                    { name: 'Aihole temples', desc: 'Patronized over 125 temples in various experimental styles — the cradle of Indian temple architecture' },
                    { name: 'Pattadakal temple complex', desc: 'Patronized early phases of this UNESCO World Heritage Site' }
                ],
                events: [
                    { year: '~610 CE', text: 'Seized the throne after civil war' },
                    { year: '~618 CE', text: 'Defeated Emperor Harsha on the Narmada' },
                    { year: '~630 CE', text: 'Xuanzang visited Vatapi' },
                    { year: '642 CE', text: 'Defeated and killed by Pallava Narasimhavarman I' }
                ]
            }
        ]
    },

    'rashtrakuta': {
        id: 'rashtrakuta', name: 'Rashtrakuta Empire', era: 'medieval',
        period: '753 CE – 982 CE', color: '#A855F7',
        founded: 'Dantidurga', capital: 'Manyakheta (Malkhed)',
        overview: 'The Rashtrakutas dominated the Deccan for 200+ years. Arab travelers described them as one of the four greatest empires of the world. The Kailasa Temple at Ellora, carved from a single massive rock, is the greatest monolithic structure ever created.',
        legacy: ['Kailasa Temple, Ellora (UNESCO)', 'One of world\'s four greatest powers', 'Kannada literary tradition', 'Patronized Jainism', 'Elephanta Caves'],
        decline: 'Overthrown by Western Chalukya king Tailapa II in 982 CE.',
        rulers: [
            {
                name: 'Krishna I', period: '756–773 CE', title: 'Builder of the Kailasa Temple',
                coronation: 'Succeeded his brother Dantidurga.',
                bio: 'Commissioned the awe-inspiring Kailasa Temple at Ellora — the world\'s largest monolithic rock-cut temple. Carved from the top down from a single basalt cliff, removing an estimated 200,000 tons of rock. Represents Mount Kailasa, abode of Lord Shiva.',
                death: 'Died around 773 CE.',
                achievements: ['Commissioned Kailasa Temple at Ellora', 'One of the greatest patrons of Indian architecture'],
                wars: ['Campaigns against Vengi Chalukyas'],
                conquests: [],
                coins: [{ name: 'Gold gadyana', desc: 'Gold coins with Garuda emblem and Kannada legends' }],
                constructions: [{ name: 'Kailasa Temple, Ellora', desc: 'World\'s largest monolithic rock-cut temple — 200,000 tons of rock removed. UNESCO World Heritage Site.' }],
                events: [
                    { year: '756 CE', text: 'Ascended the Rashtrakuta throne' },
                    { year: '~757-773 CE', text: 'Commissioned the Kailasa Temple at Ellora' }
                ]
            },
            {
                name: 'Amoghavarsha I', period: '814–878 CE', title: 'Ashoka of South India',
                coronation: 'Ascended as a child.',
                bio: 'Compared to Ashoka for his scholarly pursuits. Authored "Kavirajamarga" — the oldest surviving work on Kannada poetics. Arab merchant Sulaiman (851 CE) described the Rashtrakuta Empire as one of four greatest empires. Ruled for 64 years.',
                death: 'Performed Jain Sallekhana around 878 CE.',
                achievements: ['Authored Kavirajamarga', '64-year reign', 'Arab accounts — four greatest empires', 'Patronized Jainism'],
                wars: ['Suppressed Gujarat rebellion'],
                conquests: [],
                coins: [{ name: 'Gold gadyana coins', desc: 'Gold coins with Garuda and trident symbols' }],
                constructions: [{ name: 'Manyakheta capital', desc: 'Developed the grand capital described by Arab travelers as a magnificent city' }],
                events: [
                    { year: '814 CE', text: 'Ascended the throne as a child' },
                    { year: '~850 CE', text: 'Authored Kavirajamarga — oldest surviving Kannada literary work' },
                    { year: '851 CE', text: 'Arab traveler Sulaiman described Rashtrakutas as one of world\'s four greatest empires' },
                    { year: '~878 CE', text: 'Performed Jain Sallekhana after 64 years of rule' }
                ]
            }
        ]
    },

    'hoysala': {
        id: 'hoysala', name: 'Hoysala Empire', era: 'medieval',
        period: '1026 CE – 1343 CE', color: '#22D3EE',
        founded: 'Nripa Kama II', capital: 'Belur / Halebidu',
        overview: 'The Hoysalas created some of the most intricately carved temples in the world. The "Sacred Ensembles of the Hoysalas" were inscribed as UNESCO World Heritage in 2023.',
        legacy: ['Chennakeshava Temple, Belur', 'Hoysaleshwara Temple, Halebidu (UNESCO 2023)', 'Most intricately carved temples in the world', 'Kesava Temple, Somanathapura'],
        decline: 'Collapsed under Delhi Sultanate invasions. Last king killed fighting the Madurai Sultanate in 1343.',
        rulers: [
            {
                name: 'Vishnuvardhana', period: '1108–1152 CE', title: 'Greatest Hoysala King',
                coronation: 'Initially a Jain prince named Bittideva, converted to Vaishnavism by Ramanujacharya.',
                bio: 'Transformed the Hoysalas from a small feudatory into a major South Indian power. Converted by Ramanujacharya, he commissioned the Chennakeshava Temple at Belur to celebrate his victory over the Cholas at Talakad (1116 CE).',
                death: 'Died around 1152 CE.',
                achievements: ['Defeated Cholas at Talakad', 'Built Chennakeshava Temple at Belur', 'Converted by Ramanujacharya'],
                wars: ['Battle of Talakad vs Cholas (1116 CE)'],
                conquests: [{ title: 'Battle of Talakad (1116 CE)', desc: 'Defeated the Chola forces, ending Chola influence in the region.' }],
                coins: [{ name: 'Gold fanam with lion motif', desc: 'Gold coins depicting the Hoysala emblem — warrior fighting a lion' }],
                constructions: [{ name: 'Chennakeshava Temple, Belur', desc: 'One of the most intricately carved temples in the world — 48 uniquely carved pillars with hundreds of bracket figures' }],
                events: [
                    { year: '1108 CE', text: 'Ascended the throne as Bittideva' },
                    { year: '~1110 CE', text: 'Converted to Vaishnavism by Ramanujacharya' },
                    { year: '1116 CE', text: 'Defeated Cholas at Battle of Talakad' },
                    { year: '1117 CE', text: 'Commenced Chennakeshava Temple construction' }
                ]
            }
        ]
    },

    'kakatiya': {
        id: 'kakatiya', name: 'Kakatiya Dynasty', era: 'medieval',
        period: '1083 CE – 1323 CE', color: '#F472B6',
        founded: 'Beta I', capital: 'Warangal (Orugallu)',
        overview: 'The Kakatiyas of Warangal dominated the Telugu-speaking Deccan. The Ramappa Temple (UNESCO 2021), Warangal Fort, and the Thousand Pillar Temple are their masterpieces. They also produced Rudrama Devi — one of India\'s most remarkable women rulers.',
        legacy: ['Ramappa Temple (UNESCO 2021)', 'Warangal Fort entrance gateways', 'Thousand Pillar Temple', 'Rudrama Devi — rare female ruler', 'Telugu literary patronage'],
        decline: 'Destroyed by Delhi Sultanate. Warangal fell in 1323.',
        rulers: [
            {
                name: 'Rudrama Devi', period: '1263–1289 CE', title: 'Warrior Queen of Warangal',
                coronation: 'Her father raised Rudrama as a male heir. She ruled as "Rudradeva Maharaja."',
                bio: 'One of the few women to rule a major Indian kingdom in the medieval period. She suppressed noble rebellions and repelled Yadava invasions. Marco Polo mentioned her as a "prudent and wise" queen.',
                death: 'Died around 1289 CE, reportedly while fighting a rebellion.',
                achievements: ['Rare female ruler in medieval India', 'Repelled Yadava invasions', 'Mentioned by Marco Polo'],
                wars: ['Suppressed rebellions', 'Wars against Yadavas'],
                conquests: [],
                coins: [{ name: 'Gold pagoda', desc: 'Gold coins bearing the title "Rudradeva" — presented as a male ruler' }],
                constructions: [{ name: 'Warangal Fort enhancements', desc: 'Strengthened the massive fort with its iconic ornamental entrance gateways' }],
                events: [
                    { year: '1263 CE', text: 'Took full power; ruled as "Rudradeva Maharaja"' },
                    { year: '~1280 CE', text: 'Repelled Yadava invasion from Devagiri' },
                    { year: '1289 CE', text: 'Died fighting a rebellion' }
                ]
            },
            {
                name: 'Prataparudra II', period: '1289–1323 CE', title: 'Last Kakatiya Emperor',
                coronation: 'Grandson of Rudrama Devi.',
                bio: 'Repelled the first Delhi Sultanate invasion in 1303 but was forced to submit after Malik Kafur\'s second campaign in 1310. Warangal fell to Ulugh Khan in 1323. The Koh-i-Noor diamond is traditionally believed to have been taken from the Kakatiyas.',
                death: 'Captured in 1323. Died while being transported as prisoner to Delhi.',
                achievements: ['Repelled first Sultanate invasion (1303)', 'Ramappa Temple completed', 'Last defender of Telugu independence'],
                wars: ['Repelled Malik Kafur (1303)', 'Conquered by Ulugh Khan (1323)'],
                conquests: [],
                coins: [],
                constructions: [{ name: 'Ramappa Temple completion', desc: 'UNESCO World Heritage Site (2021) with floating bricks and extraordinary sculpture' }],
                events: [
                    { year: '1303 CE', text: 'Repelled first Delhi Sultanate invasion' },
                    { year: '1310 CE', text: 'Malik Kafur\'s second invasion; Koh-i-Noor diamond reportedly taken' },
                    { year: '1323 CE', text: 'Warangal conquered; end of Kakatiya dynasty' }
                ]
            }
        ]
    },

    'pala': {
        id: 'pala', name: 'Pala Empire', era: 'medieval',
        period: '750 CE – 1174 CE', color: '#6366F1',
        founded: 'Gopala', capital: 'Pataliputra / Vikramashila',
        overview: 'The Palas were the last great patrons of Buddhism in India. They founded Vikramashila and Odantapuri universities, and revitalized Nalanda. Pala art deeply influenced Tibet, Nepal, Myanmar, and Southeast Asia.',
        legacy: ['Vikramashila University', 'Revitalized Nalanda', 'Pala School of Buddhist Art', 'Influenced Tibetan Buddhism', 'Somapura Mahavihara (UNESCO)'],
        decline: 'Overthrown by the Sena dynasty around 1174 CE.',
        rulers: [
            {
                name: 'Dharmapala', period: '770–810 CE', title: 'Emperor of Northern India',
                coronation: 'Son of the founder Gopala.',
                bio: 'Expanded the Pala kingdom into a major North Indian empire. He organized a grand durbar at Kanauj where rulers acknowledged his supremacy. He founded Vikramashila University and the Somapura Mahavihara (UNESCO).',
                death: 'Died around 810 CE.',
                achievements: ['Founded Vikramashila University', 'Built Somapura Mahavihara (UNESCO)', 'Grand durbar at Kanauj'],
                wars: ['Tripartite struggle for Kanauj'],
                conquests: [{ title: 'Tripartite Struggle for Kanauj', desc: 'Captured Kanauj in the famous three-way war between Palas, Pratiharas, and Rashtrakutas.' }],
                coins: [{ name: 'Silver drammas', desc: 'Silver coins with Buddhist motifs and Devanagari legends' }],
                constructions: [
                    { name: 'Vikramashila University', desc: 'One of the two most important centers of Buddhist learning alongside Nalanda' },
                    { name: 'Somapura Mahavihara', desc: 'Massive Buddhist monastery covering 27 acres — UNESCO World Heritage Site' }
                ],
                events: [
                    { year: '770 CE', text: 'Ascended the Pala throne' },
                    { year: '~790 CE', text: 'Founded Vikramashila University' },
                    { year: '~800 CE', text: 'Grand durbar at Kanauj' },
                    { year: '810 CE', text: 'Death of Dharmapala' }
                ]
            }
        ]
    },

    'sikh': {
        id: 'sikh', name: 'Sikh Empire', era: 'modern',
        period: '1799 CE – 1849 CE', color: '#F59E0B',
        founded: 'Maharaja Ranjit Singh', capital: 'Lahore',
        overview: 'The Sikh Empire was the last major independent Indian power before British dominion. Ranjit Singh built one of the most formidable armies in Asia — the Khalsa Army. The empire was secular, with Hindu, Muslim, and Sikh ministers.',
        legacy: ['Last major independent Indian power', 'Modernized Khalsa Army', 'Secular multiconfessional governance', 'Beautification of Golden Temple', 'Koh-i-Noor diamond', 'Anglo-Sikh Wars'],
        decline: 'After Ranjit Singh\'s death, annexed by British after Second Anglo-Sikh War (1849).',
        rulers: [
            {
                name: 'Maharaja Ranjit Singh', period: '1799–1839 CE', title: 'Sher-e-Punjab (Lion of Punjab)',
                coronation: 'Crowned Maharaja of Punjab on Baisakhi Day 1801 by Sahib Singh Bedi, descendant of Guru Nanak.',
                bio: 'One of the most remarkable rulers in Indian history. Blinded in one eye by smallpox as a child, he became a military commander by age 12 and unified Punjab by 21. He modernized the Khalsa Army with European instructors, making it Asia\'s most powerful. He possessed the Koh-i-Noor diamond. His state was completely secular — Muslim prime minister, Hindu finance minister. He beautified the Golden Temple with gold leaf. He never lost a battle.',
                death: 'Died June 27, 1839 after a stroke. His death triggered a catastrophic succession crisis.',
                achievements: ['Unified Punjab', 'Built Asia\'s most powerful army', 'Possessed Koh-i-Noor diamond', 'Secular governance', 'Beautified Golden Temple', 'Never lost a battle'],
                wars: ['Conquest of Lahore (1799)', 'Conquest of Kashmir (1819)', 'Conquest of Peshawar (1834)'],
                conquests: [
                    { title: 'Capture of Lahore (1799)', desc: 'Captured Lahore from the Afghan Durrani Empire at age 19.' },
                    { title: 'Conquest of Kashmir (1819)', desc: 'Conquered the Kashmir Valley from the Afghans.' },
                    { title: 'Conquest of Peshawar (1834)', desc: 'Pushed the Sikh frontier to the Khyber Pass.' }
                ],
                coins: [
                    { name: 'Nanakshahi Rupee', desc: 'Silver rupee with "Akal Sahai" in Gurmukhi — uniquely, Ranjit Singh never put his own name on coins out of humility' },
                    { name: 'Gold mohur (Gobindshahi)', desc: 'Gold coins inscribed with Guru Gobind Singh\'s name' }
                ],
                constructions: [
                    { name: 'Golden Temple renovation', desc: 'Beautified the Harmandir Sahib with marble, gold leaf, and pietra dura — giving it the golden appearance it has today' },
                    { name: 'Lahore Fort renovation', desc: 'Built the stunning Sheesh Mahal (Mirror Palace) with thousands of mirrors and glass mosaic' }
                ],
                events: [
                    { year: '1799', text: 'Captured Lahore from Afghans at age 19' },
                    { year: '1801', text: 'Crowned Maharaja on Baisakhi Day' },
                    { year: '1809', text: 'Treaty of Amritsar with the British' },
                    { year: '1819', text: 'Conquered Kashmir' },
                    { year: '1834', text: 'Conquered Peshawar; reached Khyber Pass' },
                    { year: '1839', text: 'Death; succession crisis begins' }
                ]
            },
            {
                name: 'Duleep Singh', period: '1843–1849 CE', title: 'Last Maharaja',
                coronation: 'Placed on the throne as a 5-year-old child.',
                bio: 'Last Maharaja. Crowned at age 5 after his predecessor\'s assassination. The Khalsa fought two Anglo-Sikh Wars. After defeat at the Battle of Gujrat (1849), the empire was annexed. Duleep Singh was separated from his mother, forced to surrender the Koh-i-Noor to Queen Victoria, and exiled to Britain.',
                death: 'Died in Paris in 1893, impoverished and exiled.',
                achievements: ['Last sovereign of the Sikh Empire', 'Koh-i-Noor diamond surrendered to British'],
                wars: ['First Anglo-Sikh War (1845-46)', 'Second Anglo-Sikh War (1848-49)'],
                conquests: [],
                coins: [{ name: 'Last Nanakshahi coins', desc: 'Final silver rupees minted before British annexation' }],
                constructions: [],
                events: [
                    { year: '1843', text: 'Crowned at age 5' },
                    { year: '1845-46', text: 'First Anglo-Sikh War' },
                    { year: '1848-49', text: 'Second Anglo-Sikh War' },
                    { year: '1849', text: 'Empire annexed; Koh-i-Noor surrendered' },
                    { year: '1893', text: 'Died in Paris, exiled' }
                ]
            }
        ]
    }
};
