// ============================================================
// WORLD GEOGRAPHY — UPSC SYLLABUS DATA
// ============================================================

export const EARTH_LAYERS = [
    {
        name: 'Inner Core', icon: '🔴', color: '#EF4444',
        depth: '5,100–6,371 km', radius: '1,271 km', temp: '5,000–6,000°C',
        state: 'Solid (despite extreme heat — due to immense pressure)',
        composition: 'Iron (80%) and Nickel — hence "NiFe"',
        facts: ['Seismic wave P (primary) passes through; S (secondary) is deflected', 'Temperature similar to surface of the Sun', 'Discovered by Inge Lehmann in 1936'],
    },
    {
        name: 'Outer Core', icon: '🟠', color: '#F97316',
        depth: '2,900–5,100 km', radius: '2,200 km thick', temp: '4,000–5,000°C',
        state: 'Liquid (iron-nickel alloy)',
        composition: 'Liquid iron and nickel',
        facts: ['Convection currents here generate Earth\'s magnetic field (geodynamo)', 'S-waves cannot pass through liquid outer core — this is how it was identified', 'Rotation of outer core relative to inner core causes magnetic field variations'],
    },
    {
        name: 'Lower Mantle', icon: '🟡', color: '#F59E0B',
        depth: '660–2,900 km', thickness: '~2,240 km', temp: '1,500–3,000°C',
        state: 'Solid (silicate rocks under extreme pressure)',
        composition: 'Silicates of magnesium and iron (Peridotite)',
        facts: ['Highly viscous solid — behaves plastically over long timescales', 'Seismic discontinuity at 660 km separates upper from lower mantle (Repetti Discontinuity)', 'Density: 4.3–5.6 g/cm³'],
    },
    {
        name: 'Upper Mantle + Asthenosphere', icon: '🟢', color: '#10B981',
        depth: '10–660 km', thickness: '~650 km', temp: '300–1,500°C',
        state: 'Semisolid / Plastic (Asthenosphere is partially melted)',
        composition: 'Olivine, Pyroxene rich silicates',
        facts: ['Asthenosphere (70–250 km depth) is putty-like — allows tectonic plate movement', 'Lithosphere sits on top of asthenosphere', 'Mohorovičić Discontinuity (Moho) separates mantle from crust'],
    },
    {
        name: 'Crust', icon: '🔵', color: '#3B82F6',
        depth: '0–70 km (continental), 0–10 km (oceanic)', thickness: '5–70 km',
        temp: '20–900°C (bottom)', state: 'Solid',
        composition: 'Continental: Granite (SIAL — Silica+Aluminium); Oceanic: Basalt (SIMA — Silica+Magnesium)',
        facts: ['Lightest layer — floats on denser mantle (isostasy)', 'Continental crust: 30–70 km, granitic; Oceanic crust: 5–10 km, basaltic', 'Conrad Discontinuity separates upper and lower crust'],
    },
]

export const ROCK_TYPES = [
    {
        name: 'Igneous Rocks', icon: '🌋', color: '#EF4444',
        origin: 'Solidification of magma (underground) or lava (surface)',
        types: [
            { name: 'Intrusive (Plutonic)', examples: 'Granite, Diorite, Gabbro', desc: 'Slow cooling inside earth → coarse-grained crystals. Exposed by erosion (inselbergs, batholiths).' },
            { name: 'Extrusive (Volcanic)', examples: 'Basalt, Rhyolite, Obsidian', desc: 'Rapid cooling at surface → fine-grained or glassy. Deccan Traps are basaltic lava.' },
        ],
        upsc: ['Granite is most abundantly found igneous rock', 'Deccan Traps = 65 million year old basaltic lava (formed Deccan Plateau)', 'Igneous rocks have no fossils and no stratification'],
    },
    {
        name: 'Sedimentary Rocks', icon: '📚', color: '#F59E0B',
        origin: 'Deposition and lithification of sediments (physical, chemical, biological)',
        types: [
            { name: 'Mechanically formed', examples: 'Sandstone, Shale, Conglomerate', desc: 'Wind, water, ice deposit particles; compaction and cementation → rock.' },
            { name: 'Chemically formed', examples: 'Limestone (CaCO₃), Rock Salt, Gypsum', desc: 'Precipitation from solution; evaporite deposits.' },
            { name: 'Organically formed', examples: 'Coal, Chalk, Coral limestone', desc: 'Accumulation of organic matter (plants → coal; sea creatures → chalk).' },
        ],
        upsc: ['Stratified (layered) rocks — contain FOSSILS (key for geological timeline)', 'Gondwana sedimentary rocks contain most of India\'s coal', 'Marble is metamorphosed limestone — a transformation product'],
    },
    {
        name: 'Metamorphic Rocks', icon: '💎', color: '#8B5CF6',
        origin: 'Pre-existing rocks transformed by heat and/or pressure without melting',
        types: [
            { name: 'Contact/Thermal metamorphism', examples: 'Marble (from Limestone), Quartzite (from Sandstone)', desc: 'Caused by heat alone near magma intrusions.' },
            { name: 'Regional/Dynamic metamorphism', examples: 'Slate (from Shale), Schist, Gneiss', desc: 'Caused by heat + pressure over wide areas (mountain building).' },
        ],
        upsc: ['Marble of Makrana (Rajasthan) — used in Taj Mahal', 'Chota Nagpur has abundant metamorphic rocks with minerals', 'Gnesis forms the basement rocks of Deccan Plateau'],
    },
]

