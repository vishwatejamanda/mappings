export const DYNASTIES = {
    // ════════ ANCIENT ════════
    'maurya': {
        id: 'maurya', name: 'Maurya Empire', era: 'ancient',
        period: '322 BCE – 185 BCE', color: '#8B5CF6',
        founded: 'Chandragupta Maurya with Chanakya',
        capital: 'Pataliputra (modern Patna)',
        overview: 'The Maurya Empire was the first pan-Indian empire, uniting nearly the entire subcontinent under a single administration. Founded by Chandragupta Maurya with guidance from Chanakya, it reached its zenith under Ashoka. The empire\'s sophisticated bureaucracy, spy network, and road system were described in Kautilya\'s Arthashastra.',
        legacy: ['First pan-Indian empire', 'Arthashastra — treatise on statecraft', 'Ashoka Pillars & edicts across India', 'Spread Buddhism to Sri Lanka, Central & SE Asia', 'Model for subsequent Indian empires', 'Ashoka Chakra on Indian flag'],
        decline: 'After Ashoka, the empire weakened under incompetent successors. The last Mauryan emperor, Brihadratha, was assassinated by his general Pushyamitra Shunga in 185 BCE, founding the Shunga dynasty.',
        rulers: [
            {
                name: 'Chandragupta Maurya', period: '322–298 BCE', title: 'Founder',
                coronation: 'Chandragupta was discovered by Chanakya (Kautilya), a Brahmin scholar humiliated by the Nanda king Dhana Nanda. Chanakya trained the young Chandragupta in warfare, politics, and statecraft at Takshashila. Together they raised an army, exploited internal weaknesses of the Nanda dynasty, and overthrew Dhana Nanda around 322 BCE, seizing the throne of Magadha at Pataliputra.',
                bio: 'Born into a humble family, Chandragupta was mentored by the brilliant Chanakya (Kautilya). He overthrew the Nanda dynasty, defeated Seleucus Nicator (Alexander\'s successor), and created the first pan-Indian empire stretching from Afghanistan to Bengal. His administration, described in Chanakya\'s Arthashastra, featured a sophisticated bureaucracy, spy network, and standing army of over 600,000 soldiers. He established a centralized government with provincial governors and an efficient taxation system.',
                death: 'According to Jain tradition, Chandragupta abdicated the throne around 298 BCE in favor of his son Bindusara. He became a Jain monk under the sage Bhadrabahu, traveled to Shravanabelagola in Karnataka, and practiced Sallekhana (ritual fasting unto death) — dying peacefully around 297 BCE.',
                achievements: ['Overthrew Nanda dynasty', 'Defeated Seleucus Nicator', 'Unified most of India', 'Established efficient administration', 'Adopted Jainism in later life'],
                wars: ['Conquest of Nanda Empire', 'War against Seleucus Nicator (305 BCE)'],
                conquests: [
                    { title: 'Overthrow of Nanda Dynasty (322 BCE)', desc: 'With Chanakya\'s strategy, Chandragupta attacked the powerful Nanda Empire from the northwest frontier inward, systematically conquering border provinces before marching on the capital Pataliputra.' },
                    { title: 'War against Seleucus Nicator (305 BCE)', desc: 'Defeated Alexander\'s successor Seleucus I in a decisive campaign. The peace treaty gave Chandragupta control of eastern Afghanistan, Baluchistan, and regions west of the Indus. Seleucus sent ambassador Megasthenes to the Maurya court.' }
                ],
                coins: [
                    { name: 'Silver Karshapana (Punch-marked)', desc: 'Standard silver punch-marked coins with five imperial symbols including the sun, six-armed wheel, and hill with crescent — circulating across the entire subcontinent.' }
                ],
                constructions: [
                    { name: 'Royal Palace of Pataliputra', desc: 'Magnificent 80-pillared wooden palace at Kumrahar, described by Megasthenes as surpassing the Persian palaces of Susa and Ecbatana.' },
                    { name: 'Uttarapath (Grand Trunk Road precursor)', desc: 'Constructed the historic northern royal highway connecting Takshashila to Pataliputra and the Bay of Bengal.' }
                ],
                events: [
                    { year: '322 BCE', text: 'Overthrew the Nanda dynasty and established the Maurya Empire at Pataliputra' },
                    { year: '305 BCE', text: 'Defeated Seleucus Nicator; gained territories in Afghanistan and Baluchistan. Marriage alliance sealed the peace.' },
                    { year: '303 BCE', text: 'Greek ambassador Megasthenes arrived at Pataliputra, writing "Indica" describing the Maurya court and Indian society' },
                    { year: '~298 BCE', text: 'Abdicated the throne, became a Jain monk, and traveled south to Shravanabelagola' }
                ]
            },
            {
                name: 'Bindusara', period: '298–273 BCE', title: 'Amitraghata (Slayer of Enemies)',
                coronation: 'Succeeded his father Chandragupta Maurya peacefully around 298 BCE. He inherited a vast empire and continued the administrative systems established by Chanakya. The transition was orderly, with Chanakya continuing as chief advisor in the early years of his reign.',
                bio: 'Son of Chandragupta, Bindusara expanded the empire southward, conquering the Deccan plateau down to Mysore. He maintained diplomatic relations with the Seleucid Empire and Ptolemaic Egypt. The Greek ambassadors Deimachus and Dionysius resided at his court. He was called "Amitraghata" (Slayer of Enemies) by the Greeks. He reportedly asked Antiochus I of Syria to send him Greek wine, figs, and a sophist — the Syrian sent wine and figs but said Greek philosophers were not for export.',
                death: 'Died naturally around 273 BCE. A violent succession struggle erupted among his sons. According to Buddhist texts, Ashoka eliminated his 99 brothers (likely exaggerated) to seize the throne. The succession war lasted about 4 years before Ashoka consolidated power.',
                achievements: ['Extended empire to Deccan', 'Diplomatic ties with Greeks & Egyptians', 'Maintained Chanakya\'s administrative system', 'Patronized Ajivika sect'],
                wars: ['Southern Indian campaigns', 'Suppressed Taxila revolt'],
                conquests: [
                    { title: 'Deccan Campaigns', desc: 'Systematically conquered the Deccan plateau, extending Maurya control south to present-day Karnataka. Only Kalinga (Odisha) and the Tamil kingdoms remained outside Maurya control.' }
                ],
                coins: [
                    { name: 'Silver Pana / Karshapana', desc: 'Imperial punch-marked silver coins maintaining standard weight of 32 rattis with peacock and hill symbols.' }
                ],
                constructions: [
                    { name: 'Ajivika Cave Sanctuaries', desc: 'Earliest patronage of rock-cut ascetic shelters in the Barabar hills for the Ajivika religious community.' }
                ],
                events: [
                    { year: '298 BCE', text: 'Ascended the throne at Pataliputra after Chandragupta\'s abdication' },
                    { year: '~290 BCE', text: 'Greek ambassador Deimachus arrived from the Seleucid court' },
                    { year: '~280 BCE', text: 'Suppressed a major revolt at Taxila; sent prince Ashoka as governor to quell the rebellion' },
                    { year: '273 BCE', text: 'Death of Bindusara; war of succession among princes begins' }
                ]
            },
            {
                name: 'Ashoka the Great', period: '268–232 BCE', title: 'Devanampiya Piyadasi (Beloved of the Gods)',
                coronation: 'Ashoka seized the throne after a bloody succession war following Bindusara\'s death. Buddhist texts claim he killed 99 of his brothers, though this is likely exaggerated. He was initially governor of Ujjain and Taxila. His formal coronation was delayed until about 268 BCE — four years after Bindusara\'s death — suggesting a prolonged power struggle.',
                bio: 'Ashoka is considered one of the greatest rulers in world history. Initially a ruthless conqueror nicknamed "Chandashoka" (Ashoka the Fierce), the devastating Kalinga War (261 BCE) killed over 100,000 people and displaced 150,000. Witnessing the carnage personally, he was filled with profound remorse and embraced Buddhism. He transformed into "Dharmashoka" and governed by Dhamma (righteousness), erecting 33 rock edicts and pillar inscriptions across the empire promoting non-violence, religious tolerance, animal welfare, and social welfare. He sent missionaries across Asia, including his son Mahinda and daughter Sanghamitra to Sri Lanka.',
                death: 'Ashoka died around 232 BCE after a reign of nearly 36 years. In his final years, Buddhist tradition says he donated so much to monasteries that his ministers restricted his authority. He reportedly died at Taxila. The empire fragmented rapidly after his death among weak successors.',
                achievements: ['Conquered Kalinga', 'Embraced Buddhism & spread it globally', 'Rock & Pillar edicts across India', 'Sent missionaries to Sri Lanka, Central Asia', 'Built hospitals, roads, rest houses', 'Ashoka Chakra adopted on Indian flag'],
                wars: ['Kalinga War (261 BCE) — his last war'],
                conquests: [
                    { title: 'Kalinga War (261 BCE)', desc: 'The bloodiest war of the Maurya Empire. Over 100,000 Kalingans were killed, 150,000 deported, and many more died from disease and famine. The war gave Ashoka control of the entire east coast. His remorse at the devastation led him to renounce warfare forever and embrace Buddhism.' }
                ],
                coins: [
                    { name: 'Imperial Silver Karshapana', desc: 'Uniform currency stamped with Buddhist and Mauryan symbols, distributed across the empire from Afghanistan to Mysore.' }
                ],
                constructions: [
                    { name: 'Ashoka Pillars & Lion Capital', desc: 'Monolithic polished Chunar sandstone pillars crowned with the famous Lion Capital at Sarnath (now National Emblem of India).' },
                    { name: 'Great Stupa at Sanchi', desc: 'Commissioned the hemispherical brick core of the Sanchi Stupa enshrining sacred relics of Lord Buddha.' },
                    { name: 'Mahabodhi Temple Original Structure', desc: 'Built the original diamond throne (Vajrasana) and temple marker at Bodh Gaya where Gautama Buddha attained enlightenment.' },
                    { name: 'Barabar Caves (Sudama & Lomas Rishi)', desc: 'Finely polished rock-cut granite caves for Ajivika ascetics, pioneering Indian rock-cut architecture.' }
                ],
                events: [
                    { year: '268 BCE', text: 'Formal coronation as emperor after winning the succession war' },
                    { year: '261 BCE', text: 'Kalinga War — the turning point that transformed Ashoka from a ruthless conqueror to a Buddhist emperor' },
                    { year: '~260 BCE', text: 'Embraced Buddhism under the monk Upagupta; began propagating Dhamma' },
                    { year: '~257 BCE', text: 'Began erecting Rock Edicts across the empire — 14 major rock edicts, 7 pillar edicts' },
                    { year: '~250 BCE', text: 'Third Buddhist Council held at Pataliputra under Ashoka\'s patronage' },
                    { year: '~245 BCE', text: 'Sent son Mahinda and daughter Sanghamitra as Buddhist missionaries to Sri Lanka' },
                    { year: '232 BCE', text: 'Death of Ashoka; empire begins to fragment under weak successors' }
                ]
            },
            {
                name: 'Dasharatha', period: '232–224 BCE', title: 'Grandson of Ashoka',
                coronation: 'Succeeded his grandfather Ashoka directly, possibly because his father Kunala had been blinded in a palace intrigue. He inherited a weakening empire that was already fragmenting.',
                bio: 'Grandson of Ashoka who ruled a much-reduced empire. He continued Ashoka\'s policy of religious tolerance and is known for dedicating cave shelters to the Ajivika monks in the Barabar Hills — the oldest surviving rock-cut caves in India. His inscriptions closely mirror Ashoka\'s style.',
                death: 'Died around 224 BCE. The circumstances are unclear. He was succeeded by Samprati, who was a Jain patron.',
                achievements: ['Barabar cave dedications', 'Maintained Buddhist policies'],
                wars: [],
                conquests: [],
                coins: [
                    { name: 'Late Mauryan Copper & Cast coins', desc: 'Punch-marked coins with debased silver and copper content as imperial finances contracted.' }
                ],
                constructions: [
                    { name: 'Nagarjuni Hill Caves', desc: 'Dedicated the Gopika, Vahiyaka, and Vadathika caves in Nagarjuni Hills to the Ajivika sect, bearing his imperial inscriptions.' }
                ],
                events: [
                    { year: '232 BCE', text: 'Ascended the throne after Ashoka\'s death' },
                    { year: '~230 BCE', text: 'Dedicated the Barabar Hill caves (Lomas Rishi, Sudama) to Ajivika monks — India\'s oldest rock-cut architecture' }
                ]
            },
            {
                name: 'Brihadratha', period: '187–185 BCE', title: 'Last Mauryan Emperor',
                coronation: 'Ascended a throne that controlled only the core Magadha region. The once-mighty Maurya Empire had lost most provinces to regional governors and invaders.',
                bio: 'The last ruler of the Maurya dynasty. The empire had shrunk to a fraction of its former glory. The northwestern provinces had been lost to the Greek king Demetrius I. The army was weak and demoralized. Brihadratha was a figurehead emperor with little real power.',
                death: 'Assassinated by his own commander-in-chief, Pushyamitra Shunga, during a military parade around 185 BCE. Pushyamitra struck him down in front of the assembled army and seized the throne, founding the Shunga dynasty. This ended 137 years of Maurya rule.',
                achievements: [],
                wars: ['Assassinated by Pushyamitra Shunga'],
                conquests: [],
                coins: [
                    { name: 'Terminal Mauryan Cast Copper coins', desc: 'Localized cast copper punch-marked tokens representing the diminished Magadhan state.' }
                ],
                constructions: [],
                events: [
                    { year: '~186 BCE', text: 'Lost northwestern territories to Greco-Bactrian king Demetrius I' },
                    { year: '185 BCE', text: 'Assassinated by General Pushyamitra Shunga during a military review, ending the Maurya dynasty' }
                ]
            },
        ]
    },

    'gupta': {
        id: 'gupta', name: 'Gupta Empire', era: 'ancient',
        period: '320 CE – 550 CE', color: '#10B981',
        founded: 'Sri Gupta (early 3rd century), expanded by Chandragupta I',
        capital: 'Pataliputra',
        overview: 'The Gupta Empire presided over the "Golden Age of India." This era saw extraordinary achievements in mathematics (zero, decimal system), astronomy (Aryabhata), literature (Kalidasa), metallurgy (Iron Pillar), art (Ajanta caves), and education (Nalanda University). Sanskrit became the court language and Hindu culture flourished.',
        legacy: ['Concept of zero & decimal system', 'Aryabhata\'s astronomical calculations', 'Kalidasa\'s literary masterpieces', 'Nalanda University', 'Ajanta & Ellora paintings', 'Iron Pillar metallurgy', 'Classical Sanskrit golden age'],
        decline: 'Weakened by Huna (Hun) invasions from Central Asia in the 5th century. The empire fragmented into smaller kingdoms. Skandagupta was the last effective ruler who repelled the Hunas but exhausted the treasury.',
        rulers: [
            {
                name: 'Chandragupta I', period: '320–335 CE', title: 'Maharajadhiraja (King of Kings)',
                coronation: 'Rose to prominence through a strategic marriage with Kumaradevi, a Licchavi princess. The Licchavis controlled the powerful Vaishali republic. This alliance gave him control of the entire Gangetic plain. He took the unprecedented title "Maharajadhiraja" (King of Kings) and started the Gupta era calendar in 320 CE.',
                bio: 'Founded the Gupta Empire as a major power by merging his Gupta territories with the Licchavi domains through marriage. His kingdom encompassed Magadha, Prayaga (Allahabad), and Saketa (Ayodhya). He issued gold coins depicting both himself and Queen Kumaradevi — an extraordinary honor for a queen in ancient India.',
                death: 'Died around 335 CE. He personally selected Samudragupta as his successor over his other sons, recognizing his military genius. The transition was relatively smooth.',
                achievements: ['Founded Gupta dynasty as major power', 'Licchavi marriage alliance', 'Introduced Gupta era calendar', 'Controlled Magadha, Prayaga, Saketa'],
                wars: [],
                conquests: [],
                coins: [
                    { name: 'King and Queen (Kumaradevi) Gold Dinar', desc: 'Famous gold coin depicting Chandragupta standing with his queen Kumaradevi Licchavi, and Goddess Lakshmi on a lion on the reverse with legend "Licchavayah".' }
                ],
                constructions: [
                    { name: 'Imperial Pataliputra Expansions', desc: 'Revitalized and fortified the ancient capital of Pataliputra as the premier political hub of northern India.' }
                ],
                events: [
                    { year: '320 CE', text: 'Marriage to Kumaradevi and establishment of the Gupta era' },
                    { year: '~325 CE', text: 'Took the title Maharajadhiraja — first Gupta king to claim paramount sovereignty' },
                    { year: '335 CE', text: 'Selected Samudragupta as heir and passed the empire to him' }
                ]
            },
            {
                name: 'Samudragupta', period: '335–375 CE', title: 'Napoleon of India',
                coronation: 'Chosen by his father Chandragupta I over other princes. The Allahabad Pillar inscription says Chandragupta "selected him from among his peers" and told other princes to "rejoice." Some scholars believe there was a brief succession dispute with another prince Kacha.',
                bio: 'One of India\'s greatest military geniuses, called "Indian Napoleon" by historian V.A. Smith. The Allahabad Pillar inscription (Prayaga Prashasti) composed by his court poet Harishena records his staggering conquests: he uprooted 9 north Indian kings, captured and released 12 southern rulers after submission, and received tribute from frontier kingdoms and foreign powers. Despite his military prowess, he was also an accomplished musician who played the veena (depicted on his coins) and a patron of Sanskrit poetry.',
                death: 'Died around 375 CE after performing the Ashvamedha (horse sacrifice) — a Vedic ritual asserting imperial sovereignty. He was succeeded by Chandragupta II, possibly after a brief reign by Ramagupta.',
                achievements: ['Conquered most of India', 'Allahabad Pillar inscription', 'Ashvamedha sacrifice performer', 'Patron of arts — played veena', 'Received Sri Lankan embassy'],
                wars: ['Northern Indian campaigns', 'Southern expedition (Dakshinapatha)', 'Frontier & forest kingdom subjugation'],
                conquests: [
                    { title: 'Aryavarta Campaign (North India)', desc: 'Uprooted 9 north Indian kings including rulers of Ahichchhatra, Padmavati, and Mathura. He violently conquered and annexed their territories directly into the Gupta Empire.' },
                    { title: 'Dakshinapatha Campaign (Southern Expedition)', desc: 'Marched through the Deccan, defeating 12 kings of the south including Mahendra of Kosala. Unlike the north, he followed a policy of "capture and release" — defeated southern kings were reinstated as tributaries.' },
                    { title: 'Frontier Subjugation', desc: 'Received submission from frontier kingdoms, forest tribes, and foreign powers including the Kushanas and Shakas. Even Sri Lanka sent an embassy seeking his alliance.' }
                ],
                coins: [
                    { name: 'Veena-Player Gold Dinar', desc: 'Celebrated gold coin depicting the emperor seated on a couch playing the veena (lute), bearing the legend "Maharajadhiraja Sri Samudragupta".' },
                    { name: 'Ashvamedha Gold Coin', desc: 'Sacrificial horse before a sacrificial post (yupa) with legend asserting unvanquished sovereign conquest.' },
                    { name: 'Archer & Battle-Axe Gold Dinars', desc: 'Depicting the emperor armed with bow, arrow, or battle-axe, celebrating military supremacy across Aryavarta.' }
                ],
                constructions: [
                    { name: 'Allahabad Stone Pillar Inscription (Prayaga Prashasti)', desc: 'Erected the famous Harishena eulogy on the Ashokan pillar at Kaushambi/Prayaga documenting his pan-Indian conquests in classical Sanskrit.' },
                    { name: 'Eran Temple & Inscription', desc: 'Commissioned temples and monuments at the strategic central Indian garrison town of Eran (Madhya Pradesh).' }
                ],
                events: [
                    { year: '335 CE', text: 'Coronation as emperor; began aggressive military campaigns' },
                    { year: '~340 CE', text: 'Completed the conquest of north India — 9 kings defeated and territories annexed' },
                    { year: '~345 CE', text: 'Southern expedition through the Deccan — 12 kings defeated and released as tributaries' },
                    { year: '~360 CE', text: 'Received embassy from Sri Lankan king Meghavarna, who sought permission to build a Buddhist monastery at Bodh Gaya' },
                    { year: '~370 CE', text: 'Performed the Ashvamedha sacrifice, asserting supreme sovereignty over India' }
                ]
            },
            {
                name: 'Chandragupta II (Vikramaditya)', period: '375–415 CE', title: 'Vikramaditya (Sun of Valor)',
                coronation: 'According to a Jain text, he killed his elder brother Ramagupta who had disgracefully offered his wife to a Shaka king. Chandragupta II rescued the queen, executed Ramagupta, and married the queen himself. He then ascended the throne with popular support.',
                bio: 'The most celebrated Gupta emperor who presided over India\'s true Golden Age. He defeated the Shaka Western Kshatrapas of Gujarat, giving the empire access to western sea ports and international trade. His court was legendary — the Navratnas (Nine Gems) included Kalidasa (greatest Sanskrit poet), Varahamihira (astronomer), Dhanvantari (physician), and Amara Simha. The Chinese pilgrim Fa-Hien visited India (399-414 CE) and praised the peace, prosperity, and religious tolerance under his rule.',
                death: 'Died around 415 CE, likely of natural causes. He was succeeded by his son Kumaragupta I. The empire was at its zenith at the time of his death — stretching from sea to sea.',
                achievements: ['Defeated Western Kshatrapas', 'Navratnas at his court', 'Kalidasa flourished', 'Fa-Hien\'s visit — praised peace & prosperity', 'Iron Pillar of Delhi attributed to him', 'Extended empire coast to coast'],
                wars: ['War against Shaka Western Kshatrapas', 'Alliance with Vakatakas through marriage'],
                conquests: [
                    { title: 'Destruction of Western Kshatrapas (~409 CE)', desc: 'Defeated the last Shaka Satrap Rudrasimha III, ending 300 years of Shaka rule in western India. This gave the Guptas access to Gujarat\'s ports, boosting international maritime trade with Rome and Southeast Asia.' }
                ],
                coins: [
                    { name: 'Archer & Lion-Slayer Gold Dinars', desc: 'Masterpieces of ancient Indian numismatic art, showing Vikramaditya slaying a roaring lion with bow and sword.' },
                    { name: 'Chhatra (Umbrella) & Horseman Gold Coins', desc: 'Featuring the royal umbrella symbol of imperial sovereignty and dynamic depictions of the emperor on horseback.' },
                    { name: 'Silver Coins of Western Kshatrapa Style', desc: 'First Gupta silver coins issued after the conquest of Gujarat and Saurashtra, bearing the peacock and Garuda emblems.' }
                ],
                constructions: [
                    { name: 'Iron Pillar of Delhi (Vishnupada)', desc: 'Rust-resistant 7-meter metallurgical wonder inscribed with verses commemorating King Chandra\'s victories, originally erected at Udayagiri/Mathura.' },
                    { name: 'Udayagiri Cave Sanctuaries', desc: 'Magnificent rock-cut caves near Vidisha featuring the monumental Varaha panel rescuing the Earth Goddess.' },
                    { name: 'Tigawa Kankali Devi Temple', desc: 'One of the earliest structural stone Hindu temples in India with flat roof and sanctum porch.' }
                ],
                events: [
                    { year: '~380 CE', text: 'Marriage alliance with Vakataka dynasty — married his daughter Prabhavatigupta to Vakataka king Rudrasena II' },
                    { year: '399 CE', text: 'Chinese Buddhist pilgrim Fa-Hien arrived in India; spent 10 years studying at Pataliputra and Nalanda' },
                    { year: '~409 CE', text: 'Defeated last Western Kshatrapa Rudrasimha III; Gupta Empire now stretched from coast to coast' },
                    { year: '~410 CE', text: 'Court of Navratnas flourished — Kalidasa composed Shakuntala, Meghaduta; Aryabhata did early astronomical work' }
                ]
            },
            {
                name: 'Kumaragupta I', period: '415–455 CE', title: 'Mahendraditya',
                coronation: 'Peacefully succeeded his father Chandragupta II. Inherited a stable, prosperous empire at its peak. He maintained the existing administrative systems and continued his father\'s cultural patronage.',
                bio: 'Maintained the vast empire for 40 years — the longest reign of any Gupta emperor. He is credited with founding or significantly expanding Nalanda University, which became the world\'s first residential university and attracted scholars from China, Korea, Japan, Tibet, and Central Asia for the next 800 years. He performed the Ashvamedha sacrifice.',
                death: 'Faced a major threat from the Pushyamitra tribe toward the end of his reign. He may have died during or shortly after this crisis. His son Skandagupta had to fight to secure the throne.',
                achievements: ['Founded Nalanda University', 'Maintained imperial stability', 'Performed Ashvamedha sacrifice', 'Large-scale coinage'],
                wars: ['Pushyamitra revolt'],
                conquests: [],
                coins: [
                    { name: 'Peacock-Type (Karttikeya) Gold Dinar', desc: 'Depicts Emperor feeding a peacock and Lord Karttikeya riding his peacock vehicle Paravani — symbol of martial divinity.' },
                    { name: 'Rhinoceros-Slayer Gold Coin', desc: 'Rare and unique coin type showing the Emperor on horseback attacking a horned rhinoceros.' }
                ],
                constructions: [
                    { name: 'Nalanda Mahavihara (University)', desc: 'Founded the ancient residential university of Nalanda in Bihar, which grew to host over 10,000 monks and scholars from all over Asia.' },
                    { name: 'Bhitari Monolithic Pillar', desc: 'Erected sandstone column in Ghazipur district commemorating royal deeds and Vishnu shrines.' }
                ],
                events: [
                    { year: '415 CE', text: 'Succeeded Chandragupta II; took titles Mahendraditya and Shri Mahendraditya' },
                    { year: '~430 CE', text: 'Founded/expanded Nalanda University — it would become the world\'s greatest center of learning' },
                    { year: '~440 CE', text: 'Performed Ashvamedha sacrifice, asserting continued Gupta supremacy' },
                    { year: '~455 CE', text: 'Pushyamitra rebellion threatened the empire; crisis at the end of his reign' }
                ]
            },
            {
                name: 'Skandagupta', period: '455–467 CE', title: 'Last Great Gupta Emperor',
                coronation: 'Had to fight for the throne amidst the Pushyamitra crisis. His Bhitari inscription dramatically describes how he restored his mother\'s tears to joy by defeating enemies and securing the throne.',
                bio: 'The last truly powerful Gupta emperor. He heroically repelled the Huna (Hunnic) invasions from Central Asia — the same forces that were destroying the Roman Empire in Europe. The Junagarh inscription praises his valor and describes his repair of the Sudarshana Lake dam. Despite military success, the constant warfare drained the imperial treasury.',
                death: 'Died around 467 CE. After his death, the empire fragmented rapidly. The Hunas eventually broke through under Toramana and Mihirakula. Later Gupta rulers were minor kings ruling small territories until the dynasty faded out around 550 CE.',
                achievements: ['Repelled Huna invasions', 'Repaired Sudarshana Lake dam', 'Maintained western territories'],
                wars: ['Wars against Pushyamitras', 'Repelled Huna/Kidarite invasions'],
                conquests: [
                    { title: 'Defeat of the Hunas (~460 CE)', desc: 'Repelled the devastating Huna (Hun) invasion that was simultaneously destroying the Roman Empire in Europe. This saved Indian civilization from catastrophic destruction, though the wars exhausted the empire\'s resources.' }
                ],
                coins: [
                    { name: 'King and Lakshmi Gold Dinar', desc: 'Depicts Skandagupta holding bow and arrow with Goddess Lakshmi holding lotus, celebrating victory over invaders.' },
                    { name: 'Silver Madhyadesha Peacock Coins', desc: 'Silver issues minted for central and western provinces with peacock emblem and legend "Paramabhagavata".' }
                ],
                constructions: [
                    { name: 'Sudarshana Lake Dam Reconstruction', desc: 'Junagadh inscription records how his governor Parnadatta rebuilt the massive masonry embankment of Sudarshana Lake after it burst in floods.' },
                    { name: 'Bhitari Vishnu Temple Complex', desc: 'Built the temple complex dedicated to Lord Vishnu at Bhitari following the defeat of the Hunas.' }
                ],
                events: [
                    { year: '455 CE', text: 'Fought his way to the throne; defeated Pushyamitra rebels' },
                    { year: '~460 CE', text: 'Heroically repelled the Huna invasion — saving India from the fate that befell Rome' },
                    { year: '~460 CE', text: 'Repaired the Sudarshana Lake dam in Gujarat (originally built by the Mauryas 700 years earlier)' },
                    { year: '467 CE', text: 'Death of Skandagupta; empire begins rapid decline under weak successors' }
                ]
            },
        ]
    },

    // ════════ MEDIEVAL ════════
    'chola': {
        id: 'chola', name: 'Chola Empire', era: 'medieval',
        period: '848 CE – 1279 CE', color: '#06B6D4',
        founded: 'Vijayalaya Chola', capital: 'Thanjavur / Gangaikonda Cholapuram',
        overview: 'The Imperial Cholas were perhaps the greatest dynasty of South India and the most powerful naval force in Indian history. They conquered Sri Lanka, Maldives, and parts of Southeast Asia. Their administration, especially the village self-governance system, was remarkably sophisticated. The Brihadeeswarar Temple remains an architectural wonder.',
        legacy: ['Greatest Indian naval power', 'Conquered parts of Southeast Asia', 'Brihadeeswarar Temple (UNESCO)', 'Chola bronze sculptures', 'Village self-governance (Sabha system)', 'Maritime trade network across Indian Ocean'],
        decline: 'The Chola power declined due to the rise of the Pandyas and Hoysalas. The last Chola king, Rajendra III, was defeated by the Pandya king Maravarman Kulasekara Pandyan I in 1279.',
        rulers: [
            {
                name: 'Vijayalaya Chola', period: '848–871 CE', title: 'Founder of Imperial Cholas',
                coronation: 'A feudatory chief of the Pallava dynasty, Vijayalaya seized the opportunity during the Pallava-Pandya conflicts to capture Thanjavur from the Muttaraiyar chiefs around 848 CE, establishing the imperial Chola lineage.',
                bio: 'Captured Thanjavur from the Muttaraiyar chiefs, establishing the imperial Chola dynasty. He was a feudatory of the Pallava dynasty who seized the opportunity during a period of political instability to create an independent kingdom. He built the Durga temple (Nisumbhasudini) at Thanjavur.',
                death: 'Died around 871 CE. His son Aditya I continued the expansion, eventually defeating the Pallava dynasty completely.',
                achievements: ['Captured Thanjavur', 'Founded imperial Chola lineage', 'Built Durga temple at Thanjavur'],
                wars: ['Conquest of Thanjavur'],
                conquests: [
                    { title: 'Capture of Thanjavur (c. 848 CE)', desc: 'Seized Thanjavur from the Muttaraiyar chiefs during the chaos of Pallava-Pandya wars. This established the Chola heartland that would become the center of one of India\'s greatest maritime empires.' }
                ],
                coins: [
                    { name: 'Early Chola Gold & Copper Kasu', desc: 'Coins depicting the Chola dynastic emblem of the pouncing tiger seated between the Pandya twin fish and Chera bow.' }
                ],
                constructions: [
                    { name: 'Nisumbhasudini (Durga) Temple at Thanjavur', desc: 'Built the temple for the goddess Nisumbhasudini to celebrate the capture of Thanjavur.' }
                ],
                events: [
                    { year: 'c. 848 CE', text: 'Captured Thanjavur from the Muttaraiyar; established imperial Chola dynasty' },
                    { year: 'c. 850s', text: 'Built the Nisumbhasudini (Durga) temple at Thanjavur' },
                    { year: '871 CE', text: 'Death of Vijayalaya; succeeded by his son Aditya I' }
                ]
            },
            {
                name: 'Raja Raja Chola I', period: '985–1014 CE', title: 'Raja Raja the Great',
                coronation: 'Ascended the throne around 985 CE. He reorganized the entire kingdom, conducted a comprehensive land survey, and rebuilt the Chola military into the most powerful force in all of South and Southeast Asia.',
                bio: 'Transformed the Cholas from a regional kingdom into a vast maritime empire. He conquered the Chera and Pandya kingdoms, northern Sri Lanka (Anuradhapura), and the Maldives. He reorganized provincial administration and conducted one of India\'s earliest comprehensive land revenue surveys. His crowning achievement is the Brihadeeswarar Temple at Thanjavur — an engineering miracle built entirely of granite, standing 216 feet tall with a single 80-ton capstone at the top, still standing after 1,000 years.',
                death: 'Died in 1014 CE after a magnificent reign that laid the foundation for the Chola golden age. His son Rajendra Chola I succeeded him and would surpass even his father\'s conquests.',
                achievements: ['Built Brihadeeswarar Temple', 'Conquered Sri Lanka & Maldives', 'Created powerful navy', 'Reorganized administration', 'Revenue survey of entire kingdom', 'Patronized Tamil literature'],
                wars: ['Conquest of Pandya kingdom', 'Invasion of Sri Lanka', 'Conquest of Maldives', 'War against Chalukyas'],
                conquests: [
                    { title: 'Conquest of Sri Lanka (993 CE)', desc: 'Invaded and conquered northern Sri Lanka (Anuradhapura), renaming it "Mummudi Chola Mandalam." The Sinhalese king was defeated and the sacred Buddhist relics were taken to the Chola capital.' },
                    { title: 'Conquest of Maldives', desc: 'Extended Chola naval power across the Indian Ocean by conquering the Maldive archipelago, securing crucial maritime trade routes.' },
                    { title: 'Defeat of Chera & Pandya kingdoms', desc: 'Systematically defeated the rival Chera (Kerala) and Pandya (Madurai) dynasties, unifying all of South India under Chola rule.' }
                ],
                coins: [
                    { name: 'Madu Kasu / Ceylon-Type Gold & Copper Coins', desc: 'Standardized gold Kahavanu and copper Kasu featuring a standing king holding a lotus and Nagari legend "Raja Raja".' }
                ],
                constructions: [
                    { name: 'Brihadeeswarar Temple (Thanjavur)', desc: 'UNESCO World Heritage monument standing 216 feet tall, built entirely of granite with an 80-ton monolithic stone dome crowning the vimana.' },
                    { name: 'Nagapattinam Chudamani Vihara', desc: 'Patronized the grand Buddhist monastery for the Srivijayan king of Sumatra.' }
                ],
                events: [
                    { year: '985 CE', text: 'Ascended the throne; began military reorganization' },
                    { year: '993 CE', text: 'Conquered northern Sri Lanka; captured the capital Anuradhapura' },
                    { year: '1003-04 CE', text: 'Defeated the Western Chalukyas; conquered the Vengi region' },
                    { year: '1010 CE', text: 'Brihadeeswarar Temple completed — the greatest Chola architectural achievement' },
                    { year: '1014 CE', text: 'Death of Raja Raja I; son Rajendra I succeeds' }
                ]
            },
            {
                name: 'Rajendra Chola I', period: '1014–1044 CE', title: 'Gangaikonda Cholan (Conqueror of the Ganges)',
                coronation: 'Succeeded his father Raja Raja I in 1014 CE. He had already proven himself as a capable military commander during his father\'s reign. He would become the most expansionist Chola emperor.',
                bio: 'Son of Raja Raja, he launched the most ambitious naval expedition in Indian history — sending a massive fleet across the Indian Ocean to attack the Srivijaya Empire in Southeast Asia (Sumatra, Malay Peninsula). This was the only Indian overseas naval conquest in history. He also marched north to the Ganges, defeating the Pala king of Bengal. He built the new capital Gangaikonda Cholapuram ("City of the Conqueror of the Ganges") with a grand temple rivaling his father\'s.',
                death: 'Died in 1044 CE after 30 years of rule that made the Chola Empire the most powerful state between the Middle East and China. His son Rajadhiraja I succeeded him.',
                achievements: ['Naval expedition to Southeast Asia', 'Defeated Srivijaya Empire', 'March to the Ganges', 'Built Gangaikonda Cholapuram', 'Expanded Chola influence to Burma, Malay, Sumatra'],
                wars: ['Srivijaya naval expedition (1025 CE)', 'Northern campaign to Ganges', 'Campaigns in Sri Lanka'],
                conquests: [
                    { title: 'Srivijaya Naval Expedition (1025 CE)', desc: 'Launched the only Indian overseas naval conquest in history. A massive Chola fleet attacked the Srivijaya Empire across modern Malaysia, Indonesia, and Sumatra. Key ports and kingdoms including Kadaram (Kedah), Srivijaya, and Pannai were conquered, securing Chola dominance over Indian Ocean trade routes.' },
                    { title: 'March to the Ganges (1022-23 CE)', desc: 'Led a massive army northward, defeating the Pala dynasty of Bengal and reaching the banks of the Ganges. He carried back water from the Ganges to his new capital, earning the title "Gangaikonda Cholan."' },
                    { title: 'Complete Conquest of Sri Lanka', desc: 'Completed his father\'s conquest of Sri Lanka, extending Chola control over the entire island.' }
                ],
                coins: [
                    { name: 'Gangaikonda Chola Gold & Silver Coin', desc: 'Celebratory coinage showing the Chola tiger seated beside two Pandya fish and the Chera bow with Nagari legend "Sri Rajendrah".' }
                ],
                constructions: [
                    { name: 'Brihadisvara Temple at Gangaikonda Cholapuram', desc: 'Architectural masterpiece with feminine curving contours, built in his new victory capital.' },
                    { name: 'Cholagangam (Solagangam) Reservoir Lake', desc: 'Constructed a vast 16-mile-long irrigation reservoir known as the "liquid pillar of victory".' }
                ],
                events: [
                    { year: '1014 CE', text: 'Succeeded Raja Raja I; continued aggressive expansion' },
                    { year: '1017 CE', text: 'Complete conquest of Sri Lanka — entire island came under Chola control' },
                    { year: '1022 CE', text: 'Ganges Expedition — marched north, defeated Pala dynasty, reached the sacred Ganges' },
                    { year: '1025 CE', text: 'Srivijaya Naval Expedition — the greatest naval campaign in Indian history' },
                    { year: '1029 CE', text: 'Built Gangaikonda Cholapuram as new capital with magnificent temple' },
                    { year: '1044 CE', text: 'Death of Rajendra I; the Chola Empire at its absolute zenith' }
                ]
            },
            {
                name: 'Kulottunga Chola I', period: '1070–1120 CE', title: 'Restorer of Chola Power',
                coronation: 'Came to the throne in 1070 from the Chalukya-Chola lineage (his mother was a Chola princess). He united the Eastern Chalukya and Chola thrones, restoring Chola power after a period of succession disputes.',
                bio: 'Restored Chola power after a period of weakness. He abolished tolls on trade, earning immense popularity — celebrated in the Tamil poem Kalingattuparani. He sent embassies to Song Dynasty China (1077 CE) and maintained the Chola maritime trading network across the Indian Ocean. He patronized Tamil literature extensively.',
                death: 'Died around 1120 CE after a 50-year reign — one of the longest in Chola history. The Chola Empire remained stable under his successors for another century.',
                achievements: ['Abolished trade tolls', 'Sent embassy to Song Dynasty China', 'Stabilized administration', 'Patronized Tamil literature'],
                wars: ['Reconquest of Vengi', 'Campaigns against Chalukyas'],
                conquests: [],
                coins: [
                    { name: 'Sungam Thavirthan Chola Coins', desc: 'Coins struck commemorating his famous decree abolishing transit customs tolls across the empire.' }
                ],
                constructions: [
                    { name: 'Chidambaram Nataraja Temple Additions', desc: 'Substantial structural additions, gopurams, and golden roof renovations at the cosmic dancer shrine.' }
                ],
                events: [
                    { year: '1070 CE', text: 'Ascended the throne; united Eastern Chalukya and Chola thrones' },
                    { year: '1077 CE', text: 'Sent embassy to Song Dynasty China; maintained international trade network' },
                    { year: 'c. 1080 CE', text: 'Abolished trade tolls — celebrated in Kalingattuparani poem' },
                    { year: '1118 CE', text: 'Reconquered Vengi (Andhra region) from Chalukya control' },
                    { year: 'c. 1120 CE', text: 'Death after 50-year reign; dynasty continued for another 160 years' }
                ]
            },
            {
                name: 'Rajendra Chola III', period: '1246–1279 CE', title: 'Last Chola Emperor',
                coronation: 'The last ruler of the once-mighty Chola dynasty, ascending the throne during a period of terminal decline as the Pandya and Hoysala empires encroached on Chola territory from all sides.',
                bio: 'The final Chola emperor who witnessed the end of a dynasty that had ruled for over 400 years. Faced with the resurgent Pandya power under Maravarman Kulasekara Pandyan I and the rise of the Hoysalas, his diminished kingdom was gradually absorbed. The fall of the Cholas ended one of the most glorious chapters in South Indian and maritime history.',
                death: 'Defeated by the Pandya king Maravarman Kulasekara Pandyan I in 1279 CE. The Chola kingdom was absorbed into the Pandya Empire, ending over four centuries of Chola imperial rule.',
                achievements: [],
                wars: ['Defeated by Pandyas (1279 CE)'],
                conquests: [],
                coins: [
                    { name: 'Late Chola Copper Kasu', desc: 'Debased copper coins indicating economic strain during the final Pandya encirclement.' }
                ],
                constructions: [],
                events: [
                    { year: '1246 CE', text: 'Last Chola emperor ascended the throne amid terminal decline' },
                    { year: 'c. 1260-70s', text: 'Gradual loss of territory to Pandyas and Hoysalas' },
                    { year: '1279 CE', text: 'Defeated by Pandya king — end of 400+ years of Chola imperial rule' }
                ]
            },
        ]
    },

    'delhi-sultanate': {
        id: 'delhi-sultanate', name: 'Delhi Sultanate', era: 'medieval',
        period: '1206 CE – 1526 CE', color: '#84CC16',
        founded: 'Qutb ud-Din Aibak', capital: 'Delhi',
        overview: 'The Delhi Sultanate was the first major Islamic empire in India. Five dynasties ruled: Mamluk (Slave), Khalji, Tughlaq, Sayyid, and Lodi. It transformed Indian architecture (Indo-Islamic style), introduced new administrative systems, repelled Mongol invasions, and created a syncretic Indo-Islamic culture.',
        legacy: ['Qutub Minar & Indo-Islamic architecture', 'Repelled Mongol invasions', 'Introduction of Iqta system', 'Persian as court language', 'Foundation for Mughal Empire', 'Cultural synthesis'],
        decline: 'The Lodi dynasty, the last Sultanate dynasty, was weakened by Afghan infighting. Ibrahim Lodi was defeated by Babur at the First Battle of Panipat (1526), ending the Sultanate and founding the Mughal Empire.',
        rulers: [
            {
                name: 'Qutb ud-Din Aibak', period: '1206–1210 CE', title: 'Founder — Mamluk Dynasty',
                coronation: 'A Turkish Mamluk (slave) purchased by Muhammad of Ghor, who rose through military ranks to become the most trusted general. When Muhammad of Ghor was assassinated in 1206, Aibak proclaimed himself Sultan of Delhi at Lahore, founding the Mamluk (Slave) dynasty and the Delhi Sultanate itself.',
                bio: 'A Turkish slave who rose to become Sultan of Delhi after Muhammad of Ghor\'s death. He began construction of the Qutub Minar (the world\'s tallest brick minaret at 72.5 meters) and the Quwwat-ul-Islam ("Might of Islam") mosque — the first mosque built in Delhi. Known for his extraordinary generosity, he was called "Lakh Bakhsh" (Giver of Lakhs — one who gives hundreds of thousands).',
                death: 'Died in November 1210 from injuries sustained when he fell from his horse while playing polo (chaugan) in Lahore. His son-in-law Iltutmish eventually succeeded him.',
                achievements: ['Founded Delhi Sultanate', 'Began Qutub Minar', 'Built Quwwat-ul-Islam mosque', 'Called "Lakh Bakhsh"'],
                wars: ['Consolidation of Ghurid territories'],
                conquests: [
                    { title: 'Consolidation of North India (1206-1210)', desc: 'Consolidated the territories conquered by Muhammad of Ghor across northern India — Delhi, Kanauj, and the Gangetic plains — into a unified sultanate.' }
                ],
                coins: [
                    { name: 'Dehliwala Billon Coin', desc: 'Bilingual bull-and-horseman billon coin carrying Nagari and Arabic inscriptions from early Delhi mints.' }
                ],
                constructions: [
                    { name: 'Qutub Minar (First Storey & Base)', desc: 'Commenced the iconic 72.5-meter red sandstone victory tower in Delhi.' },
                    { name: 'Quwwat-ul-Islam Mosque', desc: 'Constructed Delhi\'s earliest congregational mosque using intricately carved reused cloister pillars.' },
                    { name: 'Adhai Din Ka Jhonpra', desc: 'Built the historic early mosque and courtyard in Ajmer, Rajasthan.' }
                ],
                events: [
                    { year: '1192', text: 'Muhammad of Ghor defeated Prithviraj Chauhan at Second Battle of Tarain; Aibak led conquest of North India' },
                    { year: '1193', text: 'Began construction of Qutub Minar and Quwwat-ul-Islam mosque in Delhi' },
                    { year: '1206', text: 'Muhammad of Ghor assassinated; Aibak proclaimed Sultan at Lahore' },
                    { year: '1210', text: 'Died from a polo accident in Lahore; eventual succession by Iltutmish' }
                ]
            },
            {
                name: 'Iltutmish', period: '1211–1236 CE', title: 'True Founder of Delhi Sultanate',
                coronation: 'A slave of Aibak who married his daughter and rose to become governor of Badaun. After Aibak\'s death and the removal of the incompetent Aram Shah, Iltutmish was proclaimed Sultan in 1211. He\'s considered the true founder because he made the Sultanate a truly independent and stable state.',
                bio: 'Consolidated the Sultanate, making it truly independent from the Ghurid homeland. He completed the Qutub Minar, introduced the silver tanka and copper jital coins (standardizing Indian currency), and organized the Iqta (land grant) system of provincial administration. He received investiture (recognition) from the Abbasid Caliph in Baghdad, legitimizing Delhi\'s position in the Islamic world. When the Mongols under Genghis Khan reached the Indus pursuing Jalal ud-Din Khwarezm Shah, Iltutmish wisely refused asylum to Jalal ud-Din, avoiding a Mongol invasion.',
                death: 'Died in 1236. In a remarkable decision, he nominated his daughter Razia over his sons as his successor, saying she was more capable than all her brothers — one of the most progressive acts by any medieval ruler.',
                achievements: ['Completed Qutub Minar', 'Introduced tanka & jital coins', 'Iqta system of administration', 'Received investiture from Abbasid Caliph', 'Nominated Razia as successor'],
                wars: ['Defended against Mongol threat', 'Conquered Bengal, Sindh, Gwalior'],
                conquests: [
                    { title: 'Ranthambore & Gwalior Conquests', desc: 'Captured key Rajput fortresses including Ranthambore, Gwalior, and Malwa, extending Sultanate control over central India.' },
                    { title: 'Bengal & Bihar', desc: 'Brought the breakaway provinces of Bengal and Bihar back under Delhi\'s control, unifying the Sultanate.' }
                ],
                coins: [
                    { name: 'Silver Tanka (Standard Imperial Currency)', desc: 'Standard 175-grain pure silver Tanka with Arabic legends and Abbasid Caliph acknowledgment, the ancestor of the modern Rupee.' },
                    { name: 'Copper Jital', desc: 'Fractional copper coinage that standardized market transactions across northern India.' }
                ],
                constructions: [
                    { name: 'Completion of Qutub Minar Storeys', desc: 'Added three further storeys to the Qutub Minar with projecting balconies and intricate calligraphy.' },
                    { name: 'Hauz-i-Shamsi Water Reservoir', desc: 'Constructed the vast rainwater harvesting reservoir in Mehrauli to supply Delhi with fresh water.' },
                    { name: 'Sultan Garhi & Tomb of Iltutmish', desc: 'Built the earliest monumental Islamic mausoleums in India featuring corbelled squinches.' }
                ],
                events: [
                    { year: '1211', text: 'Became Sultan after deposing the weak Aram Shah' },
                    { year: '1221', text: 'Avoided Mongol invasion by wisely refusing asylum to Jalal ud-Din Khwarezm Shah' },
                    { year: '1229', text: 'Received investiture from Abbasid Caliph — legitmized the Delhi Sultanate' },
                    { year: '1231', text: 'Completed the Qutub Minar; conquered Gwalior Fort' },
                    { year: '1236', text: 'Died; nominated daughter Razia as successor over all his sons' }
                ]
            },
            {
                name: 'Razia Sultan', period: '1236–1240 CE', title: 'First Female Muslim Ruler in India',
                coronation: 'Though Iltutmish nominated her, the nobles first placed her brother Rukn ud-Din Firuz on the throne. When Firuz proved incompetent and his mother Shah Turkaan became tyrannical, the people of Delhi revolted. Razia led the rebellion from the mosque steps, and the nobles deposed Firuz and crowned Razia Sultan in 1236.',
                bio: 'The first and only female ruler of the Delhi Sultanate. She was a remarkable woman who refused the veil (pardah), held open court, rode elephants into battle, and dispensed justice personally. She appointed Jamal ud-Din Yaqut, an Abyssinian slave, as master of the royal horses — which angered the Turkish nobles who saw their privileges threatened. The Turkish nobility, who could not tolerate being ruled by a woman, conspired against her.',
                death: 'The Turkish nobles revolted. In 1240, she married Altunia, a rebel governor, to secure his alliance. But they were defeated in battle. Razia and Altunia were killed on October 14, 1240 while fleeing. Her tomb in Delhi stands as a reminder of one of medieval India\'s most remarkable rulers.',
                achievements: ['First female Muslim ruler in South Asia', 'Held open court without veil', 'Established justice & order'],
                wars: ['Overthrown by Turkish nobles (1240)'],
                conquests: [],
                coins: [
                    { name: 'Silver Tanka of Sultan Jalalat al-Dunya', desc: 'Rare silver coins struck in Lakhnauti and Delhi asserting her sovereign title as "Sultan" (female sovereign without queenly suffix).' }
                ],
                constructions: [
                    { name: 'Razia\'s Tomb Monument', desc: 'Simple historical courtyard tomb complex in Mohalla Bulbuli Khana in Old Delhi.' }
                ],
                events: [
                    { year: '1236', text: 'Crowned after a popular revolt; became first female Muslim ruler in India' },
                    { year: '1237-39', text: 'Ruled effectively, holding open court and dispensing justice personally' },
                    { year: '1240', text: 'Overthrown by Turkish nobles; killed while fleeing after defeat in battle' }
                ]
            },
            {
                name: 'Balban', period: '1266–1287 CE', title: 'Iron & Blood',
                coronation: 'A slave who rose through the ranks to become one of the Chahalgani (Group of Forty — the powerful Turkish slave-nobles). He served as the power behind the throne for 20 years before formally ascending as Sultan in 1266.',
                bio: 'Ruled with an iron fist, restoring order through his "Blood and Iron" policy. He systematically destroyed the power of the rebellious Chahalgani (Forty) nobles, established an extensive spy network (Barid system), and maintained strict court discipline — introducing elaborate Persian court ceremonials (sijda and paibos). He successfully defended Delhi against terrifying Mongol raids, maintaining frontier garrisons along the northwest.',
                death: 'Died in 1287, grief-stricken by the death of his beloved son Prince Muhammad (killed fighting the Mongols on the frontier). His death led to the collapse of the Mamluk dynasty — his grandson Kaiqubad was the last Mamluk Sultan, overthrown by the Khaljis.',
                achievements: ['"Blood and Iron" policy', 'Destroyed the Chahalgani (Forty)', 'Established military vigilance', 'Spy network (Barid system)'],
                wars: ['Repelled Mongol raids', 'Suppressed Mewati revolts'],
                conquests: [],
                coins: [
                    { name: 'Silver Tanka of Ghiyasuddin Balban', desc: 'Heavy silver coinage inscribed with "Al-Sultan Al-Azam Ghiyas al-Dunya wal-Din".' }
                ],
                constructions: [
                    { name: 'Tomb of Balban (Mehrauli)', desc: 'Architectural landmark introducing the first true masonry arch and dome in Indian architecture.' },
                    { name: 'Lal Mahal (Red Palace)', desc: 'Red sandstone fortified palace constructed in Delhi.' }
                ],
                events: [
                    { year: '1246-65', text: 'Served as Naib (regent) — the real power behind the throne for 20 years' },
                    { year: '1266', text: 'Formally ascended as Sultan; implemented "Blood and Iron" policy' },
                    { year: '1279', text: 'Crushed the revolt of Tughril in Bengal; had him executed publicly' },
                    { year: '1285', text: 'Son Prince Muhammad killed fighting Mongols — Balban devastated' },
                    { year: '1287', text: 'Died of grief; end of the Mamluk dynasty approaching' }
                ]
            },
            {
                name: 'Alauddin Khalji', period: '1296–1316 CE', title: 'Greatest Khalji Sultan',
                coronation: 'Nephew and son-in-law of Sultan Jalaluddin Khalji, he murdered the old Sultan in 1296 after returning from a wealthy plundering expedition to Devagiri in the Deccan. He used the looted wealth to bribe nobles and the army and seize the throne.',
                bio: 'One of the most powerful Delhi Sultans. He repelled five devastating Mongol invasions (1299-1306) that could have destroyed Indian civilization — his general Zafar Khan became a national hero in the process. He conquered Gujarat, Rajasthan (including the famous Siege of Chittor), Malwa, and sent Malik Kafur on sweeping Deccan campaigns that reached as far as Madurai. His revolutionary economic reforms — fixed market prices, strict quality controls, an intelligence network to prevent cheating — were centuries ahead of their time.',
                death: 'Fell seriously ill in late 1315. His trusted general Malik Kafur, who had become all-powerful, poisoned the blinded and bed-ridden Sultan and killed his family. Alauddin died on January 4, 1316. Kafur was himself murdered by loyalist soldiers days later.',
                achievements: ['Repelled Mongol invasions (5 times)', 'Conquered Gujarat, Rajasthan, Malwa', 'Market price controls', 'Largest standing army of the era', 'Built Alai Darwaza, Siri Fort'],
                wars: ['Mongol defense (1299,1303,1306)', 'Conquest of Gujarat (1299)', 'Siege of Chittor (1303)', 'Deccan campaigns under Malik Kafur'],
                conquests: [
                    { title: 'Repelling the Mongols (1299-1306)', desc: 'Defeated five major Mongol invasions that threatened to destroy India. In 1299, the Mongols reached Delhi itself. His general Zafar Khan fought heroically. The 1303 invasion was the largest — 120,000 Mongols besieged Delhi. Alauddin built Siri Fort for defense and annihilated the Mongol armies.' },
                    { title: 'Siege of Chittor (1303)', desc: 'Captured the legendary Rajput fortress of Chittor after a brutal siege. The Rajput queen Rani Padmini performed jauhar (self-immolation) rather than be captured. This event became one of the most famous episodes in Indian history.' },
                    { title: 'Deccan Campaigns of Malik Kafur (1306-11)', desc: 'His general Malik Kafur swept through the entire Deccan — conquering Devagiri, Warangal (Kakatiya), Hoysala kingdom, and reaching Madurai (Pandya). He brought back legendary amounts of gold, diamonds, and elephants.' }
                ],
                coins: [
                    { name: 'Gold & Silver Tankas ("Sikandar al-Sani")', desc: 'Heavy gold and silver coins bearing his self-assumed imperial title "The Second Alexander" (Sikandar al-Sani).' }
                ],
                constructions: [
                    { name: 'Alai Darwaza Gateway', desc: 'Masterpiece of early Indo-Islamic architecture with horseshoe arches, red sandstone, and marble lattice carvings at Qutub complex.' },
                    { name: 'Siri Fort City', desc: 'Constructed the second historical city of Delhi as a fortified bastion against Mongol sieges.' },
                    { name: 'Hauz Khas (Hauz-i-Alai)', desc: 'Vast 70-acre reservoir built to supply water to the garrison and citizens of Siri.' },
                    { name: 'Alai Minar (Unfinished Colossus)', desc: 'Intended to be twice the height of Qutub Minar; base still stands at Mehrauli.' }
                ],
                events: [
                    { year: '1296', text: 'Murdered his uncle Sultan Jalauddin and seized the throne' },
                    { year: '1297', text: 'Conquered Gujarat; Malik Kafur captured during this campaign' },
                    { year: '1299', text: 'First Mongol invasion repelled; Zafar Khan killed heroically fighting' },
                    { year: '1303', text: 'Siege of Chittor — Rani Padmini\'s jauhar; largest Mongol invasion repelled' },
                    { year: '1306', text: 'Final Mongol defeat; Malik Kafur\'s first Deccan campaign to Devagiri' },
                    { year: '1310', text: 'Malik Kafur reached Madurai — furthest south the Sultanate ever reached' },
                    { year: '1316', text: 'Death of Alauddin; Malik Kafur\'s brief tyranny before assassination' }
                ]
            },
            {
                name: 'Muhammad bin Tughlaq', period: '1325–1351 CE', title: 'Most Controversial Sultan',
                coronation: 'Succeeded his father Ghiyasuddin Tughlaq in 1325 under suspicious circumstances — a pavilion collapsed on the old Sultan during a welcome ceremony. Many historians believe Muhammad engineered the "accident." He was one of the most educated and intellectual rulers to sit on any medieval throne.',
                bio: 'The most ambitious and controversial Sultan. His brilliant but impractical schemes earned him the nickname "the wisest fool." He shifted the entire population of Delhi to Daulatabad (1327) — a 1,500 km march that caused massive suffering and was reversed. He introduced token copper currency (like modern paper money) but without proper controls, leading to rampant counterfeiting. He planned a Khurasan expedition (Central Asian conquest) with 370,000 troops that was abandoned. Ibn Battuta, the great Moroccan traveler, served as a judge in his court.',
                death: 'Died on March 20, 1351 while pursuing rebels in Sindh (modern Pakistan). He is said to have declared on his deathbed: "I am free of my people and they are free of me." The Sultanate had fragmented badly during his reign — Bengal, Deccan (Bahmani), and Vijayanagara all broke away.',
                achievements: ['Greatest territorial extent of Sultanate', 'Introduced token currency (innovative but failed)', 'Shifted capital to Daulatabad', 'Ibn Battuta visited', 'Intellectual and scholar'],
                wars: ['Southern campaigns', 'Failed Khurasan expedition'],
                conquests: [
                    { title: 'Transfer of Capital to Daulatabad (1327)', desc: 'Ordered the entire population of Delhi to march 1,500 km to Daulatabad in the Deccan. The forced march caused immense suffering. Though strategically sound (closer to the Deccan), poor execution made it a disaster. He later ordered everyone back to Delhi.' },
                    { title: 'Token Currency Experiment', desc: 'Introduced copper token coins equivalent to silver tankas — anticipating modern paper currency by 500 years. But without proper controls, everyone became a counterfeiter. The scheme was withdrawn at enormous cost to the treasury.' }
                ],
                coins: [
                    { name: 'Brass & Copper Token Currency Tankas', desc: 'Pioneering fiat currency coins inscribed "He who obeys the Sultan, obeys the Merciful", intended to circulate at par with silver.' },
                    { name: 'Heavy Gold Dinar (200 grains)', desc: 'Finely minted heavy gold dinars circulating prior to the token currency reform.' }
                ],
                constructions: [
                    { name: 'Adilabad Citadel & Jahanpanah', desc: 'Fortified the fourth city of Delhi (Jahanpanah — "Refuge of the World") connecting Qila Rai Pithora to Siri.' },
                    { name: 'Daulatabad Fortifications', desc: 'Massively reinforced the rock fortress of Devagiri/Daulatabad in Maharashtra.' }
                ],
                events: [
                    { year: '1325', text: 'Succeeded his father under suspicious circumstances; ascended as most educated Sultan' },
                    { year: '1327', text: 'Ordered transfer of capital from Delhi to Daulatabad — caused mass suffering' },
                    { year: '1329-30', text: 'Token currency experiment — innovative but disastrous failure' },
                    { year: '1333', text: 'Ibn Battuta arrived at court; later served as judge and ambassador' },
                    { year: '1334', text: 'Madurai Sultanate broke away; Bengal declared independence' },
                    { year: '1336', text: 'Vijayanagara Empire founded in resistance to Sultanate expansion' },
                    { year: '1347', text: 'Bahmani Sultanate founded — the Deccan permanently lost' },
                    { year: '1351', text: 'Died pursuing rebels in Sindh; Sultanate greatly diminished' }
                ]
            },
            {
                name: 'Firoz Shah Tughlaq', period: '1351–1388 CE', title: 'Welfare Sultan',
                coronation: 'Cousin of Muhammad bin Tughlaq, he was chosen as Sultan by the nobles after Muhammad\'s death in 1351. He reversed his predecessor\'s harsh policies and focused on welfare and construction rather than military conquest.',
                bio: 'A builder and reformer who focused on welfare rather than conquest. He constructed an extensive canal system (the earliest major irrigation in Delhi region), hospitals, and the city of Firozabad (part of modern Delhi, near Firoz Shah Kotla). He established a department of charity (Diwan-i-Khairat) and banned torture. He brought two Ashoka Pillars from Ambala and Meerut to Delhi — though he couldn\'t read the Brahmi script. He built over 300 towns and established fruit gardens across his kingdom.',
                death: 'Died in 1388 at a very old age. His death triggered succession disputes and civil war. Just 10 years later, Timur (Tamerlane) would sack Delhi in 1398, devastating the Sultanate.',
                achievements: ['Built canals & irrigation', 'Founded Firozabad', 'Established hospitals & charity dept', 'Restored Ashoka Pillars to Delhi', '300+ towns built'],
                wars: [],
                conquests: [],
                coins: [
                    { name: 'Billon Shashgani & Hashtgani Coins', desc: 'Introduced fractional currency of 6 jitals (Shashgani) and 8 jitals (Hashtgani) to facilitate petty trade and everyday shopping.' }
                ],
                constructions: [
                    { name: 'Firoz Shah Kotla Citadel', desc: 'Constructed the fifth city of Delhi (Firozabad) with the fortress palace containing the Ashokan pillar atop a pyramidal structure.' },
                    { name: 'Western Yamuna Canal Network', desc: 'Pioneering hydro-engineering project restoring and building hundreds of miles of canals to irrigate Haryana and Delhi.' },
                    { name: 'Hauz Khas Madrasa & College Complex', desc: 'Grand L-shaped Islamic university and collegiate mosque overlooking the Alauddin reservoir.' },
                    { name: 'Restoration of Qutub Minar Top Storeys', desc: 'Repaired the lightning-damaged top of the Qutub Minar, adding the fourth and fifth white marble and red sandstone storeys.' }
                ],
                events: [
                    { year: '1351', text: 'Became Sultan; reversed Muhammad bin Tughlaq\'s harsh policies' },
                    { year: '1354', text: 'Built first major canal system in Delhi region; established hospitals' },
                    { year: '1356', text: 'Brought ancient Ashoka Pillars from Ambala and Meerut to Delhi' },
                    { year: '1370s', text: 'Founded Firozabad; built over 300 towns; established charity department' },
                    { year: '1388', text: 'Death of Firoz Shah; succession disputes weakened the Sultanate' },
                    { year: '1398', text: 'Timur (Tamerlane) sacked Delhi — Sultanate devastated (10 years after Firoz\'s death)' }
                ]
            },
            {
                name: 'Ibrahim Lodi', period: '1517–1526 CE', title: 'Last Sultan of Delhi',
                coronation: 'Succeeded his father Sikandar Lodi in 1517. Unlike his capable predecessors, he was arrogant and alienated the Afghan nobility through his high-handedness and attempts to centralize power.',
                bio: 'The last ruler of the Delhi Sultanate and the Lodi dynasty. He faced constant revolts from powerful Afghan nobles who resented his autocratic ways. Daulat Khan Lodi, the governor of Punjab, and Rana Sanga of Mewar both invited Babur to invade India. On April 21, 1526, Ibrahim faced Babur at the First Battle of Panipat with a massive but unwieldy army of 100,000 men and 1,000 elephants.',
                death: 'Killed on the battlefield at the First Battle of Panipat on April 21, 1526, fighting bravely to the end. His death ended 320 years of the Delhi Sultanate. His tomb stands in Panipat, Haryana. Babur founded the Mughal Empire on the ruins of his kingdom.',
                achievements: [],
                wars: ['First Battle of Panipat (1526) — defeated by Babur'],
                conquests: [],
                coins: [
                    { name: 'Billon Tanka of Ibrahim Lodi', desc: 'Late Sultanate billon coins struck at Delhi, Agra, and Jaunpur mints before the Mughal conquest.' }
                ],
                constructions: [
                    { name: 'Tomb of Ibrahim Lodi (Panipat)', desc: 'Historical memorial marking the site of the decisive battle that founded the Mughal Empire.' }
                ],
                events: [
                    { year: '1517', text: 'Became Sultan; began alienating Afghan nobles with autocratic rule' },
                    { year: '1523-24', text: 'Daulat Khan Lodi and Rana Sanga invited Babur to invade India' },
                    { year: 'April 1526', text: 'First Battle of Panipat — killed in battle against Babur. End of the Delhi Sultanate' }
                ]
            },
        ]
    },

    'vijayanagara': {
        id: 'vijayanagara', name: 'Vijayanagara Empire', era: 'medieval',
        period: '1336 CE – 1646 CE', color: '#BEF264',
        founded: 'Harihara I & Bukka Raya I', capital: 'Hampi (Vijayanagara)',
        overview: 'The Vijayanagara Empire was the last great Hindu empire in South India, established as a bulwark against Islamic expansion. At its height, it was one of the richest kingdoms in the world. Hampi, its capital, dazzled European visitors with its grandeur. The empire preserved and patronized Hindu religion, art, architecture, and literature.',
        legacy: ['Last great Hindu empire', 'Hampi ruins — UNESCO World Heritage', 'Patronized Telugu, Kannada, Tamil literature', 'Magnificent temple architecture', 'International trade with Portuguese, Arabs', 'Sophisticated irrigation & water management'],
        decline: 'Decisively defeated at the Battle of Talikota (1565) by a coalition of Deccan Sultanates. Hampi was sacked and destroyed. The empire lingered on in diminished form until 1646.',
        rulers: [
            {
                name: 'Harihara I', period: '1336–1356 CE', title: 'Co-Founder',
                coronation: 'Along with his brother Bukka, founded the Vijayanagara Empire in 1336 under the spiritual guidance of the sage Vidyaranya (some traditions say they were former Hindu princes who had been forcibly converted to Islam by the Delhi Sultanate and then reconverted by Vidyaranya). They chose the strategic location of Hampi on the south bank of the Tungabhadra River.',
                bio: 'Co-founder of the Vijayanagara Empire who established it as a Hindu bulwark against the expanding Delhi Sultanate and Bahmani Sultanate. He built the initial fortifications at Hampi and established the Sangama dynasty. The city he founded would grow to become one of the largest and richest in the world.',
                death: 'Died in 1356. His brother Bukka Raya I succeeded him and continued the empire\'s expansion.',
                achievements: ['Co-founded Vijayanagara', 'Established capital at Hampi', 'Unified Hindu resistance in South India'],
                wars: ['Wars against Bahmani Sultanate'],
                conquests: [
                    { title: 'Foundation of Vijayanagara (1336)', desc: 'Established the city of Vijayanagara (City of Victory) at Hampi on the Tungabhadra, creating a new Hindu kingdom to resist Islamic expansion into South India. The strategic location offered natural defenses with hills and the river.' }
                ],
                coins: [
                    { name: 'Gold Varaha with Hanuman Motif', desc: 'Early Vijayanagara gold coin depicting Lord Hanuman in a fighting posture with tail arched over his head.' }
                ],
                constructions: [
                    { name: 'Original Hampi Fortifications & Virupaksha Shrine', desc: 'Laid the initial stone ramparts and fortified royal enclosure around the sacred Virupaksha temple on the Tungabhadra.' }
                ],
                events: [
                    { year: '1336', text: 'Founded Vijayanagara Empire with brother Bukka under guidance of sage Vidyaranya' },
                    { year: '1340s', text: 'Built initial fortifications and temples at Hampi; established administration' },
                    { year: '1346', text: 'First wars against the newly-formed Bahmani Sultanate' },
                    { year: '1356', text: 'Death of Harihara I; brother Bukka Raya I succeeds' }
                ]
            },
            {
                name: 'Bukka Raya I', period: '1356–1377 CE', title: 'Co-Founder & Consolidator',
                coronation: 'Succeeded his brother Harihara I in 1356. He took the empire from a fledgling kingdom to a major South Indian power through military expansion and diplomatic outreach.',
                bio: 'Consolidated the empire and dramatically expanded its territories. He conquered the Madurai Sultanate, extending Vijayanagara control over all of South India. He sent an embassy to the Ming Dynasty of China (1374) and patronized the great Vaishnavite scholar Vedanta Desika. He was a capable administrator who established efficient governance structures and promoted religious tolerance.',
                death: 'Died in 1377 after establishing Vijayanagara as the undisputed major power in South India. His son Harihara II succeeded him.',
                achievements: ['Consolidated the empire', 'Embassy to Ming Dynasty China', 'Patronized scholars', 'Extended territory to the coast'],
                wars: ['Wars with Bahmani Sultanate', 'Conquest of Madurai'],
                conquests: [
                    { title: 'Conquest of Madurai Sultanate (1370)', desc: 'Conquered the Madurai Sultanate, eliminating the last Muslim state in far South India and unifying the Tamil region under Hindu rule once again.' },
                    { title: 'Coastal Expansion', desc: 'Extended Vijayanagara control to both the Malabar (western) and Coromandel (eastern) coasts, securing vital maritime trade routes.' }
                ],
                coins: [
                    { name: 'Gold Gadyana / Varaha', desc: 'Standard gold currency with Kannada and Nagari legends depicting divine avatars.' }
                ],
                constructions: [
                    { name: 'Vidyashankara Temple at Sringeri', desc: 'Extraordinary temple combining Dravidian, Hoysala, and Vijayanagara architectural styles with 12 zodiac pillars.' },
                    { name: 'Tungabhadra Hydraulic System & Anicuts', desc: 'Built stone irrigation weirs (anicuts) diverting river waters into vast canal networks across the rocky capital.' }
                ],
                events: [
                    { year: '1356', text: 'Succeeded Harihara I; continued building the empire' },
                    { year: '1370', text: 'Conquered Madurai Sultanate — unified South India under Hindu rule' },
                    { year: '1374', text: 'Sent embassy to Ming Dynasty China; established international trade links' },
                    { year: '1377', text: 'Death of Bukka Raya I; empire well-established as major South Indian power' }
                ]
            },
            {
                name: 'Deva Raya II', period: '1424–1446 CE', title: 'Greatest Sangama Ruler',
                coronation: 'Ascended the throne in 1424, inheriting an empire that had been weakened by defeats at the hands of the Bahmani Sultanate. He immediately began military reforms to address Vijayanagara\'s cavalry weakness.',
                bio: 'The most capable ruler of the Sangama dynasty. Recognizing that Vijayanagara\'s cavalry was inferior to the Bahmani Sultanate\'s, he made the revolutionary decision to recruit Muslim cavalry and archers into his army — a pragmatic move for a Hindu emperor. The Persian ambassador Abdur Razzaq visited in 1443 and left a vivid description of Hampi\'s magnificence, calling it "such that the eye has not seen nor the ear heard of any place resembling it upon the whole earth."',
                death: 'Died around 1446 CE. After his death, the Sangama dynasty weakened rapidly, eventually being overthrown by the Saluva dynasty.',
                achievements: ['Strongest Sangama ruler', 'Inducted Muslim soldiers', 'Abdur Razzaq\'s lavish descriptions', 'Patronized Kannada literature'],
                wars: ['Wars against Bahmani & Kondavidu'],
                conquests: [
                    { title: 'Military Reforms', desc: 'Inducted Muslim horsemen and Turkish archers into the Vijayanagara army, dramatically improving its cavalry strength. This revolutionary decision allowed the empire to match the Bahmani Sultanate militarily.' }
                ],
                coins: [
                    { name: 'Gold Varaha with Shiva-Parvati Motif', desc: 'Gold coin depicting Lord Shiva and Goddess Parvati seated in divine communion with the trident and deer.' }
                ],
                constructions: [
                    { name: 'Elephant Stables (Gajashala) at Hampi', desc: 'Monumental 11-domed royal stable with alternating Islamic and Hindu arches demonstrating syncretic imperial grandeur.' },
                    { name: 'Hazara Rama Temple Inner Enclosure', desc: 'Built the core inner shrine of the royal temple with bas-relief friezes depicting the entire Ramayana narrative.' }
                ],
                events: [
                    { year: '1424', text: 'Ascended the throne; began military reforms to strengthen cavalry' },
                    { year: '1430s', text: 'Recruited Muslim cavalry and archers; fought Bahmani Sultanate to a standstill' },
                    { year: '1443', text: 'Persian ambassador Abdur Razzaq visited and praised Hampi\'s magnificence' },
                    { year: '1446', text: 'Death of Deva Raya II; Sangama dynasty begins to decline' }
                ]
            },
            {
                name: 'Krishnadevaraya', period: '1509–1529 CE', title: 'Greatest Vijayanagara Emperor',
                coronation: 'Ascended the throne in 1509 after the death of his brother Vira Narasimha of the Tuluva dynasty. He inherited a strong empire and would make it the most powerful state in all of India during his reign.',
                bio: 'The greatest emperor of Vijayanagara and one of South India\'s most celebrated rulers in all of Indian history. A warrior-king and scholar who never lost a battle. He wrote the Telugu literary classic Amuktamalyada. He assembled the legendary Ashtadiggajas — eight great poets at his court (including Allasani Peddana). Portuguese visitor Domingo Paes called Hampi "as large as Rome" and praised Krishnadevaraya\'s court as the most splendid he had ever seen. He built magnificent temples including the Hazara Rama and Vitthala temple complexes at Hampi.',
                death: 'Died in 1529 under tragic circumstances — his designated heir, his young son, was poisoned (possibly by his son-in-law Rama Raya). Grief-stricken and ill, Krishnadevaraya died soon after. His death marked the beginning of Vijayanagara\'s decline.',
                achievements: ['Never lost a battle', 'Wrote Amuktamalyada (Telugu)', 'Ashtadiggajas — eight great poets at court', 'Built Hazara Rama & Vitthala temples', 'Domingo Paes praised his court', 'Extended empire to include Odisha'],
                wars: ['Defeated Bijapur Sultanate', 'Conquered Raichur (1520)', 'War against Gajapati of Odisha'],
                conquests: [
                    { title: 'Conquest of Raichur (1520)', desc: 'Captured the strategic fortress of Raichur from the Bijapur Sultanate in a decisive battle. This was one of the most important military victories in South Indian history, securing Vijayanagara\'s northern frontier.' },
                    { title: 'Conquest of Odisha (Gajapati campaigns)', desc: 'Defeated the Gajapati kingdom of Odisha, extending Vijayanagara control up the eastern coast. He married the Gajapati princess Tukkadevi as part of the peace settlement.' },
                    { title: 'Defeat of Bijapur Sultanate', desc: 'Repeatedly defeated the Bijapur Sultanate, establishing Vijayanagara\'s military supremacy over the Deccan Sultanates.' }
                ],
                coins: [
                    { name: 'Gold Durgi Pagoda / Balakrishna Varaha', desc: 'Famous gold coin depicting the infant Lord Krishna (Balakrishna) seated with butter ball, with Nagari legend "Sri Pratapa Krishna Raya".' },
                    { name: 'Gold Half-Varaha (Pratapa Krishna)', desc: 'Widely circulated gold coin celebrating his victories across the Deccan and Odisha.' }
                ],
                constructions: [
                    { name: 'Vitthala Temple & Stone Chariot (Hampi)', desc: 'Architectural wonder featuring 56 musical pillars that resonate musical notes and the world-famous monolithic stone chariot shrine.' },
                    { name: 'Hazara Rama Temple & Outer Walls', desc: 'Lavishly sculpted royal chapel with continuous bas-relief friezes depicting the epic Ramayana.' },
                    { name: '100-Pillared Hall at Virupaksha Temple', desc: 'Magnificent festive pavilion and towering eastern Rayagopuram gateway at the ancient Virupaksha complex.' },
                    { name: 'Anantapur Rayagopurams & Tirupati Shrines', desc: 'Commissioned soaring entrance gopurams across South India, including golden kalasham dedications at Tirupati.' }
                ],
                events: [
                    { year: '1509', text: 'Ascended the throne; began era of unprecedented military and cultural glory' },
                    { year: '1510', text: 'Portuguese captured Goa nearby; Krishnadevaraya established trade relations' },
                    { year: '1512-14', text: 'Campaigns against Bijapur and Bidar Sultanates — all successful' },
                    { year: '1516', text: 'Domingo Paes visited and called Hampi "as large as Rome"' },
                    { year: '1520', text: 'Conquest of Raichur — greatest military victory; extended northern frontier' },
                    { year: '1523', text: 'Defeated Gajapati of Odisha; married Gajapati princess' },
                    { year: '1529', text: 'Death of Krishnadevaraya; his heir was poisoned, empire began to decline' }
                ]
            },
            {
                name: 'Rama Raya', period: '1542–1565 CE', title: 'De facto ruler — Last Powerful Leader',
                coronation: 'Son-in-law of Krishnadevaraya who became regent and de facto ruler after a period of weak successors. He ruled through puppet emperors and dominated South Indian politics through cunning diplomacy.',
                bio: 'Regent and de facto ruler who skillfully played the Deccan Sultanates against each other for over 20 years — allying with Bijapur against Golconda, then switching sides, manipulating rivalries. But this cynical diplomacy eventually backfired disastrously when the five Deccan Sultanates united against him. At the Battle of Talikota (Rakshasa-Tangadi) on January 23, 1565, the combined Sultanate armies annihilated the Vijayanagara forces. Hampi — one of the world\'s greatest cities — was sacked, looted, and systematically destroyed over months.',
                death: 'Killed during the Battle of Talikota on January 23, 1565. He was captured alive on the battlefield by the Sultanate forces and beheaded. His severed head was reportedly stuffed with straw and displayed. The sack of Hampi that followed destroyed one of the world\'s most magnificent cities — the ruins remain a UNESCO World Heritage site today.',
                achievements: ['Diplomatic manipulation of Sultanates', 'Maintained Vijayanagara power'],
                wars: ['Battle of Talikota (1565) — catastrophic defeat'],
                conquests: [],
                coins: [
                    { name: 'Late Vijayanagara Gold Varaha', desc: 'Gold coins bearing Lakshmi-Narayana and Garuda deities.' }
                ],
                constructions: [
                    { name: 'Mahanavami Dibba Expansions', desc: 'Expanded the multi-tiered royal victory throne platform used during the grand Navaratri festival.' },
                    { name: 'Queen\'s Bath & Zenana Enclosures', desc: 'Built elaborate pleasure pavilions and lotus-shaped water channels.' }
                ],
                events: [
                    { year: '1542', text: 'Became de facto ruler; controlled puppet emperors' },
                    { year: '1543-64', text: 'Played Deccan Sultanates against each other through shifting alliances' },
                    { year: 'Jan 23, 1565', text: 'Battle of Talikota — Vijayanagara army destroyed; Rama Raya captured and beheaded' },
                    { year: '1565', text: 'Hampi sacked and destroyed over months — one of history\'s greatest losses of heritage' }
                ]
            },
        ]
    },

    // ════════ MODERN ════════
    'mughal': {
        id: 'mughal', name: 'Mughal Empire', era: 'modern',
        period: '1526 CE – 1857 CE', color: '#A855F7',
        founded: 'Babur', capital: 'Agra / Delhi',
        overview: 'The Mughal Empire was one of the greatest empires in world history. At its peak under Aurangzeb, it controlled nearly the entire Indian subcontinent and produced about 25% of world GDP. The Mughals created extraordinary architecture (Taj Mahal, Red Fort), refined art, sophisticated administration (Mansabdari), and a syncretic Indo-Islamic culture.',
        legacy: ['Taj Mahal — Wonder of the World', 'Red Fort, Jama Masjid, Fatehpur Sikri', 'Mughal miniature painting tradition', 'Mansabdari administrative system', 'Persian as court language', 'Syncretic Indo-Islamic culture', 'Garden design (Char Bagh)'],
        decline: 'After Aurangzeb\'s death (1707), the empire rapidly fragmented. The Maratha, Sikh, and regional powers rose. Later Mughals became British puppets. The last emperor, Bahadur Shah Zafar, was exiled after the 1857 Revolt.',
        rulers: [
            {
                name: 'Babur', period: '1526–1530 CE', title: 'Founder — First Mughal Emperor',
                coronation: 'A prince of the Timurid dynasty from Fergana (modern Uzbekistan), Babur lost his ancestral lands to the Uzbeks. He captured Kabul in 1504 and turned his attention to India. Invited by Daulat Khan Lodi and Rana Sanga to oppose Ibrahim Lodi, he invaded India and won the First Battle of Panipat on April 21, 1526, using innovative gunpowder tactics (tulughma flanking and matchlocks behind carts) against Ibrahim\'s massive but slow army.',
                bio: 'A descendant of Timur (through his father) and Genghis Khan (through his mother). A military genius, poet, and keen observer of nature. Despite repeated setbacks, he never gave up. His autobiography, the Baburnama, written in Chagatai Turkish, is one of the finest autobiographies in world literature — detailing battles, the flora and fauna of India, and his personal reflections with remarkable honesty.',
                death: 'Died on December 26, 1530 at age 47 in Agra. According to legend, when his son Humayun fell severely ill, Babur walked around his sickbed praying that the illness be transferred to himself. Humayun recovered, but Babur fell ill and died. He was initially buried in Agra but later, per his wish, reburied in Kabul in the beautiful Bagh-e-Babur garden.',
                achievements: ['Founded Mughal Empire', 'First Battle of Panipat (1526)', 'Introduced gunpowder warfare', 'Wrote Baburnama autobiography', 'Established Mughal gardens'],
                wars: ['Battle of Panipat (1526)', 'Battle of Khanwa vs Rana Sanga (1527)', 'Battle of Chanderi (1528)'],
                conquests: [
                    { title: 'First Battle of Panipat (1526)', desc: 'Defeated Ibrahim Lodi\'s army of 100,000 with only 12,000 men using innovative gunpowder tactics — matching artillery and matchlocks with mobile cavalry flanking (tulughma). Ibrahim was killed on the battlefield.' },
                    { title: 'Battle of Khanwa (1527)', desc: 'Defeated the powerful Rajput confederacy under Rana Sanga of Mewar. Before the battle, Babur declared jihad and smashed his wine cups to inspire his men. This was more strategic than Panipat as it confirmed Mughal dominance over North India.' },
                    { title: 'Battle of Chanderi (1528)', desc: 'Defeated Medini Rai, securing Mughal control over central India. The Rajput defenders performed jauhar (mass self-immolation) rather than surrender.' }
                ],
                coins: [
                    { name: 'Silver Shahrukhi Coin', desc: 'Timurid-style thin broad silver Shahrukhi coins inscribed with the Kalima and names of the four Rashidun caliphs, minted at Agra and Lahore.' }
                ],
                constructions: [
                    { name: 'Aram Bagh (Ram Bagh, Agra)', desc: 'First formal Mughal Persian-style four-fold garden (Charbagh) in India, designed along the Yamuna river.' },
                    { name: 'Kabuli Bagh Mosque (Panipat)', desc: 'Built in 1527 to commemorate his victory over Ibrahim Lodi at the First Battle of Panipat.' }
                ],
                events: [
                    { year: '1504', text: 'Captured Kabul after years of wandering, establishing a base for future campaigns' },
                    { year: 'April 1526', text: 'First Battle of Panipat — defeated Ibrahim Lodi and founded the Mughal Empire' },
                    { year: 'March 1527', text: 'Battle of Khanwa — defeated Rana Sanga of Mewar, securing Mughal dominance' },
                    { year: '1528', text: 'Battle of Chanderi; Conquest of Bihar and eastern territories' },
                    { year: '1530', text: 'Death of Babur in Agra; Humayun succeeds as second Mughal Emperor' }
                ]
            },
            {
                name: 'Humayun', period: '1530–1540, 1555–1556 CE', title: 'The Restorer',
                coronation: 'Succeeded his father Babur in 1530 at age 22. However, following Babur\'s advice, he divided provinces among his brothers — a fatal mistake. His brother Kamran in Kabul and Hindal and Askari in their provinces undermined his authority throughout his reign.',
                bio: 'Lost the empire to Sher Shah Suri at the Battle of Chausa (1539) and Kanauj (1540). Spent 15 years in exile — wandering through Sindh, Rajputana, and finally finding refuge with the Safavid Shah Tahmasp of Persia. With Persian help, he reconquered Kabul and then India in 1555. His tomb in Delhi, built by his wife Bega Begum, is the first major Mughal mausoleum and a precursor to the Taj Mahal.',
                death: 'Died on January 27, 1556, just months after reconquering Delhi. He slipped and fell down the steep stairs of his library (Sher Mandal in the Purana Qila) while hurrying to answer the call to prayer. He struck his temple and died three days later. Akbar, his 13-year-old son, succeeded him.',
                achievements: ['Recaptured Delhi (1555)', 'Humayun\'s Tomb — precursor to Taj Mahal', 'Introduced Persian cultural influences'],
                wars: ['Lost to Sher Shah Suri (1540)', 'Reconquest of India (1555)'],
                conquests: [
                    { title: 'Reconquest of India (1555)', desc: 'After 15 years in exile, Humayun crossed the Indus with a Safavid-supported army. He recaptured Lahore and then Delhi from the weakened Sur dynasty, restoring Mughal rule.' }
                ],
                coins: [
                    { name: 'Silver Shahrukhi & Gold Mohur', desc: 'Minted in Delhi, Agra, and Lahore carrying his imperial title "Muhammad Humayun Ghazi".' }
                ],
                constructions: [
                    { name: 'Dinpanah Citadel (Purana Qila, Delhi)', desc: 'Founded the inner fortress city of Dinpanah on the ancient mound of Indraprastha on the banks of the Yamuna.' },
                    { name: 'Sher Mandal (Observatory & Library)', desc: 'Octagonal red sandstone pavilion used as royal library and astronomical observatory.' }
                ],
                events: [
                    { year: '1530', text: 'Succeeded Babur; divided empire among brothers per Babur\'s wishes' },
                    { year: '1539', text: 'Lost Battle of Chausa to Sher Shah Suri; nearly drowned crossing the Ganges' },
                    { year: '1540', text: 'Decisively defeated at Battle of Kanauj; became a fugitive wandering through India' },
                    { year: '1542', text: 'Son Akbar born in Sindh during exile; Humayun fled to Persia' },
                    { year: '1544', text: 'Received asylum from Safavid Shah Tahmasp of Persia (converted to Shia briefly)' },
                    { year: '1555', text: 'Reconquered Delhi and Agra from the Sur dynasty' },
                    { year: 'Jan 1556', text: 'Died from a fall down his library stairs; 13-year-old Akbar became emperor' }
                ]
            },
            {
                name: 'Akbar', period: '1556–1605 CE', title: 'Akbar the Great — Greatest Mughal',
                coronation: 'Crowned emperor at age 13 in the garden of Kalanaur, Punjab, on February 14, 1556 — just weeks after his father\'s accidental death. His regent Bairam Khan governed initially and won the crucial Second Battle of Panipat against Hemu (November 1556), securing the empire. Akbar dismissed Bairam Khan in 1560 and took full control.',
                bio: 'The greatest Mughal emperor and arguably India\'s greatest ruler. Despite being illiterate (or possibly dyslexic), he had a brilliant intellect. His policy of Sulh-i-Kul (universal peace) created religious harmony. He married Rajput princesses (including Mariam-uz-Zamani), abolished the Jizya tax on Hindus, and created the Mansabdari administrative system. His court of Navratnas included Birbal (wit), Tansen (music), Todar Mal (finance), and Abul Fazl (chronicler). He built the magnificent Fatehpur Sikri and attempted the syncretic Din-i-Ilahi faith.',
                death: 'Died on October 27, 1605 at age 63, likely of dysentery, at Agra. In his final years, he was grieved by the rebellion of his son Salim (Jahangir) and the murder of his friend Abul Fazl at Salim\'s orders. He was buried at Sikandra, Agra.',
                achievements: ['Sulh-i-Kul — religious tolerance', 'Mansabdari administrative system', 'Todar Mal\'s revenue reforms (Zabti)', 'Navratnas — Birbal, Tansen, Todar Mal, Abul Fazl', 'Built Fatehpur Sikri', 'Din-i-Ilahi', 'Abolished Jizya tax', 'Married Rajput princess (Jodha Bai)'],
                wars: ['Second Battle of Panipat (1556)', 'Conquest of Rajput kingdoms', 'Conquest of Gujarat, Bengal, Kashmir, Sindh'],
                conquests: [
                    { title: 'Second Battle of Panipat (1556)', desc: 'Bairam Khan defeated the Hindu king Hemu who had captured Delhi and Agra. Hemu was shot in the eye and captured. This battle secured the Mughal Empire\'s survival.' },
                    { title: 'Conquest of Rajputana', desc: 'Systematically conquered or allied with Rajput kingdoms. Rana Udai Singh\'s Chittor fell after a brutal siege (1568). Most Rajputs became allies through marriage and the Mansabdari system, except Mewar which resisted.' },
                    { title: 'Conquest of Gujarat, Bengal & Kashmir', desc: 'Extended the empire across northern and western India. Gujarat fell in 1573, Bengal in 1576. Kashmir was peacefully annexed in 1586.' }
                ],
                coins: [
                    { name: 'Square Silver Jalali Rupee', desc: 'Standardized pure silver square rupee bearing the Din-i-Ilahi motto "Allahu Akbar Jalla Jalaluhu".' },
                    { name: 'Ilahi Gold Mohur & Mehrabi Coins', desc: 'Distinctive lozenge/arch-shaped gold coins dated by the solar Ilahi era calendar.' }
                ],
                constructions: [
                    { name: 'Fatehpur Sikri Imperial Capital', desc: 'UNESCO World Heritage city of red sandstone with Panch Mahal, Diwan-i-Khas with central lotus pillar, and Jodha Bai\'s Palace.' },
                    { name: 'Buland Darwaza ("Gate of Magnificence")', desc: '54-meter-tall monumental victory arch at Fatehpur Sikri commemorating the conquest of Gujarat, highest gateway in the world.' },
                    { name: 'Agra Fort Red Sandstone Redesign', desc: 'Massive red sandstone fortification enclosing the Jahangiri Mahal and Delhi Gate.' },
                    { name: 'Humayun\'s Tomb (Patronage)', desc: 'Commissioned under his reign by Bega Begum, India\'s first monumental garden tomb and prototype of the Taj Mahal.' },
                    { name: 'Lahore & Allahabad Forts', desc: 'Strategic imperial river fortresses securing the northwest frontier and the Ganga-Yamuna confluence.' }
                ],
                events: [
                    { year: 'Feb 1556', text: 'Crowned at Kalanaur at age 13; Bairam Khan served as regent' },
                    { year: 'Nov 1556', text: 'Second Battle of Panipat — Bairam Khan defeated Hemu, securing the empire' },
                    { year: '1560', text: 'Dismissed Bairam Khan and assumed personal control' },
                    { year: '1562', text: 'Married Rajput princess of Amber (Jodha Bai); abolished pilgrim tax' },
                    { year: '1564', text: 'Abolished Jizya tax on non-Muslims — revolutionary policy of religious equality' },
                    { year: '1568', text: 'Siege of Chittor — 30,000 Rajputs died; Akbar was deeply affected' },
                    { year: '1571', text: 'Built Fatehpur Sikri as new capital; court of Navratnas flourished' },
                    { year: '1575', text: 'Built Ibadat Khana (House of Worship) for interfaith dialogue' },
                    { year: '1582', text: 'Proclaimed Din-i-Ilahi — syncretic faith combining elements from all religions' },
                    { year: '1605', text: 'Death of Akbar; succeeded by his son Jahangir' }
                ]
            },
            {
                name: 'Jahangir', period: '1605–1627 CE', title: 'Connoisseur Emperor',
                coronation: 'Succeeded his father Akbar in 1605, taking the name "Jahangir" (World Seizer). He had previously rebelled against Akbar and was responsible for the murder of Akbar\'s close friend Abul Fazl. His accession was relatively smooth despite initial challenges from his son Khusrau\'s rebellion.',
                bio: 'Known for his love of art, nature, and justice. The "Chain of Justice" (Zanjir-i-Adl) — a golden chain with 60 bells — allowed any citizen to ring it outside his palace to seek direct justice from the emperor. Mughal miniature painting reached its absolute pinnacle. His wife Nur Jahan (Light of the World) was the real power, issuing orders, minting coins in her name, and conducting diplomacy.',
                death: 'Died on October 28, 1627 en route from Kashmir to Lahore. He had long suffered from asthma and excessive opium and alcohol consumption. He was buried at Shahdara, Lahore. A brutal war of succession followed, won by Prince Khurram (Shah Jahan) with Nur Jahan\'s faction defeated.',
                achievements: ['Chain of Justice', 'Mughal painting masterpieces', 'Patronized arts extensively', 'Tuzuk-i-Jahangiri (memoirs)', 'Nur Jahan — powerful queen'],
                wars: ['Mewar campaign against Rana Amar Singh', 'Kangra conquest', 'Conflict with Sikhs — Guru Arjan\'s martyrdom'],
                conquests: [
                    { title: 'Submission of Mewar (1615)', desc: 'Prince Khurram (future Shah Jahan) negotiated the submission of Rana Amar Singh of Mewar — ending a century of Mughal-Mewar conflict. The Rana was treated with great honor.' },
                    { title: 'Kangra Fort (1620)', desc: 'Captured the ancient hill fortress of Kangra after a prolonged siege, extending Mughal control into the Himalayan foothills.' }
                ],
                coins: [
                    { name: 'Zodiac Gold & Silver Mohurs', desc: 'World-famous series of 12 astronomical coins minted in Agra and Ahmedabad showing signs of the zodiac (Aries, Leo, Taurus, etc.).' },
                    { name: 'Nur Jahan Gold & Silver Rupee', desc: 'Unique imperial coins struck bearing the joint name and royal title of Queen Empress Nur Jahan.' }
                ],
                constructions: [
                    { name: 'Shalimar Bagh (Srinagar, Kashmir)', desc: 'Terraced Mughal pleasure garden with water cascades, chinar trees, and fountains overlooking Dal Lake.' },
                    { name: 'Tomb of Itmad-ud-Daulah ("Baby Taj")', desc: 'Pietra dura marble jewel in Agra built by Queen Nur Jahan for her father, featuring fine floral inlays.' },
                    { name: 'Akbar\'s Mausoleum at Sikandra', desc: 'Completed the multi-tiered red sandstone and marble tomb of his father Akbar.' }
                ],
                events: [
                    { year: '1605', text: 'Ascended the throne; installed the Chain of Justice for public grievances' },
                    { year: '1606', text: 'Son Khusrau\'s rebellion crushed; Sikh Guru Arjan Dev tortured and killed' },
                    { year: '1611', text: 'Married Nur Jahan (Mehrunissa) — she would become the true power behind the throne' },
                    { year: '1615', text: 'Rana Amar Singh of Mewar submitted — ending 100 years of Mughal-Mewar conflict' },
                    { year: '1622', text: 'Prince Khurram (Shah Jahan) rebelled briefly before reconciliation' },
                    { year: '1627', text: 'Death of Jahangir in Kashmir; war of succession won by Shah Jahan' }
                ]
            },
            {
                name: 'Shah Jahan', period: '1628–1658 CE', title: 'The Builder Emperor',
                coronation: 'Won a bloody war of succession after Jahangir\'s death, eliminating his brothers and rivals. He was crowned in Agra in February 1628 with the title "Shah Jahan" (King of the World). His reign began with the tragic death of his beloved wife Mumtaz Mahal during childbirth in 1631.',
                bio: 'The greatest builder in Mughal history. Grief-stricken by Mumtaz\'s death, he commissioned the Taj Mahal — taking 22 years and 20,000 workers to complete. He built the Red Fort and Jama Masjid in Delhi, the Peacock Throne (worth $1 billion today), and shifted the capital from Agra to his new city Shahjahanabad (Old Delhi). His reign is called the "Golden Age of Mughal Architecture." He was deposed and imprisoned by his son Aurangzeb in the Agra Fort.',
                death: 'Deposed by Aurangzeb in 1658 during the War of Succession. He was imprisoned in the Agra Fort for 8 years. Legend says he spent his final years gazing at the Taj Mahal through a window. He died on January 22, 1666 and was buried beside Mumtaz Mahal in the Taj Mahal.',
                achievements: ['Built Taj Mahal', 'Built Red Fort & Jama Masjid', 'Peacock Throne', 'Shah Jahan Nama', 'Mughal architecture at its peak'],
                wars: ['Deccan campaigns', 'Balkh & Badakhshan expedition', 'War of succession — imprisoned by Aurangzeb'],
                conquests: [
                    { title: 'Deccan Campaigns', desc: 'Conquered Ahmednagar (1636) and secured Mughal control over the Deccan through treaties with Bijapur and Golconda sultanates.' },
                    { title: 'Balkh & Badakhshan Expedition (1646-47)', desc: 'Attempted to reconquer the Timurid ancestral homeland in Central Asia. Initially successful, but the campaign was ultimately abandoned due to fierce Uzbek resistance and harsh terrain.' }
                ],
                coins: [
                    { name: 'Kalima Silver Rupee with Four Caliphs', desc: 'Elegant calligraphy coins inscribed with the Islamic profession of faith and the names of the four orthodox Caliphs.' },
                    { name: 'Shahjahanabad Gold Mohur', desc: 'Heavy gold mohurs struck at the new imperial mint in Delhi (Shahjahanabad).' }
                ],
                constructions: [
                    { name: 'Taj Mahal (Agra)', desc: 'Wonder of the World in white Makrana marble built for Empress Mumtaz Mahal — pinnacle of Mughal architectural genius.' },
                    { name: 'Red Fort (Lal Qila, Delhi)', desc: 'Massive red sandstone imperial citadel containing the Diwan-i-Aam, Diwan-i-Khas, and Stream of Paradise.' },
                    { name: 'Jama Masjid (Delhi)', desc: 'One of the largest mosques in India, built on an elevated sandstone plinth with three marble domes and two 40-meter minarets.' },
                    { name: 'The Peacock Throne (Takht-i-Taus)', desc: 'Encrusted with 108 rubies, 116 emeralds, diamonds including the Koh-i-Noor, and solid gold peacocks.' },
                    { name: 'Moti Masjid (Pearl Mosque, Agra Fort)', desc: 'Pristine white marble mosque built inside the Agra Fort.' }
                ],
                events: [
                    { year: '1628', text: 'Crowned as Emperor after winning the war of succession' },
                    { year: '1631', text: 'Mumtaz Mahal died during childbirth; Shah Jahan commissioned the Taj Mahal' },
                    { year: '1632', text: 'Construction of Taj Mahal began — it would take 22 years and 20,000 workers' },
                    { year: '1639', text: 'Laid foundation of Shahjahanabad (Old Delhi); moved capital from Agra' },
                    { year: '1648', text: 'Red Fort and Jama Masjid completed in Delhi' },
                    { year: '1653', text: 'Taj Mahal completed — the greatest monument to love in human history' },
                    { year: '1657', text: 'Shah Jahan fell ill; War of Succession erupted among his four sons' },
                    { year: '1658', text: 'Aurangzeb defeated his brothers and imprisoned Shah Jahan in Agra Fort' },
                    { year: '1666', text: 'Shah Jahan died as a prisoner, gazing at the Taj Mahal; buried beside Mumtaz' }
                ]
            },
            {
                name: 'Aurangzeb', period: '1658–1707 CE', title: 'Alamgir (World Conqueror)',
                coronation: 'Seized the throne from his father Shah Jahan after a bloody War of Succession (1657-1659). He defeated his brothers Dara Shikoh (executed 1659), Shah Shuja (fled to Burma), and Murad Bakhsh (executed). He imprisoned his father in Agra Fort for the remaining 8 years of his life.',
                bio: 'The most controversial Mughal emperor who reigned for 49 years — the longest of any Mughal. Expanded the empire to its greatest territorial extent, controlling nearly all of India. However, his religious orthodoxy reversed Akbar\'s inclusive policies: he reimposed the Jizya tax, destroyed several Hindu temples, and persecuted Sikhs (executing Guru Tegh Bahadur). His obsessive 27-year Deccan campaign against the Marathas drained the empire\'s resources. He was personally austere, earning money by sewing caps and copying the Quran.',
                death: 'Died on March 3, 1707 at age 88 in Ahmednagar during his endless Deccan campaign. In his final letter, he wrote: "I came alone and I go as a stranger. I do not know who I am, nor what I have been doing." He was buried simply at Khuldabad near Aurangabad, in an open-air grave per his wishes. His death triggered immediate imperial disintegration.',
                achievements: ['Largest territorial extent', 'Fatwa-i-Alamgiri (legal compilation)', 'Conquered Bijapur & Golconda', 'Personally austere & pious'],
                wars: ['War of Succession vs brothers', '27-year Deccan campaign vs Marathas', 'Conquest of Bijapur (1686)', 'Conquest of Golconda (1687)', 'Wars against Sikhs & Rajputs'],
                conquests: [
                    { title: 'Conquest of Bijapur (1686)', desc: 'Besieged and captured the wealthy Bijapur Sultanate after a prolonged campaign, ending 300 years of Adil Shahi rule and adding the Deccan to the empire.' },
                    { title: 'Conquest of Golconda (1687)', desc: 'Conquered the diamond-rich Golconda Sultanate, whose legendary fortress fell through betrayal. This gave Aurangzeb control of the famous Golconda diamond mines.' },
                    { title: '27-Year Deccan Campaign (1681-1707)', desc: 'Aurangzeb moved his court to the Deccan to personally fight the Marathas. Despite capturing forts and executing Sambhaji, he could never defeat the Maratha guerrilla resistance. This campaign consumed the empire\'s resources.' }
                ],
                coins: [
                    { name: 'Badr-i-Munir Silver Rupee', desc: 'Coins inscribed with the verse "Struck coin in the world like the sun and moon, Shah Aurangzeb Alamgir" omitting the Kalima to prevent disrespect.' }
                ],
                constructions: [
                    { name: 'Badshahi Mosque (Lahore)', desc: 'Monumental red sandstone congregational mosque with carved marble domes, the largest mosque in the world for over 300 years.' },
                    { name: 'Moti Masjid (Red Fort, Delhi)', desc: 'Delicate private white marble mosque inside the Red Fort royal apartments.' },
                    { name: 'Bibi Ka Maqbara (Aurangabad)', desc: 'Mausoleum built for his wife Dilras Banu Begum, known as the "Taj of the Deccan".' }
                ],
                events: [
                    { year: '1658', text: 'Seized the throne; defeated and executed brother Dara Shikoh' },
                    { year: '1659', text: 'Formally crowned; imprisoned father Shah Jahan in Agra Fort' },
                    { year: '1669', text: 'Ordered destruction of several Hindu temples; reimposed Jizya tax' },
                    { year: '1675', text: 'Executed Sikh Guru Tegh Bahadur in Delhi — catalyzed Sikh militarization' },
                    { year: '1681', text: 'Moved to the Deccan; began 27-year campaign against Marathas' },
                    { year: '1686', text: 'Conquered Bijapur Sultanate' },
                    { year: '1687', text: 'Conquered Golconda Sultanate; empire at maximum extent' },
                    { year: '1689', text: 'Captured and executed Maratha king Sambhaji — but guerrilla war intensified' },
                    { year: '1707', text: 'Died at age 88 in the Deccan, still fighting; empire immediately fragmented' }
                ]
            },
            {
                name: 'Bahadur Shah Zafar', period: '1837–1857 CE', title: 'Last Mughal Emperor',
                coronation: 'Ascended the throne in 1837 at age 62 as a British puppet. The Mughal emperor by this point controlled only the Red Fort complex in Delhi. The British paid him a pension and allowed him the title "King of Delhi" with no real power.',
                bio: 'The last Mughal emperor was a poet, calligrapher, and a figurehead under complete British control. He was an accomplished Urdu poet with the pen name "Zafar" (Victory). During the 1857 Revolt (First War of Indian Independence), rebellious sepoys marched to Delhi and declared the 82-year-old emperor as the symbolic leader of the rebellion. After the revolt\'s brutal suppression, he was tried by the British.',
                death: 'After the 1857 Revolt was crushed, he was tried for treason, exiled to Rangoon (Yangon), Myanmar, where he died on November 7, 1862 at age 87. He was buried in an unmarked grave. His tomb was discovered in 1991. His poignant verse: "How unfortunate is Zafar! For his burial / He could not get even two yards of land in the beloved\'s lane."',
                achievements: ['Acclaimed Urdu poet', 'Symbol of 1857 Revolt', 'Last representative of Mughal legacy'],
                wars: ['1857 Revolt — nominal leader, exiled to Rangoon'],
                conquests: [],
                coins: [
                    { name: 'Last Mughal Silver Rupee of Shahjahanabad', desc: 'Final silver rupees struck in the name of the last emperor before the abolition of the Mughal dynasty in 1858.' }
                ],
                constructions: [
                    { name: 'Zafar Mahal (Mehrauli, Delhi)', desc: 'Last monumental structure built by the Mughals, featuring the grand Hathi Gate used for imperial elephant processions.' }
                ],
                events: [
                    { year: '1837', text: 'Became the last Mughal Emperor — a figurehead under British control' },
                    { year: 'May 1857', text: 'Rebellious sepoys arrived in Delhi and declared Zafar Emperor of India' },
                    { year: 'Sept 1857', text: 'British recaptured Delhi; Zafar captured hiding in Humayun\'s Tomb' },
                    { year: '1858', text: 'Tried for treason; two of his sons were executed before his eyes. Exiled to Rangoon' },
                    { year: '1862', text: 'Died in exile in Rangoon — end of 331 years of Mughal dynasty in India' }
                ]
            },
        ]
    },

    'maratha': {
        id: 'maratha', name: 'Maratha Empire', era: 'modern',
        period: '1674 CE – 1818 CE', color: '#C084FC',
        founded: 'Chhatrapati Shivaji Maharaj', capital: 'Raigad / Pune',
        overview: 'The Maratha Empire rose from the Deccan to challenge Mughal supremacy and ultimately became the dominant power in India. Founded by the legendary Shivaji, it was later expanded into a confederacy under the Peshwas. The Marathas controlled most of India by the mid-18th century before falling to the British.',
        legacy: ['Shivaji — icon of Hindu self-rule', 'Guerrilla warfare tactics (Ganimi Kava)', 'Ashtapradhan — eight-minister council', 'Navy — first major Indian naval force', 'Controlled most of India by 1760', 'Inspiration for Indian nationalism'],
        decline: 'The Third Battle of Panipat (1761) against Ahmad Shah Abdali was a devastating blow. Internal rivalries between confederacy chiefs weakened unity. Three Anglo-Maratha Wars (1775–1818) ended Maratha power, with the British annexing all territories.',
        rulers: [
            {
                name: 'Chhatrapati Shivaji Maharaj', period: '1674–1680 CE', title: 'Founder — Father of the Maratha Empire',
                coronation: 'On June 6, 1674, Shivaji was crowned Chhatrapati (Paramount Sovereign) at his mountain fortress of Raigad in a grand Vedic ceremony. Gaga Bhatt, a Brahmin from Varanasi, officiated. The coronation cost 5 million gold coins and established Shivaji as a Hindu sovereign in his own right — a powerful political statement against Mughal supremacy.',
                bio: 'One of India\'s greatest warrior-kings. From humble beginnings as the son of a Maratha general, he carved out a kingdom using guerrilla warfare (Ganimi Kava) against the mighty Bijapur Sultanate and the Mughal Empire. He created the Ashtapradhan (council of eight ministers), built a powerful navy (India\'s first significant naval force), captured and built over 300 hill forts, and established a just administration. His legendary escape from Aurangzeb\'s court at Agra — hidden in fruit baskets — is one of Indian history\'s most dramatic episodes.',
                death: 'Died on April 3, 1680 at Raigad Fort from fever (possibly dysentery). He was 50 years old. His premature death left the fledgling Maratha state vulnerable to Aurangzeb\'s massive invasion. A succession crisis between his sons Sambhaji and Rajaram further weakened the kingdom.',
                achievements: ['Founded Maratha kingdom', 'Coronation at Raigad (1674)', 'Pioneered guerrilla warfare (Ganimi Kava)', 'Built powerful navy', 'Ashtapradhan council', 'Built/captured 300+ forts', 'Escaped from Agra (legendary)', 'Religious tolerance'],
                wars: ['Battles against Bijapur Sultanate', 'War against Mughals — Battle of Pratapgad, Kolhapur', 'Escape from Aurangzeb\'s court at Agra', 'Sacking of Surat'],
                conquests: [
                    { title: 'Battle of Pratapgad (1659)', desc: 'Shivaji killed the Bijapur general Afzal Khan in a dramatic personal encounter. Afzal Khan attempted to crush Shivaji in an embrace, but Shivaji struck first with hidden tiger claws (wagh nakh). The Bijapur army was routed.' },
                    { title: 'Sack of Surat (1664, 1670)', desc: 'Raided the wealthy Mughal port city of Surat twice, seizing enormous wealth and humiliating the Mughals. This forced Aurangzeb to send his best general Jai Singh against Shivaji.' },
                    { title: 'Southern Conquests (1677-78)', desc: 'Led a grand southern expedition conquering Vellore, Gingee, and territories deep into Karnataka and Tamil Nadu. This gave the Marathas a strategic depth that would prove crucial during Aurangzeb\'s later invasion.' }
                ],
                coins: [
                    { name: 'Shivrai Hon (Gold Coin)', desc: 'Rare gold coronation coin minted at Raigad in 1674 with Devanagari legend "Sri Raja Siva Chhatrapati".' },
                    { name: 'Copper Shivrai', desc: 'Widely circulated heavy copper coinage minted across the Konkan and Deccan declaring Maratha sovereignty.' }
                ],
                constructions: [
                    { name: 'Raigad Capital Fortress Complex', desc: 'Impregnable capital fortress on a sheer 2,700-ft mountain plateau with the Raj Bhavan, Nagarkhana, Jagadishwar Temple, and markets.' },
                    { name: 'Sindhudurg Island Sea Fort', desc: 'Iconic naval bastion built on an offshore rocky reef at Malvan with 42 bastions and molten-lead foundations.' },
                    { name: 'Pratapgad Fort & Bhavani Temple', desc: 'Strategic hilltop citadel in Satara overlooking the Mahabaleshwar pass, site of Afzal Khan\'s defeat.' },
                    { name: 'Vijaydurg & Suvarnadurg Sea Forts', desc: 'Massively reinforced coastal fortresses serving as the premier naval dockyards of the Maratha Navy.' }
                ],
                events: [
                    { year: '1646', text: 'Captured his first fort, Torna, at age 16 — beginning of his military career' },
                    { year: '1659', text: 'Killed Afzal Khan at the Battle of Pratapgad — became a legend' },
                    { year: '1664', text: 'First sack of Surat — seized enormous Mughal wealth' },
                    { year: '1665', text: 'Treaty of Purandar with Mughal general Jai Singh — surrendered 23 forts' },
                    { year: '1666', text: 'Legendary escape from Aurangzeb\'s court at Agra in fruit baskets' },
                    { year: '1670', text: 'Recovered all forts lost in Treaty of Purandar; second sack of Surat' },
                    { year: '1674', text: 'Grand coronation as Chhatrapati at Raigad Fort — established Maratha sovereignty' },
                    { year: '1680', text: 'Death at Raigad Fort; succession crisis between sons Sambhaji and Rajaram' }
                ]
            },
            {
                name: 'Chhatrapati Sambhaji', period: '1680–1689 CE', title: 'Shivaji\'s Son — Defiant Warrior',
                coronation: 'Seized the throne at Raigad after his father\'s death in 1680, overcoming a faction that supported his stepbrother Rajaram. He was crowned Chhatrapati and immediately faced Aurangzeb\'s massive invasion of the Deccan.',
                bio: 'Eldest son of Shivaji who continued fierce resistance against Aurangzeb\'s full-scale invasion of the Deccan. Despite being vastly outnumbered, he fought the Mughals for 9 years, never surrendering or submitting. He was a scholar who authored the Sanskrit text "Budhbhushanam." His capture and defiant death became a rallying cry for Maratha resistance.',
                death: 'Captured through treachery by the Mughal commander Muqarrab Khan in February 1689 along with his advisor Kavi Kalash. When Aurangzeb offered to spare his life in exchange for converting to Islam and surrendering all forts, Sambhaji refused defiantly (reportedly insulting Aurangzeb). He was brutally tortured — his tongue was cut out, his eyes gouged — and finally executed on March 11, 1689.',
                achievements: ['Resisted Mughal full-scale invasion', 'Maintained Maratha resistance', 'Sanskrit scholar — wrote Budhbhushanam'],
                wars: ['Fought Aurangzeb\'s Deccan campaign', 'Captured & executed (1689)'],
                conquests: [],
                coins: [
                    { name: 'Sambhaji Gold Hon & Copper Shivrai', desc: 'Coinage bearing the Devanagari legend "Sri Chhatrapati Sambhaji Raja".' }
                ],
                constructions: [
                    { name: 'Panhala & Sajjangad Fortifications', desc: 'Fortified strategic Deccan hill citadels during the nine-year guerrilla campaign against Aurangzeb.' }
                ],
                events: [
                    { year: '1680', text: 'Crowned Chhatrapati; immediately faced Aurangzeb\'s invasion with 500,000 troops' },
                    { year: '1681-88', text: 'Nine years of continuous guerrilla warfare against Mughal forces across the Deccan' },
                    { year: 'Feb 1689', text: 'Captured through treachery by Muqarrab Khan at Sangameshwar' },
                    { year: 'Mar 1689', text: 'Refused to convert; executed after brutal torture. His defiance inspired Maratha resurgence' }
                ]
            },
            {
                name: 'Peshwa Balaji Vishwanath', period: '1713–1720 CE', title: 'First Great Peshwa',
                coronation: 'Appointed Peshwa (Prime Minister) by Chhatrapati Shahu in 1713. He transformed the position from ministerial to de facto executive head of state. This shift permanently changed the Maratha political structure — henceforth the Peshwas would rule while the Chhatrapatis remained ceremonial.',
                bio: 'A Chitpavan Brahmin who rose through the ranks as a skilled diplomat and administrator. He freed Chhatrapati Shahu from Mughal captivity and negotiated a historic deal with the Mughal Emperor granting the Marathas the right to collect Chauth (25% tax) and Sardeshmukhi (10% tax) across the Deccan — effectively legitimizing Maratha supremacy.',
                death: 'Died in 1720 from illness, having established the foundation for Maratha supremacy in India. His son Bajirao I succeeded him as Peshwa.',
                achievements: ['Made Peshwa the de facto ruler', 'Secured Chauth & Sardeshmukhi rights', 'Freed Shahu from Mughal captivity'],
                wars: ['Diplomatic victory over Mughals'],
                conquests: [],
                coins: [
                    { name: 'Chhatrapati Shahu Silver Rupee', desc: 'Struck in the name of Chhatrapati Shahu across Maharashtra, Malwa, and Gujarat.' }
                ],
                constructions: [
                    { name: 'Saswad Palace & Wadas', desc: 'Constructed early administrative estates and residences for the emerging Peshwa leadership near Pune.' }
                ],
                events: [
                    { year: '1713', text: 'Appointed Peshwa by Chhatrapati Shahu' },
                    { year: '1714', text: 'Freed Shahu from Mughal captivity through diplomatic negotiations' },
                    { year: '1719', text: 'Marched to Delhi; secured Chauth and Sardeshmukhi rights from the Mughal Emperor' },
                    { year: '1720', text: 'Death of Balaji Vishwanath; his son Bajirao I succeeds as Peshwa' }
                ]
            },
            {
                name: 'Peshwa Bajirao I', period: '1720–1740 CE', title: 'Never Lost a Battle',
                coronation: 'Became Peshwa at age 20 after his father\'s death in 1720. Despite his youth, Chhatrapati Shahu trusted his military genius. He immediately launched aggressive expansion campaigns.',
                bio: 'Perhaps the greatest cavalry general in Indian history. He never lost a single battle in his career of over 40 campaigns. Known for his lightning cavalry raids, he could move armies at astonishing speed. He expanded Maratha power beyond the Deccan into Malwa, Gujarat, and Bundelkhand, bringing vast swaths of northern India under Maratha influence. His romantic relationship with Mastani, a Muslim princess, is one of India\'s greatest love stories.',
                death: 'Died on April 28, 1740, aged 40, from sudden fever (possibly heatstroke or heart attack) while preparing for a campaign near Raver in the Khandesh region. His premature death was a devastating blow to the Marathas. His son Balaji Bajirao (Nanasaheb) succeeded him.',
                achievements: ['Undefeated in 40+ battles', 'Expanded Maratha power across India', 'Lightning cavalry tactics', 'Conquered Malwa, Gujarat, Bundelkhand', 'Battle of Bhopal — decisive victory'],
                wars: ['Battle of Palkhed (1728)', 'Battle of Bhopal (1738)', 'Campaigns in Malwa & Gujarat', 'Raid on Delhi outskirts'],
                conquests: [
                    { title: 'Battle of Palkhed (1728)', desc: 'Defeated the Nizam of Hyderabad (Nizam-ul-Mulk) using brilliant strategic maneuvering. Without a major pitched battle, he cut off the Nizam\'s supply lines and forced him to submit. Military historians consider this a masterpiece of strategy.' },
                    { title: 'Conquest of Malwa & Gujarat', desc: 'Systematically conquered the Mughal provinces of Malwa and Gujarat, extending Maratha control deep into north India.' },
                    { title: 'Battle of Bhopal (1738)', desc: 'Decisively defeated the combined Mughal forces under the Nizam and Mughal governor, effectively ending Mughal resistance in central India.' }
                ],
                coins: [
                    { name: 'Ankushi Silver Rupee', desc: 'Maratha silver rupee marked with the elephant-goad (ankush) mint symbol, widely accepted from the Deccan to Rajasthan.' }
                ],
                constructions: [
                    { name: 'Shaniwar Wada Palace (Foundation & Seven Storeys)', desc: 'Laid the foundation of the historic 13-acre seat of the Peshwas in Pune with its massive Dilli Darwaza teak gates studded with steel spikes.' },
                    { name: 'Mastani Mahal & Kothrud Garden', desc: 'Built the palace and private pavilion for Princess Mastani in Pune.' }
                ],
                events: [
                    { year: '1720', text: 'Became Peshwa at age 20; began aggressive expansion' },
                    { year: '1728', text: 'Battle of Palkhed — defeated the Nizam with brilliant strategy' },
                    { year: '1737', text: 'Raided the outskirts of Delhi — Mughals humiliated' },
                    { year: '1738', text: 'Battle of Bhopal — crushed combined Mughal forces' },
                    { year: '1740', text: 'Death at age 40 from sudden illness — a devastating loss for the Marathas' }
                ]
            },
            {
                name: 'Peshwa Balaji Bajirao (Nanasaheb)', period: '1740–1761 CE', title: 'Peak & Fall',
                coronation: 'Succeeded his father Bajirao I as Peshwa at age 20 in 1740. Under his leadership, the Maratha Confederacy expanded to its greatest extent through powerful chiefs like the Scindias, Holkars, Bhonsles, and Gaekwads.',
                bio: 'Under his leadership, the Maratha Confederacy became the paramount power in India, controlling territory from the Indus to the Bay of Bengal. Maratha armies entered Delhi and installed puppet Mughal emperors. However, the ambitious Confederacy\'s overreach led to the catastrophic Third Battle of Panipat (1761) against Ahmad Shah Abdali\'s Afghan forces and their Indian allies.',
                death: 'Died on June 23, 1761 — just weeks after receiving the devastating news of the Maratha defeat at the Third Battle of Panipat. An estimated 40,000-100,000 Marathas were killed at Panipat, including his son Vishwasrao and cousin Sadashivrao Bhau. He died of grief and shock at Parvati near Pune.',
                achievements: ['Greatest territorial extent', 'Controlled Delhi', 'Marathas became paramount power'],
                wars: ['Third Battle of Panipat (1761) — catastrophic defeat'],
                conquests: [
                    { title: 'Maratha Control of Delhi (1752-61)', desc: 'Installed puppet Mughal emperors and collected revenue from most of north India. The Maratha flag flew from the Red Fort. This was the zenith of Maratha power.' }
                ],
                coins: [
                    { name: 'Hali Sicca Silver Rupee of Pune Mint', desc: 'Standard currency of the Maratha Confederacy circulating from Cuttack to Attock on the Indus.' }
                ],
                constructions: [
                    { name: 'Parvati Hill Temple Complex', desc: 'Built the hilltop Shiva and Vishnu temples overlooking Pune with panoramic views of the Maratha capital.' },
                    { name: 'Katraj Aqueduct & Water Supply Network', desc: 'Ingenious masonry duct network supplying fresh spring water underground from Katraj lake to Shaniwar Wada.' },
                    { name: 'Shaniwar Wada Seven-Storeyed Meghadambari Expansion', desc: 'Added opulent royal apartments, mirror halls, and fountain courtyards to the Peshwa palace.' }
                ],
                events: [
                    { year: '1740', text: 'Became Peshwa at 20; inherited the expanding Maratha Confederacy' },
                    { year: '1752', text: 'Marathas became protectors of the Mughal Emperor in Delhi' },
                    { year: '1757', text: 'Marathas defeated at Battle of Udgir but recovered quickly' },
                    { year: '1760', text: 'Ahmad Shah Abdali invaded India; Maratha army marched north to confront him' },
                    { year: 'Jan 1761', text: 'Third Battle of Panipat — catastrophic defeat; Vishwasrao and Sadashivrao killed' },
                    { year: 'June 1761', text: 'Died of grief upon hearing the full extent of the Panipat disaster' }
                ]
            },
        ]
    },

    'british': {
        id: 'british', name: 'British Colonial Rule', era: 'modern',
        period: '1757 CE – 1947 CE', color: '#EF4444',
        founded: 'East India Company (later British Crown)', capital: 'Calcutta / New Delhi',
        overview: 'British rule began with the East India Company\'s victory at Plassey (1757) and eventually covered the entire subcontinent. After the 1857 Revolt, the Crown took direct control. Colonial rule brought railways, telegraphs, and English education, but also devastating famines, economic exploitation, and the destruction of Indian industry.',
        legacy: ['Indian Railways — largest network', 'English education & legal system', 'Indian Civil Service', 'Systematic economic exploitation ("Drain of Wealth")', 'Inspired Indian nationalism & freedom movement', 'Partition of India (1947)'],
        decline: 'The Indian Independence Movement, led by Gandhi, Nehru, Bose, and others, made British rule untenable. World War II weakened Britain. India gained independence on August 15, 1947, but was partitioned into India and Pakistan.',
        rulers: [
            {
                name: 'Robert Clive', period: '1757–1767 CE', title: 'Clive of India — Founder of British India',
                coronation: 'A clerk-turned-military-officer of the East India Company who arrived in India in 1744. He proved his military genius at the Siege of Arcot (1751) and rose rapidly through the Company ranks. His conspiracy with Mir Jafar, the commander of the Nawab of Bengal\'s army, led to the pivotal Battle of Plassey on June 23, 1757 — a battle that was effectively won before it was fought.',
                bio: 'Won the Battle of Plassey (1757) through a combination of military positioning and conspiracy with Mir Jafar, gaining Bengal — the richest province of India — for the Company. He established the Dual System of governance (Diarchy) where the Company collected revenue while the Nawab handled administration. He received a personal jagir (land grant) worth £27,000 per year. His policies inaugurated what Indians call the "Drain of Wealth" — the systematic transfer of Indian wealth to Britain.',
                death: 'Returned to England where he was investigated by Parliament for corruption and plundering Bengal. Though acquitted, he suffered from opium addiction and depression. He committed suicide on November 22, 1774 in London at age 49.',
                achievements: ['Won Battle of Plassey (1757)', 'Established Company rule in Bengal', 'Dual system of governance', 'Received Diwani of Bengal from Mughal Emperor'],
                wars: ['Battle of Plassey (1757)', 'Battle of Buxar — under his influence'],
                conquests: [
                    { title: 'Battle of Plassey (June 23, 1757)', desc: 'Defeated Nawab Siraj ud-Daulah\'s army of 50,000 with just 3,000 men. The battle was essentially decided by the betrayal of Mir Jafar, who held back his forces. Siraj was captured and executed. Mir Jafar was installed as a puppet Nawab.' },
                    { title: 'Diwani of Bengal (1765)', desc: 'After the Battle of Buxar (1764), Clive secured the right to collect land revenue (Diwani) of Bengal, Bihar, and Orissa from the Mughal Emperor Shah Alam II. This gave the Company legal authority over the richest provinces of India.' }
                ],
                coins: [
                    { name: 'Murshidabad & Arcot Silver Rupees', desc: 'Silver rupees struck by the East India Company bearing the nominal name of the Mughal Emperor Alamgir II with frozen year 19.' }
                ],
                constructions: [
                    { name: 'Fort William (New Citadel, Calcutta)', desc: 'Massive star-shaped octagonal fortress built on the Hooghly River following the 1757 victory at Plassey.' }
                ],
                events: [
                    { year: '1751', text: 'Siege of Arcot — Clive\'s military genius first demonstrated against the French' },
                    { year: 'June 1757', text: 'Battle of Plassey — defeated Siraj ud-Daulah; installed Mir Jafar as puppet Nawab' },
                    { year: '1757', text: 'Bengal came under effective Company control — richest province in India' },
                    { year: '1760', text: 'First stint ends; returns to England as one of the richest men in Britain' },
                    { year: '1765', text: 'Returns to India; secures Diwani rights of Bengal from Mughal Emperor' },
                    { year: '1767', text: 'Left India for the last time; faced Parliamentary inquiry in England' },
                    { year: '1774', text: 'Committed suicide in London amid depression and opium addiction' }
                ]
            },
            {
                name: 'Warren Hastings', period: '1773–1785 CE', title: 'First Governor-General',
                coronation: 'Appointed the first Governor-General of Bengal under the Regulating Act of 1773, which was the British Parliament\'s first attempt to regulate the East India Company. He had served in India since 1750 and had deep knowledge of Indian languages and culture.',
                bio: 'First Governor-General of Bengal who shaped the foundations of British Indian administration. Established the Supreme Court at Calcutta (1774), introduced revenue reforms, reorganized the criminal justice system, and founded the Asiatic Society of Bengal (with William Jones). He was a genuine Indophile who promoted the study of Sanskrit and Persian literature, and commissioned the first English translation of the Bhagavad Gita by Charles Wilkins (1785). However, he was also involved in the Rohilla War and the exploitation of the Begums of Awadh.',
                death: 'Returned to England in 1785. He was impeached by Edmund Burke and the House of Commons for corruption, cruelty, and misgovernance in India. His trial lasted 7 years (1788-1795) — one of the most famous trials in British history. He was eventually acquitted but financially ruined. He died on August 22, 1818 at age 85.',
                achievements: ['First Governor-General', 'Established Supreme Court (Calcutta)', 'Revenue reforms', 'Asiatic Society of Bengal', 'Translated Bhagavad Gita into English'],
                wars: ['First Anglo-Maratha War', 'Wars against Mysore (Hyder Ali)'],
                conquests: [
                    { title: 'Rohilla War (1774)', desc: 'Lent Company troops to the Nawab of Awadh to destroy the Rohilla Afghans of Rohilkhand. This was later cited as evidence of corruption in his impeachment trial.' },
                    { title: 'First Anglo-Maratha War (1775-82)', desc: 'Fought the Marathas to a stalemate. The Treaty of Salbai (1782) maintained the status quo for 20 years — a diplomatic success for Hastings.' }
                ],
                coins: [
                    { name: 'Sicca Rupee of Bengal Presidency', desc: 'High-purity milled silver rupee introduced under the 1773 regulations for standard revenue collection.' }
                ],
                constructions: [
                    { name: 'Writers\' Building (Calcutta)', desc: 'Constructed in 1777 as the principal administrative headquarters of the East India Company\'s civil servants.' },
                    { name: 'Calcutta High Court / Supreme Court Building', desc: 'Earliest Crown judicial court complex in colonial India.' }
                ],
                events: [
                    { year: '1773', text: 'Appointed First Governor-General under the Regulating Act' },
                    { year: '1774', text: 'Supreme Court established at Calcutta; Rohilla War fought' },
                    { year: '1775', text: 'First Anglo-Maratha War began' },
                    { year: '1780', text: 'Second Anglo-Mysore War — Hyder Ali invaded the Carnatic' },
                    { year: '1782', text: 'Treaty of Salbai ended the First Anglo-Maratha War' },
                    { year: '1784', text: 'Pitt\'s India Act — Parliament gained greater control over Company affairs' },
                    { year: '1785', text: 'Hastings resigned; returned to England to face impeachment' },
                    { year: '1795', text: 'Acquitted after 7-year impeachment trial — but financially ruined' }
                ]
            },
            {
                name: 'Lord Dalhousie', period: '1848–1856 CE', title: 'Annexation Governor-General',
                coronation: 'Arrived in India in 1848 at age 36 — the youngest Governor-General. He came with a clear reformist and expansionist agenda. His energy and ambition would transform and massively expand British India.',
                bio: 'The most aggressive expansionist Governor-General who used the notorious Doctrine of Lapse to annex Indian states whose rulers died without biological male heirs — disregarding the ancient Indian tradition of adoption. He annexed Satara (1848), Jhansi (1854), Nagpur (1854), and Awadh (1856). He also modernized India dramatically: introducing the first railway line (Bombay to Thane, 1853), the telegraph, the postal service, and the Ganges Canal. His policies of annexation and westernization directly triggered the 1857 Revolt.',
                death: 'Left India in 1856 in broken health, having served 8 exhausting years. He died on December 19, 1860 at age 48 in Scotland. The revolt that his policies triggered erupted just one year after he left India.',
                achievements: ['Doctrine of Lapse — annexation policy', 'Introduced Railways (1853)', 'Telegraph & postal service', 'Widow Remarriage Act support', 'Ganges Canal completed'],
                wars: ['Second Anglo-Sikh War — Punjab annexed', 'Annexation of Awadh, Jhansi, Satara, Nagpur'],
                conquests: [
                    { title: 'Annexation of Punjab (1849)', desc: 'After the Second Anglo-Sikh War, annexed the powerful Sikh Empire — the last major independent Indian power. The young Maharaja Duleep Singh was deposed and the legendary Koh-i-Noor diamond was seized for Queen Victoria.' },
                    { title: 'Doctrine of Lapse Annexations', desc: 'Annexed Satara (1848), Jaitpur (1849), Sambalpur (1849), Udaipur (1852), Jhansi (1854), and Nagpur (1854) — all on the grounds that their rulers died without natural male heirs.' },
                    { title: 'Annexation of Awadh (1856)', desc: 'Annexed the wealthy Awadh kingdom on grounds of "misgovernment" — breaking a 100-year alliance. This enraged the Bengal Army (many of whose sepoys came from Awadh) and was a major trigger for the 1857 Revolt.' }
                ],
                coins: [
                    { name: 'Company Silver One Rupee (Victoria / William IV)', desc: 'Uniform silver rupee weight standardized at 180 grains across all three Presidencies (Bengal, Bombay, Madras).' }
                ],
                constructions: [
                    { name: 'First Indian Railway Track (Bombay-Thane 1853)', desc: 'Constructed India\'s first commercial 21-mile railway line operated by the Great Indian Peninsula Railway.' },
                    { name: 'Upper Ganges Canal Engineering Network', desc: 'Monumental 350-mile brick masonry canal system with aqueducts carrying river waters at Roorkee to prevent famines.' },
                    { name: 'First Electric Telegraph Network', desc: 'Laid over 4,000 miles of telegraph lines connecting Calcutta, Agra, Bombay, and Peshawar.' }
                ],
                events: [
                    { year: '1848', text: 'Arrived as Governor-General; annexed Satara using Doctrine of Lapse' },
                    { year: '1849', text: 'Second Anglo-Sikh War — Punjab annexed; Koh-i-Noor diamond seized' },
                    { year: '1853', text: 'First railway line in India: Bombay to Thane (21 miles); first telegraph line' },
                    { year: '1854', text: 'Annexed Jhansi and Nagpur under Doctrine of Lapse; Wood\'s Education Dispatch' },
                    { year: '1855', text: 'Santhal Rebellion in Bengal — first major tribal uprising against British rule' },
                    { year: '1856', text: 'Annexed Awadh; Widow Remarriage Act passed; Dalhousie left India in broken health' },
                    { year: 'May 1857', text: 'The Great Revolt erupted — directly triggered by Dalhousie\'s aggressive policies' }
                ]
            },
            {
                name: 'Lord Curzon', period: '1899–1905 CE', title: 'Most Imperial Viceroy',
                coronation: 'Arrived in India in 1899 at age 39, declaring "India is the pivot of our Empire." He was the most imperially-minded Viceroy, believing passionately in Britain\'s civilizing mission. He was tireless, working 14-hour days.',
                bio: 'The most controversial Viceroy whose Partition of Bengal (1905) inadvertently revolutionized Indian nationalism. He divided Bengal — officially for administrative efficiency but actually to separate Hindu-majority western Bengal from Muslim-majority eastern Bengal, weakening the Bengali intelligentsia. This sparked the Swadeshi Movement, boycott of British goods, and the rise of militant nationalism. He also established the Archaeological Survey of India, restored historical monuments (including the Taj Mahal), built Victoria Memorial, and reformed universities (controversially reducing Indian control).',
                death: 'Left India in 1905 after a dispute with Lord Kitchener (Commander-in-Chief) over military authority. He later served as Foreign Secretary during World War I. He died on March 20, 1925 in London. The Bengal Partition he ordered was reversed in 1911 due to massive opposition.',
                achievements: ['Partition of Bengal (1905) — triggered Swadeshi movement', 'Archaeological Survey of India', 'Victoria Memorial, Kolkata', 'University reforms', 'Ancient Monuments Act'],
                wars: ['Partition of Bengal — triggered mass protests'],
                conquests: [],
                coins: [
                    { name: 'British Imperial Silver One Rupee (Edward VII)', desc: 'Standard colonial silver coinage carrying the effigy of King Edward VII, Emperor of India.' }
                ],
                constructions: [
                    { name: 'Victoria Memorial (Calcutta)', desc: 'Grand white Makrana marble monument dedicated to Queen Victoria, blending Indo-Saracenic and British classical architecture.' },
                    { name: 'Restoration of Taj Mahal & Ancient Monuments', desc: 'Pioneered heritage conservation through the Archaeological Survey of India, restoring the Taj Mahal gardens and Buddhist caves.' }
                ],
                events: [
                    { year: '1899', text: 'Arrived as Viceroy; declared "India is the pivot of our Empire"' },
                    { year: '1899-1900', text: 'Great Indian Famine — millions died; Curzon\'s response widely criticized' },
                    { year: '1902', text: 'Established Archaeological Survey of India; began restoration of Indian monuments' },
                    { year: '1904', text: 'Ancient Monuments Preservation Act; University Act (controversial)' },
                    { year: 'Oct 1905', text: 'Partition of Bengal — sparked Swadeshi Movement, boycotts, and militant nationalism' },
                    { year: 'Nov 1905', text: 'Resigned after dispute with Lord Kitchener; Bengal Partition reversed in 1911' }
                ]
            },
            {
                name: 'Lord Mountbatten', period: '1947 CE', title: 'Last Viceroy',
                coronation: 'Arrived in India on March 22, 1947 as the last Viceroy, appointed by Clement Attlee\'s Labour government with a mandate to transfer power. He was given a deadline of June 1948, which he advanced by 10 months to August 15, 1947, rushing the partition process.',
                bio: 'The last Viceroy who oversaw perhaps the most momentous and tragic event in 20th-century Asian history — the Partition of India. He arrived with a mandate to transfer power and quickly concluded that a united India was impossible given the Muslim League\'s demand for Pakistan. The hastily drawn Radcliffe Line divided Punjab and Bengal, triggering one of the largest mass migrations in human history — 15 million displaced, and an estimated 200,000 to 2 million killed in communal violence. He became the first Governor-General of independent India at Nehru\'s invitation.',
                death: 'Served as first Governor-General of India until June 1948. He was assassinated by the IRA (Provisional Irish Republican Army) on August 27, 1979 when his fishing boat was bombed off the coast of Ireland. He was 79 years old.',
                achievements: ['Oversaw Indian independence', 'Mountbatten Plan for Partition', 'Transfer of power ceremony', 'First Governor-General of independent India'],
                wars: ['Partition violence & displacement'],
                conquests: [],
                coins: [
                    { name: 'King George VI Final Colonial Rupee (1947)', desc: 'Last silver/cupro-nickel currency minted bearing the title "Ind. Imp." (Indiae Imperator — Emperor of India).' }
                ],
                constructions: [
                    { name: 'Viceroy\'s House (Rashtrapati Bhavan)', desc: 'The 340-room neoclassical Lutyens palace on Raisina Hill where the historic transfer of power instruments were signed.' }
                ],
                events: [
                    { year: 'March 1947', text: 'Arrived as last Viceroy; met Indian leaders — Nehru, Jinnah, Gandhi, Patel' },
                    { year: 'June 3, 1947', text: 'Announced the Mountbatten Plan — partition of India into India and Pakistan' },
                    { year: 'July 1947', text: 'Radcliffe Line drawn hastily, dividing Punjab and Bengal' },
                    { year: 'Aug 14, 1947', text: 'Pakistan created as an independent nation — Jinnah becomes first Governor-General' },
                    { year: 'Aug 15, 1947', text: 'India gained independence — Nehru\'s "Tryst with Destiny" speech; Mountbatten became first Governor-General' },
                    { year: '1947-48', text: 'Partition violence: 15 million displaced, up to 2 million killed in communal massacres' },
                    { year: 'June 1948', text: 'Mountbatten left India; C. Rajagopalachari became first Indian Governor-General' }
                ]
            },
        ]
    },
};

// Import and merge expanded dynasties
import { EXPANDED_DYNASTIES } from './dynastiesExpanded';

// Merge expanded dynasties into main DYNASTIES object
Object.assign(DYNASTIES, EXPANDED_DYNASTIES);

export function getDynastyById(id) {
    return DYNASTIES[id] || null;
}

export function getAllDynastyIds() {
    return Object.keys(DYNASTIES);
}

export function getDynastiesByEra(era) {
    return Object.values(DYNASTIES).filter(d => d.era === era);
}

export function getAllDynasties() {
    return DYNASTIES;
}
