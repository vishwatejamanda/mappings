// ============================================================
// INDIAN GEOGRAPHY — UPSC DATA
// ============================================================

export const INDIA_STATS = [
  { icon: '📐', label: 'Total Area', value: '32.87 Lakh km²', sub: '7th Largest Country', color: '#F59E0B' },
  { icon: '🌊', label: 'Coastline', value: '7,516 km', sub: 'Incl. island territories', color: '#3B82F6' },
  { icon: '🏔️', label: 'Highest Peak', value: 'K2 — 8,611 m', sub: 'In PoK (disputed)', color: '#8B5CF6' },
  { icon: '🏞️', label: 'Longest River', value: 'Ganga — 2,525 km', sub: 'National River', color: '#10B981' },
  { icon: '🌧️', label: 'Highest Rainfall', value: 'Mawsynram', sub: '~11,873 mm/year', color: '#22C55E' },
  { icon: '🏜️', label: 'Driest Region', value: 'Leh, Ladakh', sub: '<100 mm/year', color: '#EF4444' },
  { icon: '🌡️', label: 'Hottest Place', value: 'Churu, Rajasthan', sub: 'Up to 50°C in summer', color: '#F97316' },
  { icon: '❄️', label: 'Coldest Place', value: 'Drass, Ladakh', sub: '-45°C recorded', color: '#06B6D4' },
  { icon: '🌐', label: 'Latitude Extent', value: '8°4\'N – 37°6\'N', sub: 'Tropic of Cancer divides', color: '#FBBF24' },
  { icon: '📏', label: 'Longitude Extent', value: '68°7\'E – 97°25\'E', sub: 'IST = UTC + 5:30', color: '#A78BFA' },
]

