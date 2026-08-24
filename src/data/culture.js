// ═══════════════════════════════════════════════════════════════
//  ART & CULTURE — Complete Data
// ═══════════════════════════════════════════════════════════════

export const CULTURE_SECTIONS = [
    {
        id: 'architecture',
        title: 'Architecture',
        icon: '🏛️',
        color: '#F59E0B',
        desc: 'From rock-cut caves to soaring temples — Indian architecture spans 5000 years of innovation',
        items: [
            {
                name: 'Nagara Style (North Indian)',
                period: '5th–13th Century CE',
                desc: 'Characterized by Shikhara (curvilinear tower) over the sanctum. The temple rises like a mountain peak. Sub-styles: Latina, Phamsana, Valabhi.',
                examples: ['Kandariya Mahadeva Temple, Khajuraho', 'Sun Temple, Konark', 'Lingaraja Temple, Bhubaneswar', 'Somnath Temple, Gujarat'],
                keyFeatures: ['Curvilinear Shikhara (tower)', 'Garbhagriha (sanctum) + Mandapa (hall)', 'No boundary walls typically', 'Stone construction, elaborate carvings'],
                color: '#F59E0B'
            },
            {
                name: 'Dravida Style (South Indian)',
                period: '7th Century CE onwards',
                desc: 'Characterized by Vimana (pyramidal tower), Gopuram (gateway tower), and massive temple complexes with Prakaras (enclosure walls). Tamil Nadu has the finest examples.',
                examples: ['Brihadeeswarar Temple, Thanjavur', 'Meenakshi Temple, Madurai', 'Shore Temple, Mahabalipuram', 'Kailasanatha Temple, Kanchipuram'],
                keyFeatures: ['Pyramidal Vimana over sanctum', 'Towering Gopurams at entrances', 'Multiple Prakaras (enclosures)', 'Elaborate sculptures and pillared halls'],
                color: '#EF4444'
            },
            {
                name: 'Vesara Style (Deccan)',
                period: '7th–12th Century CE',
                desc: 'A blend of Nagara and Dravida styles found primarily in the Deccan region. Developed under Chalukya, Hoysala, and Rashtrakuta patronage.',
                examples: ['Hoysaleswara Temple, Halebidu', 'Chennakesava Temple, Belur', 'Durga Temple, Aihole', 'Virupaksha Temple, Pattadakal'],
                keyFeatures: ['Star-shaped or circular plans', 'Detailed soapstone carvings', 'Low platform base', 'Elements of both Nagara and Dravida'],
                color: '#8B5CF6'
            },
            {
                name: 'Rock-Cut Architecture',
                period: '3rd Century BCE – 7th Century CE',
                desc: 'Caves carved directly from rock faces — for Buddhist, Jain, and Hindu worship. The Kailasa Temple at Ellora is the world\'s largest monolithic structure.',
                examples: ['Ajanta Caves (Buddhist paintings)', 'Ellora Caves (Buddhist, Hindu, Jain)', 'Elephanta Caves (Shiva)', 'Barabar Caves (oldest, Maurya era)'],
                keyFeatures: ['Carved from living rock', 'Chaitya halls (prayer) and Viharas (monasteries)', 'Elaborate paintings and sculptures', 'Engineering marvel — top-down carving at Ellora'],
                color: '#10B981'
            },
            {
                name: 'Indo-Islamic Architecture',
                period: '12th–18th Century CE',
                desc: 'Fusion of Islamic (domes, arches, minarets, calligraphy) with Indian (brackets, trabeate, ornamentation) building traditions created a unique synthesis.',
                examples: ['Qutub Minar, Delhi', 'Taj Mahal, Agra', 'Humayun\'s Tomb, Delhi', 'Gol Gumbaz, Bijapur', 'Jama Masjid, Delhi'],
                keyFeatures: ['True arches and domes', 'Minarets and calligraphic decoration', 'Char Bagh (four-garden) layouts', 'Use of marble, sandstone inlay (pietra dura)', 'Jali (lattice screens)'],
                color: '#A855F7'
            },
            {
                name: 'Colonial Architecture',
                period: '18th–20th Century CE',
                desc: 'European styles — Gothic, Baroque, Neo-Classical — adapted to Indian conditions. Later evolved into Indo-Saracenic style blending European and Indian elements.',
                examples: ['Victoria Memorial, Kolkata', 'Gateway of India, Mumbai', 'Rashtrapati Bhavan (Lutyens), Delhi', 'CST (Victoria Terminus), Mumbai'],
                keyFeatures: ['Gothic, Neo-Classical, Baroque elements', 'Indo-Saracenic fusion (domes + Gothic)', 'Grand scale — symbols of imperial power', 'Lutyens\' Delhi — planned colonial capital'],
                color: '#3B82F6'
            }
        ]
    },
    {
        id: 'paintings',
        title: 'Paintings',
        icon: '🎨',
        color: '#EF4444',
        desc: 'From Ajanta\'s immortal frescoes to Mughal miniatures — India\'s painting traditions are among the world\'s oldest',
        items: [
            {
                name: 'Ajanta Paintings',
                period: '2nd Century BCE – 5th Century CE',
                desc: 'Buddhist cave paintings in the Ajanta Caves (Maharashtra) — considered the finest surviving examples of ancient Indian art. Jataka tales depicted with extraordinary naturalism, color, and emotional depth.',
                examples: ['Cave 1 — Padmapani Bodhisattva', 'Cave 2 — Birth of Buddha', 'Cave 16 — Dying Princess', 'Cave 17 — Coming of Sinhala'],
                keyFeatures: ['Fresco-secco technique', 'Natural pigments — lapis lazuli, ochre', 'Narrative storytelling', 'Masterful chiaroscuro (light-shadow)'],
                color: '#F59E0B'
            },
            {
                name: 'Mughal Miniatures',
                period: '16th–19th Century CE',
                desc: 'Introduced by Humayun from Persia, perfected under Akbar and Jahangir. Exquisitely detailed paintings on manuscripts, albums, and individual sheets.',
                examples: ['Akbarnama illustrations', 'Jahangir\'s nature studies', 'Padshahnama', 'Hamzanama (1400 paintings)'],
                keyFeatures: ['Persian-Indian fusion', 'Incredible detail and realism', 'Natural studies (birds, animals)', 'Court scenes, battles, portraits'],
                color: '#A855F7'
            },
            {
                name: 'Rajasthani & Pahari Schools',
                period: '16th–19th Century CE',
                desc: 'Regional schools with distinct styles. Rajasthani: bold colors, romantic themes. Pahari (Kangra, Basohli): lyrical, devotional — especially Radha-Krishna themes.',
                examples: ['Mewar paintings — Rajasthani', 'Kangra paintings — Pahari', 'Basohli — bold, vivid Pahari', 'Bundi school — nature themes'],
                keyFeatures: ['Bold primary colors (Rajasthani)', 'Lyrical, romantic themes', 'Krishna-Radha narrative art', 'Nature and seasonal Ragamala paintings'],
                color: '#EF4444'
            },
            {
                name: 'Bengal School',
                period: '20th Century',
                desc: 'Nationalist art movement rejecting Western academic art. Abanindranath Tagore (founder) drew from Ajanta, Mughal, and Japanese wash techniques to create a distinctly Indian modern art.',
                examples: ['Bharat Mata — Abanindranath Tagore', 'Arabian Nights series', 'Works of Nandalal Bose', 'Jamini Roy\'s folk-modern fusion'],
                keyFeatures: ['Indian nationalist themes', 'Wash technique (Japanese influence)', 'Mythological and folk subjects', 'Rejection of Western academic realism'],
                color: '#10B981'
            }
        ]
    },
    {
        id: 'music-dance',
        title: 'Music & Dance',
        icon: '🎶',
        color: '#8B5CF6',
        desc: 'Classical traditions rooted in the Natya Shastra, with 8 classical dance forms and two music systems',
        items: [
            {
                name: 'Hindustani Classical Music (North)',
                period: 'Ancient roots, codified 13th–18th century',
                desc: 'Developed in North India, influenced by Persian-Islamic traditions. Based on Raga (melodic) and Tala (rhythmic) frameworks. Key forms: Dhrupad, Khayal, Thumri, Ghazal.',
                examples: ['Tansen — court musician of Akbar', 'Amir Khusrau — innovator of Sitar, Tabla', 'Pt. Ravi Shankar — global ambassador', 'Ustad Bismillah Khan — Shehnai'],
                keyFeatures: ['Raga and Tala system', 'Gharana (school) tradition', 'Improvisation-heavy performance', 'Instruments: Sitar, Sarod, Tabla, Sarangi'],
                color: '#8B5CF6'
            },
            {
                name: 'Carnatic Classical Music (South)',
                period: 'Ancient roots, codified 15th–18th century',
                desc: 'Developed in South India, more structured and composition-based than Hindustani. The Trinity (Tyagaraja, Muthuswami Dikshitar, Shyama Shastri) created thousands of compositions.',
                examples: ['Tyagaraja — "Nidhi Chala Sukhama"', 'Muthuswami Dikshitar', 'Shyama Shastri', 'M.S. Subbulakshmi — global icon'],
                keyFeatures: ['Composition-based (kriti form)', 'Same Raga-Tala base as Hindustani', 'Instruments: Veena, Mridangam, Violin', 'More structured, less improvised'],
                color: '#06B6D4'
            },
            {
                name: 'Classical Dance Forms (8 recognized)',
                period: 'Ancient roots, various codifications',
                desc: 'India has 8 classical dance forms recognized by Sangeet Natak Akademi — each from a different region with distinct technique, costume, and repertoire.',
                examples: [
                    'Bharatanatyam (Tamil Nadu) — oldest, temple dance',
                    'Kathak (North India) — storytelling, Mughal court',
                    'Odissi (Odisha) — lyrical, sculptural poses',
                    'Kathakali (Kerala) — dramatic, elaborate makeup',
                    'Kuchipudi (Andhra Pradesh) — dance-drama',
                    'Manipuri (Manipur) — gentle, Radha-Krishna themes',
                    'Mohiniyattam (Kerala) — graceful feminine',
                    'Sattriya (Assam) — Vaishnavite monastic dance'
                ],
                keyFeatures: ['Natya Shastra — foundational text by Bharata Muni', 'Nritta (pure dance), Nritya (expressive), Natya (dramatic)', 'Mudras (hand gestures) — over 60 single-hand gestures', 'Abhinaya (expression) — core of all forms'],
                color: '#F43F5E'
            }
        ]
    },
    {
        id: 'literature',
        title: 'Literature',
        icon: '📚',
        color: '#3B82F6',
        desc: 'From the Vedas to Nobel-winning modern literature — India\'s literary heritage spans millennia and dozens of languages',
        items: [
            {
                name: 'Vedic Literature',
                period: '1500–500 BCE',
                desc: 'The four Vedas (Rigveda, Yajurveda, Samaveda, Atharvaveda), Brahmanas, Aranyakas, and Upanishads form the foundation of Indian philosophical thought.',
                examples: ['Rigveda — oldest religious text (1500 BCE)', 'Upanishads — philosophical discussions', 'Brahmanas — ritual instructions', 'Aranyakas — forest treatises'],
                keyFeatures: ['Shruti (revealed) literature', 'Oral transmission for millennia', 'Foundation of Hindu philosophy', 'Sanskrit language'],
                color: '#F59E0B'
            },
            {
                name: 'Sanskrit Epics & Classics',
                period: '500 BCE – 500 CE',
                desc: 'The Mahabharata (100,000 verses — world\'s longest epic), Ramayana (24,000 verses), and classical Sanskrit literature by Kalidasa, Bhasa, and others.',
                examples: ['Mahabharata — Vyasa (includes Bhagavad Gita)', 'Ramayana — Valmiki', 'Shakuntala — Kalidasa', 'Mricchakatika — Shudraka', 'Panchatantra — Vishnu Sharma'],
                keyFeatures: ['Epic poetry and drama', 'Smriti (remembered) literature', 'Natya Shastra — dramaturgy', 'Arthashastra — political science'],
                color: '#8B5CF6'
            },
            {
                name: 'Tamil Sangam Literature',
                period: '3rd Century BCE – 3rd Century CE',
                desc: 'The earliest Tamil literary works, composed in three Sangam (academy) periods. 2,381 poems by 473 poets covering love (Akam) and war/public life (Puram).',
                examples: ['Tolkappiyam — Tamil grammar', 'Tirukkural — Thiruvalluvar (ethics/wisdom)', 'Silappadikaram — Ilango Adigal', 'Manimekalai — Seethalai Saathanar'],
                keyFeatures: ['Secular, humanistic literature', 'Akam (inner/love) and Puram (outer/war)', 'Tirukkural — "Universal Veda"', 'One of the oldest living literary traditions'],
                color: '#10B981'
            },
            {
                name: 'Bhakti & Sufi Poetry',
                period: '7th–17th Century CE',
                desc: 'Devotional literature in regional languages that democratized spirituality. Bhakti saints composed in Tamil, Kannada, Marathi, Hindi, Bengali, while Sufi poets wrote in Persian and regional languages.',
                examples: ['Kabir — Hindi dohas (couplets)', 'Mirabai — Rajasthani devotional songs', 'Tulsidas — Ramcharitmanas (Hindi Ramayana)', 'Amir Khusrau — Persian & Hindi', 'Guru Granth Sahib — Sikh scripture'],
                keyFeatures: ['Vernacular languages over Sanskrit', 'Social reform — anti-caste messages', 'Personal devotion over ritualism', 'Sufi-Bhakti synthesis — interfaith harmony'],
                color: '#EF4444'
            },
            {
                name: 'Modern Indian Literature',
                period: '19th Century – Present',
                desc: 'The Bengal Renaissance sparked modern Indian literature. Rabindranath Tagore won the Nobel Prize (1913). Indian writers now contribute in 22+ languages plus English.',
                examples: ['Rabindranath Tagore — Gitanjali (Nobel 1913)', 'Premchand — Hindi realist fiction', 'R.K. Narayan — Malgudi Days', 'Vikram Seth — A Suitable Boy', 'Arundhati Roy — God of Small Things (Booker 1997)'],
                keyFeatures: ['Bengal Renaissance influence', 'Social realism and reform themes', 'Multilingual tradition', 'Global recognition — Booker, Nobel laureates'],
                color: '#3B82F6'
            }
        ]
    }
];

