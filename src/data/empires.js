// ============================================================
// BHARAT THROUGH AGES — EMPIRES & GEOPOLITICAL BOUNDARIES
// ============================================================

export const ERAS = [
    { id: 'vedic', name: 'Indus & Vedic Age', startYear: -3300, endYear: -600, color: '#F59E0B' },
    { id: 'mahajanapada', name: 'Mahajanapadas & Magadha', startYear: -600, endYear: -322, color: '#EF4444' },
    { id: 'maurya', name: 'Mauryan Pan-India Zenith', startYear: -322, endYear: -185, color: '#8B5CF6' },
    { id: 'postmaurya', name: 'Post-Maurya & Classical Deccan', startYear: -185, endYear: 320, color: '#EC4899' },
    { id: 'gupta', name: 'Gupta Classical Golden Age', startYear: 320, endYear: 550, color: '#10B981' },
    { id: 'postgupta', name: 'Harsha & Early Deccan Kingdoms', startYear: 550, endYear: 750, color: '#F97316' },
    { id: 'rajput', name: 'Imperial Cholas & Tripartite Powers', startYear: 750, endYear: 1206, color: '#06B6D4' },
    { id: 'sultanate', name: 'Delhi Sultanate & Vijayanagara', startYear: 1206, endYear: 1526, color: '#84CC16' },
    { id: 'mughal', name: 'Mughal Empire & Maratha Swarajya', startYear: 1526, endYear: 1757, color: '#A855F7' },
    { id: 'colonial', name: 'Colonial Period & Sikh Empire', startYear: 1757, endYear: 1947, color: '#EF4444' },
    { id: 'modern', name: 'Republic of India', startYear: 1947, endYear: 2026, color: '#F97316' },
];

export function formatYear(year) {
    if (year < 0) return `${Math.abs(year)} BCE`;
    return `${year} CE`;
}

export const HISTORIC_BATTLES = [
    {
        id: 'ten-kings',
        name: 'Battle of the Ten Kings (Dasharajna)',
        year: -1300,
        yearLabel: 'c. 1300 BCE',
        coords: [31.5, 73.5],
        era: 'vedic',
        combatants: 'King Sudas (Bharata Tribe) vs Confederacy of 10 Vedic Tribes',
        significance: 'Recorded in the 7th Mandala of the Rigveda. King Sudas achieved complete victory on the banks of River Parushni (Ravi), unifying the Vedic tribes and establishing the name "Bharatavarsha".'
    },
    {
        id: 'hydaspes',
        name: 'Battle of the Hydaspes',
        year: -326,
        yearLabel: '326 BCE',
        coords: [32.93, 73.72],
        era: 'mahajanapada',
        combatants: 'Alexander the Great (Macedon) vs King Porus (Paurava Kingdom)',
        significance: 'Fought on the Jhelum River. Porus’ war elephants inflicted heavy casualties. Alexander’s mutinous troops refused to cross the Hyphasis (Beas) to face the colossal Nanda Empire army.'
    },
    {
        id: 'kalinga',
        name: 'The Kalinga War',
        year: -261,
        yearLabel: '261 BCE',
        coords: [20.25, 85.83],
        era: 'maurya',
        combatants: 'Emperor Ashoka (Maurya Empire) vs Republic of Kalinga',
        significance: 'Rock Edict XIII records that 100,000 were slain and 150,000 captured. The profound carnage caused Ashoka to renounce military conquest (Digvijaya) and embrace moral conquest through Dhamma (Dhammavijaya).'
    },
    {
        id: 'tarain-1-2',
        name: 'Battles of Tarain (1191 & 1192 CE)',
        year: 1192,
        yearLabel: '1191 – 1192 CE',
        coords: [29.80, 76.93],
        era: 'rajput',
        combatants: 'Prithviraj Chauhan (Chahamanas) vs Muhammad Ghori (Ghurid Empire)',
        significance: 'Prithviraj won decisively in 1191. In 1192, Ghori’s horse archers triumphed, leading directly to the establishment of the Delhi Sultanate in 1206.'
    },
    {
        id: 'panipat-1',
        name: 'First Battle of Panipat',
        year: 1526,
        yearLabel: '1526 CE',
        coords: [29.39, 76.96],
        era: 'mughal',
        combatants: 'Babur (Timurid/Mughal) vs Ibrahim Lodi (Delhi Sultanate)',
        significance: 'Babur’s innovative matchlock guns, field cannons (Topkhana), and Tulughma flanking tactics routed a 100,000-man Lodi force, founding the Mughal Empire in India.'
    },
    {
        id: 'talikota',
        name: 'Battle of Talikota (Rakkasagi-Tangadagi)',
        year: 1565,
        yearLabel: '1565 CE',
        coords: [16.48, 76.31],
        era: 'sultanate',
        combatants: 'Vijayanagara Empire vs Combined Deccan Sultanates (Bijapur, Golconda, Ahmadnagar, Bidar)',
        significance: 'Catastrophic defeat of Vijayanagara, leading to the sacking and abandonment of the imperial capital of Hampi.'
    },
    {
        id: 'haldighati',
        name: 'Battle of Haldighati',
        year: 1576,
        yearLabel: '1576 CE',
        coords: [24.89, 73.71],
        era: 'mughal',
        combatants: 'Maharana Pratap (Mewar) vs Man Singh I / Akbar (Mughals)',
        significance: 'Legendary battle of Rajput resistance in the Aravalli mountain pass. Maharana Pratap and his loyal warhorse Chetak escaped to continue 25 years of guerrilla resistance.'
    },
    {
        id: 'saraighat',
        name: 'Battle of Saraighat',
        year: 1671,
        yearLabel: '1671 CE',
        coords: [26.17, 91.70],
        era: 'mughal',
        combatants: 'Lachit Borphukan (Ahom Kingdom) vs Ram Singh I (Mughal Empire)',
        significance: 'Naval battle fought on the Brahmaputra River at Guwahati. The Ahoms used brilliant amphibious tactics to inflict a total defeat on the Mughal navy, halting Mughal eastward expansion forever.'
    },
    {
        id: 'panipat-3',
        name: 'Third Battle of Panipat',
        year: 1761,
        yearLabel: '1761 CE',
        coords: [29.39, 76.96],
        era: 'mughal',
        combatants: 'Maratha Empire (Sadashivrao Bhau) vs Ahmad Shah Durrani (Afghan Empire)',
        significance: 'One of the largest battles in 18th-century world history with over 100,000 combatants. The Maratha loss halted their northward march and opened the path for British territorial conquest in Bengal.'
    },
    {
        id: 'plassey',
        name: 'Battle of Plassey (Palashi)',
        year: 1757,
        yearLabel: '1757 CE',
        coords: [23.79, 88.25],
        era: 'colonial',
        combatants: 'Robert Clive (British East India Co.) vs Nawab Siraj-ud-Daulah (Bengal)',
        significance: 'Through the treachery of Mir Jafar, the British defeated Bengal’s army, gaining sovereign control of Bengal’s vast treasury and initiating 190 years of British colonial rule.'
    }
];