export const PHYSICAL_DIVISIONS = [
  {
    id: 'himalayas', title: 'The Himalayas', icon: '🏔️', color: '#8B5CF6',
    subtitle: 'Youngest Fold Mountains of the World',
    area: '5 Lakh km²', length: '2,400 km', width: '150–400 km', age: '~40–50 million years',
    origin: 'Tethys Sea sediments folded during Cenozoic Era by Indo-Eurasian plate collision.',
    overview: 'The Himalayas form the northern wall of India — a young, lofty mountain system from Indus gorge in the west to Brahmaputra gorge in the east. Source of major perennial rivers and a crucial climate barrier.',
    divisions: [
      { name: 'Trans-Himalayas', icon: '🧊', altitude: '3,000–8,611 m', desc: 'Karakoram, Ladakh, Zaskar ranges. Cold desert. K2 (8,611m) is here.', upsc: 'Siachen glacier — world\'s highest battlefield. Karakoram highway.' },
      { name: 'Greater Himalayas (Himadri)', icon: '🏔️', altitude: '~6,000 m avg', desc: 'Highest, innermost range. Permanently snow-capped. Everest, Kanchenjunga.', upsc: 'Kanchenjunga (8,586m) — highest peak within Indian territory.' },
      { name: 'Lesser Himalayas (Himachal)', icon: '⛰️', altitude: '1,000–4,500 m', desc: 'Shimla, Mussoorie, Nainital, Darjeeling. Dhauladhar, Pir Panjal.', upsc: 'Valley of Flowers NP is here. Important hill stations zone.' },
      { name: 'Outer Himalayas (Shiwaliks)', icon: '🌄', altitude: '600–1,500 m', desc: 'Youngest and southernmost. Dun valleys (Dehradun) between Shiwaliks & Lesser Himalayas.', upsc: 'Terai wetlands along Shiwaliks — Jim Corbett NP, Dudhwa NP here.' },
      { name: 'Purvanchal (Eastern Hills)', icon: '🌿', altitude: '1,000–3,000 m', desc: 'NE India hills — Patkai, Naga, Mizo, Garo, Khasi, Jaintia.', upsc: 'Wettest region — Mawsynram & Cherrapunji receive >11,000 mm rain.' },
    ],
    upsc_points: [
      'Climate barrier — blocks cold Siberian winds from Central Asia',
      'Source of perennial rivers due to glaciers and snowpack',
      'Antecedent rivers (Indus, Ganga, Brahmaputra) predate the Himalayas',
      'Important passes: Zoji La (J&K), Rohtang (HP), Nathu La (Sikkim), Bum La (Arunachal)',
      'Himalayas are young, still rising — seismically active zone (Zone IV–V)',
    ],
  },
  {
    id: 'northern_plains', title: 'Northern Plains', icon: '🌾', color: '#F59E0B',
    subtitle: 'Cradle of Indian Civilization',
    area: '7 Lakh km²', length: '3,200 km', width: '150–300 km', age: 'Quaternary deposits',
    origin: 'Alluvial deposits of Indus, Ganga, Brahmaputra in foredeep basin between Himalayas and Peninsular Plateau.',
    overview: 'One of the world\'s largest and most fertile alluvial plains. Heartland of Indian civilization, densely populated, agriculturally supreme.',
    divisions: [
      { name: 'Punjab Plains', icon: '🌾', altitude: '200–300 m', desc: 'Formed by Indus system\'s 5 tributaries. Fertile doabs (land between rivers).', upsc: 'Doabs: Bisht (Beas-Sutlej), Bari (Beas-Ravi), Rachna (Ravi-Chenab), Chaj (Chenab-Jhelum).' },
      { name: 'Ganga Plains', icon: '🌊', altitude: '0–200 m', desc: 'Largest plains. Stretches across UP, Bihar, West Bengal. Extremely fertile.', upsc: 'Divided into Upper (Haryana, UP), Middle (Bihar), Lower (WB) Ganga Plains.' },
      { name: 'Brahmaputra Plains', icon: '🌿', altitude: '30–140 m', desc: 'Assam valley. Prone to floods. World\'s largest river island — Majuli.', upsc: 'Kaziranga NP (One-horned Rhino) is situated in this plain.' },
    ],
    sub_features: [
      { name: 'Bhabar', icon: '🪨', desc: 'Pebble-strewn narrow belt at Himalayan foothills. Streams disappear underground.' },
      { name: 'Terai', icon: '🌿', desc: 'Moist, marshy forest zone. Streams re-emerge. Formerly malaria-prone, now cultivated.' },
      { name: 'Bhangar', icon: '🏺', desc: 'Old alluvium, slightly higher, calcareous kankar nodules. Away from river channels.' },
      { name: 'Khadar', icon: '🌾', desc: 'New alluvium, near river channels, renewed annually by floods, extremely fertile.' },
    ],
    upsc_points: [
      'Largest alluvial plain in the world',
      'Sundarbans Delta (WB) = world\'s largest river delta',
      'Doab = land between two rivers (Persian: do=two, ab=water)',
      'Canal irrigation well-developed — Punjab and Haryana called food bowl of India',
      'Green Revolution first implemented in these plains — wheat revolution in Punjab',
    ],
  },
  {
    id: 'peninsular_plateau', title: 'Peninsular Plateau', icon: '🏛️', color: '#EF4444',
    subtitle: 'Oldest Landmass of India',
    area: '16 Lakh km²', height: '600–900 m avg', age: 'Precambrian (>540 million years)',
    origin: 'Part of ancient Gondwana supercontinent. Made of gneisses, granites, and basaltic Deccan Traps.',
    overview: 'Oldest, largest physiographic unit of India. Mineral-rich tableland with east-sloping surface. Rivers flow east to Bay of Bengal (except Narmada, Tapti).',
    divisions: [
      { name: 'Central Highlands', icon: '⛰️', desc: 'North of Narmada. Malwa Plateau, Bundelkhand, Baghelkhand, Chota Nagpur.', upsc: 'Chota Nagpur — richest mineral region of India, called "Ruhr of India".' },
      { name: 'Deccan Plateau', icon: '🌋', desc: 'South of Narmada. Triangular. Bounded by Western Ghats (W) and Eastern Ghats (E).', upsc: 'Tilted east — rivers drain into Bay of Bengal. NW covered by Deccan Traps (basaltic lava).' },
      { name: 'Western Ghats (Sahyadri)', icon: '🌄', desc: 'Continuous escarpment. Height 1,000–2,695 m (Anamudi). Palakkad, Thal, Bhor passes.', upsc: 'UNESCO WHS. Biodiversity hotspot. Heavy orographic rainfall on windward (western) side.' },
      { name: 'Eastern Ghats', icon: '⛰️', desc: 'Discontinuous, lower (600–1,200 m). Cut by Mahanadi, Godavari, Krishna, Kaveri.', upsc: 'Highest: Mahendragiri (1,501 m). Less rainfall than Western Ghats.' },
    ],
    upsc_points: [
      'Hard crystalline rocks — richest in minerals: iron, coal, bauxite, mica, manganese',
      'Deccan Traps: volcanic basalt covering NW Deccan — source of black cotton (regur) soil',
      'Western Ghats: continuous, high, wet; Eastern Ghats: discontinuous, lower, drier',
      'Three main passes in Western Ghats: Palakkad Gap (widest), Thal Ghat, Bhor Ghat',
      'Anamudi (2,695 m) — highest peak in peninsular India, in Kerala',
    ],
  },
  {
    id: 'coastal_plains', title: 'Coastal Plains', icon: '🌊', color: '#3B82F6',
    subtitle: 'India\'s Maritime Gateway',
    overview: 'India has 7,516 km of coastline with backwaters, lagoons, deltas, and beaches. Divided into Western and Eastern Coastal Plains with distinct characteristics.',
    divisions: [
      { name: 'Western Coastal Plains', icon: '🌊', width: '10–25 km (narrow)', desc: 'Between Western Ghats & Arabian Sea. Sub-divisions: Konkan (Mumbai–Goa), Kanara (Goa–Mangalore), Malabar (Mangalore–Kanyakumari).', upsc: 'Malabar coast has backwaters (Vembanad Lake). Estuarine coasts — rivers form estuaries not deltas owing to steep gradient.' },
      { name: 'Eastern Coastal Plains', icon: '🏖️', width: '100–130 km (broader)', desc: 'Between Eastern Ghats & Bay of Bengal. Utkal (Odisha), Andhra, Coromandel (TN) sub-divisions.', upsc: 'Delta coast — Mahanadi, Godavari, Krishna, Kaveri form deltas. Chilika Lake here.' },
    ],
    upsc_points: [
      'West coast rivers form ESTUARIES (steep, short); East coast rivers form DELTAS',
      'Chilika Lake (Odisha) — largest coastal lagoon in India, Ramsar site',
      'Sundarbans delta — world\'s largest delta and largest mangrove forest',
      'Gulf of Mannar (between India & Sri Lanka) — marine biodiversity hotspot',
      'Rann of Kutch (Gujarat) — seasonal salt marsh, largest in S Asia',
    ],
  },
  {
    id: 'islands', title: 'Islands of India', icon: '🏝️', color: '#10B981',
    subtitle: 'Jewels of the Indian Seas',
    overview: 'India has two island groups: Andaman & Nicobar (Bay of Bengal) and Lakshadweep (Arabian Sea), both Union Territories with strategic and ecological importance.',
    divisions: [
      { name: 'Andaman & Nicobar', icon: '🌋', count: '572 islands', desc: 'Bay of Bengal. Volcanic and sedimentary origin. Dense tropical rainforest. Active volcano: Barren Island.', upsc: 'Highest: Saddle Peak (732m). Great Nicobar = UNESCO Biosphere Reserve. 10° Channel separates A from N.' },
      { name: 'Lakshadweep', icon: '🐠', count: '36 islands', desc: 'Arabian Sea. Coral origin — atolls and lagoons. 10 inhabited. Capital: Kavaratti.', upsc: '9° Channel separates Minicoy from main group. 8° Channel separates Lakshadweep from Maldives.' },
    ],
    upsc_points: [
      'Andaman Islands — submerged peaks of Arakan Yoma (Myanmar) range extension',
      'Barren Island — India\'s only active volcano; Narcondam — dormant volcano',
      'Indira Point (Great Nicobar, 6°45\'N) — southernmost point of India',
      '10° Channel separates Little Andaman from Car Nicobar',
      'Lakshadweep coral atolls threatened by sea level rise from climate change',
    ],
  },
]

