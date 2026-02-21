export const HISTORY_DIVISIONS = [
    {
        id: 'ancient',
        title: 'Ancient India',
        subtitle: 'From Dawn of Civilization to 647 CE',
        period: '3300 BCE – 647 CE',
        color: '#F59E0B',
        gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
        icon: '🏛️',
        bgImage: 'radial-gradient(circle at 30% 40%, rgba(245,158,11,0.12) 0%, transparent 60%)',
        overview: 'Ancient India witnessed the birth of one of the world\'s oldest civilizations in the Indus Valley, the composition of the Vedas, the rise of Buddhism and Jainism, the first pan-Indian Maurya Empire, and the golden age of the Gupta dynasty. This era laid the foundations of Indian philosophy, mathematics, astronomy, art, and governance that continue to influence the world.',
        keyThemes: ['Indus Valley Civilization', 'Vedic Culture & Philosophy', 'Rise of Buddhism & Jainism', 'Maurya Empire & Ashoka', 'Gupta Golden Age', 'Classical Sanskrit Literature'],
    },
    {
        id: 'medieval',
        title: 'Medieval India',
        subtitle: 'Age of Empires & Cultural Synthesis',
        period: '647 CE – 1526 CE',
        color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
        icon: '⚔️',
        bgImage: 'radial-gradient(circle at 70% 30%, rgba(139,92,246,0.12) 0%, transparent 60%)',
        overview: 'Medieval India was an era of powerful regional kingdoms, the arrival of Islam, and an extraordinary cultural synthesis. The Rajputs defended their honor, the Cholas dominated the seas, the Delhi Sultanate transformed north India, and the Vijayanagara Empire preserved Hindu traditions in the south. Architecture, literature, and art flourished in a uniquely syncretic environment.',
        keyThemes: ['Rajput Kingdoms', 'Chola Naval Power', 'Islamic Arrival & Delhi Sultanate', 'Bhakti & Sufi Movements', 'Vijayanagara Empire', 'Indo-Islamic Architecture'],
    },
    {
        id: 'modern',
        title: 'Modern India',
        subtitle: 'Colonial Era to Republic',
        period: '1526 CE – Present',
        color: '#10B981',
        gradient: 'linear-gradient(135deg, #10B981, #059669)',
        icon: '🇮🇳',
        bgImage: 'radial-gradient(circle at 50% 60%, rgba(16,185,129,0.12) 0%, transparent 60%)',
        overview: 'Modern India encompasses the grandeur of the Mughal Empire, the trauma and transformation of British colonialism, the heroic freedom struggle led by Mahatma Gandhi and countless others, and the emergence of independent India as the world\'s largest democracy. This era shaped the India we know today — diverse, democratic, and dynamic.',
        keyThemes: ['Mughal Empire', 'European Colonialism', 'Freedom Struggle', 'Partition & Independence', 'Constitution & Democracy', 'Economic Liberalization'],
    }
];