export const UNESCO_SITES = [
    { name: 'Taj Mahal', location: 'Agra, UP', year: 1983, type: 'Cultural', desc: 'Mughal masterpiece — white marble mausoleum built by Shah Jahan', color: '#A855F7' },
    { name: 'Ajanta Caves', location: 'Maharashtra', year: 1983, type: 'Cultural', desc: '30 rock-cut Buddhist caves with finest ancient paintings', color: '#F59E0B' },
    { name: 'Ellora Caves', location: 'Maharashtra', year: 1983, type: 'Cultural', desc: '34 caves — Buddhist, Hindu, Jain — including Kailasa Temple', color: '#10B981' },
    { name: 'Hampi', location: 'Karnataka', year: 1986, type: 'Cultural', desc: 'Ruins of Vijayanagara Empire — once the richest city in the world', color: '#EF4444' },
    { name: 'Khajuraho Temples', location: 'MP', year: 1986, type: 'Cultural', desc: 'Chandela temples with exquisite erotic and devotional sculptures', color: '#F59E0B' },
    { name: 'Sun Temple, Konark', location: 'Odisha', year: 1984, type: 'Cultural', desc: '13th-century temple shaped as a giant chariot of the Sun God', color: '#D97706' },
    { name: 'Mahabalipuram', location: 'Tamil Nadu', year: 1984, type: 'Cultural', desc: 'Pallava-era rock-cut temples and rathas (chariot temples)', color: '#8B5CF6' },
    { name: 'Qutub Minar', location: 'Delhi', year: 1993, type: 'Cultural', desc: '73-meter tall victory tower — earliest Islamic monument in India', color: '#EF4444' },
    { name: 'Sanchi Stupa', location: 'MP', year: 1989, type: 'Cultural', desc: 'Oldest stone structure in India — Buddhist monument from Ashoka\'s era', color: '#3B82F6' },
    { name: 'Kaziranga National Park', location: 'Assam', year: 1985, type: 'Natural', desc: 'Home to 2/3 of world\'s one-horned rhinoceros', color: '#10B981' },
    { name: 'Western Ghats', location: 'Multiple states', year: 2012, type: 'Natural', desc: 'Biodiversity hotspot — 325+ globally threatened species', color: '#059669' },
    { name: 'Rani ki Vav', location: 'Gujarat', year: 2014, type: 'Cultural', desc: 'Intricately carved 11th-century stepwell — Solanki dynasty', color: '#F97316' },
    { name: 'Nalanda', location: 'Bihar', year: 2016, type: 'Cultural', desc: 'Ruins of the ancient world\'s greatest university (5th–12th century)', color: '#8B5CF6' },
    { name: 'Jaipur City', location: 'Rajasthan', year: 2019, type: 'Cultural', desc: 'The "Pink City" — India\'s first planned city (1727)', color: '#F43F5E' },
    { name: 'Dholavira', location: 'Gujarat', year: 2021, type: 'Cultural', desc: 'Harappan-era city with remarkable water harvesting system', color: '#06B6D4' },
];