export const RIVERS = {
  himalayan: [
    {
      name: 'Indus (Sindhu)', icon: '🌊', color: '#3B82F6',
      origin: 'Manasarovar Lake, Tibet', length: '3,180 km (709 km in India)',
      direction: 'NW → SW (through Pakistan)',
      tributaries: ['Jhelum', 'Chenab', 'Ravi', 'Beas', 'Sutlej', 'Zanskar'],
      drains_into: 'Arabian Sea (near Karachi)',
      significance: 'Gave India its name. Indus Valley Civilization. Indus Waters Treaty (1960): India gets Ravi, Beas, Sutlej.',
      upsc: 'Antecedent river — older than Himalayas. Flows 200 km north before entering India at Ladakh.',
    },
    {
      name: 'Ganga', icon: '🕉️', color: '#F59E0B',
      origin: 'Gangotri glacier, Uttarakhand (as Bhagirathi meets Alaknanda at Devprayag)',
      length: '2,525 km',
      direction: 'W → E',
      tributaries: ['Yamuna', 'Ramganga', 'Gomti', 'Ghaghra', 'Gandak', 'Kosi', 'Son'],
      drains_into: 'Bay of Bengal (Sundarbans delta, with Brahmaputra)',
      significance: 'National River of India. Holiest Hindu river. Kosi = "Sorrow of Bihar". Triveni Sangam at Prayagraj.',
      upsc: 'Bhagirathi + Alaknanda = Ganga at Devprayag. Longest river entirely within India.',
    },
    {
      name: 'Brahmaputra', icon: '🌀', color: '#8B5CF6',
      origin: 'Angsi Glacier, Tibet (as Tsangpo)',
      length: '2,900 km total (916 km in India)',
      direction: 'E (Tibet) → sharp U-turn → W (Assam) → S (Bangladesh)',
      tributaries: ['Dibang', 'Lohit', 'Subansiri', 'Kameng', 'Manas', 'Teesta'],
      drains_into: 'Bay of Bengal (combined delta with Ganga)',
      significance: 'Only river flowing N of Himalayas before entering India. U-turn at Namcha Barwa. Jamuna in Bangladesh.',
      upsc: 'Dihang = Brahmaputra in Arunachal. Majuli = world\'s largest river island. Called Padma in Bangladesh.',
    },
    {
      name: 'Yamuna', icon: '💧', color: '#06B6D4',
      origin: 'Yamunotri glacier, Uttarkashi',
      length: '1,376 km',
      direction: 'S → SE → joins Ganga at Prayagraj', tributaries: ['Chambal', 'Betwa', 'Ken', 'Tons', 'Sindh'],
      drains_into: 'Ganga at Prayagraj (Triveni Sangam)',
      significance: 'Largest tributary of Ganga. Delhi, Agra, Mathura on its banks. Highly polluted (Yamuna Action Plan).',
      upsc: 'Chambal is Yamuna\'s largest tributary. Taj Mahal is on the Yamuna bank at Agra.',
    },
  ],
  peninsular: [
    {
      name: 'Godavari', icon: '🌊', color: '#F43F5E',
      origin: 'Trimbakeshwar, Nashik, Maharashtra (1,067 m)',
      length: '1,465 km', direction: 'W → E (Bay of Bengal)',
      tributaries: ['Penganga', 'Wardha', 'Pranhita', 'Indravati', 'Sabari', 'Manjira'],
      drains_into: 'Bay of Bengal (near Rajamahendravaram)',
      significance: 'Largest peninsular river. "Dakshin Ganga". Papikonda Gorge — India\'s Grand Canyon.',
      upsc: 'Largest river basin in peninsular India. Sapta Godavari festival every 12 years.',
    },
    {
      name: 'Krishna', icon: '💧', color: '#8B5CF6',
      origin: 'Mahabaleshwar, Western Ghats (1,337 m)',
      length: '1,400 km', direction: 'W → E (Bay of Bengal)',
      tributaries: ['Bhima', 'Tungabhadra', 'Musi', 'Ghataprabha', 'Malaprabha'],
      drains_into: 'Bay of Bengal (near Machilipatnam)',
      significance: 'Second longest peninsular river. Tungabhadra is major tributary — Hampi (Vijayanagar) on it.',
      upsc: 'Nagarjuna Sagar Dam — world\'s largest masonry dam. Major inter-state water dispute.',
    },
    {
      name: 'Kaveri (Cauvery)', icon: '🌺', color: '#10B981',
      origin: 'Talakaveri, Kodagu (Coorg), Karnataka (1,341 m)',
      length: '765 km', direction: 'W → E (Bay of Bengal)',
      tributaries: ['Hemavathi', 'Shimsha', 'Arkavathi', 'Amaravathi', 'Bhavani'],
      drains_into: 'Bay of Bengal (near Poompuhar, TN)',
      significance: '"Ganga of the South." Only S. Indian river with perennial flow (two monsoon seasons). Kaveri Delta — most fertile in India.',
      upsc: 'Famous inter-state water dispute: Karnataka vs Tamil Nadu (going on since 1892). Shivasamudram Falls.',
    },
    {
      name: 'Narmada', icon: '🌊', color: '#F97316',
      origin: 'Amarkantak Plateau, MP (1,057 m)',
      length: '1,312 km', direction: 'E → W (Arabian Sea) — uniquely westward!',
      tributaries: ['Burhner', 'Banjar', 'Tawa', 'Sher', 'Dudhi'],
      drains_into: 'Arabian Sea (Gulf of Khambhat, Gujarat)',
      significance: 'Largest west-flowing river. Flows through rift valley (Vindhyas N, Satpura S). Sardar Sarovar Dam.',
      upsc: 'Flows through graben/rift valley — hence westward. Dhuandhar Falls & Marble Rocks at Jabalpur.',
    },
    {
      name: 'Mahanadi', icon: '💧', color: '#06B6D4',
      origin: 'Sihawa, Chhattisgarh (442 m)',
      length: '851 km', direction: 'NE → E (Bay of Bengal)',
      tributaries: ['Seonath', 'Jonk', 'Hasdo', 'Ib', 'Tel'],
      drains_into: 'Bay of Bengal (Odisha delta)',
      significance: 'Hirakud Dam — longest dam in India (4.8 km). Major Odisha rice cultivation.',
      upsc: 'Chilika Lake near its mouth. Name means "Great River".',
    },
  ],
  drainage_patterns: [
    { name: 'Dendritic', icon: '🌿', desc: 'Tree-like branches; uniform soft rock. Most common.', example: 'Ganga, Godavari plains' },
    { name: 'Trellis', icon: '🔲', desc: 'Right-angle tributaries; alternating hard-soft rock bands.', example: 'Vindhya tributaries' },
    { name: 'Radial', icon: '🌟', desc: 'Streams flow outward from central high dome.', example: 'Amarkantak, Parashnath' },
    { name: 'Centripetal', icon: '⚫', desc: 'Streams drain inward to a basin or depression.', example: 'Manipur, Loktak Lake area' },
    { name: 'Parallel', icon: '〰️', desc: 'Parallel streams on steep uniform slopes.', example: 'Western Ghats short rivers' },
    { name: 'Rectangular', icon: '⬛', desc: 'Right-angle turns controlled by faults/joints.', example: 'Aravalli region' },
  ],
}