export const HISTORY_EVENTS = {
    ancient: [
        {
            year: -3300, yearLabel: '3300 BCE',
            title: 'Indus Valley Civilization Begins',
            description: 'One of the world\'s earliest urban civilizations emerged in the Indus and Ghaggar-Hakra river valleys. Cities like Harappa and Mohenjo-daro featured advanced urban planning with grid streets, drainage systems, granaries, and public baths. The civilization traded with Mesopotamia and had a still-undeciphered script.',
            significance: 'First urban civilization in South Asia with remarkable engineering',
            location: 'Harappa & Mohenjo-daro', coords: [27.2, 68.0],
            category: 'civilization',
            contemporary: 'Egypt — Old Kingdom period; Mesopotamia — Sumerian city-states; China — Longshan culture',
            keyFigures: [],
            image: '🏗️'
        },
        {
            year: -1900, yearLabel: '1900 BCE',
            title: 'Decline of Indus Valley Civilization',
            description: 'The great cities were gradually abandoned due to climate change, shifting rivers (particularly the Sarasvati/Ghaggar-Hakra), and possible tectonic activity. People migrated eastward to the Gangetic plains and southward.',
            significance: 'Transition period leading to Vedic culture',
            location: 'Indus-Gangetic region', coords: [28.5, 73.0],
            category: 'civilization',
            contemporary: 'Egypt — Middle Kingdom; Babylon — Code of Hammurabi; Minoan civilization in Crete',
            keyFigures: [],
            image: '🌊'
        },
        {
            year: -1500, yearLabel: '1500 BCE',
            title: 'Early Vedic Period Begins',
            description: 'Indo-Aryan migrations brought new cultural practices to the subcontinent. The Rigveda, the world\'s oldest religious text, was composed orally. Society was organized into tribes (Janas) led by chiefs (Rajan). Cattle-herding was central to the economy.',
            significance: 'Foundation of Hindu philosophy and Indian cultural identity',
            location: 'Punjab — Sapta Sindhu', coords: [31.5, 72.0],
            category: 'culture',
            contemporary: 'Egypt — New Kingdom, Tutankhamun; Greece — Mycenaean civilization; China — Shang Dynasty',
            keyFigures: ['Rishis (Vedic seers)'],
            image: '📜'
        },
        {
            year: -1000, yearLabel: '1000 BCE',
            title: 'Later Vedic Period — Expansion East',
            description: 'The center of civilization shifted from Punjab to the Kuru-Panchala region (modern Haryana/Western UP) and further east. Iron technology enabled forest clearing for agriculture. The Yajurveda, Samaveda, Atharvaveda, and early Upanishads were composed. The Mahabharata events are traditionally dated to this era.',
            significance: 'Philosophical foundations and eastward expansion',
            location: 'Kuru-Panchala', coords: [29.0, 77.5],
            category: 'culture',
            contemporary: 'Israel — King David & Solomon; Homer composes Iliad & Odyssey; Phoenician alphabet spreads',
            keyFigures: ['Yajnavalkya', 'Gargi Vachaknavi'],
            image: '🔥'
        },
        {
            year: -600, yearLabel: '600 BCE',
            title: 'Rise of Mahajanapadas',
            description: 'Sixteen great kingdoms (Mahajanapadas) emerged across north India. Magadha, Kosala, Vatsa, and Avanti were the most powerful. This period saw intense philosophical debate, rise of heterodox traditions, and the growth of cities like Varanasi, Rajagriha, and Taxila.',
            significance: 'First organized kingdoms and urban revival',
            location: 'North India', coords: [26.5, 81.0],
            category: 'political',
            contemporary: 'Greece — birth of democracy in Athens; Persia — Cyrus the Great founds Achaemenid Empire; China — Confucius born',
            keyFigures: ['Bimbisara of Magadha'],
            image: '👑'
        },
        {
            year: -563, yearLabel: '563 BCE',
            title: 'Birth of Gautama Buddha',
            description: 'Siddhartha Gautama was born in Lumbini (modern Nepal). After witnessing human suffering, he renounced princely life, attained enlightenment at Bodh Gaya, and delivered his first sermon at Sarnath. His teachings of the Middle Path, Four Noble Truths, and Eightfold Path transformed Asia.',
            significance: 'One of the most influential figures in human history',
            location: 'Lumbini / Bodh Gaya', coords: [24.7, 85.0],
            category: 'religion',
            contemporary: 'Greece — pre-Socratic philosophers; Persia — Zoroastrianism; China — Laozi and Daoism',
            keyFigures: ['Gautama Buddha', 'Ananda', 'Sariputta'],
            image: '☸️'
        },
        {
            year: -540, yearLabel: '540 BCE',
            title: 'Birth of Mahavira — Rise of Jainism',
            description: 'Vardhamana Mahavira, the 24th Tirthankara, was born in Vaishali. He practiced extreme asceticism and taught the principles of Ahimsa (non-violence), Satya (truth), and Aparigraha (non-possessiveness). Jainism became a major influence on Indian ethics and commerce.',
            significance: 'Established non-violence as a core Indian value',
            location: 'Vaishali', coords: [25.98, 85.13],
            category: 'religion',
            contemporary: 'Persia — Darius I expands Achaemenid Empire; Greece — Pythagoras',
            keyFigures: ['Mahavira'],
            image: '🙏'
        },
        {
            year: -326, yearLabel: '326 BCE',
            title: 'Alexander\'s Invasion',
            description: 'Alexander the Great crossed the Hindu Kush and defeated King Porus at the Battle of the Hydaspes (Jhelum River). Despite victory, his troops refused to advance further into India. The invasion opened channels of Greco-Indian cultural exchange.',
            significance: 'First major contact between Indian and Greek civilizations',
            location: 'Jhelum River', coords: [32.9, 73.7],
            category: 'military',
            contemporary: 'Alexander had conquered Persia, Egypt, and Central Asia; Aristotle was his tutor',
            keyFigures: ['Alexander the Great', 'King Porus (Puru)'],
            image: '⚔️'
        },
        {
            year: -322, yearLabel: '322 BCE',
            title: 'Chandragupta Maurya Founds Maurya Empire',
            description: 'Guided by the brilliant strategist Chanakya (Kautilya), young Chandragupta overthrew the Nanda dynasty and established the Maurya Empire. He defeated Seleucus Nicator, Alexander\'s successor, and united most of the Indian subcontinent for the first time. Kautilya\'s Arthashastra became the definitive work on statecraft.',
            significance: 'First pan-Indian empire — model for all future Indian states',
            location: 'Pataliputra', coords: [25.61, 85.14],
            category: 'political',
            contemporary: 'Rome — Roman Republic expanding in Italy; China — Warring States period',
            keyFigures: ['Chandragupta Maurya', 'Chanakya (Kautilya)'],
            image: '🦁'
        },
        {
            year: -268, yearLabel: '268 BCE',
            title: 'Ashoka the Great — Kalinga War & Buddhist Turn',
            description: 'Emperor Ashoka conquered Kalinga (modern Odisha) in a devastating war that killed over 100,000. Horrified by the carnage, he embraced Buddhism and Dhamma (righteousness). He erected pillars and rock edicts across the empire promoting non-violence, tolerance, and welfare. The Ashoka Chakra appears on India\'s flag today.',
            significance: 'Transformed warfare king into a philosopher-king; spread Buddhism globally',
            location: 'Kalinga / Dhauli', coords: [20.2, 85.8],
            category: 'political',
            contemporary: 'Rome — First Punic War against Carthage; China — Qin unification beginning',
            keyFigures: ['Ashoka', 'Mahinda (missionary to Sri Lanka)'],
            image: '☮️'
        },
        {
            year: 78, yearLabel: '78 CE',
            title: 'Kanishka & the Kushan Empire',
            description: 'Emperor Kanishka of the Kushan dynasty convened the Fourth Buddhist Council in Kashmir. The Gandhara school of art created the first anthropomorphic images of Buddha, blending Greek and Indian aesthetics. The Kushan Empire was a crucial hub on the Silk Road.',
            significance: 'Silk Road hub connecting Rome, India, China; Gandhara art revolution',
            location: 'Peshawar / Gandhara', coords: [34.0, 71.6],
            category: 'culture',
            contemporary: 'Rome — height of Roman Empire under Trajan; China — Han Dynasty',
            keyFigures: ['Kanishka I'],
            image: '🎨'
        },
        {
            year: 320, yearLabel: '320 CE',
            title: 'Gupta Empire — Golden Age Begins',
            description: 'Chandragupta I founded the Gupta dynasty, and his successors Samudragupta and Chandragupta II (Vikramaditya) presided over India\'s Golden Age. Aryabhata calculated pi and Earth\'s circumference, Kalidasa wrote Shakuntala, the decimal system and concept of zero were developed, and Nalanda University attracted scholars from across Asia.',
            significance: 'Pinnacle of Indian science, art, literature, and philosophy',
            location: 'Pataliputra', coords: [25.61, 85.14],
            category: 'civilization',
            contemporary: 'Rome — Constantine, Christianity becomes official; China — Eastern Jin Dynasty; Europe — Migration period begins',
            keyFigures: ['Chandragupta I', 'Samudragupta', 'Chandragupta II', 'Aryabhata', 'Kalidasa'],
            image: '✨'
        },
        {
            year: 606, yearLabel: '606 CE',
            title: 'Harshavardhana — Last Great North Indian Emperor',
            description: 'Harsha of Kannauj united most of North India. He was a patron of Nalanda University and the Chinese pilgrim Xuanzang visited his court, leaving detailed accounts. Harsha himself authored three Sanskrit plays. His death in 647 CE marked the end of ancient Indian political unity.',
            significance: 'Last pan-North Indian Hindu emperor; transition to medieval era',
            location: 'Kannauj', coords: [27.06, 79.92],
            category: 'political',
            contemporary: 'Arabia — Prophet Muhammad & rise of Islam (622 CE Hijra); Byzantine Empire — Emperor Heraclius; China — Tang Dynasty begins',
            keyFigures: ['Harshavardhana', 'Xuanzang', 'Banabhatta'],
            image: '📖'
        },
    ],

    medieval: [
        {
            year: 712, yearLabel: '712 CE',
            title: 'Arab Conquest of Sindh',
            description: 'Muhammad bin Qasim, a 17-year-old Arab general, conquered Sindh and parts of Punjab. This marked the first permanent Muslim foothold in the Indian subcontinent. The conquest brought new administrative practices, architecture, and began centuries of cultural exchange.',
            significance: 'First permanent Islamic presence in India',
            location: 'Sindh', coords: [25.4, 68.4],
            category: 'military',
            contemporary: 'Umayyad Caliphate at its peak; Spain conquered by Moors (711); Tang Dynasty China — golden age',
            keyFigures: ['Muhammad bin Qasim', 'Raja Dahir'],
            image: '⚔️'
        },
        {
            year: 750, yearLabel: '750 CE',
            title: 'Tripartite Struggle for Kannauj',
            description: 'Three great empires — the Gurjara-Pratiharas (north), Rashtrakutas (Deccan), and Palas (east) — waged a century-long struggle for control of Kannauj, the symbolic capital of north India. This shaped medieval Indian political geography.',
            significance: 'Defined medieval Indian power dynamics for 200 years',
            location: 'Kannauj', coords: [27.06, 79.92],
            category: 'political',
            contemporary: 'Abbasid Caliphate founded; Charlemagne rises in Europe; China — An Lushan Rebellion',
            keyFigures: ['Mihira Bhoja (Pratihara)', 'Dharmapala (Pala)', 'Amoghavarsha (Rashtrakuta)'],
            image: '👑'
        },
        {
            year: 848, yearLabel: '848 CE',
            title: 'Chola Empire Rises',
            description: 'Vijayalaya Chola captured Thanjavur, founding the imperial Chola dynasty. Under Rajendra Chola I, the Chola navy conquered Sri Lanka, Maldives, and parts of Southeast Asia — the greatest naval expedition in Indian history. The Brihadeeswarar Temple stands as an engineering and artistic marvel.',
            significance: 'Greatest Indian naval power; Southeast Asian cultural expansion',
            location: 'Thanjavur', coords: [10.78, 79.14],
            category: 'political',
            contemporary: 'Vikings raiding Europe; Alfred the Great in England; Abbasid golden age — House of Wisdom in Baghdad',
            keyFigures: ['Vijayalaya', 'Raja Raja Chola I', 'Rajendra Chola I'],
            image: '⛵'
        },
        {
            year: 1000, yearLabel: '1000 CE',
            title: 'Mahmud of Ghazni\'s Raids',
            description: 'Sultan Mahmud of Ghazni launched 17 raids into India between 1000-1027 CE, plundering wealthy temple cities including Somnath, Mathura, and Kannauj. His raids weakened north Indian kingdoms and transferred enormous wealth to Central Asia. He patronized the scholar Al-Biruni.',
            significance: 'Weakened Hindu kingdoms; Al-Biruni\'s Kitab al-Hind is a priceless historical source',
            location: 'Somnath', coords: [20.88, 70.4],
            category: 'military',
            contemporary: 'Europe — Norman Conquest of England approaching; Song Dynasty China — printing revolution; Viking Age',
            keyFigures: ['Mahmud of Ghazni', 'Al-Biruni'],
            image: '🔥'
        },
        {
            year: 1192, yearLabel: '1192 CE',
            title: 'Second Battle of Tarain',
            description: 'Muhammad of Ghor defeated Prithviraj Chauhan III in the decisive Second Battle of Tarain, opening the path for permanent Muslim rule in North India. Prithviraj had won the first battle a year earlier but failed to pursue Ghor. This battle changed the course of Indian history.',
            significance: 'Led directly to establishment of Delhi Sultanate',
            location: 'Tarain (Haryana)', coords: [29.4, 76.9],
            category: 'military',
            contemporary: 'Europe — Third Crusade; Richard the Lionheart; Saladin rules Egypt & Syria',
            keyFigures: ['Muhammad of Ghor', 'Prithviraj Chauhan III'],
            image: '⚔️'
        },
        {
            year: 1206, yearLabel: '1206 CE',
            title: 'Delhi Sultanate Established',
            description: 'Qutb ud-Din Aibak, a former slave (Mamluk) of Muhammad of Ghor, established the Delhi Sultanate — the first Muslim empire in India. He began construction of the Qutub Minar. The Sultanate would rule north India for over 300 years through five dynasties.',
            significance: 'Beginning of 500+ years of Muslim rule in India',
            location: 'Delhi', coords: [28.61, 77.21],
            category: 'political',
            contemporary: 'Mongol Empire — Genghis Khan conquering Asia; Fourth Crusade sacks Constantinople; Europe — feudal era',
            keyFigures: ['Qutb ud-Din Aibak', 'Iltutmish', 'Razia Sultan'],
            image: '🕌'
        },
        {
            year: 1296, yearLabel: '1296 CE',
            title: 'Alauddin Khalji — Military Genius',
            description: 'Alauddin Khalji seized the Delhi throne and became its most powerful Sultan. He repelled multiple Mongol invasions that could have devastated India. He conquered the Deccan, introduced price controls, and maintained the largest standing army of his time. Malik Kafur led his southern campaigns.',
            significance: 'Saved India from Mongol devastation; extended Sultanate power across India',
            location: 'Delhi', coords: [28.61, 77.21],
            category: 'political',
            contemporary: 'Marco Polo travels; Mongol Empire fragmenting; Scotland — William Wallace; Dante writes Divine Comedy',
            keyFigures: ['Alauddin Khalji', 'Malik Kafur'],
            image: '🛡️'
        },
        {
            year: 1336, yearLabel: '1336 CE',
            title: 'Vijayanagara Empire Founded',
            description: 'Harihara and Bukka Raya founded the Vijayanagara Empire at Hampi as a bulwark against Islamic expansion into South India. For over 200 years, it was the richest and most powerful Hindu kingdom, dazzling European visitors. Krishnadevaraya was its greatest ruler.',
            significance: 'Last great Hindu empire; preserved southern Indian traditions',
            location: 'Hampi', coords: [15.33, 76.46],
            category: 'political',
            contemporary: 'Europe — Black Death (1347); Hundred Years\' War begins; Ming Dynasty established in China (1368)',
            keyFigures: ['Harihara I', 'Bukka Raya I', 'Krishnadevaraya'],
            image: '🏰'
        },
        {
            year: 1398, yearLabel: '1398 CE',
            title: 'Timur\'s Invasion & Sack of Delhi',
            description: 'Timur (Tamerlane) invaded India and sacked Delhi in a devastating raid. The massacre and looting were catastrophic. The Delhi Sultanate never recovered its former power. Timur\'s descendant Babur would later return to found the Mughal Empire.',
            significance: 'Destroyed Delhi Sultanate power; paved the way for Mughal conquest later',
            location: 'Delhi', coords: [28.61, 77.21],
            category: 'military',
            contemporary: 'Ottoman Empire rising; Chaucer writes Canterbury Tales; Ming Dynasty China — Forbidden City built',
            keyFigures: ['Timur (Tamerlane)'],
            image: '🔥'
        },
        {
            year: 1469, yearLabel: '1469 CE',
            title: 'Guru Nanak — Birth of Sikhism',
            description: 'Guru Nanak Dev Ji was born in Talwandi (now Nankana Sahib, Pakistan). He rejected caste divisions and ritualism, preaching the oneness of God, equality, and honest living. His teachings formed the foundation of Sikhism, which grew into a major world religion with profound impact on Punjab.',
            significance: 'Founded Sikhism — a religion of equality and service',
            location: 'Talwandi', coords: [31.45, 73.71],
            category: 'religion',
            contemporary: 'Europe — Renaissance; Gutenberg\'s printing press (1450s); Spain — Reconquista; Columbus sails to Americas (1492)',
            keyFigures: ['Guru Nanak Dev Ji'],
            image: '🙏'
        },
    ],

    modern: [
        {
            year: 1526, yearLabel: '1526 CE',
            title: 'Babur Founds the Mughal Empire',
            description: 'Babur, a descendant of Timur and Genghis Khan, defeated Ibrahim Lodi at the First Battle of Panipat using innovative gunpowder tactics. This established the Mughal Empire, which would become one of the wealthiest and most powerful states in world history.',
            significance: 'Established the Mughal dynasty that ruled India for 300+ years',
            location: 'Panipat', coords: [29.39, 76.97],
            category: 'political',
            contemporary: 'Europe — Protestant Reformation; Ottoman Empire conquers Hungary; Magellan circumnavigates globe',
            keyFigures: ['Babur', 'Ibrahim Lodi'],
            image: '👑'
        },
        {
            year: 1556, yearLabel: '1556 CE',
            title: 'Akbar the Great — Era of Tolerance',
            description: 'After winning the Second Battle of Panipat, 13-year-old Akbar began building one of history\'s greatest empires. He introduced religious tolerance (Sulh-i-Kul), the Mansabdari administrative system, Todar Mal\'s revenue reforms, and the syncretic Din-i-Ilahi. His court included the legendary Navratnas (Nine Gems).',
            significance: 'Created a model of multicultural governance ahead of its time',
            location: 'Agra / Fatehpur Sikri', coords: [27.09, 77.67],
            category: 'political',
            contemporary: 'England — Elizabeth I; Shakespeare born; Spanish Empire at peak; Global Age of Exploration',
            keyFigures: ['Akbar', 'Todar Mal', 'Birbal', 'Tansen', 'Abul Fazl'],
            image: '✨'
        },
        {
            year: 1632, yearLabel: '1632 CE',
            title: 'Shah Jahan Builds the Taj Mahal',
            description: 'Emperor Shah Jahan commissioned the Taj Mahal in memory of his wife Mumtaz Mahal. Built over 22 years by 20,000 workers, it is considered the finest example of Mughal architecture and one of the New Seven Wonders of the World. He also built the Red Fort and Jama Masjid in Delhi.',
            significance: 'Symbol of eternal love; pinnacle of Indo-Islamic architecture',
            location: 'Agra', coords: [27.17, 78.04],
            category: 'culture',
            contemporary: 'England — Civil War; Galileo\'s trial; Dutch Golden Age; Thirty Years\' War in Europe',
            keyFigures: ['Shah Jahan', 'Mumtaz Mahal', 'Ustad Ahmad Lahori'],
            image: '🕌'
        },
        {
            year: 1674, yearLabel: '1674 CE',
            title: 'Shivaji Founds the Maratha Empire',
            description: 'Chhatrapati Shivaji Maharaj crowned himself at Raigad Fort, establishing the Maratha Empire. Using guerrilla warfare (Ganimi Kava), he challenged Mughal supremacy and built a powerful navy. His Ashtapradhan council and forts represented sophisticated statecraft.',
            significance: 'Established Hindu self-rule; precursor to Maratha dominance of India',
            location: 'Raigad', coords: [18.23, 73.45],
            category: 'political',
            contemporary: 'England — restoration of monarchy; Louis XIV in France; Newton discovers gravity',
            keyFigures: ['Chhatrapati Shivaji Maharaj', 'Tanaji Malusare'],
            image: '🦁'
        },
        {
            year: 1757, yearLabel: '1757 CE',
            title: 'Battle of Plassey — British Ascendancy',
            description: 'Robert Clive of the East India Company defeated Siraj ud-Daulah, the Nawab of Bengal, through treachery by Mir Jafar. This battle gave the British control over Bengal\'s vast revenues and marked the beginning of British political domination in India.',
            significance: 'Turning point: began 190 years of British colonial rule',
            location: 'Plassey (Palashi)', coords: [23.8, 88.25],
            category: 'military',
            contemporary: 'Seven Years\' War globally; American colonies growing restless; Enlightenment in Europe',
            keyFigures: ['Robert Clive', 'Siraj ud-Daulah', 'Mir Jafar'],
            image: '⚔️'
        },
        {
            year: 1857, yearLabel: '1857 CE',
            title: 'First War of Independence (Sepoy Mutiny)',
            description: 'Indian soldiers (sepoys) rebelled against the East India Company, which spread into a wider civilian uprising. Leaders like Rani Lakshmibai of Jhansi, Tatya Tope, and Bahadur Shah Zafar fought heroically. Though crushed, it ended Company rule; the British Crown took direct control.',
            significance: 'First united struggle against colonial rule; ended East India Company',
            location: 'Meerut / Delhi / Jhansi', coords: [28.98, 77.70],
            category: 'military',
            contemporary: 'American Civil War approaching; Crimean War; Darwin publishes Origin of Species',
            keyFigures: ['Rani Lakshmibai', 'Mangal Pandey', 'Tatya Tope', 'Bahadur Shah Zafar'],
            image: '🔥'
        },
        {
            year: 1885, yearLabel: '1885 CE',
            title: 'Indian National Congress Founded',
            description: 'The Indian National Congress was founded in Bombay by A.O. Hume with 72 delegates. Initially a moderate body seeking reforms within British rule, it evolved into the primary vehicle for Indian independence. Leaders like Dadabhai Naoroji articulated the "Drain of Wealth" theory.',
            significance: 'Birth of organized Indian nationalism',
            location: 'Bombay (Mumbai)', coords: [19.08, 72.88],
            category: 'political',
            contemporary: 'Scramble for Africa; Statue of Liberty unveiled; Karl Benz invents automobile',
            keyFigures: ['A.O. Hume', 'Dadabhai Naoroji', 'W.C. Bonnerjee'],
            image: '🏛️'
        },
        {
            year: 1919, yearLabel: '1919 CE',
            title: 'Jallianwala Bagh Massacre',
            description: 'General Dyer ordered troops to fire on a peaceful gathering of thousands at Jallianwala Bagh in Amritsar. Over 1,000 civilians were killed and thousands wounded. The massacre shocked the world and turned Indian opinion decisively against British rule. Rabindranath Tagore renounced his knighthood in protest.',
            significance: 'Turning point in freedom movement; galvanized entire nation against British rule',
            location: 'Amritsar', coords: [31.62, 74.88],
            category: 'military',
            contemporary: 'World War I just ended; Treaty of Versailles; League of Nations formed',
            keyFigures: ['General Dyer', 'Rabindranath Tagore', 'Udham Singh'],
            image: '🕯️'
        },
        {
            year: 1930, yearLabel: '1930 CE',
            title: 'Salt March — Dandi Satyagraha',
            description: 'Mahatma Gandhi led 78 followers on a 240-mile march from Sabarmati Ashram to Dandi to make salt, defying the British salt tax. This act of civil disobedience captured world attention and became the symbol of non-violent resistance. Over 60,000 Indians were arrested.',
            significance: 'Most iconic act of non-violent resistance in history',
            location: 'Sabarmati to Dandi', coords: [20.92, 72.83],
            category: 'political',
            contemporary: 'Great Depression worldwide; Rise of fascism in Europe; Penicillin discovered',
            keyFigures: ['Mahatma Gandhi', 'Sarojini Naidu'],
            image: '🧂'
        },
        {
            year: 1942, yearLabel: '1942 CE',
            title: 'Quit India Movement',
            description: 'Gandhi launched the "Quit India" movement with the call "Do or Die." The entire Congress leadership was arrested but the movement spread across India with strikes, demonstrations, and acts of sabotage. Subhas Chandra Bose formed the Indian National Army (INA) to fight the British from outside.',
            significance: 'Final mass movement that made British rule untenable',
            location: 'Bombay (Mumbai)', coords: [19.08, 72.88],
            category: 'political',
            contemporary: 'World War II — Battle of Stalingrad; Holocaust; Manhattan Project; Japan attacks Pearl Harbor',
            keyFigures: ['Mahatma Gandhi', 'Subhas Chandra Bose', 'Aruna Asaf Ali'],
            image: '✊'
        },
        {
            year: 1947, yearLabel: '1947 CE',
            title: 'Independence & Partition',
            description: 'India gained independence on August 15, 1947 — but at the cost of Partition. The subcontinent was divided into India and Pakistan, triggering one of the largest mass migrations in history. Over 15 million people were displaced and an estimated 1-2 million died in communal violence.',
            significance: 'Birth of the world\'s largest democracy; traumatic Partition',
            location: 'Delhi', coords: [28.61, 77.21],
            category: 'political',
            contemporary: 'Cold War begins; UN established; Marshall Plan; Israel founded (1948)',
            keyFigures: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Sardar Patel', 'Lord Mountbatten', 'Muhammad Ali Jinnah'],
            image: '🇮🇳'
        },
        {
            year: 1950, yearLabel: '1950 CE',
            title: 'Republic of India — Constitution Adopted',
            description: 'On January 26, 1950, India adopted its Constitution, drafted by Dr. B.R. Ambedkar. It established India as a sovereign, socialist, secular, democratic republic with universal adult suffrage — the world\'s largest democracy. The Constitution enshrined fundamental rights and directive principles.',
            significance: 'World\'s longest written constitution; universal suffrage from day one',
            location: 'New Delhi', coords: [28.61, 77.21],
            category: 'political',
            contemporary: 'Korean War begins; China — People\'s Republic established; Europe — rebuilding from WWII',
            keyFigures: ['Dr. B.R. Ambedkar', 'Rajendra Prasad', 'Jawaharlal Nehru'],
            image: '📜'
        },
    ]
};

export const CATEGORY_CONFIG = {
    civilization: { label: 'Civilization', color: '#F59E0B', icon: '🏗️' },
    culture: { label: 'Culture', color: '#A855F7', icon: '🎭' },
    political: { label: 'Political', color: '#3B82F6', icon: '👑' },
    military: { label: 'Military', color: '#EF4444', icon: '⚔️' },
    religion: { label: 'Religion', color: '#10B981', icon: '🙏' },
};
