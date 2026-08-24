// ═══════════════════════════════════════════════════════════════
//  POLITY & GOVERNANCE — Complete Data
// ═══════════════════════════════════════════════════════════════

export const POLITY_ERAS = [
    {
        id: 'ancient',
        title: 'Ancient Governance',
        period: '1500 BCE – 647 CE',
        icon: '🏛️',
        color: '#F59E0B',
        gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
        overview: 'Ancient India developed sophisticated governance systems — from tribal assemblies (Sabhas and Samitis) of the Vedic period to the elaborate bureaucracy of the Maurya Empire described in Kautilya\'s Arthashastra. The Gupta Empire refined these systems further.',
        systems: [
            {
                name: 'Vedic Assemblies',
                period: '1500–600 BCE',
                desc: 'Sabha (council of elders) and Samiti (general assembly) were democratic institutions that checked the power of the Rajan (chief). The Vidatha was the earliest assembly. Women participated in Sabha.',
                keyPoints: ['Sabha — Council of elders/wise men', 'Samiti — General assembly of people', 'Rajan elected by Samiti in some tribes', 'No standing armies; tribal militias', 'Purohita (priest) advised the Rajan']
            },
            {
                name: 'Gana-Sanghas (Republics)',
                period: '600–300 BCE',
                desc: 'Several Mahajanapadas were republican in nature — Vajji (Licchavi), Shakya, Malla, and Koliya. The Licchavi republic of Vaishali is considered one of the world\'s first republics with an elected assembly of 7,707 rajas.',
                keyPoints: ['Vajji Confederacy — world\'s earliest republic', 'Elected heads (Ganapati/Ganaraja)', 'Decisions by majority vote', 'No hereditary monarchy', 'Buddhist texts describe these in detail']
            },
            {
                name: 'Maurya Administration',
                period: '322–185 BCE',
                desc: 'The most sophisticated governance system of the ancient world. Kautilya\'s Arthashastra detailed a centralized bureaucracy with espionage networks, provincial governors, municipal administration, and a standing army of 600,000+.',
                keyPoints: ['Arthashastra — treatise on statecraft & economics', 'Centralized bureaucracy from Pataliputra', 'Espionage network (Gudhapurushas)', 'Provincial system: 4 provinces + core', 'Municipal administration in cities', 'Dharmamahamatras under Ashoka']
            },
            {
                name: 'Gupta Administration',
                period: '320–550 CE',
                desc: 'More decentralized than Mauryas. Feudatory chiefs maintained semi-autonomy. Village self-governance through Panchayats became established. Land grants (Agrahara) to Brahmins became common.',
                keyPoints: ['Decentralized feudal structure', 'Village Panchayats for local governance', 'Land grants system (Agrahara/Brahmadeya)', 'Council of ministers (Mantri Parishad)', 'Provincial governors called Uparikas']
            }
        ]
    },
    {
        id: 'medieval',
        title: 'Medieval Governance',
        period: '647 CE – 1526 CE',
        icon: '⚔️',
        color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
        overview: 'Medieval India saw diverse governance models — from Rajput feudalism and Chola local self-government to the centralized Delhi Sultanate administration. The Iqta system, Diwan-i-Wizarat, and other Islamic administrative concepts merged with Indian traditions.',
        systems: [
            {
                name: 'Chola Local Self-Government',
                period: '9th–13th Century',
                desc: 'The Cholas developed the most advanced local self-governance system in medieval India. Uttaramerur inscriptions detail elected village assemblies (Ur, Sabha, Nagaram) with sophisticated election procedures using lottery (Kudavolai system).',
                keyPoints: ['Ur — general assembly of village', 'Sabha — assembly of Brahmin villages', 'Nagaram — assembly of merchant towns', 'Kudavolai — lottery-based election system', 'Variyams — committees for specific functions', 'Tank, garden, audit committees existed']
            },
            {
                name: 'Delhi Sultanate Administration',
                period: '1206–1526 CE',
                desc: 'Theocratic state with Sultan as head combining religious and political authority. The Iqta system assigned revenue collection rights to military commanders. Key departments: Diwan-i-Wizarat (finance), Diwan-i-Risalat (appeals), Diwan-i-Insha (correspondence), Diwan-i-Arz (military).',
                keyPoints: ['Sultan — supreme political & military head', 'Iqta system — land revenue assignments', 'Diwan-i-Wizarat — finance ministry', 'Diwan-i-Arz — military department', 'Qazi-ul-Quzat — chief justice', 'Provinces called Iqtas, later Subas']
            },
            {
                name: 'Vijayanagara Administration',
                period: '1336–1646 CE',
                desc: 'Highly organized Hindu empire with a council of ministers (Pradhani). The Nayankara system assigned territories to military commanders (Nayakas) in exchange for military service and revenue. Strong village assemblies continued.',
                keyPoints: ['King aided by Pradhani (council)', 'Nayankara system — military feudalism', 'Ayagar system — village administration', 'Well-maintained roads and markets', 'Religious tolerance in administration']
            }
        ]
    },
    {
        id: 'mughal',
        title: 'Mughal Administration',
        period: '1526 CE – 1857 CE',
        icon: '👑',
        color: '#A855F7',
        gradient: 'linear-gradient(135deg, #A855F7, #9333EA)',
        overview: 'The Mughal Empire created one of the most efficient and centralized administrative systems in Indian history. The Mansabdari system, Todar Mal\'s revenue reforms, and a sophisticated provincial administration governed a territory with 100+ million people.',
        systems: [
            {
                name: 'Central Administration',
                period: '1526–1857 CE',
                desc: 'The Emperor was supreme with almost absolute power. Key ministers: Wakil (Prime Minister), Diwan (Finance), Mir Bakshi (Military), Sadr-us-Sudur (Religious/Charity), Qazi-ul-Quzat (Chief Justice).',
                keyPoints: ['Emperor — supreme authority', 'Wakil/Wazir — Prime Minister', 'Diwan-i-Ala — Finance Minister', 'Mir Bakshi — Paymaster & Military head', 'Sadr-us-Sudur — religious grants', 'Mir Saman — royal household']
            },
            {
                name: 'Mansabdari System',
                period: 'Akbar onwards',
                desc: 'A grading system for all imperial officers. Each mansabdar had a Zat (personal rank) and Sawar (cavalry rank). Higher mansab meant more troops to maintain. The system was non-hereditary — ranks could be increased or decreased by the Emperor.',
                keyPoints: ['Zat rank — personal status', 'Sawar rank — cavalry obligation', 'Non-hereditary — merit-based (theoretically)', 'Ranks from 10 to 10,000 (later 12,000)', 'Salary through jagir (land revenue) assignments', 'System declined under Aurangzeb']
            },
            {
                name: 'Revenue Administration',
                period: 'Akbar\'s reforms',
                desc: 'Todar Mal\'s Zabti/Dahsala system measured all agricultural land, classified soil, and fixed revenue based on 10-year average yield. This was one of the most scientific revenue systems of the pre-modern world.',
                keyPoints: ['Zabti/Dahsala — 10-year average revenue system', 'Land measured in Bigha using Gaz-i-Ilahi', 'Soil classified: Polaj, Parauti, Chachar, Banjar', 'Revenue was 1/3 of produce', 'Karori/Amil — revenue collectors', 'Patwari — village-level record keeper']
            }
        ]
    },
    {
        id: 'british',
        title: 'British Colonial Rule',
        period: '1757 – 1947',
        icon: '📜',
        color: '#EF4444',
        gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
        overview: 'British rule transformed India\'s governance through a series of Acts — from Company rule to Crown rule. The constitutional evolution from Regulating Act (1773) to Indian Independence Act (1947) forms the foundation of India\'s modern governance.',
        systems: [
            {
                name: 'Company Rule Acts',
                period: '1773–1858',
                desc: 'The East India Company\'s political power was regulated through Parliamentary Acts. Each Act progressively reduced Company autonomy while establishing governance structures.',
                keyPoints: [
                    'Regulating Act 1773 — Governor-General of Bengal, Supreme Court at Calcutta',
                    'Pitt\'s India Act 1784 — Board of Control; dual government',
                    'Charter Act 1813 — Company trade monopoly ended (except China tea)',
                    'Charter Act 1833 — Governor-General of India; law commission',
                    'Charter Act 1853 — Open competition for civil services',
                ]
            },
            {
                name: 'Crown Rule Acts',
                period: '1858–1947',
                desc: 'After the 1857 revolt, the British Crown assumed direct control. Constitutional reforms gradually introduced Indian representation — though always falling short of Indian demands.',
                keyPoints: [
                    'Government of India Act 1858 — Crown takes over; Secretary of State created',
                    'Indian Councils Act 1861 — Indians in Viceroy\'s council; legislative councils',
                    'Indian Councils Act 1892 — Indirect elections introduced',
                    'Morley-Minto Reforms 1909 — Separate electorates for Muslims',
                    'Montagu-Chelmsford Reforms 1919 — Dyarchy in provinces; Bicameralism at centre',
                    'Government of India Act 1935 — Provincial autonomy; Federal structure (never fully implemented)',
                    'Indian Independence Act 1947 — Partition; two dominions created'
                ]
            }
        ]
    },
    {
        id: 'constitution',
        title: 'Indian Constitution',
        period: '1950 – Present',
        icon: '📖',
        color: '#3B82F6',
        gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)',
        overview: 'The Indian Constitution — the world\'s longest written constitution — was adopted on 26 January 1950. Drafted by the Constituent Assembly under Dr. B.R. Ambedkar, it drew from multiple global constitutions to create a framework for the world\'s largest democracy.',
        systems: [
            {
                name: 'Constituent Assembly',
                period: '1946–1950',
                desc: 'Formed under the Cabinet Mission Plan (1946). 299 members debated for 2 years, 11 months, 18 days. The Constitution has 395 Articles (originally), 22 Parts, and 12 Schedules.',
                keyPoints: [
                    'Chaired by Dr. Rajendra Prasad',
                    'Drafting Committee: Dr. B.R. Ambedkar (Chairman)',
                    'Drawn from multiple sources (US, UK, Ireland, Canada, Australia, etc.)',
                    'Adopted: 26 November 1949 (Constitution Day)',
                    'Enforced: 26 January 1950 (Republic Day)',
                    '2 years, 11 months, 18 days to complete'
                ]
            },
            {
                name: 'Key Features',
                period: 'Structural',
                desc: 'The Constitution establishes a sovereign, socialist, secular, democratic republic with a parliamentary system, federal structure with unitary bias, and an independent judiciary.',
                keyPoints: [
                    'Preamble — "We the People of India"',
                    'Fundamental Rights (Part III) — Articles 12-35',
                    'Directive Principles (Part IV) — Articles 36-51',
                    'Fundamental Duties (Part IVA) — Article 51A (added by 42nd Amendment)',
                    'Parliamentary system — borrowed from UK',
                    'Judicial Review — borrowed from US',
                    'DPSPs — borrowed from Ireland',
                    'Emergency provisions — borrowed from Germany (Weimar)',
                    'Concurrent List — borrowed from Australia'
                ]
            }
        ]
    }
];

