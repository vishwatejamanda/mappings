// ═══════════════════════════════════════════════════════════════
//  ECONOMY — Complete Data
// ═══════════════════════════════════════════════════════════════

export const ECONOMY_ERAS = [
    {
        id: 'ancient',
        title: 'Ancient Economy',
        period: '3000 BCE – 647 CE',
        icon: '🪙',
        color: '#F59E0B',
        gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
        overview: 'Ancient India was one of the wealthiest regions in the world. The Indus Valley had standardized weights and measures. The Maurya Empire had a sophisticated economy described in the Arthashastra. India\'s share of global GDP was around 32% during the Gupta period.',
        highlights: [
            { title: 'Indus Valley Trade', desc: 'Traded with Mesopotamia, Egypt. Standardized weights, measures, and possibly the earliest dockyard at Lothal.', icon: '⚓' },
            { title: 'Punch-Marked Coins', desc: 'Earliest Indian coins (6th century BCE) — silver punch-marked coins of Mahajanapadas. Standardized currency enabled trade expansion.', icon: '🪙' },
            { title: 'Maurya Economy', desc: 'State-controlled mining, weaving, armory. Revenue was 1/4 to 1/6 of produce. Kautilya described detailed economic policies in Arthashastra.', icon: '📊' },
            { title: 'Gupta Gold Coins', desc: 'Exquisite gold Dinara coins depicting rulers — finest ancient Indian coinage. International trade flourished via Silk Road and maritime routes.', icon: '✨' },
            { title: 'Guild System (Shreni)', desc: 'Merchant and artisan guilds (Shrenis) were like proto-corporations — they set quality standards, prices, and even acted as banks. Some issued their own coins.', icon: '🏛️' },
            { title: 'Spice Trade', desc: 'Indian spices (pepper, cardamom, cinnamon) were traded to Rome, earning India the title "Land of Spices." Roman coins found across South India.', icon: '🌶️' }
        ]
    },
    {
        id: 'medieval',
        title: 'Medieval Economy',
        period: '647 CE – 1526 CE',
        icon: '⚖️',
        color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
        overview: 'Medieval India continued to be among the world\'s richest regions. The Chola Empire dominated Indian Ocean trade. The Delhi Sultanate introduced new revenue systems. Urban centers like Delhi, Vijayanagara, and Calicut were among the largest cities in the world.',
        highlights: [
            { title: 'Chola Maritime Trade', desc: 'The Chola navy controlled Indian Ocean trade routes. Tamil merchants (Manigramam, Ayyavole guilds) traded from China to East Africa.', icon: '⛵' },
            { title: 'Revenue Systems', desc: 'Delhi Sultanate introduced Iqta (revenue assignments), Kharaj (land tax), Jaziya (religious tax). Alauddin Khalji\'s price control system was revolutionary.', icon: '📋' },
            { title: 'Vijayanagara Prosperity', desc: 'Abdur Razzaq and other visitors described Vijayanagara as the most magnificent city they had seen — overflowing with gold, gems, and silk markets.', icon: '💎' },
            { title: 'Textile Trade', desc: 'Indian cotton textiles (muslin, chintz, calico) were prized globally. Bengal muslin was so fine it was called "woven wind."', icon: '🧵' },
            { title: 'Horse Trade', desc: 'India imported Arabian horses by the thousands via sea and land routes — a crucial military and economic trade that enriched Arab merchants.', icon: '🐎' },
            { title: 'Temple Economy', desc: 'Temples functioned as banks, employers, and economic hubs. The Tirupati temple was already among the richest institutions in the world.', icon: '🕉️' }
        ]
    },
    {
        id: 'mughal',
        title: 'Mughal Economy',
        period: '1526 – 1757 CE',
        icon: '👑',
        color: '#A855F7',
        gradient: 'linear-gradient(135deg, #A855F7, #9333EA)',
        overview: 'The Mughal Empire was the wealthiest state in the world for much of the 17th century. India\'s GDP was approximately 24% of the world economy under Aurangzeb. The empire produced more manufactured goods than all of Europe combined.',
        highlights: [
            { title: 'World\'s Richest Empire', desc: 'Mughal India\'s GDP was ~$90.8 billion (1600 CE estimates) — about 24% of world GDP. The emperor\'s treasury dwarfed European monarchs.', icon: '💰' },
            { title: 'Todar Mal\'s Revenue', desc: 'The Zabti/Dahsala system scientifically measured land, classified soil fertility, and calculated revenue based on 10-year averages — one of the most advanced pre-modern revenue systems.', icon: '📏' },
            { title: 'Global Textile Hub', desc: 'Indian textiles constituted 25% of world trade. Bengal alone produced more cotton cloth than all of Europe. Dhaka muslin, Kashmiri shawls, and Banarasi silk were luxury goods worldwide.', icon: '🧶' },
            { title: 'Silver Drain to India', desc: 'India absorbed much of the New World silver — approximately 30% of all silver mined in Americas flowed to India via trade, making India a "sink of world\'s precious metals."', icon: '🥈' },
            { title: 'Urban Centers', desc: 'Mughal cities were among the world\'s largest. Agra and Delhi had populations exceeding 500,000. Lahore was called the "Grand Resort of Central Asia."', icon: '🏙️' },
            { title: 'Jagirdari System', desc: 'Land revenue collected through Jagirdars who received territories instead of salary. The system ensured military service but led to exploitation of peasants.', icon: '🗺️' }
        ]
    },
    {
        id: 'colonial',
        title: 'Colonial Drain',
        period: '1757 – 1947',
        icon: '⛓️',
        color: '#EF4444',
        gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
        overview: 'British colonialism systematically deindustrialized India and drained its wealth. India\'s share of world GDP fell from 24% (1700) to 4% (1947). Dadabhai Naoroji\'s "Drain of Wealth" theory estimated Britain extracted $45 trillion from India over 200 years.',
        highlights: [
            { title: 'Drain of Wealth', desc: 'Dadabhai Naoroji first articulated how Britain systematically drained India\'s wealth through unfair trade, taxation, and remittances — estimated at £200-300 million over 150 years (in 19th-century values).', icon: '💸' },
            { title: 'Deindustrialization', desc: 'Indian textile industry was deliberately destroyed. Dhaka\'s muslin weavers had their thumbs cut. Imports of British manufactured goods flooded India while raw materials were exported cheap.', icon: '🏭' },
            { title: 'Land Revenue Systems', desc: 'Three devastating systems: Permanent Settlement (Bengal, 1793 — zamindari), Ryotwari (South, 1820 — individual peasant), Mahalwari (North, 1822 — village-based). All over-assessed and exploitative.', icon: '📜' },
            { title: 'Famines', desc: '12+ major famines killed 30-35 million Indians. Bengal Famine (1943) alone killed 3 million while grain was exported. Churchill: "If food is so scarce, why hasn\'t Gandhi died yet?"', icon: '💀' },
            { title: 'Railways — For Extraction', desc: 'Britain built railways primarily to extract raw materials and move troops — not for Indian development. India paid through guaranteed returns to British investors.', icon: '🚂' },
            { title: 'GDP Collapse', desc: 'India\'s share of world manufacturing declined from 25% (1750) to 2% (1900). Per capita income stagnated for 200 years while Europe industrialized.', icon: '📉' }
        ]
    },
    {
        id: 'postindependence',
        title: 'Post-Independence Economy',
        period: '1947 – Present',
        icon: '🇮🇳',
        color: '#10B981',
        gradient: 'linear-gradient(135deg, #10B981, #059669)',
        overview: 'Independent India chose planned economy with socialist ideals, then liberalized in 1991. From near-zero industrial base, India became the 5th largest economy globally. The 1991 reforms were a watershed — opening India to globalization, FDI, and the IT revolution.',
        highlights: [
            { title: 'Five Year Plans', desc: 'Nehruvian model of planned economy (1951 onwards). First Plan focused on agriculture; Second Plan (Mahalanobis model) emphasized heavy industries. Created IITs, IIMs, steel plants.', icon: '📋' },
            { title: 'Green Revolution', desc: '1960s-70s: Norman Borlaug & M.S. Swaminathan\'s high-yielding varieties transformed India from food importer to self-sufficient. Punjab and Haryana became India\'s breadbasket.', icon: '🌾' },
            { title: 'White Revolution (Operation Flood)', desc: 'Verghese Kurien\'s Amul cooperative model made India the world\'s largest milk producer. From milk-deficit to 220+ million tonnes annually.', icon: '🥛' },
            { title: 'Bank Nationalization (1969)', desc: 'Indira Gandhi nationalized 14 major banks to extend credit to agriculture and small industry. Brought banking to rural India. 6 more nationalized in 1980.', icon: '🏦' },
            { title: 'LPG Reforms 1991', desc: 'Balance of payments crisis. PM Narasimha Rao and FM Manmohan Singh launched Liberalization, Privatization, Globalization. Ended License Raj. GDP growth accelerated to 6-9%.', icon: '🚀' },
            { title: 'IT Revolution', desc: 'India became the world\'s back-office. Infosys, TCS, Wipro made "Bangalore" a global brand. IT exports grew from $0 to $200+ billion. Created a new middle class.', icon: '💻' },
            { title: 'Digital India & UPI', desc: 'Aadhaar (1.3B biometric IDs), UPI (10B+ monthly transactions), Direct Benefit Transfer — India leapfrogged to become the world leader in digital payments.', icon: '📱' },
            { title: '5th Largest Economy', desc: 'India overtook UK in 2022 to become the 5th largest economy ($3.7 trillion GDP). Target: $5 trillion by 2028. Manufacturing push through Make in India.', icon: '🏆' }
        ]
    }
];