export const PLATE_TECTONICS = [
    { type: 'Convergent (Collision)', icon: '⛰️', color: '#EF4444', desc: 'Plates move toward each other. Oceanic plate subducts under continental → trenches, volcanic arc. Two continental plates collide → fold mountains.', examples: 'Himalayas (India + Eurasia), Andes (Nazca + S. America), Japan Trench' },
    { type: 'Divergent', icon: '↔️', color: '#10B981', desc: 'Plates move away from each other. Magma wells up → Mid-ocean ridges (oceanic), Rift valleys (continental).', examples: 'Mid-Atlantic Ridge, East African Rift Valley, Red Sea' },
    { type: 'Transform / Conservative', icon: '↕️', color: '#F59E0B', desc: 'Plates slide horizontally past each other. No creation or destruction of crust. Produces major faults and earthquakes.', examples: 'San Andreas Fault (California), North Anatolian Fault (Turkey)' },
]

export const VOLCANO_TYPES = [
    {
        name: 'Shield Volcano', icon: '🛡️', color: '#3B82F6',
        shape: 'Broad, gently sloping (shield-like)',
        lava: 'Basaltic (low viscosity, flows rapidly)',
        eruption: 'Non-explosive, effusive', height: 'Very large base, moderate height',
        examples: ['Mauna Loa (Hawaii) — world\'s largest by volume', 'Mauna Kea (tallest from sea floor)', 'Iceland shield volcanoes'],
        upsc: 'Hawaii hotspot shield volcanoes. Lava flows fast, less explosive danger. Deccan Traps were formed by shield-like flood basalt eruptions.',
    },
    {
        name: 'Composite / Stratovolcano', icon: '🌋', color: '#EF4444',
        shape: 'Steep, conical, classic volcano shape',
        lava: 'Andesitic/Rhyolitic (high viscosity, explosive)',
        eruption: 'Explosive, periodic',
        examples: ['Mt. Fuji (Japan)', 'Mt. Vesuvius (Italy)', 'Mt. St. Helens (USA)', 'Pinatubo (Philippines)'],
        upsc: 'Most dangerous volcanoes. Pyroclastic flows (ash + hot gas) are deadly. Ring of Fire dominated by stratovolcanoes.',
    },
    {
        name: 'Caldera Volcano', icon: '⭕', color: '#A78BFA',
        shape: 'Collapsed crater (caldera) — large depression',
        lava: 'Rhyolitic (super-explosive then collapse)',
        eruption: 'Super-explosive, then magma chamber collapses',
        examples: ['Yellowstone National Park (USA)', 'Toba Caldera (Indonesia — Toba Catastrophe 74,000 ya)', 'Long Valley Caldera (California)'],
        upsc: 'Toba supervolcano eruption ~74,000 years ago — nearly caused human extinction (bottleneck theory). Yellowstone is monitored closely.',
    },
    {
        name: 'Cinder Cone', icon: '🔺', color: '#F97316',
        shape: 'Steep-sided cone of cinders and ash fragments',
        lava: 'Basaltic or andesitic fragments (tephra)',
        eruption: 'Short, violent ejection of cinders',
        examples: ['Paricutin (Mexico — grew overnight in 1943)', 'Sunset Crater (Arizona)', 'Barren Island (India — India\'s only active volcano)'],
        upsc: 'Barren Island in Andaman & Nicobar — India\'s only active volcano. Narcondam (near Barren) is dormant.',
    },
]

export const EARTHQUAKES_DATA = {
    basics: [
        { term: 'Focus / Hypocenter', icon: '⚫', desc: 'Point of origin of earthquake energy below Earth\'s surface.' },
        { term: 'Epicenter', icon: '📍', desc: 'Point on Earth\'s surface directly above the focus. Maximum damage here.' },
        { term: 'Seismograph', icon: '📈', desc: 'Instrument that records seismic waves. Seismogram = the recording.' },
        { term: 'Richter Scale', icon: '📊', desc: 'Logarithmic scale 1–10. Each step = 10× more amplitude, ~31.6× more energy. Devised by Charles Richter (1935).' },
    ],
    wave_types: [
        { name: 'P-waves (Primary)', icon: '➡️', color: '#3B82F6', desc: 'Compressional waves. Travel through solids AND liquids. Fastest. Arrive first.' },
        { name: 'S-waves (Secondary)', icon: '〰️', color: '#F59E0B', desc: 'Shear waves. Travel only through SOLIDS. Cannot pass through outer core. Arrive second.' },
        { name: 'Surface Waves (L)', icon: '🌊', color: '#EF4444', desc: 'Travel along Earth\'s surface. Slowest but MOST DESTRUCTIVE. Cause most building damage.' },
    ],
    india_zones: [
        { zone: 'Zone V', color: '#EF4444', risk: 'Very Severe — highest risk', states: 'NE India, J&K, Uttarakhand, N Bihar, Andaman & Nicobar' },
        { zone: 'Zone IV', color: '#F97316', risk: 'Severe risk', states: 'N Punjab, N Rajasthan, Delhi, N UP, Himachal Pradesh, Sikkim' },
        { zone: 'Zone III', color: '#F59E0B', risk: 'Moderate risk', states: 'Kerala, Goa, Lakshadweep, WB, Gujarat, UP, Punjab, MP' },
        { zone: 'Zone II', color: '#22C55E', risk: 'Low risk', states: 'Most of Peninsular India, Rajasthan, Odisha (remaining areas)' },
    ],
    famous_quakes: [
        { name: 'Bhuj Earthquake', year: '2001', magnitude: '7.7 Mw', impact: '~13,800 deaths, Gujarat; one of worst in Indian history' },
        { name: 'Nepal Earthquake', year: '2015', magnitude: '7.8 Mw', impact: '~9,000 deaths, affected Bihar and NE India too' },
        { name: 'Uttarkashi Earthquake', year: '1991', magnitude: '6.8 Mw', impact: '768 deaths, Uttarakhand (then UP)' },
        { name: 'Kashmir Earthquake', year: '2005', magnitude: '7.6 Mw', impact: '~79,000 deaths, J&K and Pakistan' },
    ],
}

