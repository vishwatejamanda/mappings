// Historical periods/eras
export const ERAS = [
    { id: 'vedic', name: 'Vedic Age', startYear: -1500, endYear: -600, color: '#F59E0B' },
    { id: 'mahajanapada', name: 'Mahajanapadas', startYear: -600, endYear: -322, color: '#EF4444' },
    { id: 'maurya', name: 'Maurya Period', startYear: -322, endYear: -185, color: '#8B5CF6' },
    { id: 'postmaurya', name: 'Post-Maurya', startYear: -185, endYear: 320, color: '#EC4899' },
    { id: 'gupta', name: 'Gupta Period', startYear: 320, endYear: 550, color: '#10B981' },
    { id: 'postgupta', name: 'Post-Gupta', startYear: 550, endYear: 750, color: '#F97316' },
    { id: 'rajput', name: 'Rajput & Regional', startYear: 750, endYear: 1206, color: '#06B6D4' },
    { id: 'sultanate', name: 'Delhi Sultanate', startYear: 1206, endYear: 1526, color: '#84CC16' },
    { id: 'mughal', name: 'Mughal Period', startYear: 1526, endYear: 1757, color: '#A855F7' },
    { id: 'colonial', name: 'Colonial Period', startYear: 1757, endYear: 1947, color: '#EF4444' },
    { id: 'modern', name: 'Modern India', startYear: 1947, endYear: 2026, color: '#F97316' },
];

export function formatYear(year) {
    if (year < 0) return `${Math.abs(year)} BCE`;
    return `${year} CE`;
}