export const CLIMATE_SEASONS = [
  {
    id: 'winter', name: 'Cold Weather Season', icon: '❄️', color: '#06B6D4',
    months: 'December – February',
    temp: '10–15°C (N India), 20–25°C (S India)',
    rainfall: 'Western Disturbances — snow to Himalayas, rain NW India',
    key_features: [
      'High pressure over India, low pressure over seas',
      'North-east trade winds prevail over India',
      'Tamil Nadu coast gets NE Monsoon rainfall (Oct–Dec)',
      'Western disturbances bring rains to Punjab, Haryana (rabi crops)',
      'Dense fog in Indo-Gangetic plains disrupts transport',
    ],
    crops: 'Wheat, Rabi crops (wheat, mustard, gram)',
  },
  {
    id: 'summer', name: 'Hot Weather Season', icon: '☀️', color: '#F97316',
    months: 'March – May',
    temp: '35–45°C (NW India — Thar Desert zone)',
    rainfall: 'Local convective showers — Mango showers (Kerala), Norwesters/Kalbaisakhi (WB)',
    key_features: [
      'Low pressure (ITCZ) builds over NW India / Thar region',
      'Loo — hot, dry, dust-laden winds blow in UP, Bihar, Rajasthan',
      'Dust storms common in UP and Rajasthan',
      'Kalbaisakhi (Norwester) — brief violent storms in WB and NE',
      '"Mango showers" beneficial for mango, coffee crops in South',
    ],
    crops: 'Mango harvest; summer vegetables',
  },
  {
    id: 'sw_monsoon', name: 'South-West Monsoon', icon: '🌧️', color: '#3B82F6',
    months: 'June – September',
    temp: '25–30°C (hot and humid)',
    rainfall: '~75% of India\'s annual rainfall in just 4 months',
    key_features: [
      'ITCZ shifts north — draws moist air from Indian Ocean',
      'Two branches: Arabian Sea (hits W Ghats) & Bay of Bengal (NE India first)',
      'Onset at Kerala by June 1 (avg) — "Burst of Monsoon"',
      'Orographic rainfall on windward western slopes of W Ghats',
      'Rain shadow: Deccan Plateau, Rajasthan, leeward areas get less rain',
    ],
    crops: 'Kharif: rice, cotton, jowar, bajra, maize, groundnut',
  },
  {
    id: 'retreating', name: 'Retreating Monsoon', icon: '🍂', color: '#F59E0B',
    months: 'October – November',
    temp: '20–30°C (transitional "October Heat")',
    rainfall: 'NE Monsoon — Tamil Nadu, Andhra Pradesh coast',
    key_features: [
      'SW monsoon retreats southward from NW India by October',
      'Bay of Bengal low-pressure systems → severe cyclones on east coast',
      'NE monsoon (October–December) brings rain to Tamil Nadu, Sri Lanka',
      'Andhra coast and Odisha most cyclone-prone in this season',
      'Clear skies but high residual humidity — called "October Heat"',
    ],
    crops: 'TN rice harvest; NE India rabi sowing begins',
  },
]