export const PRESSURE_BELTS = [
    { name: 'Equatorial Low Pressure Belt', latitudes: '0°–5° N & S', icon: '🔆', color: '#EF4444', winds: 'Doldrums (calm)', reason: 'Intense solar heating → hot air rises. Low pressure. Convergence of Trade Winds.', weather: 'Heavy rainfall, thunderstorms, humid, no wind (doldrums)', examples: 'Amazon Basin, Congo, Equatorial SE Asia' },
    { name: 'Subtropical High Pressure Belt', latitudes: '25°–35° N & S', icon: '⬇️', color: '#F97316', winds: 'Horse Latitudes (calm)', reason: 'Air that rose at equator cools and descends here. High pressure.', weather: 'Dry, sunny, clear skies — location of world\'s major deserts', examples: 'Sahara, Arabian, Thar, Australian deserts all on 25–35°' },
    { name: 'Sub-polar Low Pressure Belt', latitudes: '60°–65° N & S', icon: '🌀', color: '#3B82F6', winds: 'Convergence of Westerlies and Polar Easterlies', reason: 'Convergence of warm westerlies and cold polar air. Warm air rises.', weather: 'Cyclonic activity, variable storms, cloudy', examples: 'North Atlantic, North Pacific, sub-Antarctic oceans' },
    { name: 'Polar High Pressure Belt', latitudes: '~90° N & S', icon: '❄️', color: '#06B6D4', winds: 'Polar Easterlies flow outward', reason: 'Extremely cold descending air. High pressure.', weather: 'Extreme cold (-50°C+). Very dry. Polar desert conditions.', examples: 'Antarctic ice sheet, Arctic Ocean ice' },
]

export const WIND_SYSTEMS = [
    { name: 'Trade Winds', icon: '🌬️', color: '#3B82F6', direction: 'From Subtropical High → Equatorial Low', hemisphere: 'N: NE Trade Winds; S: SE Trade Winds (Coriolis effect)', significance: 'Powered ancient maritime trade routes (Columbus used NE Trade Winds to reach America). Pick up moisture over oceans → heavy rainfall on eastern coasts of continents.', upsc: 'Consistent, reliable winds — basis of the Indian Ocean trade network historically.' },
    { name: 'Westerlies', icon: '💨', color: '#F59E0B', direction: 'From Subtropical High → Sub-polar Low', hemisphere: 'N: SW Westerlies; S: NW Westerlies (mirrored)', significance: 'Bring weather systems across mid-latitude continents. "Roaring Forties" (40–50°S), "Furious Fifties" (50–60°S), "Screaming Sixties" (60–70°S) in southern hemisphere.', upsc: 'Western Disturbances (WD) are extra-tropical cyclones embedded in Westerlies — bring winter rains to N India.' },
    { name: 'Polar Easterlies', icon: '🧊', color: '#06B6D4', direction: 'From Polar High → Sub-polar Low', hemisphere: 'N: NE; S: SE (Coriolis effect)', significance: 'Cold, dry, dense. Meet warm Westerlies at polar front → cyclogenesis. Bring extreme cold to high latitudes.', upsc: 'Polar vortex disruption can send cold polar air to mid-latitudes — extreme winter events.' },
]

export const LOCAL_WINDS = [
    { name: 'Loo', icon: '🔥', color: '#EF4444', origin: 'Hot, dry wind; NW India', season: 'May–June', effect: 'Causes heat stroke; temperatures over 45°C' },
    { name: 'Kalbaisakhi (Norwester)', icon: '⛈️', color: '#8B5CF6', origin: 'WB and NE India', season: 'April–May', effect: 'Violent pre-monsoon thunderstorms; beneficial for jute, tea' },
    { name: 'Mango Showers', icon: '🥭', color: '#F59E0B', origin: 'Kerala, Karnataka', season: 'April–May', effect: 'Helps ripen mangoes; also benefits coffee and pepper crops' },
    { name: 'Foehn', icon: '🌬️', color: '#F97316', origin: 'Alps (Europe)', season: 'Year-round', effect: 'Warm dry wind on leeward of mountains; rapid temperature rise' },
    { name: 'Chinook', icon: '💨', color: '#F59E0B', origin: 'Rockies, N America', season: 'Winter', effect: '"Snow Eater" — warms and rapidly melts snow on Great Plains' },
    { name: 'Mistral', icon: '❄️', color: '#06B6D4', origin: 'France (Rhône Valley)', season: 'Winter', effect: 'Cold, dry NW wind; damages crops in southern France' },
    { name: 'Sirocco', icon: '🏜️', color: '#F97316', origin: 'Sahara → Mediterranean', season: 'Spring', effect: 'Hot, dry, dusty; brings red Saharan dust to S Europe' },
    { name: 'Harmattan', icon: '🌪️', color: '#CA8A04', origin: 'Sahara → W Africa', season: 'November–March', effect: 'Hot, dry, dust-laden; called "Doctor" as it provides relief from humidity' },
    { name: 'Bora', icon: '🌨️', color: '#3B82F6', origin: 'Adriatic coast, Europe', season: 'Winter', effect: 'Cold, dry katabatic wind from mountains to coast' },
    { name: 'Ghibli', icon: '🌫️', color: '#D4AA70', origin: 'Libya (N Africa)', season: 'Spring', effect: 'Hot, dusty wind from Sahara; temperature >38°C' },
]