export const EMPIRES = [
    // ── 1. INDUS VALLEY CIVILIZATION ──
    {
        id: 'indus-valley',
        name: 'Indus Valley (Harappan) Civilization',
        era: 'vedic',
        startYear: -3300,
        endYear: -1300,
        capital: 'Harappa / Mohenjo-daro',
        capitalCoords: [27.32, 68.13],
        color: '#F59E0B',
        gradient: ['#F59E0B', '#D97706'],
        description: 'One of the world’s three earliest cradles of civilization along with Mesopotamia and Egypt. Extended over 1 million km² across the Indus, Sarasvati, and Ghaggar river basins with planned grid cities, standardized weights, burnt-brick architecture, and international maritime trade.',
        keyFacts: [
            'World’s earliest planned urban grid system with underground drainage',
            'Over 1,400 discovered sites across India, Pakistan, and Afghanistan',
            'Major sites: Harappa, Mohenjo-daro, Lothal dockyard, Dholavira, Rakhigarhi, Kalibangan',
            'Lothal: World’s oldest known tidal dockyard connecting to Mesopotamia (Meluhha)',
            'Standardized bronze weights (binary: 1, 2, 4, 8, 16, 32, 64; decimal: 160, 200, 320)',
            'Decipherment of Indus script remains one of archaeology’s great frontiers'
        ],
        cities: ['harappa', 'mohenjodaro', 'lothal', 'dholavira', 'kalibangan'],
        territory: [
            [37.2, 69.5], [37.5, 71.0], [36.5, 73.5], [34.5, 74.8], [32.5, 76.0], [30.5, 77.0],
            [29.5, 77.5], [28.8, 77.2], [28.0, 76.5], [27.0, 75.5], [25.5, 73.5], [24.0, 72.0],
            [22.5, 72.5], [21.5, 72.8], [21.0, 72.0], [21.5, 69.5], [22.5, 68.5], [23.5, 68.0],
            [25.0, 65.5], [25.2, 62.0], [26.0, 61.5], [28.0, 62.5], [30.0, 64.0], [32.0, 65.5],
            [34.5, 67.0], [36.0, 68.0], [37.2, 69.5]
        ]
    },

    // ── 2. EARLY VEDIC CIVILIZATION ──
    {
        id: 'early-vedic',
        name: 'Early Vedic (Sapta Sindhu) Age',
        era: 'vedic',
        startYear: -1500,
        endYear: -1000,
        capital: 'Sapta Sindhu (Seven Rivers)',
        capitalCoords: [31.5, 72.0],
        color: '#FBBF24',
        gradient: ['#FBBF24', '#F59E0B'],
        description: 'Centered around the Sapta Sindhu (Indus, Jhelum, Chenab, Ravi, Beas, Sutlej, and Sarasvati). Pastoral, clan-based society organized into Janas (tribes) under Rajans. The Rigveda was composed during this foundational period.',
        keyFacts: [
            'Rigveda composed — 1,028 hymns dedicated to nature deities (Indra, Agni, Varuna, Soma)',
            'Battle of the Ten Kings (Dasharajna) on the banks of River Parushni (Ravi)',
            'Democratic tribal assemblies: Sabha (council of elders) and Samiti (general assembly)',
            'Gau (Cow) was the primary measure of wealth and symbol of prosperity',
            'No rigid caste hierarchy — Varna was based on occupational aptitude'
        ],
        cities: ['harappa', 'kalibangan'],
        territory: [
            [35.0, 70.0], [35.2, 72.0], [34.5, 74.0], [33.5, 75.5], [32.0, 76.5], [30.5, 76.8],
            [29.5, 76.0], [28.8, 74.5], [28.5, 73.0], [29.0, 71.5], [29.8, 70.0], [31.0, 69.2],
            [32.5, 69.5], [34.0, 69.8], [35.0, 70.0]
        ]
    },

    // ── 3. LATER VEDIC CIVILIZATION ──
    {
        id: 'later-vedic',
        name: 'Later Vedic Janapadas',
        era: 'vedic',
        startYear: -1000,
        endYear: -600,
        capital: 'Hastinapura',
        capitalCoords: [29.17, 78.02],
        color: '#D97706',
        gradient: ['#D97706', '#B45309'],
        description: 'Expansion of Vedic society eastward into the lush Gangetic-Yamuna Doab. Advent of iron metallurgy (Shyama Ayas) revolutionized agriculture and warfare. The later Vedas (Sama, Yajur, Atharva), Brahmanas, and early Upanishads were composed.',
        keyFacts: [
            'Emergence of territorial kingdoms (Janapadas) like Kuru, Panchala, Kosala, and Videha',
            'Hastinapura, Kaushambi, Ayodhya, and Kashi emerged as key urban centers',
            'Composition of philosophical Upanishads — concept of Brahman and Atman',
            'Imperial Vedic sacrifices: Ashvamedha (Horse Sacrifice) and Rajasuya (Coronation)',
            'Painted Grey Ware (PGW) ceramic archaeological horizon'
        ],
        cities: ['hastinapura', 'ayodhya', 'varanasi'],
        territory: [
            [34.0, 70.5], [34.5, 73.0], [33.5, 75.5], [32.0, 77.5], [30.5, 79.5], [29.0, 81.5],
            [28.0, 83.5], [27.0, 84.8], [26.0, 84.5], [25.0, 83.5], [24.8, 81.5], [25.2, 79.5],
            [26.0, 77.5], [27.0, 75.5], [28.5, 73.5], [30.0, 71.5], [32.0, 70.0], [34.0, 70.5]
        ]
    },

    // ── 4. MAHAJANAPADAS & MAGADHA ──
    {
        id: 'mahajanapada',
        name: 'The 16 Mahajanapadas & Magadhan Ascendancy',
        era: 'mahajanapada',
        startYear: -600,
        endYear: -322,
        capital: 'Rajagriha / Pataliputra',
        capitalCoords: [25.61, 85.14],
        color: '#EF4444',
        gradient: ['#EF4444', '#DC2626'],
        description: 'The era of Second Urbanization in the Gangetic plains. Sixteen great kingdoms and republics (Gana-Sanghas) vied for hegemony. Magadha emerged supreme under the Haryanka, Shishunaga, and Nanda dynasties. Age of Gautama Buddha and Vardhamana Mahavira.',
        keyFacts: [
            'Sixteen Mahajanapadas: Magadha, Kosala, Vatsa, Avanti, Vajji, Malla, Gandhara, Kamboja, etc.',
            'Buddha’s Enlightenment at Bodh Gaya and First Sermon at Sarnath (Varanasi)',
            'Mahavira founded Jainism’s organized monastic order',
            'Ajatashatru introduced military innovations: Rathamusala (scythed chariot) and Mahashilakantaka (catapult)',
            'Mahapadma Nanda built the first pan-north Indian imperial standing army (200,000 infantry, 80,000 cavalry, 6,000 war elephants)'
        ],
        cities: ['rajagriha', 'pataliputra', 'varanasi', 'taxila', 'ujjain'],
        territory: [
            [34.5, 71.0], [34.8, 73.5], [33.5, 76.0], [31.5, 78.5], [29.5, 81.5], [28.0, 84.0],
            [27.0, 86.5], [26.0, 88.0], [24.5, 88.5], [23.5, 87.5], [22.5, 85.5], [22.5, 82.5],
            [23.0, 79.5], [24.0, 77.0], [25.5, 75.0], [27.0, 74.0], [29.0, 73.0], [31.0, 71.5],
            [33.0, 70.5], [34.5, 71.0]
        ]
    },

    // ── 5. MAURYA EMPIRE ──
    {
        id: 'maurya',
        name: 'Maurya Empire (Pan-Indian Zenith)',
        era: 'maurya',
        startYear: -322,
        endYear: -185,
        capital: 'Pataliputra (Patna)',
        capitalCoords: [25.61, 85.14],
        color: '#8B5CF6',
        gradient: ['#8B5CF6', '#7C3AED'],
        description: 'First pan-Indian empire uniting nearly the entire subcontinent from the Hindu Kush in Afghanistan to the borders of Tamilakam. Founded by Chandragupta Maurya with Acharya Chanakya. Emperor Ashoka converted to Buddhism following the Kalinga War, erecting monolithic pillars and propagating Dhamma across Asia.',
        keyFacts: [
            'Spanned over 5 million km² with an estimated population of 50-60 million',
            'Chanakya authored the Arthashastra — masterwork on statecraft, espionage, and economics',
            'Ashoka’s Edicts inscribed in Prakrit (Brahmi & Kharosthi), Greek, and Aramaic',
            'Lion Capital of Ashoka at Sarnath adopted as the National Emblem of India',
            'Construction of the Grand Trunk corridor (Uttarapatha) and Sanchi Great Stupa',
            'Buddhist diplomatic missions sent to Sri Lanka, Syria, Egypt, Macedonia, and Cyrene'
        ],
        cities: ['pataliputra', 'taxila', 'ujjain', 'varanasi', 'mathura', 'vidisha'],
        territory: [
            [37.5, 68.0], [38.0, 71.0], [37.5, 74.0], [36.0, 76.5], [34.0, 78.5], [32.0, 80.5],
            [30.0, 83.0], [28.5, 86.0], [27.0, 89.0], [25.5, 91.5], [23.5, 91.0], [22.0, 89.5],
            [20.5, 86.5], [18.5, 84.0], [16.5, 81.5], [14.5, 79.5], [13.0, 78.5], [12.0, 77.5],
            [12.5, 76.0], [14.0, 75.0], [15.5, 74.0], [17.5, 73.0], [19.5, 72.5], [21.5, 71.0],
            [23.5, 69.5], [25.5, 67.5], [28.0, 65.5], [30.5, 64.5], [33.0, 65.0], [35.5, 66.5],
            [37.5, 68.0]
        ]
    },

    // ── 6. SHUNGA DYNASTY ──
    {
        id: 'shunga',
        name: 'Shunga Dynasty',
        era: 'postmaurya',
        startYear: -185,
        endYear: -73,
        capital: 'Vidisha / Pataliputra',
        capitalCoords: [23.52, 77.81],
        color: '#EC4899',
        gradient: ['#EC4899', '#DB2777'],
        description: 'Founded by General Pushyamitra Shunga after the fall of the Mauryas. Known for reviving Vedic rituals (Ashvamedha) while patronizing classical arts: magnificent stone balustrades at Sanchi Stupa and Bharhut Stupa, and the treatise Mahabhashya by grammarian Patanjali.',
        keyFacts: [
            'Pushyamitra Shunga performed two Ashvamedha sacrifices to celebrate victories over Indo-Greeks',
            'Patanjali composed the Mahabhashya (commentary on Panini’s Sanskrit grammar)',
            'Exquisite stone gateways (Toranas) and relief carvings constructed at Sanchi and Bharhut',
            'Heliodorus, Greek ambassador from Taxila, erected the Vaishnava Garuda Pillar at Vidisha'
        ],
        cities: ['vidisha', 'pataliputra', 'mathura', 'varanasi'],
        territory: [
            [29.5, 75.5], [29.8, 77.5], [29.0, 80.0], [28.0, 82.5], [27.0, 85.0], [26.0, 87.0],
            [25.0, 87.5], [23.8, 86.5], [22.8, 84.5], [22.0, 82.0], [22.2, 79.5], [22.8, 77.0],
            [24.0, 75.0], [25.5, 74.0], [27.5, 74.5], [29.5, 75.5]
        ]
    },

    // ── 7. SATAVAHANA EMPIRE ──
    {
        id: 'satavahana',
        name: 'Satavahana Empire (Andhras)',
        era: 'postmaurya',
        startYear: -230,
        endYear: 220,
        capital: 'Pratishthana (Paithan) / Amaravati',
        capitalCoords: [19.48, 75.38],
        color: '#F472B6',
        gradient: ['#F472B6', '#EC4899'],
        description: 'First great Deccan empire acting as a cultural and trade bridge between North and South India. Under Gautamiputra Satakarni ("Lord of the Three Oceans"), the empire controlled all trans-Deccan trade routes and built flourishing ports trading with imperial Rome.',
        keyFacts: [
            'Gautamiputra Satakarni assumed the title "Trisamudrapitapoyavahana" (Whose horses drank from three oceans)',
            'First Indian dynasty to issue bilingual coins with royal portraits (in Prakrit and Old Telugu/Tamil)',
            'Patronized the sublime Amaravati Mahachaitya and Karle / Kanheri rock-cut cave chaityas',
            'Acharya Nagarjuna developed the Madhyamaka school of Mahayana Buddhist philosophy',
            'Booming maritime trade with Rome through ports of Barygaza, Sopara, and Kalyan'
        ],
        cities: ['paithan', 'amaravati', 'muziris', 'ujjain'],
        territory: [
            [22.5, 72.5], [22.8, 75.0], [22.5, 77.5], [22.0, 80.0], [21.0, 82.0], [19.5, 83.5],
            [18.0, 83.0], [16.5, 81.5], [15.0, 80.0], [14.0, 78.5], [14.2, 76.5], [15.0, 74.5],
            [16.5, 73.5], [18.5, 72.8], [20.5, 72.5], [22.5, 72.5]
        ]
    },

    // ── 8. KUSHAN EMPIRE ──
    {
        id: 'kushan',
        name: 'Kushan Empire (Kanishka the Great)',
        era: 'postmaurya',
        startYear: 30,
        endYear: 375,
        capital: 'Purushapura (Peshawar) / Mathura',
        capitalCoords: [34.01, 71.58],
        color: '#D946EF',
        gradient: ['#D946EF', '#C026D3'],
        description: 'Trans-continental empire bridging the Gangetic plains, Central Asia, and the Silk Road. Reached its zenith under Emperor Kanishka (who initiated the Shaka Era in 78 CE). Masterminded the synthesis of Greco-Roman, Persian, and Indian artistic traditions in Gandhara and Mathura art.',
        keyFacts: [
            'Kanishka convened the Fourth Buddhist Council in Kashmir, compiling the Mahavibhasha',
            'Flourishing of Gandhara Greco-Buddhist Art and Mathura School of Sculpture',
            'Controlled pivotal nodes of the Silk Road, collecting duties on Chinese silk and Roman bullion',
            'Court of luminaries: Ashvaghosha (Buddhacharita), Charaka (Charaka Samhita), and Vasumitra',
            'Initiated the Shaka Calendar (78 CE), adopted as the National Civil Calendar of modern India'
        ],
        cities: ['taxila', 'mathura', 'varanasi'],
        territory: [
            [38.5, 66.5], [39.0, 69.5], [38.5, 73.0], [37.5, 76.0], [36.0, 77.5], [34.5, 78.0],
            [32.5, 78.5], [30.5, 79.0], [28.5, 78.5], [27.0, 78.0], [25.5, 76.5], [25.0, 74.5],
            [26.0, 72.5], [27.5, 70.5], [29.5, 69.0], [31.5, 67.5], [33.5, 66.0], [36.0, 65.5],
            [38.5, 66.5]
        ]
    },

    // ── 9. GUPTA EMPIRE (GOLDEN AGE) ──
    {
        id: 'gupta',
        name: 'Gupta Empire (Classical Golden Age)',
        era: 'gupta',
        startYear: 320,
        endYear: 550,
        capital: 'Pataliputra / Ujjayini',
        capitalCoords: [25.61, 85.14],
        color: '#10B981',
        gradient: ['#10B981', '#059669'],
        description: 'The Golden Age of Indian Civilization. Marked by supreme breakthroughs in mathematics (Aryabhata inventing zero & place-value trigonometry), astronomy (Varahamihira), medicine (Sushruta), Sanskrit literature (Kalidasa), metallurgy (Rustless Iron Pillar of Delhi), and rock-cut frescoes at Ajanta.',
        keyFacts: [
            'Chandragupta I founded the Gupta Era in 320 CE; Samudragupta ("Napoleon of India") expanded through Digvijaya',
            'Chandragupta II (Vikramaditya) defeated the Western Kshatrapas and ruled with his Navratnas (Nine Gems)',
            'Aryabhata calculated Pi to 4 decimal places (3.1416), proved Earth rotates on its axis, and explained solar/lunar eclipses',
            'Kalidasa composed immortal masterworks: Shakuntala, Meghaduta, and Raghuvamsha',
            'Foundation of Nalanda Mahavihara — the premier international residential university of the ancient world',
            'Ajanta Cave frescoes (Caves 1, 2, 16, 17) and Deogarh Dashavatara Temple'
        ],
        cities: ['pataliputra', 'ujjain', 'varanasi', 'vidisha', 'mathura', 'ayodhya'],
        territory: [
            [33.5, 73.5], [33.8, 76.0], [32.5, 78.0], [31.0, 80.5], [29.5, 83.0], [28.0, 86.0],
            [27.0, 89.0], [25.5, 90.5], [24.0, 90.0], [22.5, 89.0], [21.0, 87.0], [19.5, 85.0],
            [18.5, 83.0], [18.0, 80.5], [19.0, 78.5], [20.5, 76.5], [22.0, 74.5], [23.5, 72.5],
            [25.5, 71.0], [27.5, 70.5], [29.5, 71.0], [31.5, 72.0], [33.5, 73.5]
        ]
    },

    // ── 10. HARSHA'S EMPIRE ──
    {
        id: 'harsha',
        name: 'Harshavardhana’s Empire',
        era: 'postgupta',
        startYear: 606,
        endYear: 647,
        capital: 'Kannauj (Kanyakubja)',
        capitalCoords: [27.06, 79.92],
        color: '#F97316',
        gradient: ['#F97316', '#EA580C'],
        description: 'Emperor Harsha unified North India after the Hunnic disruptions. A scholar-emperor who authored three classical Sanskrit plays (Ratnavali, Priyadarsika, Nagananda). Chinese pilgrim Xuanzang lived in his court and at Nalanda University for over a decade.',
        keyFacts: [
            'Conducted the grand Kannauj Assembly and the quinquennial Maha Moksha Parishad at Prayag (charity festival)',
            'Xuanzang documented Harsha’s flawless administration and Nalanda’s 10,000 scholars',
            'Southward expansion halted at the Narmada River by Pulakeshin II of the Chalukyas (Aihole Inscription)',
            'Patronized poet Banabhatta who composed Harshacharita (first formal biography in Sanskrit)'
        ],
        cities: ['kannauj', 'varanasi', 'mathura', 'pataliputra'],
        territory: [
            [32.5, 74.0], [32.5, 76.5], [31.0, 79.0], [29.5, 81.5], [28.0, 84.0], [26.5, 86.5],
            [25.5, 88.0], [24.0, 87.5], [22.5, 85.5], [21.8, 83.5], [22.2, 80.5], [22.8, 77.5],
            [23.5, 75.0], [25.0, 73.5], [27.0, 73.0], [29.0, 73.0], [31.0, 73.5], [32.5, 74.0]
        ]
    },

    // ── 11. BADAMI CHALUKYAS ──
    {
        id: 'chalukya',
        name: 'Badami Chalukya Dynasty',
        era: 'postgupta',
        startYear: 543,
        endYear: 753,
        capital: 'Vatapi (Badami)',
        capitalCoords: [15.92, 75.68],
        color: '#FB923C',
        gradient: ['#FB923C', '#F97316'],
        description: 'Paramount power of the Deccan plateau. Pulakeshin II earned the title "Dakshinapatheshvara" (Lord of the South) by defeating Harsha on the Narmada and receiving diplomatic embassies from King Khosrow II of Persia.',
        keyFacts: [
            'Ravikirti composed the historic Aihole Inscription on the Meguti Jain temple',
            'Created the rock-cut cave temples at Badami and structural masterworks at Pattadakal (UNESCO WHS)',
            'Pioneered the Vesara (Karnataka Dravida) temple architectural idiom',
            'Maintained blue-water naval fleets based in Revatidvipa (Goa)'
        ],
        cities: ['badami', 'paithan'],
        territory: [
            [21.5, 73.0], [21.8, 75.5], [21.5, 78.0], [20.5, 80.0], [19.0, 81.0], [17.5, 80.5],
            [16.0, 79.5], [14.5, 78.5], [13.5, 77.5], [13.2, 75.5], [14.0, 74.2], [15.5, 73.5],
            [17.5, 73.0], [19.5, 72.5], [21.5, 73.0]
        ]
    },

    // ── 12. PALLAVA DYNASTY ──
    {
        id: 'pallava',
        name: 'Pallava Dynasty',
        era: 'postgupta',
        startYear: 275,
        endYear: 897,
        capital: 'Kanchipuram',
        capitalCoords: [12.83, 79.70],
        color: '#FBBF24',
        gradient: ['#FBBF24', '#F59E0B'],
        description: 'Creators of classical Dravidian rock-cut architecture. King Narasimhavarman I ("Mahamalla") defeated Pulakeshin II and founded the port of Mamallapuram. Their maritime trade networks exported Grantha script and artistic forms across Southeast Asia.',
        keyFacts: [
            'Commissioned the Shore Temple and Pancha Rathas at Mahabalipuram (UNESCO WHS)',
            'Carved "Descent of the Ganga / Arjuna’s Penance" — world’s largest open-air rock relief',
            'Kanchipuram functioned as a world-renowned Ghatika (University) visited by Xuanzang',
            'Patronized the flowering of the Tamil Bhakti Movement (Alvars and Nayanars)'
        ],
        cities: ['kanchipuram'],
        territory: [
            [16.0, 79.0], [16.2, 80.5], [15.0, 80.5], [13.5, 80.3], [12.0, 80.0], [10.5, 79.5],
            [10.0, 78.5], [10.5, 77.5], [11.5, 77.0], [13.0, 77.0], [14.5, 77.5], [15.5, 78.5],
            [16.0, 79.0]
        ]
    },

    // ── 13. IMPERIAL CHOLA EMPIRE ──
    {
        id: 'chola',
        name: 'Imperial Chola Maritime Empire',
        era: 'rajput',
        startYear: 848,
        endYear: 1279,
        capital: 'Thanjavur / Gangaikonda Cholapuram',
        capitalCoords: [10.78, 79.14],
        color: '#06B6D4',
        gradient: ['#06B6D4', '#0891B2'],
        description: 'The greatest maritime superpower in South Asian history. Raja Raja Chola I built the colossal Brihadeeswarar Temple. His son Rajendra Chola I marched to the Ganga and launched a historic trans-oceanic naval expedition in 1025 CE, conquering Srivijaya (Sumatra, Malaya, and Java) to dominate Indian Ocean trade.',
        keyFacts: [
            'Built the world’s most powerful blue-water navy of the medieval era',
            'Rajendra Chola I conquered Sri Lanka and defeated Srivijaya across the Malacca Strait in 1025 CE',
            'Brihadeeswarar Temple (UNESCO) — 66m granite Vimana constructed with an 80-tonne monolithic cupola',
            'Supreme mastery of lost-wax bronze casting: World-renowned Nataraja (Cosmic Dancer) sculptures',
            'Democratic village self-governance recorded in the famous Uttaramerur Inscriptions (Kudavolai electoral system)'
        ],
        cities: ['thanjavur', 'kanchipuram'],
        territory: [
            [18.0, 83.5], [18.2, 84.5], [16.5, 82.5], [14.5, 80.5], [12.5, 80.2], [10.5, 79.8],
            [8.5, 81.5], [6.5, 80.5], [7.5, 79.5], [9.0, 78.0], [8.0, 77.0], [9.5, 76.2],
            [11.5, 75.8], [13.5, 76.5], [15.5, 77.5], [17.0, 79.5], [18.0, 83.5]
        ]
    },

    // ── 14. GURJARA-PRATIHARA EMPIRE ──
    {
        id: 'rajput-pratiharas',
        name: 'Gurjara-Pratihara Empire',
        era: 'rajput',
        startYear: 730,
        endYear: 1036,
        capital: 'Kannauj / Ujjayini',
        capitalCoords: [27.06, 79.92],
        color: '#22D3EE',
        gradient: ['#22D3EE', '#06B6D4'],
        description: 'Defenders of the northwestern frontiers who repulsed early Umayyad Arab incursions at the Battle of Rajasthan (738 CE). Ruled vast swathes of North India from Kannauj under Emperor Mihira Bhoja during the Tripartite Struggle.',
        keyFacts: [
            'Nagabhata I defeated the Caliphate’s Arab armies, protecting Indian sovereignty',
            'Mihira Bhoja assumed the title "Adivaraha", maintaining unmatched cavalry divisions',
            'Arab traveler Al-Masudi praised their colossal armies and flourishing statecraft',
            'Commissioned the marvelous Maru-Gurjara temple architecture (Osian and Khajuraho prototypes)'
        ],
        cities: ['kannauj', 'ujjain', 'mathura', 'varanasi'],
        territory: [
            [31.5, 72.0], [31.5, 75.5], [30.5, 78.0], [29.0, 80.5], [27.5, 82.5], [26.0, 82.0],
            [24.5, 80.5], [23.5, 78.5], [23.8, 75.5], [24.5, 72.5], [26.0, 70.5], [28.0, 70.0],
            [30.0, 70.5], [31.5, 72.0]
        ]
    },

    // ── 15. RASHTRAKUTA DYNASTY ──
    {
        id: 'rashtrakuta',
        name: 'Rashtrakuta Empire',
        era: 'rajput',
        startYear: 753,
        endYear: 982,
        capital: 'Manyakheta (Malkhed)',
        capitalCoords: [17.19, 76.57],
        color: '#67E8F9',
        gradient: ['#67E8F9', '#22D3EE'],
        description: 'Deccan colossus ranked by Arab scholars alongside Rome, China, and the Abbasids. Krishna I carved the monolithic Kailasa Temple at Ellora. Amoghavarsha I ("Nrupatunga") authored the first Kannada literary work, Kavirajamarga.',
        keyFacts: [
            'Kailasa Temple (Ellora Cave 16) — carved vertically top-down from a single basalt mountain cliff (200,000 tonnes excavated)',
            'Amoghavarsha I ruled peacefully for 64 years; called the "Ashoka of South India"',
            'Regularly marched north during the Tripartite Struggle, capturing Kannauj and Varanasi',
            'Patronized the Digambara Jain philosopher Jinasena and mathematician Mahaviracharya'
        ],
        cities: ['manyakheta', 'paithan'],
        territory: [
            [22.5, 72.5], [22.8, 76.0], [22.0, 79.5], [20.5, 82.0], [18.5, 81.5], [16.5, 80.5],
            [14.5, 78.5], [13.5, 76.5], [14.0, 74.5], [16.0, 73.5], [18.5, 72.8], [21.0, 72.5],
            [22.5, 72.5]
        ]
    },

    // ── 16. DELHI SULTANATE (TUGHLAQ PEAK) ──
    {
        id: 'tughlaq',
        name: 'Delhi Sultanate (Tughlaq Imperial Zenith)',
        era: 'sultanate',
        startYear: 1206,
        endYear: 1526,
        capital: 'Delhi / Daulatabad',
        capitalCoords: [28.61, 77.21],
        color: '#84CC16',
        gradient: ['#84CC16', '#65A30D'],
        description: 'Five successive dynasties: Mamluk (Slave), Khalji, Tughlaq, Sayyid, and Lodi. Under Alauddin Khalji and Muhammad bin Tughlaq, the Sultanate repulsed six massive Mongol invasions and expanded military control across almost the entire subcontinent down to Madurai.',
        keyFacts: [
            'Defeated the Chagatai Mongol Khanate’s massive sieges of Delhi (1297–1306 CE)',
            'Qutub Minar (73m tallest brick minaret) and Alai Darwaza architectural milestones',
            'Muhammad bin Tughlaq temporarily shifted the capital to Daulatabad (Devagiri) in Maharashtra',
            'Moroccan explorer Ibn Battuta served as Chief Qadi of Delhi for eight years',
            'Introduction of brass/copper token currency and market price control systems'
        ],
        cities: ['delhi', 'daulatabad', 'varanasi', 'kannauj', 'mathura'],
        territory: [
            [35.5, 71.5], [35.5, 75.0], [34.0, 77.5], [32.0, 79.5], [29.5, 82.5], [27.5, 85.5],
            [25.5, 88.5], [23.5, 88.5], [21.5, 87.0], [19.0, 84.5], [16.5, 81.5], [14.5, 79.5],
            [13.0, 78.0], [13.5, 76.0], [15.0, 74.5], [17.5, 73.5], [20.0, 72.5], [22.5, 70.0],
            [25.0, 68.5], [27.5, 68.0], [30.0, 68.5], [33.0, 69.5], [35.5, 71.5]
        ]
    },

    // ── 17. VIJAYANAGARA EMPIRE ──
    {
        id: 'vijayanagara',
        name: 'Vijayanagara Empire (City of Victory)',
        era: 'sultanate',
        startYear: 1336,
        endYear: 1646,
        capital: 'Vijayanagara (Hampi)',
        capitalCoords: [15.33, 76.46],
        color: '#BEF264',
        gradient: ['#BEF264', '#A3E635'],
        description: 'Founded by brothers Harihara I and Bukka Raya I with sage Vidyaranya. Reached its golden zenith under Emperor Krishnadevaraya. Second most populous city on earth in 1500 CE, famous for diamond bazaars, Sanskrit and Telugu literature (Ashtadiggajas), and fortified Tungabhadra architecture.',
        keyFacts: [
            'Krishnadevaraya authored the masterwork Amuktamalyada and patronized Tenali Rama',
            'Hampi Ruins (UNESCO World Heritage Site) — Vittala Temple Stone Chariot & musical pillars',
            'Monopolized the Arabian warhorse import trade through ports of Goa, Bhatkal, and Honnavar',
            'Built advanced hydraulic aqueducts, massive tanks (Kamalapuram), and Queen’s Bath',
            'Tragic sack following the Battle of Talikota (1565 CE) by the confederated Deccan Sultanates'
        ],
        cities: ['hampi', 'kanchipuram', 'thanjavur'],
        territory: [
            [17.5, 74.5], [17.8, 77.0], [17.2, 79.5], [16.0, 80.5], [14.5, 80.2], [12.5, 79.8],
            [10.5, 79.2], [9.0, 78.0], [8.2, 77.0], [8.8, 76.2], [10.5, 75.5], [12.5, 74.8],
            [14.5, 74.0], [16.0, 73.5], [17.5, 74.5]
        ]
    },

    // ── 18. MUGHAL EMPIRE (PEAK) ──
    {
        id: 'mughal-peak',
        name: 'Mughal Empire (Akbar to Aurangzeb Peak)',
        era: 'mughal',
        startYear: 1526,
        endYear: 1707,
        capital: 'Agra / Delhi / Fatehpur Sikri',
        capitalCoords: [27.18, 78.02],
        color: '#A855F7',
        gradient: ['#A855F7', '#7E22CE'],
        description: 'At its peak under Shah Jahan and Aurangzeb, the Mughal Empire encompassed 4 million km² and 150 million subjects, generating ~25% of global GDP. Marked by religious synthesis under Akbar (Sulh-i-Kul), the Mansabdari administrative framework, and architectural wonders including the Taj Mahal.',
        keyFacts: [
            'Akbar built the planned capital of Fatehpur Sikri and Buland Darwaza (54m high)',
            'Shah Jahan commissioned the Taj Mahal (UNESCO), the Red Fort, and the Jama Masjid',
            'Indian textiles (Dhaka Muslin, Calico, Chintz) supplied 25% of the world’s clothing trade',
            'Todar Mal’s Zabt revenue system based on precise agricultural land surveys (Bighas)',
            'Aurangzeb conquered the Deccan Sultanates (Bijapur and Golconda), reaching India’s southern tip'
        ],
        cities: ['agra', 'delhi', 'lahore', 'varanasi', 'mathura', 'pune', 'calcutta'],
        territory: [
            [36.5, 68.5], [37.0, 71.5], [36.5, 74.5], [35.0, 76.5], [33.5, 78.5], [31.5, 80.0],
            [29.5, 82.5], [28.0, 85.5], [26.5, 88.5], [25.0, 91.5], [23.5, 91.5], [21.5, 88.5],
            [19.0, 85.5], [16.5, 82.5], [14.0, 80.0], [12.0, 78.5], [11.0, 77.5], [11.5, 76.0],
            [13.5, 74.5], [16.0, 73.5], [18.5, 72.8], [21.0, 71.5], [23.5, 69.5], [26.0, 68.0],
            [28.5, 66.5], [31.0, 66.0], [33.5, 67.0], [35.5, 67.5], [36.5, 68.5]
        ]
    },

    // ── 19. MARATHA EMPIRE & CONFEDERACY ──
    {
        id: 'maratha',
        name: 'Maratha Empire (Hindavi Swarajya & Confederacy)',
        era: 'mughal',
        startYear: 1674,
        endYear: 1818,
        capital: 'Raigad / Pune / Satara',
        capitalCoords: [18.52, 73.86],
        color: '#C084FC',
        gradient: ['#C084FC', '#A855F7'],
        description: 'Founded by Chhatrapati Shivaji Maharaj who pioneered guerrilla warfare (Ganimi Kava), established an indigenous navy under Kanhoji Angre, and proclaimed "Hindavi Swarajya". Expanded into an all-India confederacy by Peshwa Bajirao I ("Attock to Cuttack").',
        keyFacts: [
            'Shivaji Maharaj crowned at Raigad (1674 CE); established Ashtapradhan (Council of 8 Ministers)',
            'Peshwa Bajirao I fought over 41 major battles and remained undefeated throughout his life',
            'Maratha Empire reached the Indus River at Attock (Pakistan) under Raghunathrao in 1758',
            'Kanhoji Angre ("Samudratil Shivaji") defeated British, Portuguese, and Dutch fleets in the Arabian Sea',
            'Confederacy led by major houses: Scindia (Gwalior), Holkar (Indore), Gaekwad (Baroda), Bhonsle (Nagpur)'
        ],
        cities: ['raigad', 'pune', 'delhi', 'ujjain', 'varanasi'],
        territory: [
            [33.5, 72.0], [33.5, 74.5], [31.5, 76.5], [29.5, 77.5], [27.5, 79.5], [25.5, 82.5],
            [24.0, 85.5], [22.5, 87.0], [20.5, 86.5], [19.0, 84.5], [17.5, 82.0], [16.0, 79.0],
            [14.5, 77.0], [14.0, 75.0], [15.5, 73.8], [17.5, 73.0], [19.5, 72.5], [21.5, 71.5],
            [23.5, 70.5], [26.0, 71.0], [28.5, 70.5], [31.0, 71.0], [33.5, 72.0]
        ]
    },

    // ── 20. SIKH EMPIRE ──
    {
        id: 'sikh',
        name: 'Sikh Empire (Sarkar-i-Khalsa)',
        era: 'colonial',
        startYear: 1799,
        endYear: 1849,
        capital: 'Lahore / Amritsar',
        capitalCoords: [31.55, 74.35],
        color: '#F97316',
        gradient: ['#F97316', '#EA580C'],
        description: 'Founded by Maharaja Ranjit Singh ("Sher-e-Punjab" / Lion of Punjab). Secular, egalitarian empire uniting Punjab, Kashmir, Ladakh, and Khyber Pakhtunkhwa. Modernized the Khalsa Fauj with French and Italian Napoleonic generals into one of Asia’s most formidable armies.',
        keyFacts: [
            'Maharaja Ranjit Singh covered the Harmandir Sahib (Golden Temple) in Amritsar with pure gold leaf',
            'Hari Singh Nalwa, Supreme Commander, conquered Peshawar and built Jamrud Fort at the Khyber Pass',
            'Possessed the legendary Koh-i-Noor diamond and Timur Ruby',
            'General Zorawar Singh ("Napoleon of India") conquered Ladakh, Baltistan, and Western Tibet (1841)',
            'Strictly prohibited capital punishment and practiced complete inter-faith governance'
        ],
        cities: ['lahore', 'taxila'],
        territory: [
            [36.5, 71.5], [36.8, 74.0], [36.0, 76.5], [35.0, 78.0], [33.5, 78.5], [32.0, 77.5],
            [30.5, 76.5], [29.5, 74.5], [29.0, 72.5], [29.5, 70.5], [31.0, 69.5], [32.5, 69.0],
            [34.5, 70.0], [36.0, 70.5], [36.5, 71.5]
        ]
    },

    // ── 21. BRITISH RAJ ──
    {
        id: 'british-india',
        name: 'British Indian Empire & Princely States',
        era: 'colonial',
        startYear: 1757,
        endYear: 1947,
        capital: 'Calcutta (until 1911) / New Delhi',
        capitalCoords: [28.61, 77.21],
        color: '#EF4444',
        gradient: ['#EF4444', '#DC2626'],
        description: 'Colonial rule under the East India Company (1757–1858) and the British Crown (1858–1947). Characterized by severe economic de-industrialization and famine drain, countered by the heroic Indian Freedom Struggle under Mahatma Gandhi, Netaji Subhash Chandra Bose, and Bhagat Singh.',
        keyFacts: [
            'First War of Indian Independence (Revolt of 1857) — Rani Lakshmibai, Mangal Pandey, Kunwar Singh',
            'Indian National Congress founded in 1885; Non-Cooperation (1920) and Civil Disobedience (1930)',
            'Construction of Indian Railway network (1853), telegraph lines, and canal irrigation colonies',
            'Netaji’s Indian National Army (INA) and the Royal Indian Navy Mutiny (1946) accelerated British departure',
            'Tragic Partition of India (1947) creating India and Pakistan with massive displacement'
        ],
        cities: ['calcutta', 'delhi', 'lahore', 'pune', 'varanasi', 'agra'],
        territory: [
            [36.5, 74.5], [36.0, 77.0], [34.5, 78.5], [33.0, 79.5], [31.5, 80.5], [29.5, 83.0],
            [28.0, 86.0], [27.0, 89.0], [26.0, 92.5], [24.5, 94.0], [22.5, 93.5], [21.0, 90.0],
            [20.0, 87.0], [18.0, 84.5], [16.0, 82.0], [13.5, 80.3], [11.0, 79.8], [8.5, 78.0],
            [8.0, 77.0], [9.5, 76.0], [11.5, 75.0], [14.0, 74.0], [16.5, 73.5], [19.0, 72.8],
            [21.5, 71.5], [23.5, 68.5], [25.5, 67.5], [28.0, 66.5], [31.0, 66.5], [33.5, 68.0],
            [35.5, 70.0], [36.8, 72.5], [36.5, 74.5]
        ]
    },

    // ── 22. REPUBLIC OF INDIA ──
    {
        id: 'modern-india',
        name: 'Republic of India (Sovereign Democratic Republic)',
        era: 'modern',
        startYear: 1947,
        endYear: 2026,
        capital: 'New Delhi',
        capitalCoords: [28.61, 77.21],
        color: '#F97316',
        gradient: ['#F97316', '#EA580C'],
        description: 'The world’s largest democracy with 1.4 billion citizens. Governed by the Constitution of India drafted under Dr. B.R. Ambedkar. Global leader in information technology, space exploration (Chandrayaan-3 landing on Moon’s south pole), renewable energy, and economic growth.',
        keyFacts: [
            'Constitution adopted on 26 January 1950 — world’s longest written sovereign constitution',
            'Integration of 565 Princely States accomplished by Sardar Vallabhbhai Patel ("Iron Man of India")',
            'Green Revolution (M.S. Swaminathan) and White Revolution (Verghese Kurien) achieved food security',
            'ISRO milestones: Chandrayaan-3 lunar landing, Mangalyaan Mars mission, Aditya-L1 Solar observatory',
            'World’s 5th largest economy with the fastest-growing global digital payments network (UPI)'
        ],
        cities: ['delhi', 'calcutta', 'pune', 'varanasi', 'agra', 'ujjain', 'kanchipuram', 'thanjavur'],
        territory: [
            [37.0, 74.5], [36.0, 77.0], [34.5, 78.5], [33.0, 79.5], [31.5, 80.5], [30.0, 81.5],
            [28.5, 84.0], [27.5, 86.5], [27.0, 88.5], [26.5, 90.0], [25.0, 92.0], [24.0, 93.0],
            [23.0, 93.5], [22.5, 92.0], [22.0, 89.5], [21.5, 88.5], [21.5, 87.0], [19.5, 85.0],
            [17.5, 83.0], [15.5, 81.0], [13.5, 80.3], [12.0, 80.0], [10.5, 79.5], [9.0, 79.0],
            [8.0, 77.5], [8.0, 76.5], [9.0, 76.0], [10.5, 75.5], [12.0, 75.0], [13.5, 74.5],
            [15.5, 73.5], [17.5, 73.0], [19.5, 72.5], [21.0, 72.0], [22.0, 69.5], [23.0, 68.5],
            [24.0, 68.5], [24.5, 71.0], [26.0, 70.0], [27.5, 69.5], [29.0, 71.0], [30.5, 72.0],
            [32.0, 74.5], [33.5, 74.5], [35.0, 74.0], [37.0, 74.5]
        ]
    }
];

export function getEmpiresAtYear(year) {
    return EMPIRES.filter(e => year >= e.startYear && year <= e.endYear);
}

export function getEraForYear(year) {
    return ERAS.find(e => year >= e.startYear && year < e.endYear) || ERAS[ERAS.length - 1];
}

export const TIMELINE_MARKERS = [
    { year: -3300, label: '3300 BCE' },
    { year: -1500, label: '1500 BCE' },
    { year: -600, label: '600 BCE' },
    { year: -322, label: '322 BCE' },
    { year: -185, label: '185 BCE' },
    { year: 0, label: '1 CE' },
    { year: 320, label: '320 CE' },
    { year: 606, label: '606 CE' },
    { year: 848, label: '848 CE' },
    { year: 1206, label: '1206 CE' },
    { year: 1526, label: '1526 CE' },
    { year: 1674, label: '1674 CE' },
    { year: 1757, label: '1757 CE' },
    { year: 1857, label: '1857 CE' },
    { year: 1947, label: '1947 CE' },
    { year: 2026, label: '2026 CE' },
];