export const MONSOON_MECHANISM = [
  { step: 1, icon: '☀️', title: 'Differential Heating', desc: 'Land heats faster than sea. By May, land temp in NW India reaches 45–50°C forming intense low pressure.' },
  { step: 2, icon: '🌏', title: 'ITCZ Shifts North', desc: 'Inter-Tropical Convergence Zone moves northward to ~25°N in summer, pulling moist oceanic air into India.' },
  { step: 3, icon: '💨', title: 'Winds Cross Equator', desc: 'SE Trade Winds cross equator and deflect rightward (Coriolis Effect) to become SW monsoon winds.' },
  { step: 4, icon: '🌊', title: 'Moisture Pick-up', desc: 'SW winds travel over warm Indian Ocean, picking up enormous moisture (latent heat of vaporization).' },
  { step: 5, icon: '⛰️', title: 'Orographic Uplift', desc: 'Moisture-laden winds hit Western Ghats and Himalayas, rise, cool, condense → heavy rainfall on windward side.' },
  { step: 6, icon: '🌧️', title: 'Rainfall over India', desc: 'Kerala onset June 1 (avg). Full cover by mid-July. ~75% of India\'s annual rainfall in 4 months.' },
]

export const CLIMATE_TYPES = [
  { type: 'Am — Tropical Monsoon', icon: '🌧️', color: '#3B82F6', rainfall: '>200 cm', location: 'W coast, NE India (Meghalaya, Assam)', features: 'Heavy monsoon rain, short dry season' },
  { type: 'Aw — Tropical Savanna', icon: '☀️', color: '#F59E0B', rainfall: '50–150 cm', location: 'Interior Peninsular India, Deccan', features: 'Distinct wet-dry seasons, seasonal drought' },
  { type: 'BSh — Semi-Arid Steppe', icon: '🌵', color: '#F97316', rainfall: '25–50 cm', location: 'Rajasthan, Deccan interior, Kutch', features: 'Low rainfall, high evaporation, low humidity' },
  { type: 'BWh — Hot Desert', icon: '🏜️', color: '#EF4444', rainfall: '<25 cm', location: 'Thar Desert: Rajasthan, parts of Gujarat', features: 'Extremely arid, sparse vegetation' },
  { type: 'Cwa — Humid Subtropical', icon: '🌿', color: '#10B981', rainfall: '75–150 cm', location: 'Indo-Gangetic Plains (most of N India)', features: 'Hot summers, cool winters, monsoon rain' },
  { type: 'H — Highland / Alpine', icon: '🏔️', color: '#8B5CF6', rainfall: 'Varies', location: 'Himalayas, J&K, HP, Uttarakhand, NE hills', features: 'Cold, temperature decreases with altitude, snowfall' },
]