export const OCEAN_CURRENTS = {
    warm: [
        { name: 'Gulf Stream', ocean: 'N Atlantic', color: '#EF4444', path: 'Gulf of Mexico → N Atlantic → NW Europe', effect: 'Keeps Western Europe warm. Merges with N Atlantic Drift.', upsc: 'Makes London (52°N) milder than Montreal (45°N) despite higher latitude.' },
        { name: 'N Atlantic Drift', ocean: 'N Atlantic', color: '#F97316', path: 'Continuation of Gulf Stream → NW Europe', effect: 'Keeps North Sea and Norwegian coast free of ice.', upsc: 'Critical for European climate moderation; ports remain ice-free.' },
        { name: 'Kuroshio Current', ocean: 'N Pacific', color: '#F59E0B', path: 'Philippines → Japan → NE Pacific', effect: '"Black Current" — keeps Japan\'s Pacific coast warm. Fisheries.', upsc: 'Pacific equivalent of Gulf Stream. Warm temp + nutrients rich.' },
        { name: 'North Equatorial Current', ocean: 'Pacific & Atlantic', color: '#FBBF24', path: 'W to E along equator (N)', effect: 'Driven by NE Trade Winds. Feeds major currents.', upsc: 'Closely related to ENSO (El Niño affects this current).' },
        { name: 'Agulhas Current', ocean: 'Indian Ocean (W)', color: '#22C55E', path: 'E coast of Africa → S', effect: 'Warm; significant for Indian Ocean circulation. Warms E Africa coast.', upsc: 'Part of Indian Ocean gyre. El Niño affects Indian Ocean currents.' },
        { name: 'Brazilian Current', ocean: 'S Atlantic', color: '#F43F5E', path: 'S along Brazil\'s coast', effect: 'Warms tropical S. America\'s east coast.', upsc: 'S. Atlantic gyre — warm current on western side.' },
    ],
    cold: [
        { name: 'Labrador Current', ocean: 'N Atlantic', color: '#3B82F6', path: 'Arctic → S along E coast of Canada', effect: 'Fogs off Newfoundland (meets Gulf Stream). Cold fishing grounds.', upsc: 'Brings icebergs S into shipping lanes (Titanic hiticed this area). Grand Banks — major fishing.' },
        { name: 'Canary Current', ocean: 'N Atlantic (E)', color: '#06B6D4', path: 'N along NW Africa coast → S', effect: 'Upwelling brings nutrients → rich fisheries. Causes Sahara desert aridity on N Africa coast.', upsc: 'Cold current on eastern side of N Atlantic. Sahara along 25°N on coast?' },
        { name: 'Humboldt / Peru Current', ocean: 'S Pacific (E)', color: '#0EA5E9', path: 'S along W coast of S. America', effect: 'Upwelling creates rich fisheries (anchovy, tuna). Atacama Desert kept dry.', upsc: 'El Niño = disruption of Humboldt current → South American floods, Indian monsoon failure.' },
        { name: 'Benguela Current', ocean: 'S Atlantic (E)', color: '#6366F1', path: 'S along W coast of Africa (Angola→S Africa)', effect: 'Cold; upwelling. Creates Namib Desert aridity. Rich fisheries.', upsc: 'Namib Desert (world\'s oldest) maintained by Benguela cold current.' },
        { name: 'West Australian Current', ocean: 'S Indian Ocean (E)', color: '#8B5CF6', path: 'S along W coast of Australia', effect: 'Cold; makes W Australia coast drier. Australian desert along coast.', upsc: 'Part of S. Indian Ocean gyre. Upwelling zone.' },
        { name: 'Oyashio Current', ocean: 'N Pacific', color: '#A78BFA', path: 'Arctic → S along Russia/Japan (E)', effect: 'Cold; meets Kuroshio → Japan\'s rich fishing grounds.', upsc: 'Mixing of Kuroshio (warm) + Oyashio (cold) = highly productive fishing zone.' },
    ],
    el_nino_la_nina: {
        el_nino: {
            name: 'El Niño', icon: '🔴', color: '#EF4444',
            what: 'Abnormal warming of central and eastern tropical Pacific Ocean every 2–7 years.',
            effects: ['Weakens Indian SW Monsoon → drought risk in India', 'Heavy rains in Peru and Ecuador', 'Drought in Australia, Indonesia, SE Asia', 'Weakens Walker Circulation (equatorial E-W wind pattern)', 'Atlantic hurricane suppression'],
            upsc: 'El Niño (1987, 2014–16) correlated with weak Indian monsoon and drought. ENSO = El Niño-Southern Oscillation.',
        },
        la_nina: {
            name: 'La Niña', icon: '🔵', color: '#3B82F6',
            what: 'Abnormal cooling of central and eastern tropical Pacific Ocean — opposite of El Niño.',
            effects: ['Strengthens Indian SW Monsoon → above-normal rainfall', 'Drought in South America (Peru, Ecuador)', 'Heavy rains in Indonesia, Australia', 'Stronger Walker Circulation', 'Active Atlantic hurricane season'],
            upsc: 'La Niña (2010–11) → devastating Pakistan floods AND India floods. "El Viejo" (the old man) vs El Niño (the child).',
        },
    },
}