export const FESTIVALS = [
    { name: 'Diwali', region: 'Pan-India', desc: 'Festival of Lights celebrating victory of good over evil. Oil lamps, fireworks, sweets, and Lakshmi Puja.', icon: '🪔', color: '#F59E0B' },
    { name: 'Holi', region: 'North India (pan-India)', desc: 'Festival of Colors celebrating spring and the legend of Prahlada. Gulal, water colors, bhang, and community bonhomie.', icon: '🎨', color: '#EF4444' },
    { name: 'Durga Puja', region: 'Bengal & East India', desc: 'Celebrates Goddess Durga\'s victory over Mahishasura. Elaborate pandals, dhak drums, sindoor khela, immersion rituals.', icon: '🙏', color: '#A855F7' },
    { name: 'Pongal / Makar Sankranti', region: 'South / Pan-India', desc: 'Harvest festival thanking the Sun God. Pot-boiling ritual, kolam decorations, bull-taming (Jallikattu in Tamil Nadu).', icon: '🌾', color: '#F97316' },
    { name: 'Onam', region: 'Kerala', desc: 'Celebrates King Mahabali\'s annual return. Flower carpets (Pookalam), boat races (Vallam Kali), Onasadya feast of 26 courses.', icon: '🛶', color: '#10B981' },
    { name: 'Eid ul-Fitr', region: 'Pan-India', desc: 'Marks end of Ramadan fasting. Congregational prayers, feasts, gift-giving (Eidi), and community celebration.', icon: '🌙', color: '#3B82F6' },
    { name: 'Baisakhi', region: 'Punjab', desc: 'Sikh New Year and harvest festival. Marks founding of Khalsa (1699). Bhangra, processions, gurdwara celebrations.', icon: '🎉', color: '#F59E0B' },
    { name: 'Navratri / Garba', region: 'Gujarat (Pan-India)', desc: '9 nights of worship to Goddess Durga. Garba and Dandiya Raas dance in Gujarat. Culminates in Dussehra.', icon: '💃', color: '#F43F5E' },
];