export const SOILS = [
  {
    name: 'Alluvial Soil', icon: '🌾', color: '#C8A96E', coverage: '43%',
    origin: 'Deposited by Himalayan rivers — Indus, Ganga, Brahmaputra systems',
    states: ['UP', 'Punjab', 'Haryana', 'West Bengal', 'Bihar', 'Assam'],
    properties: ['Very fertile', 'Rich in potash & phosphoric acid', 'Deficient in nitrogen', 'Sandy loam to clay texture'],
    crops: ['Wheat', 'Rice', 'Sugarcane', 'Maize', 'Pulses'],
    types: [
      { name: 'Khadar', desc: 'New alluvium, near rivers, light, renewed annually by floods — most fertile.' },
      { name: 'Bangar', desc: 'Old alluvium, higher level, calcareous kankar nodules, less fertile.' },
    ],
    upsc_points: ['Most extensive & fertile soil group (43% of India)', 'Kankar (calcareous nodules) found in Bangar', 'Best for Rabi crops — wheat heartland'],
  },
  {
    name: 'Black Soil (Regur)', icon: '🌸', color: '#2C2A24', coverage: '15%',
    origin: 'Weathering of Deccan Trap volcanic basalt during Cretaceous period',
    states: ['Maharashtra', 'Gujarat', 'MP', 'Karnataka', 'Andhra Pradesh', 'Tamil Nadu'],
    properties: ['High moisture retention — self-ploughing (swells/shrinks)', 'Rich in lime, iron, magnesia', 'Deficient in nitrogen, phosphorus', 'Deep cracks form in dry season'],
    crops: ['Cotton (best — hence "Cotton Soil")', 'Soybean', 'Wheat', 'Sugarcane', 'Groundnut'],
    types: [
      { name: 'Deep Black', desc: 'River valleys, highly fertile, Maharashtra Deccan.' },
      { name: 'Shallow Black', desc: 'Higher elevations, less fertile, gravelly.' },
    ],
    upsc_points: ['Self-ploughing: cracks in dry season mix the soil layers', 'Does NOT need much irrigation — holds moisture for months', 'Called "Regur" in Deccan, "Black Cotton Soil" elsewhere'],
  },
  {
    name: 'Red & Yellow Soil', icon: '🍂', color: '#C0503A', coverage: '18%',
    origin: 'Crystalline igneous rocks under tropical conditions. Fe₂O₃ (iron oxide) gives red color',
    states: ['Tamil Nadu', 'Andhra Pradesh', 'Odisha', 'Karnataka', 'MP', 'Jharkhand'],
    properties: ['Sandy, porous, less fertile', 'Rich in iron oxide', 'Deficient in nitrogen, humus', 'Yellow when hydrated (Fe₂O₃·H₂O)'],
    crops: ['Groundnut', 'Millets (Jowar, Bajra)', 'Pulses', 'Tobacco', 'Potato'],
    types: [],
    upsc_points: ['Red from Fe₂O₃ (iron oxide diffusion)', 'Low in rainfall areas of Peninsular India', 'Require fertilizers and irrigation for good yield'],
  },
  {
    name: 'Laterite Soil', icon: '🧱', color: '#B55C2A', coverage: '3.7%',
    origin: 'High temp + heavy seasonal rain → intense leaching removes silica; iron & aluminum oxides remain',
    states: ['Kerala', 'Karnataka', 'Maharashtra', 'Odisha', 'NE India', 'Meghalaya'],
    properties: ['Acidic (pH 4.5–6)', 'Rich in iron & aluminum oxides', 'Poor in nitrogen, humus', 'Highly leached, porous, low fertility'],
    crops: ['Tea', 'Coffee', 'Cashew', 'Coconut', 'Rubber'],
    types: [
      { name: 'High-level', desc: 'Hilltops — very hard, used as building bricks, no farming.' },
      { name: 'Low-level', desc: 'Foothills and valleys — farming possible with manure.' },
    ],
    upsc_points: ['Named from Latin "later" = brick — was literally used as building material', 'Tea and coffee thrive in acidic laterite soils', 'Humus rapidly destroyed by heat and leaching'],
  },
  {
    name: 'Arid / Desert Soil', icon: '🏜️', color: '#D4AA70', coverage: '4.4%',
    origin: 'Wind deposits (Aeolian) and slight water action in arid conditions',
    states: ['Rajasthan', 'Gujarat (Rann of Kutch)', 'S Haryana'],
    properties: ['Sandy, poor in humus & moisture', 'Low clay content', 'High soluble salt content (alkaline)', 'Infertile without irrigation'],
    crops: ['Bajra', 'Jowar', 'Barley (with Indira Gandhi Canal irrigation)'],
    types: [],
    upsc_points: ['Unusually HIGH in phosphate content!', 'Indira Gandhi Canal transformed Rajasthan agriculture', 'Evaporation permanently exceeds precipitation'],
  },
  {
    name: 'Saline / Alkaline Soil', icon: '🧂', color: '#E8E0CC', coverage: '2.5%',
    origin: 'Waterlogging + capillary action brings salts to surface; poor drainage',
    states: ['UP', 'Punjab', 'Haryana', 'Bihar', 'Rajasthan'],
    properties: ['High in sodium, potassium magnesium salts', 'Alkaline pH > 8.5', 'White salt crust on surface', 'Infertile'],
    crops: ['No major crops without reclamation'],
    types: [
      { name: 'Usar / Reh', desc: 'UP, Bihar plains — white salty crust, barren.' },
      { name: 'Kallar', desc: 'Punjab — highly alkaline white efflorescence.' },
    ],
    upsc_points: ['Occur in low-rainfall, poor drainage areas', 'Reclaimed with gypsum (CaSO₄) — replaces Na with Ca', 'Coastal areas have saline soils from seawater intrusion'],
  },
  {
    name: 'Peaty / Marshy Soil', icon: '🌊', color: '#374B34', coverage: '0.6%',
    origin: 'Waterlogged conditions — decomposed organic matter accumulates under anaerobic conditions',
    states: ['Kerala (Kuttanad)', 'Coastal WB', 'Odisha coast', 'Sundarbans'],
    properties: ['Heavy, wet, highly acidic', 'Rich in organic matter (>40%)', 'Poor aeration', 'Spongy texture'],
    crops: ['Rice (paddy)', 'Jute', 'Vegetables (in reclaimed Kuttanad)'],
    types: [],
    upsc_points: ['Kuttanad (Kerala) = farming BELOW sea level on peaty soil — UNESCO heritage site', 'Organic matter can exceed 40% of soil mass', 'Needs drainage + lime to reduce acidity for cultivation'],
  },
  {
    name: 'Forest / Mountain Soil', icon: '🌲', color: '#4A3728', coverage: '12%',
    origin: 'Himalayan and hill slopes — varies with altitude, temperature, rainfall, parent rock',
    states: ['Uttarakhand', 'HP', 'J&K', 'Sikkim', 'Arunachal', 'W Ghats slopes'],
    properties: ['High humus (upper layer)', 'Rocky, shallow, steep slopes', 'Acidic at higher altitudes', 'Fertile in valleys'],
    crops: ['Tea (W Ghats, Assam)', 'Coffee (Nilgiris)', 'Apple, Cherry (Himalayan valleys)'],
    types: [
      { name: 'Alpine Meadow Soil', desc: 'Above 2500m, thin, acidic, snow cover effect.' },
      { name: 'Brown Forest Soil', desc: '1500–2500m, moderate humus content.' },
    ],
    upsc_points: ['Most humus-rich soils in India', 'Vulnerable to erosion — deforestation a severe risk', 'Major tea gardens of NE India on forest soils'],
  },
]