export const GDP_MILESTONES = [
    { year: 1, gdpShare: 32, label: '1 CE — Largest economy in the world (32% of world GDP)', color: '#F59E0B' },
    { year: 1000, gdpShare: 28, label: '1000 CE — Still dominant (28%)', color: '#F59E0B' },
    { year: 1500, gdpShare: 24, label: '1500 CE — Mughal era (24%)', color: '#A855F7' },
    { year: 1700, gdpShare: 24, label: '1700 CE — Pre-colonial peak (24%)', color: '#A855F7' },
    { year: 1820, gdpShare: 16, label: '1820 CE — Colonial decline begins (16%)', color: '#EF4444' },
    { year: 1870, gdpShare: 12, label: '1870 CE — Deindustrialization (12%)', color: '#EF4444' },
    { year: 1913, gdpShare: 7, label: '1913 CE — World War era (7%)', color: '#EF4444' },
    { year: 1950, gdpShare: 4, label: '1950 CE — At Independence (4%)', color: '#EF4444' },
    { year: 1991, gdpShare: 3, label: '1991 CE — Pre-reform low (3%)', color: '#F97316' },
    { year: 2023, gdpShare: 3.5, label: '2023 CE — Rising again (3.5%)', color: '#10B981' },
];

export const TRADE_ROUTES = [
    { name: 'Silk Road', desc: 'Connected India to China, Central Asia, Persia, and Rome. Indian spices, textiles, and gems traveled west; horses, gold, and silk came east.', destinations: ['China', 'Central Asia', 'Persia', 'Rome'], color: '#F59E0B' },
    { name: 'Spice Route (Maritime)', desc: 'Indian pepper, cardamom, cinnamon sailed from Malabar Coast to Rome, Arabia, and Southeast Asia. Roman coins found across Kerala and Tamil Nadu.', destinations: ['Rome', 'Arabia', 'Egypt', 'Southeast Asia'], color: '#EF4444' },
    { name: 'Uttarapatha (Northern Road)', desc: 'Ancient highway from Gandhara to Pataliputra — later the Grand Trunk Road. Connected northwestern frontier to the Gangetic heartland.', destinations: ['Gandhara', 'Taxila', 'Mathura', 'Pataliputra'], color: '#3B82F6' },
    { name: 'Dakshinapatha (Southern Road)', desc: 'Connected north India to Deccan and further south. Facilitated trade between Gangetic plains and peninsular ports.', destinations: ['Ujjain', 'Pratishthana', 'Kanchipuram', 'Madurai'], color: '#8B5CF6' },
    { name: 'Indian Ocean Trade', desc: 'Chola and other South Indian kingdoms dominated Indian Ocean commerce. Tamil guilds traded from China to East Africa for centuries.', destinations: ['China', 'Southeast Asia', 'East Africa', 'Arabia'], color: '#10B981' },
];