export const KOPPEN_CLIMATE = [
    { code: 'Af', group: 'A', name: 'Tropical Rainforest', icon: '🌴', color: '#16A34A', rainfall: '>60mm every month', temp: '>18°C all year', location: 'Equatorial belt: Amazon, Congo, SEAsia', features: 'No dry season, evergreen, high biodiversity' },
    { code: 'Am', group: 'A', name: 'Tropical Monsoon', icon: '🌧️', color: '#22C55E', rainfall: 'High seasonal', temp: '>18°C all year', location: 'India, Bangladesh, Myanmar, parts of W Africa', features: 'Short dry season, dominated by monsoon rainfall' },
    { code: 'Aw', group: 'A', name: 'Tropical Savanna', icon: '🌾', color: '#65A30D', rainfall: 'Wet/dry seasons', temp: '>18°C all year', location: 'Tropical Africa, Brazil cerrado, India Deccan', features: 'Distinct dry and wet seasons, grasslands' },
    { code: 'BWh', group: 'B', name: 'Hot Desert', icon: '🏜️', color: '#EF4444', rainfall: '<25 cm/yr', temp: '>18°C avg', location: 'Sahara, Arabian, Thar, Australian', features: 'Extremely arid, extreme heat, sparse vegetation' },
    { code: 'BWk', group: 'B', name: 'Cold Desert', icon: '❄️', color: '#6366F1', rainfall: '<25 cm/yr', temp: '<18°C avg', location: 'Gobi Desert, Ladakh (India), Patagonia', features: 'Arid but cold; extreme temperature range' },
    { code: 'Cs', group: 'C', name: 'Mediterranean', icon: '🌿', color: '#F59E0B', rainfall: 'Dry hot summer, wet mild winter', temp: '10–22°C avg', location: 'Mediterranean basin, California, SW Australia, Chile', features: 'Chaparral, olive, viticulture; fire-prone summers' },
    { code: 'Cfa', group: 'C', name: 'Humid Subtropical', icon: '🌳', color: '#84CC16', rainfall: 'Year-round, summer peak', temp: 'Hot humid summer, mild winter', location: 'SE USA, E China, Japan, NE Argentina, N India (Koppen Cwa)', features: 'Cotton, rice, subtropical crops' },
    { code: 'Cfb', group: 'C', name: 'Oceanic / Maritime', icon: '🌦️', color: '#06B6D4', rainfall: 'Year-round, evenly spread', temp: 'Mild, no extreme', location: 'W Europe, NW USA, NZ, SE Australia', features: 'Moderate temp, cloudy, deciduous forests' },
    { code: 'Dfa/Dfb', group: 'D', name: 'Humid Continental', icon: '🍁', color: '#F97316', rainfall: 'Year-round', temp: 'Hot/warm summer, very cold winter', location: 'N USA, Canada, Russia, N China', features: 'Boreal forests, cold winters, wheat belt' },
    { code: 'ET', group: 'E', name: 'Tundra', icon: '🐻‍❄️', color: '#A78BFA', rainfall: '<25 cm (mostly snow)', temp: '0–10°C in warmest month', location: 'Arctic coastal areas, high-altitude tundra', features: 'Permafrost, dwarf shrubs, harsh conditions' },
    { code: 'EF', group: 'E', name: 'Ice Cap', icon: '🧊', color: '#8B5CF6', rainfall: 'Very low', temp: '<0°C always', location: 'Antarctica, Greenland ice sheets', features: 'Permanent ice, no vegetation' },
]