export const VEGETATION = [
  {
    id: 'tropical_evergreen', name: 'Tropical Evergreen', icon: '🌴', color: '#16A34A',
    rainfall: '>200 cm', altitude: '0–1000 m', temp: '25–30°C',
    key_trees: ['Ebony', 'Mahogany', 'Rosewood', 'Rubber', 'Bamboo'],
    states: ['Western Ghats (Kerala, Karnataka)', 'NE India (Assam, Meghalaya, Arunachal)', 'Andaman & Nicobar'],
    features: ['Trees don\'t shed leaves together — no distinct dry season', 'Dense multilayer canopy (3 tiers)', 'High biodiversity — epiphytes, lianas', 'Commercially limited — mixed species, difficult access'],
    upsc: ['Silent Valley NP Kerala — core of evergreen', 'Shola forests — unique evergreen patches in Nilgiris', 'Part of 2 biodiversity hotspots: W Ghats & Indo-Burma'],
  },
  {
    id: 'moist_deciduous', name: 'Tropical Moist Deciduous', icon: '🌳', color: '#65A30D',
    rainfall: '100–200 cm', altitude: '0–800 m', temp: '26–32°C',
    key_trees: ['Teak', 'Sal', 'Shisham', 'Bamboo', 'Sandalwood', 'Arjun'],
    states: ['MP', 'Chhattisgarh', 'Odisha', 'Maharashtra', 'NE States'],
    features: ['Shed leaves in dry season (3–4 months)', 'Less dense than evergreen', 'Commercially most important', 'Teak — best quality timber'],
    upsc: ['Teak is India\'s most commercially valuable timber', 'Kanha NP, Pench NP set in moist deciduous', 'India has world\'s largest area under tropical deciduous forests'],
  },
  {
    id: 'dry_deciduous', name: 'Tropical Dry Deciduous', icon: '🍂', color: '#CA8A04',
    rainfall: '70–100 cm', altitude: '0–600 m', temp: '25–40°C',
    key_trees: ['Teak', 'Sal', 'Peepal', 'Neem', 'Palas', 'Amaltas'],
    states: ['UP', 'Bihar', 'Rajasthan', 'AP', 'TN interior', 'Karnataka Deccan'],
    features: ['Long dry season 6–8 months', 'Grassy undergrowth', 'Open forest structure', 'Easily degraded by human pressure'],
    upsc: ['Most of India\'s tiger reserves are here', 'Transitional belt between moist deciduous and thorn', 'Sal is most commercially important tree here'],
  },
  {
    id: 'thorn', name: 'Tropical Thorn & Scrub', icon: '🌵', color: '#B45309',
    rainfall: '<70 cm', altitude: '0–400 m', temp: '25–45°C',
    key_trees: ['Acacia', 'Cactus', 'Kikar', 'Wild Date Palm', 'Khejri (Prosopis cineraria)'],
    states: ['Rajasthan', 'Gujarat', 'Haryana (arid belt)', 'UP (western parts)'],
    features: ['Long thorns as adaptation to water scarcity', 'Waxy or reduced leaves to minimize transpiration', 'Deep root systems for groundwater access', 'Very sparse, scattered canopy'],
    upsc: ['Khejri — state tree of Rajasthan; sacred to Bishnoi community', 'Desert National Park, Rajasthan — Great Indian Bustard habitat', 'Shifting cultivation (Jhum) practiced in NE fringe'],
  },
  {
    id: 'montane', name: 'Montane / Alpine Forests', icon: '🏔️', color: '#0369A1',
    rainfall: 'Varies with altitude', altitude: '1000–4500+ m', temp: '-5 to 15°C',
    key_trees: ['Oak', 'Rhododendron', 'Deodar', 'Pine', 'Silver Fir', 'Juniper', 'Birch'],
    states: ['Uttarakhand', 'HP', 'J&K', 'Sikkim', 'Arunachal', 'Nilgiris'],
    features: ['Altitudinal zonation — distinct belts', 'Conifers dominate upper zones', 'Rhododendron blooms spectacularly', 'Above treeline: Alpine meadows (Bugyal)'],
    upsc: ['Valley of Flowers NP Uttarakhand — UNESCO WHS, alpine meadow', 'Bugyals = high altitude grasslands — Kedarnath Wildlife Sanctuary', 'Shola-grassland ecosystem in Nilgiris'],
  },
  {
    id: 'mangrove', name: 'Mangrove / Tidal Forests', icon: '🌿', color: '#065F46',
    rainfall: '>150 cm coastal', altitude: 'Sea level (intertidal zone)', temp: '20–35°C',
    key_trees: ['Sundri (Heritiera fomes)', 'Goran', 'Rhizophora', 'Avicennia', 'Bruguiera'],
    states: ['West Bengal (Sundarbans)', 'Odisha (Bhitarkanika)', 'TN (Pichavaram)', 'Gujarat', 'Maharashtra', 'Andaman'],
    features: ['Prop/stilt roots to anchor in soft mud', 'Pneumatophores (breathing roots)', 'Salt-tolerant (halophytes)', 'Coastal protection + fish nursery'],
    upsc: ['Sundarbans — world\'s largest mangrove (4,262 km²), UNESCO WHS, Bengal Tiger', 'Bhitarkanika (Odisha) — 2nd largest mangrove in India', 'Mangroves absorb storm surge — protect coasts from cyclones'],
  },
]