export const ECONOMIC_REFORMERS = [
    { name: 'Dadabhai Naoroji', title: 'Grand Old Man of India', contribution: 'First to articulate "Drain of Wealth" theory in "Poverty and Un-British Rule in India." Calculated Britain\'s economic exploitation of India.', color: '#F59E0B' },
    { name: 'M. Visvesvaraya', title: 'Engineer-Statesman', contribution: 'Authored "Planned Economy for India" (1934). Advocated industrialization as the path to prosperity. Engineers\' Day celebrated on his birthday.', color: '#3B82F6' },
    { name: 'P.C. Mahalanobis', title: 'Architect of Indian Planning', contribution: 'Created the Mahalanobis Model for India\'s Second Five Year Plan — emphasized heavy industrialization and statistical planning.', color: '#8B5CF6' },
    { name: 'Verghese Kurien', title: 'Milkman of India', contribution: 'Founded Amul cooperative and Operation Flood. Made India the world\'s largest milk producer through cooperative model.', color: '#10B981' },
    { name: 'M.S. Swaminathan', title: 'Father of Green Revolution', contribution: 'Introduced high-yielding wheat and rice varieties. Transformed India from food importer to self-sufficient agricultural nation.', color: '#059669' },
    { name: 'Manmohan Singh', title: 'Architect of LPG Reforms', contribution: 'As Finance Minister (1991), dismantled License Raj and opened India to globalization. India\'s GDP growth accelerated from 3.5% to 7%.', color: '#EF4444' },
];