export const EMPIRES = [
    // ── VEDIC AGE ──
    {
        id: 'early-vedic',
        name: 'Early Vedic Civilization',
        era: 'vedic', startYear: -1500, endYear: -1000,
        capital: 'Sapta Sindhu Region', capitalCoords: [31.5, 72.0],
        color: '#F59E0B', gradient: ['#F59E0B', '#D97706'],
        description: 'The Early Vedic period saw Aryan migrations into the Indian subcontinent. Society was pastoral and semi-nomadic, centered around the Sapta Sindhu (Seven Rivers) region of Punjab. The Rigveda was composed during this era.',
        keyFacts: ['Rigveda composed during this period', 'Pastoral and semi-nomadic society', 'Centered in Punjab (Sapta Sindhu)', 'Tribal political organization (Jana)', 'Horse-centered culture'],
        territory: [
            [34.0, 70.5], [34.2, 71.3], [34.5, 72.2], [34.3, 73.5], [33.8, 74.5], [33.0, 75.2],
            [32.2, 75.8], [31.5, 76.2], [30.8, 76.4], [30.2, 76.2], [29.5, 75.5], [29.0, 74.5],
            [28.8, 73.5], [29.0, 72.5], [29.2, 71.5], [29.5, 70.8], [30.0, 70.2], [30.8, 69.8],
            [31.5, 69.5], [32.5, 69.8], [33.2, 70.0], [34.0, 70.5]
        ]
    },
    {
        id: 'later-vedic',
        name: 'Later Vedic Civilization',
        era: 'vedic', startYear: -1000, endYear: -600,
        capital: 'Hastinapura', capitalCoords: [29.17, 78.02],
        color: '#D97706', gradient: ['#D97706', '#B45309'],
        description: 'The Later Vedic period saw expansion eastward into the Gangetic plains. Kingdoms replaced tribal organizations. The later Vedas and early Upanishads were composed. Agriculture became primary.',
        keyFacts: ['Expansion into Gangetic plains', 'Emergence of Janapadas', 'Later Vedas and Upanishads composed', 'Transition to agricultural society', 'Varna system became more rigid'],
        territory: [
            [34.0, 70.5], [34.5, 72.5], [34.3, 74.0], [33.5, 75.5], [32.5, 76.5], [31.5, 77.5],
            [30.5, 79.0], [29.5, 80.5], [28.5, 82.0], [27.5, 83.5], [26.8, 84.0], [26.0, 83.5],
            [25.5, 82.5], [25.2, 81.0], [25.5, 79.5], [26.0, 78.0], [26.5, 76.5], [27.5, 75.0],
            [28.5, 73.5], [29.0, 72.0], [29.5, 71.0], [30.5, 70.0], [31.5, 69.5], [33.0, 70.0], [34.0, 70.5]
        ]
    },

    // ── MAHAJANAPADAS ──
    {
        id: 'magadha-haryanka',
        name: 'Magadha (Haryanka Dynasty)',
        era: 'mahajanapada', startYear: -544, endYear: -413,
        capital: 'Rajagriha', capitalCoords: [25.03, 85.42],
        color: '#EF4444', gradient: ['#EF4444', '#DC2626'],
        description: 'The Haryanka dynasty established Magadha as the most powerful Mahajanapada. Bimbisara and Ajatashatru expanded through conquest. This period saw the rise of Buddhism and Jainism.',
        keyFacts: ['Bimbisara — founder, contemporary of Buddha', 'Ajatashatru fortified Pataliputra', 'Rise of Buddhism and Jainism', 'Control over iron-rich regions', 'Strategic location on trade routes'],
        territory: [
            [26.5, 83.5], [26.8, 84.0], [27.0, 84.8], [26.8, 85.5], [26.5, 86.2], [26.0, 86.8],
            [25.5, 87.0], [25.0, 86.8], [24.5, 86.2], [24.0, 85.8], [23.8, 85.2], [24.0, 84.5],
            [24.3, 83.8], [24.8, 83.2], [25.5, 83.0], [26.0, 83.2], [26.5, 83.5]
        ]
    },
    {
        id: 'magadha-nanda',
        name: 'Nanda Dynasty',
        era: 'mahajanapada', startYear: -345, endYear: -322,
        capital: 'Pataliputra', capitalCoords: [25.61, 85.14],
        color: '#B91C1C', gradient: ['#B91C1C', '#991B1B'],
        description: 'The Nanda dynasty created the first great empire of north India. Mahapadma Nanda unified much of the subcontinent and maintained a massive army.',
        keyFacts: ['First empire to unify most of north India', 'Mahapadma Nanda — "Destroyer of Kshatriyas"', 'Enormous military force', 'Efficient taxation', 'Overthrown by Chandragupta Maurya'],
        territory: [
            [30.0, 75.0], [30.2, 76.5], [29.8, 78.0], [29.0, 79.5], [28.0, 81.5], [27.0, 83.5],
            [26.5, 85.0], [26.0, 86.5], [25.5, 87.5], [25.0, 88.0], [24.0, 87.5], [23.0, 86.5],
            [22.5, 85.5], [22.0, 84.0], [22.0, 82.5], [22.5, 81.0], [23.0, 79.5], [23.5, 78.0],
            [24.5, 76.5], [25.5, 75.5], [27.0, 74.5], [28.5, 74.0], [30.0, 75.0]
        ]
    },

    // ── MAURYA EMPIRE ──
    {
        id: 'maurya',
        name: 'Maurya Empire',
        era: 'maurya', startYear: -322, endYear: -185,
        capital: 'Pataliputra', capitalCoords: [25.61, 85.14],
        color: '#8B5CF6', gradient: ['#8B5CF6', '#7C3AED'],
        description: 'The Maurya Empire was the first pan-Indian empire. Founded by Chandragupta Maurya with Chanakya. Ashoka embraced Buddhism after the Kalinga War and spread its message across Asia.',
        keyFacts: ['Chandragupta Maurya — Founder (guided by Chanakya)', 'Ashoka the Great — Greatest ruler', 'Arthashastra by Kautilya', 'Ashoka Pillars and rock edicts', 'Spread of Buddhism to SE Asia', '~50-60 million population'],
        territory: [
            [36.5, 69.5], [36.8, 71.0], [36.5, 73.0], [35.5, 75.0], [34.5, 76.5], [33.5, 77.5],
            [32.5, 78.5], [31.5, 79.0], [30.0, 79.5], [29.0, 81.0], [28.0, 83.0], [27.0, 85.5],
            [26.0, 87.5], [25.0, 89.0], [24.0, 89.5], [22.5, 89.0], [21.5, 87.5], [20.5, 86.0],
            [19.0, 84.5], [17.5, 82.5], [16.0, 80.5], [15.0, 79.5], [14.0, 79.0], [13.5, 78.0],
            [13.0, 77.5], [13.5, 76.5], [14.5, 75.5], [15.5, 74.5], [17.0, 73.5], [18.5, 73.0],
            [20.0, 72.5], [21.5, 71.5], [23.0, 70.0], [24.5, 69.0], [26.0, 68.0], [28.0, 67.0],
            [30.0, 66.5], [32.0, 67.0], [33.5, 67.5], [35.0, 68.5], [36.5, 69.5]
        ]
    },

    // ── POST-MAURYA ──
    {
        id: 'shunga',
        name: 'Shunga Dynasty',
        era: 'postmaurya', startYear: -185, endYear: -73,
        capital: 'Vidisha', capitalCoords: [23.52, 77.81],
        color: '#EC4899', gradient: ['#EC4899', '#DB2777'],
        description: 'The Shunga dynasty succeeded the Mauryas and revived Brahmanism. The period saw development of Buddhist art at Sanchi and Bharhut.',
        keyFacts: ['Revival of Brahmanical traditions', 'Patronage of Sanskrit literature', 'Buddhist stupas at Sanchi and Bharhut', 'Greek invasions from northwest', 'Ashvamedha sacrifice performed'],
        territory: [
            [28.5, 77.0], [28.0, 78.5], [27.5, 80.0], [27.0, 81.5], [26.5, 83.0], [26.0, 84.5],
            [25.5, 85.5], [24.5, 85.5], [23.5, 85.0], [22.5, 84.0], [22.0, 82.5], [22.0, 81.0],
            [22.5, 79.5], [23.0, 78.0], [23.5, 76.5], [24.5, 75.5], [25.5, 75.0], [27.0, 75.5], [28.5, 77.0]
        ]
    },
    {
        id: 'satavahana',
        name: 'Satavahana Dynasty',
        era: 'postmaurya', startYear: -230, endYear: 220,
        capital: 'Pratishthana (Paithan)', capitalCoords: [19.48, 75.38],
        color: '#F472B6', gradient: ['#F472B6', '#EC4899'],
        description: 'The Satavahanas were the first great Deccan empire. They bridged north and south Indian cultures and developed extensive trade with Rome.',
        keyFacts: ['First great Deccan empire', 'Gautamiputra Satakarni — Greatest ruler', 'Extensive Roman trade', 'Amaravati stupa patronage', 'First Indian coins with royal portraits'],
        territory: [
            [21.5, 73.5], [21.8, 75.0], [21.5, 76.5], [21.0, 78.0], [20.5, 79.5], [19.5, 80.5],
            [18.5, 81.0], [17.5, 80.5], [16.5, 79.5], [15.5, 79.0], [15.0, 78.0], [15.5, 76.5],
            [16.0, 75.5], [17.0, 74.5], [18.0, 73.5], [19.5, 73.0], [20.5, 73.0], [21.5, 73.5]
        ]
    },
    {
        id: 'kushan',
        name: 'Kushan Empire',
        era: 'postmaurya', startYear: 30, endYear: 375,
        capital: 'Peshawar / Mathura', capitalCoords: [34.01, 71.58],
        color: '#D946EF', gradient: ['#D946EF', '#C026D3'],
        description: 'The Kushan Empire connected Indian, Chinese, Roman, and Central Asian civilizations. Under Kanishka, Gandhara art flourished.',
        keyFacts: ['Kanishka the Great', 'Hub of Silk Road trade', 'Gandhara Greco-Buddhist art', 'Fourth Buddhist Council', 'Patronage of Mahayana Buddhism'],
        territory: [
            [37.5, 67.5], [38.0, 69.0], [37.8, 71.0], [37.0, 73.0], [36.0, 74.5], [35.0, 75.5],
            [34.0, 76.5], [33.0, 77.0], [31.5, 77.5], [30.0, 78.0], [28.5, 78.0], [27.0, 77.5],
            [26.0, 77.0], [25.5, 76.0], [26.0, 74.5], [27.0, 73.0], [28.0, 71.5], [29.5, 70.0],
            [31.0, 69.0], [32.5, 67.5], [34.0, 66.5], [36.0, 66.5], [37.5, 67.5]
        ]
    },

    // ── GUPTA EMPIRE ──
    {
        id: 'gupta',
        name: 'Gupta Empire',
        era: 'gupta', startYear: 320, endYear: 550,
        capital: 'Pataliputra', capitalCoords: [25.61, 85.14],
        color: '#10B981', gradient: ['#10B981', '#059669'],
        description: 'The Gupta Empire is the "Golden Age of India." Art, science, mathematics, astronomy, and philosophy reached unprecedented heights under Chandragupta II (Vikramaditya).',
        keyFacts: ['"Golden Age of India"', 'Aryabhata — discovered zero', 'Kalidasa — greatest Sanskrit poet', 'Nalanda University', 'Iron Pillar of Delhi', 'Ajanta & Ellora cave paintings', 'Decimal number system'],
        territory: [
            [32.0, 74.0], [32.0, 76.0], [31.5, 77.5], [30.5, 79.0], [29.5, 81.0], [28.5, 83.0],
            [27.5, 85.0], [26.5, 87.0], [25.5, 88.5], [24.0, 88.5], [22.5, 88.0], [21.5, 86.5],
            [20.5, 85.0], [19.5, 83.5], [19.0, 82.0], [19.5, 80.0], [20.0, 78.5], [21.0, 77.0],
            [22.0, 75.5], [23.0, 74.0], [24.5, 73.0], [26.0, 72.5], [27.5, 72.5], [29.0, 73.0],
            [30.5, 73.5], [32.0, 74.0]
        ]
    },

    // ── POST-GUPTA ──
    {
        id: 'harsha',
        name: "Harsha's Empire",
        era: 'postgupta', startYear: 606, endYear: 647,
        capital: 'Kannauj', capitalCoords: [27.06, 79.92],
        color: '#F97316', gradient: ['#F97316', '#EA580C'],
        description: 'Emperor Harsha was the last great Hindu ruler of north India. The Chinese pilgrim Xuanzang visited his court.',
        keyFacts: ['Last great Hindu emperor of north India', 'Xuanzang visited his court', 'Patron of Nalanda University', 'Author of three Sanskrit plays', 'Empire dissolved after his death'],
        territory: [
            [31.5, 74.5], [31.0, 76.5], [30.0, 78.5], [29.0, 80.5], [28.0, 82.5], [27.0, 84.5],
            [26.0, 86.0], [25.0, 86.5], [24.0, 86.0], [23.0, 84.5], [22.5, 83.0], [23.0, 81.0],
            [23.5, 79.5], [24.0, 78.0], [25.0, 76.5], [26.0, 75.5], [27.5, 74.5], [29.0, 74.0],
            [30.5, 74.0], [31.5, 74.5]
        ]
    },
    {
        id: 'chalukya',
        name: 'Chalukya Dynasty',
        era: 'postgupta', startYear: 543, endYear: 753,
        capital: 'Badami', capitalCoords: [15.92, 75.68],
        color: '#FB923C', gradient: ['#FB923C', '#F97316'],
        description: 'The Badami Chalukyas challenged both northern and southern powers. Pulakeshin II defeated Harsha. They developed the Vesara architecture.',
        keyFacts: ['Pulakeshin II defeated Harshavardhana', 'Aihole inscription', 'Badami cave temples', 'Vesara architectural style', 'Controlled Deccan trade routes'],
        territory: [
            [19.0, 74.0], [19.0, 76.0], [18.5, 77.5], [17.5, 78.5], [16.5, 79.0], [15.5, 79.0],
            [14.5, 78.5], [13.5, 77.5], [13.5, 76.5], [14.0, 75.5], [15.0, 74.5], [16.0, 73.5],
            [17.5, 73.0], [18.5, 73.5], [19.0, 74.0]
        ]
    },
    {
        id: 'pallava',
        name: 'Pallava Dynasty',
        era: 'postgupta', startYear: 275, endYear: 897,
        capital: 'Kanchipuram', capitalCoords: [12.83, 79.70],
        color: '#FBBF24', gradient: ['#FBBF24', '#F59E0B'],
        description: 'The Pallavas were known for Shore Temple and Pancha Rathas at Mahabalipuram (UNESCO). They patronized Tamil and Sanskrit literature.',
        keyFacts: ['Mahabalipuram — UNESCO World Heritage', 'Kanchipuram — City of Thousand Temples', 'Narasimhavarman I — "Mahamalla"', 'Tamil Bhakti movement patronized', 'Dravidian architecture developed'],
        territory: [
            [15.5, 79.0], [15.5, 80.0], [14.5, 80.3], [13.5, 80.3], [12.5, 80.0], [11.5, 79.8],
            [11.0, 79.0], [11.0, 78.0], [11.5, 77.5], [12.5, 77.0], [13.5, 77.0], [14.5, 77.5],
            [15.0, 78.0], [15.5, 79.0]
        ]
    },

    // ── RAJPUT & REGIONAL ──
    {
        id: 'chola',
        name: 'Chola Empire',
        era: 'rajput', startYear: 848, endYear: 1279,
        capital: 'Thanjavur', capitalCoords: [10.78, 79.14],
        color: '#06B6D4', gradient: ['#06B6D4', '#0891B2'],
        description: 'The Chola Empire was the greatest naval power of ancient India. Rajendra Chola I conquered Southeast Asian territories.',
        keyFacts: ['Greatest naval power in Indian history', 'Rajendra Chola I conquered SE Asia', 'Brihadeeswarar Temple (UNESCO)', 'Maritime trade across Indian Ocean', 'Chola bronzes — finest Indian art', 'Village self-governance through sabhas'],
        territory: [
            [15.5, 78.5], [15.5, 80.2], [14.5, 80.3], [13.5, 80.3], [12.0, 80.0], [10.5, 79.8],
            [9.5, 79.0], [8.5, 77.5], [8.0, 77.0], [8.5, 76.5], [9.5, 76.0], [10.5, 76.0],
            [11.5, 76.0], [12.5, 76.5], [13.5, 77.0], [14.5, 77.5], [15.5, 78.5]
        ]
    },
    {
        id: 'rajput-pratiharas',
        name: 'Gurjara-Pratihara Empire',
        era: 'rajput', startYear: 730, endYear: 1036,
        capital: 'Kannauj', capitalCoords: [27.06, 79.92],
        color: '#22D3EE', gradient: ['#22D3EE', '#06B6D4'],
        description: 'The Gurjara-Pratiharas defended India against Arab invasions. They controlled strategic Kannauj.',
        keyFacts: ['Defended India against Arab invasions', 'Controlled strategic Kannauj', 'Mihira Bhoja — greatest ruler', 'Trilateral struggle with Palas and Rashtrakutas', 'Weakened by Rashtrakuta attacks'],
        territory: [
            [29.5, 72.5], [29.5, 75.0], [29.0, 77.0], [28.0, 79.0], [27.0, 80.5], [26.0, 80.5],
            [25.0, 79.5], [24.5, 78.0], [24.5, 76.5], [25.0, 75.0], [25.5, 73.5], [26.5, 72.5],
            [27.5, 72.0], [28.5, 72.0], [29.5, 72.5]
        ]
    },
    {
        id: 'rashtrakuta',
        name: 'Rashtrakuta Dynasty',
        era: 'rajput', startYear: 753, endYear: 982,
        capital: 'Manyakheta', capitalCoords: [17.19, 76.57],
        color: '#67E8F9', gradient: ['#67E8F9', '#22D3EE'],
        description: 'The Rashtrakutas were among the most powerful Deccan empires. The Kailasa Temple at Ellora is their greatest achievement.',
        keyFacts: ['Kailasa Temple at Ellora', 'Amoghavarsha I — "Ashoka of the South"', 'Tripartite struggle for Kannauj', 'Arab travelers praised their power', 'Patronized Jainism and Kannada literature'],
        territory: [
            [21.0, 73.5], [21.0, 76.0], [20.5, 78.0], [19.5, 79.5], [18.5, 80.0], [17.5, 79.5],
            [16.5, 79.0], [15.5, 78.0], [15.0, 77.0], [15.0, 75.5], [15.5, 74.5], [16.5, 73.5],
            [17.5, 73.0], [19.0, 73.0], [20.0, 73.0], [21.0, 73.5]
        ]
    },

    // ── DELHI SULTANATE ──
    {
        id: 'slave-dynasty',
        name: 'Mamluk (Slave) Dynasty',
        era: 'sultanate', startYear: 1206, endYear: 1290,
        capital: 'Delhi', capitalCoords: [28.61, 77.21],
        color: '#84CC16', gradient: ['#84CC16', '#65A30D'],
        description: 'The first dynasty of the Delhi Sultanate. Founded by Qutb ud-Din Aibak. The Qutub Minar remains one of Delhi\'s most iconic monuments.',
        keyFacts: ['Qutb ud-Din Aibak — Founder', 'Iltutmish consolidated the Sultanate', 'Razia Sultan — first female Muslim ruler', 'Balban — "Iron and Blood" policy', 'Qutub Minar — tallest brick minaret'],
        territory: [
            [33.0, 73.5], [33.0, 76.0], [32.0, 77.5], [30.5, 79.0], [29.0, 80.5], [27.5, 81.5],
            [26.0, 81.0], [25.0, 80.0], [24.5, 78.5], [24.5, 77.0], [25.0, 75.5], [26.0, 74.0],
            [27.5, 73.0], [29.0, 72.5], [30.5, 72.5], [32.0, 73.0], [33.0, 73.5]
        ]
    },
    {
        id: 'tughlaq',
        name: 'Tughlaq Dynasty',
        era: 'sultanate', startYear: 1320, endYear: 1414,
        capital: 'Delhi / Daulatabad', capitalCoords: [28.61, 77.21],
        color: '#A3E635', gradient: ['#A3E635', '#84CC16'],
        description: 'The Tughlaq dynasty saw the Delhi Sultanate reach its greatest extent under Muhammad bin Tughlaq, controlling almost the entire subcontinent.',
        keyFacts: ['Muhammad bin Tughlaq — Most ambitious ruler', 'Greatest territorial extent', 'Capital shifted to Daulatabad', 'Introduction of token currency', 'Ibn Battuta visited', 'Firoz Shah Tughlaq — welfare measures'],
        territory: [
            [35.0, 72.0], [35.0, 75.0], [34.0, 77.0], [32.5, 78.5], [31.0, 79.5], [29.0, 82.0],
            [27.5, 84.5], [26.0, 87.0], [24.5, 88.5], [23.0, 88.0], [21.0, 87.0], [19.0, 84.5],
            [17.0, 82.0], [15.5, 80.0], [14.5, 78.5], [14.0, 77.5], [14.5, 76.0], [16.0, 74.5],
            [17.5, 73.5], [19.5, 72.5], [21.5, 71.0], [23.5, 70.0], [25.5, 69.0], [28.0, 68.5],
            [30.0, 69.0], [32.0, 70.0], [34.0, 71.0], [35.0, 72.0]
        ]
    },
    {
        id: 'vijayanagara',
        name: 'Vijayanagara Empire',
        era: 'sultanate', startYear: 1336, endYear: 1646,
        capital: 'Hampi', capitalCoords: [15.33, 76.46],
        color: '#BEF264', gradient: ['#BEF264', '#A3E635'],
        description: 'The last great Hindu empire of South India. Hampi ruins are a UNESCO World Heritage Site.',
        keyFacts: ['Last great Hindu empire of South India', 'Krishnadevaraya — greatest ruler', 'Hampi ruins — UNESCO', 'Defeated at Battle of Talikota (1565)', 'Rich literary tradition', 'Sophisticated irrigation'],
        territory: [
            [17.5, 74.5], [17.5, 77.0], [17.0, 78.5], [16.0, 79.5], [15.0, 80.0], [13.5, 80.0],
            [12.0, 79.5], [10.5, 79.0], [9.5, 78.0], [9.0, 77.0], [10.0, 76.0], [11.0, 75.5],
            [12.5, 75.0], [14.0, 74.0], [15.5, 73.5], [16.5, 73.5], [17.5, 74.5]
        ]
    },

    // ── MUGHAL EMPIRE ──
    {
        id: 'mughal-early',
        name: 'Early Mughal Empire',
        era: 'mughal', startYear: 1526, endYear: 1556,
        capital: 'Agra', capitalCoords: [27.18, 78.02],
        color: '#A855F7', gradient: ['#A855F7', '#9333EA'],
        description: 'Founded by Babur at the First Battle of Panipat (1526). Humayun lost and regained the empire.',
        keyFacts: ['Babur — Founded the Mughal Empire (1526)', 'First Battle of Panipat', 'Battle of Khanwa — defeated Rana Sanga', 'Sher Shah Suri — Rupee, Grand Trunk Road', 'Humayun recaptured Delhi 1555'],
        territory: [
            [35.0, 69.5], [35.0, 73.0], [34.0, 75.5], [33.0, 77.0], [31.5, 78.5], [29.5, 80.5],
            [28.0, 82.0], [26.5, 82.5], [25.0, 82.0], [24.0, 80.5], [24.0, 78.5], [24.5, 76.5],
            [25.5, 74.5], [27.0, 72.5], [28.5, 71.0], [30.0, 69.5], [32.0, 68.5], [34.0, 69.0], [35.0, 69.5]
        ]
    },
    {
        id: 'mughal-akbar',
        name: 'Mughal Empire (Akbar)',
        era: 'mughal', startYear: 1556, endYear: 1605,
        capital: 'Agra / Fatehpur Sikri', capitalCoords: [27.18, 78.02],
        color: '#9333EA', gradient: ['#9333EA', '#7E22CE'],
        description: 'Akbar transformed the Mughals into one of the world\'s most powerful states with religious tolerance and efficient administration.',
        keyFacts: ['Akbar the Great', 'Sulh-i-Kul — universal peace', 'Mansabdari system', 'Din-i-Ilahi', 'Fatehpur Sikri', 'Navratnas — Nine Gems', 'Todar Mal revenue system'],
        territory: [
            [35.0, 69.5], [35.5, 72.5], [35.0, 75.0], [34.0, 77.0], [32.5, 78.5], [31.0, 79.5],
            [29.0, 82.0], [27.5, 84.5], [26.0, 86.5], [24.5, 87.5], [23.0, 86.5], [21.5, 84.5],
            [20.0, 82.5], [19.5, 80.5], [20.0, 78.0], [21.0, 76.0], [22.5, 73.5], [24.0, 71.5],
            [26.0, 70.0], [28.0, 68.5], [30.0, 67.5], [32.0, 68.0], [34.0, 69.0], [35.0, 69.5]
        ]
    },
    {
        id: 'mughal-peak',
        name: 'Mughal Empire (Peak)',
        era: 'mughal', startYear: 1605, endYear: 1707,
        capital: 'Delhi / Agra', capitalCoords: [28.61, 77.21],
        color: '#7E22CE', gradient: ['#7E22CE', '#6B21A8'],
        description: 'Peak under Shah Jahan and Aurangzeb. Shah Jahan built the Taj Mahal. Aurangzeb expanded to greatest extent but his policies led to decline.',
        keyFacts: ['Shah Jahan — Taj Mahal, Red Fort', 'Aurangzeb — largest extent', 'Empire from Kabul to Assam', 'Maratha resistance under Shivaji', '~25% of world GDP'],
        territory: [
            [36.0, 68.0], [36.5, 71.0], [36.0, 74.0], [35.0, 76.0], [34.0, 77.5], [33.0, 78.5],
            [31.5, 79.5], [29.5, 82.0], [28.0, 85.0], [26.5, 87.5], [25.0, 89.0], [23.0, 89.0],
            [21.0, 88.0], [19.0, 85.5], [17.0, 83.0], [15.0, 80.5], [13.5, 79.0], [12.5, 78.0],
            [12.0, 77.5], [13.0, 76.0], [14.5, 74.5], [16.5, 73.5], [18.5, 72.5], [20.5, 71.5],
            [22.5, 70.0], [24.5, 69.0], [26.5, 68.0], [28.5, 67.0], [30.5, 66.5], [33.0, 67.0],
            [35.0, 67.5], [36.0, 68.0]
        ]
    },
    {
        id: 'maratha',
        name: 'Maratha Empire',
        era: 'mughal', startYear: 1674, endYear: 1818,
        capital: 'Raigad / Pune', capitalCoords: [18.52, 73.86],
        color: '#C084FC', gradient: ['#C084FC', '#A855F7'],
        description: 'Founded by Chhatrapati Shivaji Maharaj. The Peshwas expanded it into a confederacy covering most of India.',
        keyFacts: ['Chhatrapati Shivaji — Founder', 'Guerrilla warfare (Ganimi Kava)', 'Peshwa Bajirao I — never lost a battle', 'Battle of Panipat (1761)', 'Anglo-Maratha Wars', 'Ashtapradhan — council of eight ministers'],
        territory: [
            [26.0, 73.0], [26.0, 76.0], [25.0, 78.5], [24.0, 80.0], [22.5, 81.5], [21.5, 81.5],
            [20.0, 80.0], [18.5, 79.0], [17.5, 78.0], [16.5, 77.0], [16.0, 75.5], [16.5, 74.5],
            [17.5, 73.5], [18.5, 73.0], [20.0, 72.5], [21.5, 72.0], [23.5, 72.0], [25.0, 72.5], [26.0, 73.0]
        ]
    },

    // ── SIKH & COLONIAL ──
    {
        id: 'sikh',
        name: 'Sikh Empire',
        era: 'colonial', startYear: 1799, endYear: 1849,
        capital: 'Lahore', capitalCoords: [31.55, 74.35],
        color: '#F97316', gradient: ['#F97316', '#EA580C'],
        description: 'Under Maharaja Ranjit Singh — "Lion of Punjab." Created a modern, secular state with the disciplined Khalsa Fauj.',
        keyFacts: ['Maharaja Ranjit Singh — "Lion of Punjab"', 'Khalsa Fauj — top army globally', 'Secular state', 'Possessed Kohinoor diamond', 'Anglo-Sikh Wars', 'Golden Temple under Sikh sovereignty'],
        territory: [
            [36.0, 71.5], [36.0, 73.5], [35.5, 75.0], [35.0, 76.0], [34.5, 77.0], [33.5, 77.5],
            [32.5, 77.0], [31.0, 76.5], [30.0, 75.0], [29.5, 74.0], [29.5, 72.5], [30.0, 71.0],
            [31.0, 70.0], [32.0, 69.5], [33.5, 70.0], [35.0, 70.5], [36.0, 71.5]
        ]
    },
    {
        id: 'british-india',
        name: 'British India',
        era: 'colonial', startYear: 1757, endYear: 1947,
        capital: 'Calcutta / New Delhi', capitalCoords: [28.61, 77.21],
        color: '#EF4444', gradient: ['#EF4444', '#DC2626'],
        description: 'British colonial rule from Battle of Plassey (1757). Saw exploitation, modernization, and the Indian Independence Movement.',
        keyFacts: ['Battle of Plassey (1757)', 'Revolt of 1857', 'Indian National Congress (1885)', 'Mahatma Gandhi — Non-violence', 'Jallianwala Bagh (1919)', 'Quit India (1942)', 'Partition (1947)'],
        territory: [
            [36.5, 74.5], [36.0, 76.5], [35.0, 77.5], [34.0, 78.5], [32.5, 79.0], [31.0, 80.0],
            [29.5, 82.5], [28.0, 85.0], [27.0, 88.0], [26.0, 89.5], [24.5, 91.5], [23.0, 92.0],
            [22.0, 91.5], [21.0, 89.5], [20.0, 87.0], [18.5, 85.0], [16.5, 82.5], [14.5, 80.5],
            [12.5, 80.0], [10.5, 79.5], [9.0, 79.0], [8.0, 77.5], [8.0, 76.5], [9.5, 76.0],
            [11.0, 75.0], [13.0, 74.0], [15.5, 73.5], [18.0, 72.5], [20.0, 71.5], [22.0, 69.5],
            [24.0, 68.5], [26.0, 67.5], [28.5, 66.5], [31.0, 66.5], [33.0, 67.5], [35.0, 69.0],
            [36.5, 71.0], [36.8, 73.0], [36.5, 74.5]
        ]
    },

    // ── MODERN INDIA ──
    {
        id: 'modern-india',
        name: 'Republic of India',
        era: 'modern', startYear: 1947, endYear: 2026,
        capital: 'New Delhi', capitalCoords: [28.61, 77.21],
        color: '#F97316', gradient: ['#F97316', '#EA580C'],
        description: 'India gained independence August 15, 1947. World\'s largest democracy with 1.4 billion people. Major global power in technology and space.',
        keyFacts: ['Independence: August 15, 1947', 'Republic Day: January 26, 1950', 'World\'s largest democracy', 'Constitution by Dr. B.R. Ambedkar', 'Chandrayaan, Mangalyaan', 'IT revolution', '5th largest economy'],
        territory: [
            [36.0, 74.0], [35.5, 76.5], [34.5, 77.5], [33.5, 78.5], [32.5, 79.0], [31.0, 80.0],
            [30.0, 81.0], [28.5, 83.5], [27.5, 86.0], [27.0, 88.0], [26.5, 89.5], [25.0, 91.0],
            [24.0, 92.0], [23.0, 92.5], [22.5, 91.0], [22.0, 89.5], [21.5, 88.5], [21.5, 87.0],
            [19.5, 85.0], [17.5, 83.0], [15.5, 81.0], [13.5, 80.3], [12.0, 80.0], [10.5, 79.5],
            [9.0, 79.0], [8.0, 77.5], [8.0, 76.5], [9.0, 76.0], [10.5, 75.5], [12.0, 75.0],
            [13.5, 74.5], [15.5, 73.5], [17.5, 73.0], [19.5, 72.5], [21.0, 72.0], [22.0, 69.5],
            [23.0, 68.5], [24.0, 68.5], [24.0, 70.5], [24.5, 71.0], [26.0, 70.0], [27.5, 69.0],
            [29.0, 69.5], [30.0, 70.0], [31.5, 71.5], [33.0, 73.0], [34.5, 74.0], [36.0, 74.0]
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
    { year: -1500, label: '1500 BCE' }, { year: -1000, label: '1000 BCE' },
    { year: -500, label: '500 BCE' }, { year: -322, label: '322 BCE' },
    { year: -185, label: '185 BCE' }, { year: 0, label: '1 CE' },
    { year: 320, label: '320 CE' }, { year: 550, label: '550 CE' },
    { year: 750, label: '750 CE' }, { year: 1000, label: '1000 CE' },
    { year: 1206, label: '1206 CE' }, { year: 1526, label: '1526 CE' },
    { year: 1707, label: '1707 CE' }, { year: 1857, label: '1857 CE' },
    { year: 1947, label: '1947 CE' }, { year: 2026, label: '2026 CE' },
];