export const BIOSPHERE_RESERVES = [
  { name: 'Nilgiri', states: 'TN, Kerala, Karnataka', icon: '🌿', upsc: '1st Biosphere Reserve in India (1986). Part of UNESCO MAB Network.' },
  { name: 'Sundarbans', states: 'West Bengal', icon: '🐅', upsc: 'UNESCO WHS. World\'s largest mangrove. Bengal Tiger.' },
  { name: 'Gulf of Mannar', states: 'Tamil Nadu', icon: '🐬', upsc: '1st Marine Biosphere Reserve. Dugong, Whale shark, Coral reefs.' },
  { name: 'Nanda Devi', states: 'Uttarakhand', icon: '🏔️', upsc: 'UNESCO WHS (2016 expanded). Snow leopard, Himalayan brown bear.' },
  { name: 'Nokrek', states: 'Meghalaya', icon: '🌳', upsc: 'UNESCO (2009). Red Panda habitat. Rare wild citrus species.' },
  { name: 'Pachmarhi', states: 'Madhya Pradesh', icon: '🌲', upsc: '"Queen of Satpura". UNESCO MAB (2009). Satpura Tiger Reserve.' },
  { name: 'Simlipal', states: 'Odisha', icon: '🐘', upsc: 'Elephant and tiger habitat. Barehipani & Joranda waterfalls.' },
  { name: 'Kanchenjunga', states: 'Sikkim', icon: '🏔️', upsc: 'UNESCO WHS (2016). Kanchenjunga (8,586m) — highest peak in India.' },
  { name: 'Agasthyamalai', states: 'TN, Kerala', icon: '🦋', upsc: 'UNESCO (2016). Rare endemic species. Neyyar, Peppara WLSs.' },
  { name: 'Great Nicobar', states: 'Andaman & Nicobar', icon: '🐢', upsc: 'Leatherback sea turtle. Indira Point — southernmost tip of India.' },
  { name: 'Cold Desert', states: 'Himachal Pradesh', icon: '❄️', upsc: 'Spiti Valley. Snow leopard, Himalayan wolf, Tibetan wild ass.' },
  { name: 'Great Rann of Kutch', states: 'Gujarat', icon: '🦩', upsc: 'Indian wild ass, flamingo nesting. Seasonal salt marsh.' },
]

export const INDIA_GEO_SECTIONS = [
  { id: 'physical', title: 'Physical Features', icon: '🏔️', color: '#8B5CF6', link: '/geography/indian-physical', desc: 'Himalayas, Plains, Plateau, Coastal & Islands' },
  { id: 'rivers', title: 'Rivers & Drainage', icon: '🌊', color: '#3B82F6', link: '/geography/indian-rivers', desc: 'Himalayan vs Peninsular rivers, drainage patterns' },
  { id: 'climate', title: 'Climate & Monsoon', icon: '🌧️', color: '#06B6D4', link: '/geography/indian-climate', desc: 'Seasons, Monsoon mechanism, Climate types' },
  { id: 'soils', title: 'Soil Types', icon: '🌿', color: '#65A30D', link: '/geography/indian-soils', desc: '8 soil types with properties and crops' },
  { id: 'vegetation', title: 'Natural Vegetation', icon: '🌴', color: '#16A34A', link: '/geography/indian-vegetation', desc: 'Forest types, Biosphere Reserves & Wildlife' },
]

export const WORLD_GEO_SECTIONS = [
  { id: 'geomorphology', title: 'Geomorphology', icon: '🌋', color: '#EF4444', link: '/geography/world-geomorphology', desc: 'Earth structure, Landforms, Volcanoes, Earthquakes' },
  { id: 'climatology', title: 'Climatology', icon: '💨', color: '#F59E0B', link: '/geography/world-climatology', desc: 'Pressure belts, Wind systems, Ocean currents, Koppen' },
  { id: 'oceanography', title: 'Oceanography', icon: '🌊', color: '#0EA5E9', link: '/geography/world-oceanography', desc: 'Oceans, Ocean floor, Tides, Coral reefs' },
  { id: 'biomes', title: 'World Biomes', icon: '🌍', color: '#10B981', link: '/geography/world-biomes', desc: 'Global biomes, flora, fauna, latitudinal zonation' },
]

export const UPSC_MINDMAP = {
  label: 'Geography', icon: '🌍', color: '#3B82F6',
  children: [
    { label: 'Indian Geo', icon: '🇮🇳', color: '#F59E0B', items: ['Physical', 'Rivers', 'Climate', 'Soils', 'Vegetation'] },
    { label: 'Geomorphology', icon: '🌋', color: '#EF4444', items: ['Earth Layers', 'Landforms', 'Volcanoes', 'Earthquakes'] },
    { label: 'Climatology', icon: '💨', color: '#06B6D4', items: ['Pressure', 'Winds', 'Currents', 'Koppen'] },
    { label: 'Oceanography', icon: '🌊', color: '#0EA5E9', items: ['5 Oceans', 'Ocean Floor', 'Tides', 'Coral'] },
    { label: 'World Biomes', icon: '🌿', color: '#10B981', items: ['Tropical', 'Savanna', 'Desert', 'Tundra'] },
    { label: 'Economic Geo', icon: '💰', color: '#8B5CF6', items: ['Agriculture', 'Minerals', 'Industry', 'Trade'] },
  ],
}
