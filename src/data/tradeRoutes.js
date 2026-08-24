// ============================================================
// ANCIENT & MEDIEVAL TRADE & SEA ROUTES OF INDIA
// ============================================================

export const TRADE_ROUTES = [
    {
        id: 'uttarapatha',
        name: 'Uttarapatha (Northern Trade Highway)',
        type: 'land',
        era: 'Ancient (600 BCE – 1200 CE)',
        color: '#F59E0B',
        width: 3.5,
        dashArray: '6, 6',
        description: 'The premier arterial trade corridor of ancient India spanning over 2,500 km. Extended from Tamralipti (Bengal delta) through Pataliputra, Varanasi, Prayag, Mathura, Kurukshetra, Takshashila (Taxila) to Purushapura (Peshawar) and Bactria, connecting the Gangetic heartland to the Silk Road.',
        commodities: ['Bengal Silk & Muslin', 'Fine Gangetic Cotton', 'Spikenard & Perfumes', 'Horses from Central Asia', 'Precious Gems & Gold'],
        significance: 'Mentioned extensively in Panini’s Ashtadhyayi, the Mahabharata, and Megasthenes’ Indika. Later modernized by Sher Shah Suri and the British into the Grand Trunk Road.',
        coordinates: [
            [22.28, 87.92], // Tamralipti
            [25.61, 85.14], // Pataliputra
            [25.31, 82.97], // Varanasi
            [25.43, 81.84], // Prayagraj
            [26.84, 80.94], // Kannauj / Lucknow region
            [27.49, 77.67], // Mathura
            [28.61, 77.21], // Indraprastha (Delhi)
            [29.96, 76.87], // Kurukshetra
            [31.55, 74.35], // Lahore / Punjab
            [32.93, 73.72], // Rohtas / Jhelum
            [33.74, 72.82], // Takshashila (Taxila)
            [34.01, 71.58], // Purushapura (Peshawar)
            [34.52, 69.17], // Kabul
            [36.75, 66.89], // Bactra (Balkh)
        ]
    },
    {
        id: 'dakshinapatha',
        name: 'Dakshinapatha (Trans-Deccan Highway)',
        type: 'land',
        era: 'Ancient (500 BCE – 1000 CE)',
        color: '#10B981',
        width: 3.5,
        dashArray: '6, 6',
        description: 'The southern highway connecting the Gangetic plains to the Deccan plateau and the peninsular coasts. Traversed through the Vindhya and Satpura gaps via Ujjain, Vidisha, Pratishthana (Paithan), Tagara (Ter), Amaravati, and down to Kanchipuram and Madurai.',
        commodities: ['Deccan Diamonds (Golconda)', 'Malabar Pepper & Spices', 'Sandalwood & Teak', 'Pearls from Gulf of Mannar', 'Brocades & Chintz'],
        significance: 'Vital for Satavahana trade, Ashoka’s Buddhist missions to the south, and Roman merchandise movement between the west coast and the Bay of Bengal.',
        coordinates: [
            [25.31, 82.97], // Varanasi
            [24.58, 80.83], // Satna / Bharhut
            [23.52, 77.81], // Vidisha / Sanchi
            [23.17, 75.78], // Ujjayini (Ujjain)
            [22.17, 75.58], // Maheshwar (Narmada crossing)
            [21.31, 76.22], // Burhanpur Gap
            [19.87, 75.34], // Pratishthana (Paithan)
            [18.25, 76.05], // Tagara (Ter)
            [16.57, 80.35], // Amaravati (Krishna Valley)
            [14.44, 79.98], // Nellore
            [12.83, 79.70], // Kanchipuram
            [10.78, 79.14], // Thanjavur / Kaveripattinam
            [9.92, 78.11],  // Madurai
        ]
    },
    {
        id: 'indo-roman-sea-route',
        name: 'Indo-Roman Maritime Spice Route (Arabian Sea)',
        type: 'sea',
        era: 'Classical Antiquity (100 BCE – 400 CE)',
        color: '#38BDF8',
        width: 4,
        dashArray: '8, 8',
        description: 'The legendary maritime highway utilizing the Hippalus monsoon winds. Roman merchant fleets sailed from Berenike and Myos Hormos (Red Sea Egypt) across the open Arabian Sea directly to the booming emporiums of Barygaza (Bharuch) and Muziris (Kerala).',
        commodities: ['Black Pepper ("Black Gold")', 'Cardamom & Cinnamon', 'Silk & Muslin', 'Roman Gold & Silver Aurei', 'Italian Wine & Glassware', 'Frankincense & Myrrh'],
        significance: 'Documented in the 1st-century "Periplus of the Erythraean Sea". Pliny the Elder lamented that Rome lost over 50 million sesterces annually to India for luxury goods.',
        coordinates: [
            [27.85, 34.30], // Red Sea (Berenike/Myos Hormos gateway)
            [12.80, 45.00], // Aden (Gulf of Aden)
            [12.50, 54.00], // Socotra Island (Dioscorida)
            [17.00, 62.00], // Open Arabian Sea crossing (Monsoon vector)
            [21.70, 72.99], // Barygaza (Bharuch, Gujarat)
            [18.92, 72.83], // Sopara / Kalyan
            [15.49, 73.82], // Goa (Gopakapattana)
            [13.34, 74.74], // Mangalore (Mangalapura)
            [10.16, 76.19], // Muziris (Pattanam / Kodungallur)
            [8.08, 77.55],  // Korkai / Kanyakumari
        ]
    },
    {
        id: 'bay-of-bengal-maritime',
        name: 'Bay of Bengal Maritime Silk Route',
        type: 'sea',
        era: 'Ancient to Medieval (300 BCE – 1400 CE)',
        color: '#A855F7',
        width: 4,
        dashArray: '8, 8',
        description: 'The maritime trade network linking the ports of Bengal (Tamralipti), Kalinga (Manikapatna), Andhra (Machilipatnam), and Tamilakam (Puhar, Nagapattinam) with the kingdoms of Southeast Asia (Suvarnabhumi, Srivijaya, Angkor) and Imperial China (Guangzhou).',
        commodities: ['Indian Cotton & Iron', 'Spices (Cloves, Nutmeg from Moluccas)', 'Camphor & Benzoin', 'Chinese Silk & Porcelain', 'Buddhist & Hindu Manuscripts & Bronzes'],
        significance: 'Facilitated profound cultural synthesis ("Indianization") across Southeast Asia, including the spread of Sanskrit, Ramayana, Buddhism, and temple architectures like Borobudur and Angkor Wat.',
        coordinates: [
            [22.28, 87.92], // Tamralipti (Bengal)
            [19.80, 85.83], // Manikapatna / Puri (Kalinga)
            [16.18, 81.13], // Machilipatnam (Maisolos)
            [11.14, 79.85], // Puhar / Kaveripattinam
            [10.76, 79.84], // Nagapattinam
            [11.66, 92.74], // Andaman & Nicobar Islands (Waystation)
            [7.88, 98.39],  // Phuket / Kra Isthmus
            [5.41, 100.33], // Kedah (Kataha / Kadaram)
            [2.19, 102.25], // Malacca Strait
            [-2.99, 104.75],// Palembang (Srivijaya Capital, Sumatra)
            [-6.17, 106.82],// Sunda Strait / Java
            [13.75, 100.50],// Gulf of Thailand / Funan
            [23.12, 113.26] // Guangzhou (Canton, China)
        ]
    },
    {
        id: 'chola-naval-expedition',
        name: 'Chola Naval Expedition Route (1025 CE)',
        type: 'sea',
        era: 'Medieval (1025 CE)',
        color: '#F43F5E',
        width: 4.5,
        dashArray: '10, 5',
        description: 'The monumental blue-water naval campaign launched by Emperor Rajendra Chola I against the Srivijaya Empire to secure unhindered maritime trade routes to Sung Dynasty China through the Straits of Malacca.',
        commodities: ['War Galleys & Blue-Water Fleet', 'Gold, Gems & Royal Regalia of Srivijaya', 'Tribute & Trade Monopolies'],
        significance: 'The greatest maritime expedition in South Asian history. Captured over 14 strategic Southeast Asian ports including Kadaram (Kedah), Pannai (Sumatra), and Srivijaya’s capital.',
        coordinates: [
            [10.76, 79.84], // Nagapattinam (Chola Naval Port)
            [9.15, 80.90],  // Trincomalee (Sri Lanka Chola Base)
            [11.66, 92.74], // Nicobar Islands (Nakkavaram)
            [5.55, 95.32],  // Banda Aceh (Sumatra northern tip)
            [5.41, 100.33], // Kadaram (Kedah, Malaysia)
            [3.14, 101.69], // Klang
            [1.35, 103.82], // Singapore Strait (Temasek)
            [-2.99, 104.75],// Palembang (Srivijaya Citadel)
            [-1.61, 103.61] // Jambi (Malaiyur)
        ]
    },
    {
        id: 'grand-trunk-road',
        name: 'The Grand Trunk Road (Imperial Highway)',
        type: 'land',
        era: 'Medieval to Modern (1540 CE – 1947 CE)',
        color: '#EF4444',
        width: 3.5,
        dashArray: '4, 4',
        description: 'Reconstructed by Sher Shah Suri in the 16th century with sarai (inns), milestones (kos minars), shade trees, and wells at regular intervals. Extended from Sonargaon (Bangladesh) through Delhi to Kabul.',
        commodities: ['Royal Postal Despatches (Dak)', 'Textiles, Salt, Wheat & Grain', 'Artillery & Military Convoys'],
        significance: 'Known as "Sadak-e-Azam". Rudyard Kipling described it as "such a river of life as nowhere else in the world exists".',
        coordinates: [
            [23.65, 90.58], // Sonargaon (Dhaka)
            [22.57, 88.36], // Calcutta / Howrah
            [24.79, 85.00], // Gaya / Sasaram (Sher Shah Tomb)
            [25.31, 82.97], // Varanasi
            [25.43, 81.84], // Allahabad
            [26.44, 80.33], // Kanpur
            [27.18, 78.02], // Agra
            [28.61, 77.21], // Delhi
            [29.39, 76.96], // Panipat
            [30.37, 76.77], // Ambala
            [31.63, 74.87], // Amritsar
            [31.55, 74.35], // Lahore
            [32.93, 73.72], // Rohtas Fort
            [33.60, 73.05], // Rawalpindi
            [34.01, 71.58], // Peshawar
            [34.13, 71.15], // Khyber Pass
            [34.52, 69.17], // Kabul
        ]
    },
    {
        id: 'portuguese-spice-route',
        name: 'Portuguese & European Maritime Spice Route',
        type: 'sea',
        era: 'Early Modern (1498 – 1750 CE)',
        color: '#FB923C',
        width: 4,
        dashArray: '8, 8',
        description: 'The Carreira da Índia pioneered by Vasco da Gama in 1498 around Africa’s Cape of Good Hope, establishing the Portuguese Estado da Índia and ending Arab/Venetian monopolies on the spice trade.',
        commodities: ['Malabar Black Pepper', 'Cochin Cardamom & Cinnamon', 'Gujarat Indigo & Calico', 'Goan Cashews & Arrack'],
        significance: 'Marked the beginning of the European colonial era in Asia and established Goa, Calicut, Cochin, and Diu as global maritime nodes.',
        coordinates: [
            [38.72, -9.13], // Lisbon (Europe)
            [-34.35, 18.47],// Cape of Good Hope (South Africa)
            [-15.02, 40.73],// Mozambique Island (Waystation)
            [-4.04, 39.66], // Mombasa / Malindi (Kenya)
            [11.25, 75.78], // Calicut / Kappad Beach (Arrival 1498)
            [9.93, 76.26],  // Cochin (Fort Emmanuel)
            [15.49, 73.82], // Goa (Velha Goa - Capital of Estado da India)
            [20.71, 70.98], // Diu Fort
            [21.17, 72.83], // Surat
        ]
    }
];