export const KEY_ARTICLES = [
    { article: '14', title: 'Equality before Law', desc: 'The State shall not deny equality before the law or equal protection of laws', category: 'rights', color: '#3B82F6' },
    { article: '17', title: 'Abolition of Untouchability', desc: 'Untouchability is abolished and its practice in any form is an offence', category: 'rights', color: '#3B82F6' },
    { article: '19', title: 'Six Freedoms', desc: 'Freedom of speech, assembly, association, movement, residence, profession', category: 'rights', color: '#3B82F6' },
    { article: '21', title: 'Right to Life', desc: 'No person shall be deprived of life or personal liberty except by procedure established by law', category: 'rights', color: '#3B82F6' },
    { article: '21A', title: 'Right to Education', desc: 'Free and compulsory education for children aged 6–14 (86th Amendment)', category: 'rights', color: '#3B82F6' },
    { article: '32', title: 'Constitutional Remedies', desc: 'Right to approach Supreme Court for enforcement of Fundamental Rights — "Heart and Soul of the Constitution" (Ambedkar)', category: 'rights', color: '#3B82F6' },
    { article: '44', title: 'Uniform Civil Code', desc: 'State shall endeavour to secure a Uniform Civil Code throughout India', category: 'dpsp', color: '#10B981' },
    { article: '51A', title: 'Fundamental Duties', desc: '11 duties including respecting Constitution, national flag, anthem; defending the country', category: 'duties', color: '#F59E0B' },
    { article: '72', title: 'Pardoning Power of President', desc: 'President can grant pardons, reprieves, respites, or remission of punishment', category: 'executive', color: '#8B5CF6' },
    { article: '123', title: 'Ordinance Power', desc: 'President can promulgate ordinances when Parliament is not in session', category: 'executive', color: '#8B5CF6' },
    { article: '143', title: 'Advisory Jurisdiction', desc: 'President can seek Supreme Court\'s opinion on questions of law or fact', category: 'judiciary', color: '#EF4444' },
    { article: '352', title: 'National Emergency', desc: 'President can declare national emergency on grounds of war, external aggression, or armed rebellion', category: 'emergency', color: '#EF4444' },
    { article: '356', title: 'President\'s Rule', desc: 'President can impose central rule in a state if constitutional machinery fails', category: 'emergency', color: '#EF4444' },
    { article: '368', title: 'Amendment Procedure', desc: 'Parliament can amend the Constitution by special majority (and state ratification for some provisions)', category: 'amendment', color: '#A855F7' },
    { article: '370', title: 'J&K Special Status', desc: 'Granted special autonomous status to Jammu & Kashmir (abrogated in 2019)', category: 'special', color: '#F97316' },
];