export const OCEANS = [
    {
        name: 'Pacific Ocean', icon: '🌊', color: '#3B82F6',
        area: '165.25 million km²', depth: '4,028 m avg', deepest: 'Mariana Trench (11,034 m — deepest point on Earth)',
        facts: ['Covers one-third of Earth\'s total surface area — larger than all land combined', 'Contains "Ring of Fire" — 75% of world\'s volcanoes', 'Mariana Trench depth = Everest height + 2 km more', 'El Niño–La Niña phenomenon originates here', 'Pacific plate is the largest tectonic plate'],
        upsc: 'El Niño (Pacific warming) directly affects Indian monsoon. Mariana Trench explored by Challenger Deep (1960).',
    },
    {
        name: 'Atlantic Ocean', icon: '🌊', color: '#06B6D4',
        area: '106.46 million km²', depth: '3,332 m avg', deepest: 'Puerto Rico Trench (8,376 m)',
        facts: ['S-shaped ocean between Americas and Europe/Africa', 'Mid-Atlantic Ridge runs its entire length N–S', 'Gulf Stream keeps NW Europe warm', 'Most important ocean for historical trade routes', 'Smallest ENSO impact but significant for European weather'],
        upsc: 'Bermuda Triangle is in N Atlantic. Gulf Stream = critical for Western Europe\'s climate moderation. North Sea fisheries.',
    },
    {
        name: 'Indian Ocean', icon: '🌊', color: '#0EA5E9',
        area: '70.56 million km²', depth: '3,741 m avg', deepest: 'Java/Sunda Trench (7,187 m)',
        facts: ['Only ocean with seasonal reversal of currents (due to monsoon winds)', 'Surrounded on three sides by land — unique enclosed shape', 'Warmest ocean — no direct connection to Arctic', 'Most important for Indian, Arabian and East African civilizations', 'Location of Indian Ocean Ridge (Y-shaped)'],
        upsc: 'Seasonal monsoon reversal of current is unique to this ocean. Crucial for India — SW monsoon originates here.',
    },
    {
        name: 'Arctic Ocean', icon: '❄️', color: '#A78BFA',
        area: '14.06 million km²', depth: '1,205 m avg', deepest: 'Molloy Deep (5,669 m)',
        facts: ['Smallest and shallowest of all oceans', 'Largely covered by sea ice (Arctic ice cap)', 'Rapid warming — sea ice declining at ~13% per decade', 'Northwest Passage and Northern Sea Route being opened by melting', 'Polar bears, walruses, narwhals in this ocean'],
        upsc: 'Arctic sea ice decline = global warming indicator. Northwest Passage will cut trade distances. India has Himadri research station here.',
    },
    {
        name: 'Southern Ocean', icon: '🌊', color: '#10B981',
        area: '21.96 million km²', depth: '3,270 m avg', deepest: 'South Sandwich Trench (7,235 m)',
        facts: ['Recognized as 5th ocean by National Geographic in 2021 — southern waters encircling Antarctica', 'Antarctic Circumpolar Current is world\'s largest ocean current', 'No bordering continental landmass to the south', 'Roaring Forties, Furious Fifties in this ocean — strongest winds on Earth', 'Regulates global climate — deepwater formation here'],
        upsc: 'India has Maitri and Bharati research stations near Antarctic / Southern Ocean. Antarctic Treaty prevents territorial claims.',
    },
]

export const OCEAN_FLOOR = [
    { name: 'Continental Shelf', icon: '🏖️', color: '#F59E0B', depth: '0–200 m', desc: 'Gently sloping extension of continent under sea. Rich in fish, petroleum, natural gas. Average width: 70 km.', upsc: 'Most productive marine zone — 90% of world\'s fisheries catch. Oil platforms sit on continental shelves.' },
    { name: 'Continental Slope', icon: '📉', color: '#F97316', depth: '200–3,000 m', desc: 'Steep gradient below continental shelf. Submarine canyons cut through it. Turbidity currents active here.', upsc: 'Submarine canyons (e.g., Hudson Canyon) are drowned river valleys. V-shaped profile similar to mountain valleys.' },
    { name: 'Continental Rise', icon: '🌊', color: '#EF4444', depth: '3,000–5,000 m', desc: 'Gentle slope at base of continental slope. Formed by sediment accumulation (turbidites).', upsc: 'Transition zone from continent to ocean basin. Less studied but important for submarine cable routing.' },
    { name: 'Abyssal Plains', icon: '⬛', color: '#1E293B', depth: '4,000–6,000 m', desc: 'Flat, featureless plains covering 50% of ocean floor. Covered in fine sediment (ooze). Deepest cold habitat.', upsc: 'World\'s largest habitable zone by area but harsh (cold, dark, high pressure). Rich in polymetallic nodules.' },
    { name: 'Mid-Ocean Ridges', icon: '🏔️', color: '#3B82F6', depth: 'Rise to 2,000–2,500 m depth', desc: 'Continuous underwater mountain chain. Divergent plate boundaries. New seafloor created here by seafloor spreading.', upsc: 'Mid-Atlantic Ridge = longest mountain range on Earth (65,000 km). Seafloor spreading proved continental drift.' },
    { name: 'Ocean Trenches', icon: '⬇️', color: '#7C3AED', depth: '6,000–11,034 m', desc: 'Deep, narrow depressions where oceanic crust subducts under another plate. Deepest features on Earth.', upsc: 'Mariana Trench (11,034 m) = deepest point. Ring of Fire trenches — subduction zones = earthquakes + volcanoes.' },
    { name: 'Seamounts & Guyots', icon: '🏔️', color: '#10B981', depth: 'Rise >1,000 m from floor', desc: 'Seamount = underwater volcanic mountain. Guyot (tablemount) = flat-topped seamount (eroded by waves then submerged).', upsc: 'Guyots prove ocean floor subsidence over time. Hawaii chain formed as Pacific plate moved over a hotspot.' },
]

export const TIDE_TYPES = [
    { name: 'Spring Tides', icon: '🌕', color: '#F59E0B', timing: 'Full Moon & New Moon', desc: 'Sun, Moon, Earth are aligned (syzygy). Gravitational pull combined → very high tides & very low tides. Highest tidal range.', upsc: 'Occur twice a month. Bay of Fundy (Canada) has world\'s highest tidal range — up to 16m (spring tide).' },
    { name: 'Neap Tides', icon: '🌓', color: '#8B5CF6', timing: 'Quarter Moon phases', desc: 'Sun and Moon at right angles to Earth. Gravitational pulls partially cancel → moderate tides, very little range.', upsc: 'Smallest tidal range. Safe for coastal navigation but tidal power minimal.' },
    { name: 'Diurnal Tides', icon: '1️⃣', color: '#10B981', timing: 'One high, one low per day', desc: 'One high tide and one low tide each day. Common in Gulf of Mexico, parts of SE Asia.', upsc: 'Diurnal = relating to one day cycle. Less common globally.' },
    { name: 'Semi-Diurnal Tides', icon: '2️⃣', color: '#3B82F6', timing: 'Two roughly equal highs/lows per day', desc: 'Most common type. Two high tides and two low tides daily, roughly equal in height.', upsc: 'Atlantic Ocean dominantly semi-diurnal. UK, W Europe experience this pattern.' },
    { name: 'Mixed Tides', icon: '〰️', color: '#F97316', timing: 'Two unequal highs/lows per day', desc: 'Two high and low tides per day but unequal in height. Most complex pattern.', upsc: 'Pacific Ocean — USA west coast, Japan have mixed tidal patterns.' },
]

export const CORAL_REEFS = [
    { name: 'Fringing Reef', icon: '🐠', color: '#F59E0B', location: 'Adjacent to, or close to shore', desc: 'Grows directly attached to continental or island shoreline. Separated from shore by shallow lagoon or not at all.', examples: 'Red Sea (most extensive), Caribbean fringing reefs, W coast of Andaman Islands', upsc: 'Most common type. Grows outward and upward from shore. Gulf of Mannar fringing reefs (India).' },
    { name: 'Barrier Reef', icon: '🌊', color: '#3B82F6', location: 'Offshore, separated from coast by deep lagoon', desc: 'Runs parallel to coast but separated by a deep, wide lagoon. Generally larger than fringing reefs.', examples: 'Great Barrier Reef (Australia — world\'s largest coral structure), Belize Barrier Reef', upsc: 'Great Barrier Reef (2,300 km) — largest living structure on Earth, UNESCO WHS. Under threat from coral bleaching.' },
    { name: 'Atoll', icon: '⭕', color: '#10B981', location: 'Open ocean — ring-shaped', desc: 'Circular or horseshoe-shaped coral reef enclosing a lagoon with no central island. Formed as island subsides (Darwin\'s theory).', examples: 'Lakshadweep Islands, Maldives, Marshall Islands, Kiribati', upsc: 'Darwin\'s Subsidence Theory: fringing reef → barrier reef → atoll as volcanic island sinks. Lakshadweep = coral atolls, threatened by sea level rise.' },
]