export const KEY_AMENDMENTS = [
    { number: '1st', year: 1951, title: 'Land Reform & Free Speech Limits', desc: 'Added 9th Schedule to protect land reform laws from judicial review. Allowed reasonable restrictions on free speech.', color: '#3B82F6' },
    { number: '7th', year: 1956, title: 'States Reorganization', desc: 'Reorganized states on linguistic basis. Abolished Part B, C, D states. Created Union Territories.', color: '#10B981' },
    { number: '42nd', year: 1976, title: 'Mini Constitution', desc: 'Most comprehensive amendment during Emergency. Added "socialist, secular" to Preamble. Added Fundamental Duties. Curtailed judicial review. Called the "Mini Constitution".', color: '#EF4444' },
    { number: '44th', year: 1978, title: 'Corrective Amendment', desc: 'Reversed many 42nd Amendment excesses. Restored judicial review. Made President\'s proclamation of Emergency require written Cabinet advice. Right to Property removed from Fundamental Rights.', color: '#8B5CF6' },
    { number: '52nd', year: 1985, title: 'Anti-Defection Law', desc: 'Added 10th Schedule. Disqualification of legislators for defecting from their party.', color: '#F59E0B' },
    { number: '61st', year: 1989, title: 'Voting Age Reduced', desc: 'Reduced voting age from 21 to 18 years.', color: '#06B6D4' },
    { number: '73rd', year: 1992, title: 'Panchayati Raj', desc: 'Constitutionalized 3-tier Panchayati Raj system. Added Part IX and 11th Schedule. 1/3 seats reserved for women.', color: '#10B981' },
    { number: '74th', year: 1992, title: 'Municipalities', desc: 'Constitutionalized urban local bodies. Added Part IXA and 12th Schedule.', color: '#10B981' },
    { number: '86th', year: 2002, title: 'Right to Education', desc: 'Made education a Fundamental Right (Article 21A) for children aged 6-14. Added as Fundamental Duty for parents.', color: '#3B82F6' },
    { number: '101st', year: 2017, title: 'GST', desc: 'Introduced Goods and Services Tax — One Nation, One Tax. The biggest indirect tax reform since Independence.', color: '#F97316' },
    { number: '103rd', year: 2019, title: 'EWS Reservation', desc: '10% reservation for Economically Weaker Sections in education and government jobs.', color: '#A855F7' },
];

export const GOVERNANCE_COMPARISON = [
    {
        aspect: 'Head of State',
        ancient: 'Rajan / Samrat (elected or hereditary)',
        medieval: 'Sultan / Raja / Emperor',
        mughal: 'Padshah (Emperor)',
        british: 'British Monarch (via Viceroy)',
        modern: 'President (elected, ceremonial)'
    },
    {
        aspect: 'Legislature',
        ancient: 'Sabha & Samiti',
        medieval: 'Court assembly / Darbar',
        mughal: 'Emperor\'s court; no legislature',
        british: 'Central & Provincial Legislatures (from 1892)',
        modern: 'Parliament (Lok Sabha + Rajya Sabha)'
    },
    {
        aspect: 'Judiciary',
        ancient: 'King\'s court / Dharmasthana',
        medieval: 'Qazi courts / Panchayats',
        mughal: 'Qazi-ul-Quzat / Diwan-i-Adalat',
        british: 'High Courts & Supreme Court',
        modern: 'Independent Judiciary (SC, HC, District Courts)'
    },
    {
        aspect: 'Revenue System',
        ancient: '1/6th produce (Bhaga)',
        medieval: 'Iqta / Kharaj / various cesses',
        mughal: 'Zabti/Dahsala (1/3 produce)',
        british: 'Permanent/Ryotwari/Mahalwari Settlements',
        modern: 'Progressive taxation (Income Tax, GST)'
    },
    {
        aspect: 'Local Governance',
        ancient: 'Village Panchayats',
        medieval: 'Chola assemblies / Nayankara',
        mughal: 'Faujdar / Kotwal / Village headmen',
        british: 'District Collector / Tehsildar',
        modern: 'Panchayati Raj & Municipalities (73rd/74th Amendments)'
    },
    {
        aspect: 'Military',
        ancient: 'Standing armies + levies',
        medieval: 'Iqta-based military + mercenaries',
        mughal: 'Mansabdari system cavalry',
        british: 'British Indian Army',
        modern: 'Army, Navy, Air Force (under civilian control)'
    }
];

export const CONSTITUTIONAL_BODIES = [
    { name: 'Election Commission', article: '324', icon: '🗳️', desc: 'Conducts free and fair elections. CEC and ECs appointed by President.', color: '#3B82F6' },
    { name: 'UPSC', article: '315', icon: '📝', desc: 'Union Public Service Commission — conducts civil services exams and advises on appointments.', color: '#8B5CF6' },
    { name: 'Finance Commission', article: '280', icon: '💰', desc: 'Recommends distribution of tax revenues between Centre and States.', color: '#10B981' },
    { name: 'CAG', article: '148', icon: '🔍', desc: 'Comptroller and Auditor General — audits government accounts. "Guardian of public purse."', color: '#F59E0B' },
    { name: 'Attorney General', article: '76', icon: '⚖️', desc: 'Chief legal advisor to Government of India. Can appear in any court.', color: '#EF4444' },
    { name: 'National Commissions', article: 'Various', icon: '🏛️', desc: 'SC/ST Commission (338), Women\'s Commission, Minorities Commission, Human Rights Commission.', color: '#A855F7' },
];