export const BIOMES = [
    {
        name: 'Tropical Rainforest', icon: '🌴', color: '#16A34A',
        latitude: '10°N – 10°S', rainfall: '>2000 mm, year-round', temp: '25–30°C, no season',
        key_plants: ['Kapok', 'Mahogany', 'Ebony', 'Rubber', 'Orchids', 'Ferns'],
        key_animals: ['Jaguar', 'Gorilla', 'Orangutan', 'Poison Dart Frog', 'Toucan', 'Anaconda'],
        locations: ['Amazon Basin (Brazil)', 'Congo Basin (Africa)', 'SE Asia (Borneo, Sumatra)', 'NE India, Western Ghats'],
        features: ['Highest biodiversity on Earth (>50% of all species)', '3–5 layer canopy structure', 'Nutrient-poor soil (rain leaches nutrients)', 'Dense canopy = perpetual twilight on forest floor'],
        upsc: ['Lungs of the Earth — absorb CO₂, produce O₂', 'Amazon deforestation — global climate concern', 'Part of India\'s W Ghats + NE India = Biodiversity Hotspots'],
    },
    {
        name: 'Tropical Savanna', icon: '🌾', color: '#CA8A04',
        latitude: '10°–25° N & S', rainfall: '500–1500 mm, wet-dry seasons', temp: '25–35°C',
        key_plants: ['Acacia', 'Baobab', 'Elephant Grass', 'Euphorbia', 'Whistling Thorn'],
        key_animals: ['African Elephant', 'Lion', 'Zebra', 'Wildebeest', 'Giraffe', 'Cheetah'],
        locations: ['African savanna (Serengeti)', 'Brazilian Cerrado', 'Australian bushland', 'Indian Deccan'],
        features: ['Distinct wet and dry seasons', 'Tall grasses with scattered trees', 'Large herbivore migrations (Serengeti)', 'Frequent fires maintain open landscape'],
        upsc: ['Serengeti (Tanzania) — largest wildlife migration on Earth', 'Brazilian Cerrado — 2nd largest biome in South America (after Amazon)', 'Indian Deccan is tropical savanna type → Aw in Koppen'],
    },
    {
        name: 'Hot Desert', icon: '🏜️', color: '#EF4444',
        latitude: '25°–35° N & S', rainfall: '<250 mm/year', temp: '20–50°C (extreme daily range)',
        key_plants: ['Cactus (Saguaro, Barrel)', 'Date Palm', 'Mesquite', 'Saltbush', 'Euphorbia'],
        key_animals: ['Camel', 'Fennec Fox', 'Sidewinder Rattlesnake', 'Gila Monster', 'Scorpion', 'Roadrunner'],
        locations: ['Sahara (largest — 9.2 mln km²)', 'Arabian Desert', 'Thar Desert (India)', 'Australian Desert'],
        features: ['Extreme temperature: 50°C day, <5°C night', 'Very low humidity, high evaporation', 'Phreatophytes with deep roots, CAM plants', 'Flash floods may occur in wadis (dry river beds)'],
        upsc: ['Thar Desert (Rajasthan) — part of Great Indian Desert. Unique desert biome in India', 'Sahara is world\'s largest hot desert. Gobi is largest cold desert', 'Desertification — expansion of deserts due to human activity'],
    },
    {
        name: 'Mediterranean', icon: '🫒', color: '#F59E0B',
        latitude: '30°–45° N & S', rainfall: '350–900 mm (mainly winter)', temp: 'Dry hot summer, mild wet winter',
        key_plants: ['Olive', 'Cork Oak', 'Lavender', 'Maquis scrub', 'Chaparral', 'Garrigue'],
        key_animals: ['Iberian Lynx', 'Wild Boar', 'Eagle Owl', 'Bottlenose Dolphin', 'Barbary Macaque'],
        locations: ['Mediterranean basin (Spain, Italy, Greece)', 'California (USA)', 'SW Australia (Perth)', 'Chile (Valparaíso)', 'S Africa (Cape region)'],
        features: ['Sclerophyllous (hard-leaved) plants adapted to drought', 'Fire-adapted vegetation (serotinous cones)', 'Rich agriculture: grape, olive, citrus', 'Tourism: summer sun, winter rain'],
        upsc: ['Only in 5 regions of world — all on WESTERN sides of continents at 30–45°', 'Known as Mediterranean, Chaparral (CA), Maquis, Fynbos (S Africa), Matorral (Chile)', 'Biodiversity hotspot: Coastal Mediterranean basin'],
    },
    {
        name: 'Temperate Grasslands', icon: '🌱', color: '#65A30D',
        latitude: '40°–60° N (inland)', rainfall: '300–600 mm', temp: '-20°C winter, +30°C summer (extreme range)',
        key_plants: ['Buffalo grass', 'Blue grama', 'Feather grass (steppe)', 'Wildflowers'],
        key_animals: ['American Bison', 'Prairie Dog', 'Pronghorn', 'Saiga Antelope', 'Golden Eagle'],
        locations: ['Prairies (N America)', 'Steppes (Eurasia — Russia, Kazakhstan)', 'Pampas (S America — Argentina)', 'Veld (S Africa)', 'Downs (Australia)'],
        features: ['Extremely fertile deep soils', 'No trees (too dry), grass dominates', 'Continental interior — far from ocean', 'World breadbasket — wheat, corn, soybean'],
        upsc: ['Prairies → grain farming — "breadbasket of the world" (USA, Canada)', 'Eurasian Steppes — ancestral homeland of horse domestication (Botai Culture)', 'Pampas → cattle ranch in Argentina'],
    },
    {
        name: 'Temperate Deciduous Forest', icon: '🍁', color: '#EA580C',
        latitude: '40°–60° N', rainfall: '600–1500 mm, year-round', temp: '-10 to 30°C, 4 distinct seasons',
        key_plants: ['Oak', 'Beech', 'Maple', 'Birch', 'Chestnut', 'Elm'],
        key_animals: ['White-tailed Deer', 'Black Bear', 'Wolf', 'Fox', 'Woodpecker', 'Owl'],
        locations: ['Eastern USA', 'W & C Europe (UK to Poland)', 'NE China, Korea, Japan', 'SE Australia'],
        features: ['Four distinct seasons', 'Broad-leaved trees shed leaves in autumn', 'Rich, fertile soil with leaf litter', 'Historical human settlement zone — most converted to farmland'],
        upsc: ['Most modified biome — heavily converted to agriculture and urban areas', 'European deciduous forest → major historical civilization centers', 'India has temperate deciduous in Himalayan foothills (oak-rhododendron belt)'],
    },
    {
        name: 'Boreal Forest (Taiga)', icon: '🌲', color: '#0369A1',
        latitude: '50°–70° N', rainfall: '300–850 mm (mostly snow)', temp: '-60°C winter, +30°C summer (extreme range)',
        key_plants: ['Spruce', 'Pine', 'Fir', 'Larch (deciduous conifer)', 'Birch', 'Aspen'],
        key_animals: ['Moose', 'Brown Bear', 'Siberian Tiger (Amur)', 'Grey Wolf', 'Lynx', 'Wolverine'],
        locations: ['Russia (world\'s largest — Siberian Taiga)', 'Canada', 'Scandinavia (Norway, Sweden, Finland)'],
        features: ['World\'s largest terrestrial biome', 'Needle-leaf trees (conical, shed snow easily)', 'Permafrost in subsoil', 'Short growing season (3–4 months)', 'Important global carbon sink'],
        upsc: ['Siberian Taiga = world\'s largest forest. Stores massive carbon in permafrost', 'Taiga fires and permafrost thaw = major climate feedback concern', 'Provides 30% of world\'s softwood timber'],
    },
    {
        name: 'Tundra', icon: '🐻‍❄️', color: '#7C3AED',
        latitude: '70°–90° N (& alpine)', rainfall: '<250 mm/year (mostly snow)', temp: '-70°C winter, +12°C summer',
        key_plants: ['Moss', 'Lichen', 'Sedges', 'Dwarf Birch', 'Willowherb', 'Arctic Poppy'],
        key_animals: ['Polar Bear', 'Arctic Fox', 'Caribou/Reindeer', 'Lemming', 'Snowy Owl', 'Arctic Wolf'],
        locations: ['Arctic tundra: N Canada, Russia, Alaska, Greenland', 'Alpine tundra: above treeline on high mountains globally'],
        features: ['Permafrost (permanently frozen subsoil)', 'Very short growing season (6–8 weeks)', 'No trees — too cold, strong winds', 'Continuous daylight in summer; continuous dark in winter'],
        upsc: ['Permafrost thaw releases methane (CH₄) — powerful greenhouse gas', 'Arctic tundra warming 2–3× faster than global average (polar amplification)', 'India has Himadri station in Arctic; Maitri & Bharati in Antarctic'],
    },
]
