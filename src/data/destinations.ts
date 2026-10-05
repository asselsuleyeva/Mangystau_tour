export interface Destination {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  overview: string;
  history: string;
  geology: string;
  whatYouWillSee: string[];
  howToGetThere: string;
  bestTimeToVisit: string;
  location: string;
  latitude: number;
  longitude: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  duration: '1–3 hours' | 'Half day' | 'Full day' | 'Multi-day';
  bestSeason: string; // e.g. "April–May / September–October"
  seasons: ('Spring' | 'Summer' | 'Autumn' | 'Winter' | 'All year')[];
  type: ('Nature' | 'Historical' | 'Sacred' | 'Geological' | 'Adventure' | 'Photography' | 'Cultural')[];
  travelStyles: ('Relaxation' | 'Adventure' | 'Family' | 'Photography' | 'Cultural' | 'Expedition')[];
  accessType: 'Easy road access' | 'SUV recommended' | '4x4 required' | 'Walking required';
  heroImage: string;
  images: string[];
  gallery: { url: string; caption: string; category: string }[];
  safety: string[];
  whatToBring: string[];
  nearbyAttractions: string[];
  transport: string;
  unescoStatus?: string;
}

export interface TravelStory {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  publishDate: string;
  image: string;
  content: string;
}

export interface PackingItem {
  id: string;
  name: string;
  category: 'Essential' | 'Gear' | 'Clothing' | 'Personal';
  description: string;
  requiredFor: ('4x4 Expedition' | 'Sacred Sites' | 'Desert Hiking' | 'General Travel')[];
}

export const INITIAL_DESTINATIONS: Destination[] = [
  {
    id: 'bozzhyra',
    name: 'Bozzhyra',
    slug: 'bozzhyra',
    subtitle: 'The majestic white limestone peaks and fangs on the Ustyurt Plateau.',
    description: 'An extraordinary white-chalk landscape shaped by ancient seas, tectonic forces, and millions of years of wind and water erosion.',
    overview: 'Bozzhyra is one of the most spectacular landscapes of Mangystau and lies on the Ustyurt Plateau. Its dramatic white limestone cliffs, towers, ridges, and canyons were shaped by geological processes over millions of years. The most recognizable formations include the famous "Bozzhyra Fangs", two sharp white rock towers rising dramatically from the surrounding desert floor.',
    history: 'The Ustyurt Plateau has served as a crossroads for nomads and caravan trails across centuries. While Bozzhyra itself is primarily a natural masterpiece, ancient stone structures and hunting traps (arans) built by ancient steppe tribes are scattered across the surrounding plateau.',
    geology: 'The region has a deep geological history connected with ancient marine environments (the Tethys Ocean). Sedimentary layers of white chalk, limestone, and marl were deposited over tens of millions of years. Tectonic uplift followed by relentless wind and water erosion sculpted the monumental formations visible today.',
    whatYouWillSee: [
      'The iconic Bozzhyra Fangs (sharp white rock towers rising over 200 metres)',
      'Panoramic 360-degree vistas from high Ustyurt Plateau viewpoints',
      'Intricate white limestone canyons and sculpted amphitheaters',
      'Unforgettable desert sunrises and sunsets painting chalk cliffs in gold and crimson'
    ],
    howToGetThere: 'Bozzhyra is located approximately 300 km southeast of Aktau. Reaching the site requires leaving paved roads and navigating remote desert trails across the Ustyurt Plateau. A high-clearance 4x4 vehicle with an experienced local off-road driver is essential.',
    bestTimeToVisit: 'April to May and September to October offer pleasant temperatures. Summer temperatures frequently exceed 40°C, while winter can bring freezing desert winds.',
    location: 'Karakiya District, Mangystau Region',
    latitude: 43.4333,
    longitude: 54.0667,
    difficulty: 'Moderate',
    duration: 'Full day',
    bestSeason: 'April–May / September–October',
    seasons: ['Spring', 'Autumn'],
    type: ['Nature', 'Geological', 'Adventure', 'Photography'],
    travelStyles: ['Adventure', 'Photography', 'Expedition'],
    accessType: '4x4 required',
    heroImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600',
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200', caption: 'The Bozzhyra Fangs at twilight', category: 'BOZZHYRA' },
      { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200', caption: 'Ustyurt Plateau cliff edge', category: 'BOZZHYRA' },
      { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200', caption: 'Sunset hues over Bozzhyra canyon', category: 'BOZZHYRA' }
    ],
    safety: [
      'Never stand near unstable chalk cliff edges; wind gusts can be intense.',
      'Carry at least 5 litres of drinking water per person per day.',
      'There is no mobile phone signal in the Bozzhyra canyon; travel with a satellite device or local guide.',
      'Ensure your 4x4 vehicle carries two spare tires, full recovery gear, and surplus fuel.'
    ],
    whatToBring: ['5L Drinking Water', 'Trekking Boots', 'Sun Protection (Hat, SPF 50)', 'Warm Windproof Jacket', 'Power Bank', 'Offline Maps / GPS'],
    nearbyAttractions: ['Beket-Ata Underground Mosque', 'Tuzbair Salt Flat'],
    transport: '4x4 Off-road SUV required. Approximately 4-5 hours drive from Aktau.',
    unescoStatus: 'Candidate / Nominated area under Ustyurt Biosphere Reserve'
  },
  {
    id: 'sherkala',
    name: 'Sherkala',
    slug: 'sherkala',
    subtitle: 'The legendary Sphinx Mountain of Mangystau that morphs with every angle.',
    description: 'A solitary mountain rising abruptly from the steppe, resembling a giant yurt from one side and a sleeping lion from another.',
    overview: 'Sherkala is one of the most recognizable mountains in Mangystau. Its unusual shape changes dramatically depending on the viewing direction. Different perspectives have made travelers compare the mountain to a giant yurt, a colossal lion, or an ancient castle fortress. The surrounding area contains rich archaeological remains from medieval Silk Road settlements.',
    history: 'In medieval times, a fortress guarded the summit of Sherkala along the Silk Road caravan routes. Legend says that defenders held out against besieging armies for months using secret underground tunnels that led to natural freshwater springs inside the mountain.',
    geology: 'Sherkala is an inselberg (monadnock) formed through selective geological erosion and differential weathering over millions of years. Soft chalk and clay layers eroded away, leaving a resilient central limestone core.',
    whatYouWillSee: [
      'The multi-faceted mountain silhouette resembling a giant yurt or sleeping lion',
      'Carved erosion caves and deep ravines around the base',
      'Remains of ancient Silk Road caravan pathways',
      'The nearby lush green oasis of Kyzylkala spring'
    ],
    howToGetThere: 'Located approximately 170 km northeast of Aktau via asphalt road towards Shetpe, followed by a short unpaved track accessible by standard vehicles in dry weather.',
    bestTimeToVisit: 'April to May brings blooming steppe wildflowers around Sherkala, while September to October offers clear skies and cool hiking conditions.',
    location: 'Mangystau District, 170 km from Aktau',
    latitude: 44.2567,
    longitude: 52.0069,
    difficulty: 'Easy',
    duration: 'Half day',
    bestSeason: 'April–May / September–October',
    seasons: ['Spring', 'Summer', 'Autumn'],
    type: ['Nature', 'Historical', 'Geological', 'Photography'],
    travelStyles: ['Family', 'Photography', 'Cultural', 'Adventure'],
    accessType: 'SUV recommended',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1600',
    images: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200', caption: 'Sherkala Mountain rising above the desert', category: 'SHERKALA' }
    ],
    safety: [
      'Climbing the upper cliff faces of Sherkala is unsafe due to loose rock and steep drops.',
      'Watch for venomous desert snakes or scorpions during warm summer months.',
      'Stay hydrated and wear sturdy walking shoes when exploring ravines around the base.'
    ],
    whatToBring: ['Sturdy Walking Shoes', 'Sun Hat & Sunglasses', '2L Drinking Water', 'Camera with Zoom Lens'],
    nearbyAttractions: ['Torysh Valley of Balls', 'Ayrakty Castle Mountains'],
    transport: 'Asphalt road to Shetpe area, then 15 minutes on gravel track. Accessible by car or SUV.'
  },
  {
    id: 'tuzbair',
    name: 'Tuzbair',
    slug: 'tuzbair',
    subtitle: 'The vast dazzling white salt flat and carved Ustyurt limestone cliffs.',
    description: 'A breathtaking realm where vast white salt flats merge with dramatic limestone cliffs, creating natural mirror reflections after rain.',
    overview: 'Tuzbair is a spectacular salt landscape in Mangystau that combines huge white salt flats (sor), towering white chalk arches, and steep Ustyurt Plateau cliffs. After shallow rain, water on the salt pan creates a perfect mirror reflecting the sky and surrounding white formations, earning it a reputation as Kazakhstan’s mirror desert.',
    history: 'Tuzbair represents the remnants of the ancient prehistoric Tethys Ocean. For millennia, salt was harvested along these flats by nomadic tribes, and today it remains one of the purest natural geological formations in Central Asia.',
    geology: 'The flat basin is a salt crust formed by intense evaporation of mineral-rich water trapped in lower depressions. The rim of Tuzbair features carved white limestone cliffs with natural arches and pinnacles formed by water runoff and wind erosion.',
    whatYouWillSee: [
      'Miles of blinding white crystalline salt crust',
      'Natural chalk arch bridges carved into Ustyurt cliffs',
      'Sky reflection mirrors after seasonal spring rain',
      'Mesmerizing golden hour light illuminating the white cliffs'
    ],
    howToGetThere: 'Located approximately 250 km east of Aktau. Reaching the panoramic upper viewpoints and lower salt flats requires off-road 4x4 travel across Ustyurt trails.',
    bestTimeToVisit: 'Spring (April–May) for potential mirror water reflections or Autumn (September–October) for dry crust walking and crisp light.',
    location: 'Mangystau District, Ustyurt Rim',
    latitude: 44.0200,
    longitude: 53.2200,
    difficulty: 'Moderate',
    duration: 'Full day',
    bestSeason: 'April–May / September–October',
    seasons: ['Spring', 'Autumn'],
    type: ['Nature', 'Geological', 'Photography', 'Adventure'],
    travelStyles: ['Photography', 'Adventure', 'Expedition'],
    accessType: '4x4 required',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200', caption: 'Endless white horizon at Tuzbair', category: 'TUZBAIR' }
    ],
    safety: [
      'DO NOT drive vehicles onto wet salt flats or mud; vehicles will sink instantly and require heavy rescue equipment.',
      'Wear polarized sunglasses to protect eyes from severe UV glare off the white salt crust.',
      'Bring extra fresh water for washing salt off shoes and skin.'
    ],
    whatToBring: ['Polarized Sunglasses', 'Sun Protection', 'Extra Fresh Water', 'Wet Wipes / Towel', 'Sturdy Footwear'],
    nearbyAttractions: ['Bozzhyra', 'Karakiya Depression'],
    transport: '4x4 SUV required. 3.5 to 4 hours from Aktau.'
  },
  {
    id: 'beket-ata',
    name: 'Beket-Ata',
    slug: 'beket-ata',
    subtitle: 'The sacred underground mosque carved into rock, UNESCO World Heritage nominee.',
    description: 'An ancient spiritual sanctuary carved directly into chalk cliffs, serving as an active pilgrimage site for centuries.',
    overview: 'Beket-Ata is one of the most revered sacred places in Kazakhstan. Beket Myrzagululy (1750–1813) was a famous Sufi scholar, teacher, architect, and spiritual leader who carved several underground mosques across Mangystau. The main mosque at Oglandy is carved into chalk canyon walls and features multiple underground prayer chambers.',
    history: 'Beket-Ata studied at the famous madrasa in Khiva before returning to Mangystau to teach science, mathematics, and Sufi philosophy. He carved underground mosques to serve as places of retreat, education, and refuge. The site forms part of the UNESCO serial nomination "Rock Mosques and Associated Sacred Sites of Mangystau".',
    geology: 'The mosque chambers were hand-carved into soft, cohesive white chalk formations along Oglandy canyon walls, maintaining cool interior temperatures year-round despite desert heat.',
    whatYouWillSee: [
      'The sacred rock-cut underground mosque chambers',
      'Winding stone staircase descending into Oglandy canyon',
      'The pilgrim complex where travelers share communal meals (Sadaqah)',
      'Natural desert springs revered for clean, mineral-rich water'
    ],
    howToGetThere: 'Located 280 km southeast of Aktau. The road is paved up to the pilgrim complex, followed by a 1.5 km stone staircase descent to the underground mosque.',
    bestTimeToVisit: 'Spring and Autumn. Pilgrims visit year-round, but summer heat makes the walking descent challenging during midday.',
    location: 'Oglandy locality, Karakiya District',
    latitude: 43.6000,
    longitude: 54.0833,
    difficulty: 'Moderate',
    duration: 'Full day',
    bestSeason: 'April–May / September–October',
    seasons: ['Spring', 'Autumn', 'All year'],
    type: ['Sacred', 'Historical', 'Cultural'],
    travelStyles: ['Cultural', 'Family', 'Relaxation'],
    accessType: 'Walking required',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1600',
    images: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200', caption: 'Canyon path leading down to Beket-Ata', category: 'SACRED SITES' }
    ],
    safety: [
      'This is an active sacred pilgrimage site; visitors must dress modestly (arms and legs covered; headscarf for women).',
      'Behave quietly, refrain from loud talk, and do not film or photo pilgrims praying inside mosque chambers.',
      'The staircase return climb requires physical stamina; take frequent breaks in shaded resting alcoves.'
    ],
    whatToBring: ['Modest Clothing (Long Pants / Long Skirt, Long Sleeves)', 'Headscarf (Women)', 'Refillable Water Bottle', 'Comfortable Walking Shoes'],
    nearbyAttractions: ['Shopan-Ata Underground Mosque', 'Bozzhyra Canyon'],
    transport: 'Paved road up to Oglandy pilgrim center (approx. 3.5 hrs from Aktau).',
    unescoStatus: 'UNESCO World Heritage Nominated Site'
  },
  {
    id: 'shopan-ata',
    name: 'Shopan-Ata',
    slug: 'shopan-ata',
    subtitle: 'An ancient underground necropolis and Sufi sanctuary on old Silk Road trails.',
    description: 'One of the oldest and largest underground rock mosques in Mangystau surrounded by an ancient necropolis.',
    overview: 'Shopan-Ata is a major historical and spiritual complex in Mangystau. It comprises an underground mosque carved directly into a limestone hill and a expansive necropolis with thousands of gravestones, mausoleums, and carved stelae spanning from the 10th to the 20th century.',
    history: 'According to local tradition, Shopan-Ata was a disciple of the renowned Sufi master Khoja Ahmed Yasawi in the 12th century. The site sat directly along Silk Road caravan trails between Khorezm and the Caspian Sea shore, providing spiritual solace and shelter to travelers.',
    geology: 'Carved out of soft sandstone and chalk rock faces, the complex features early rock-cut architectural traditions unique to the Mangystau region.',
    whatYouWillSee: [
      'Underground mosque chambers illuminated by natural light wells',
      'Centuries-old Kazakh carved tombstones (Kulpytas) and mausoleums',
      'Sacred ancient mulberry tree believed to possess spiritual energy',
      'Historical caravan shelter ruins'
    ],
    howToGetThere: 'Located approximately 210 km southeast of Aktau along the route to Beket-Ata.',
    bestTimeToVisit: 'Spring and Autumn.',
    location: 'Karakiya District, Mangystau',
    latitude: 43.5500,
    longitude: 53.4167,
    difficulty: 'Easy',
    duration: 'Half day',
    bestSeason: 'April–May / September–October',
    seasons: ['Spring', 'Autumn', 'Summer', 'Winter'],
    type: ['Sacred', 'Historical', 'Cultural'],
    travelStyles: ['Cultural', 'Family', 'Photography'],
    accessType: 'Easy road access',
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1600',
    images: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200', caption: 'Ancient Necropolis at Shopan-Ata', category: 'SACRED SITES' }
    ],
    safety: [
      'Dress modestly and remove shoes before entering mosque rooms.',
      'Do not climb or lean on fragile historical gravestones or mausoleum walls.'
    ],
    whatToBring: ['Modest Clothing', 'Slip-on Shoes or Easy Footwear', 'Camera'],
    nearbyAttractions: ['Beket-Ata', 'Karakiya Depression'],
    transport: 'Accessible via paved asphalt highway connecting Aktau and Senek.'
  },
  {
    id: 'shakpak-ata',
    name: 'Shakpak-Ata',
    slug: 'shakpak-ata',
    subtitle: 'The cruciform rock mosque with ancient petroglyphs and honeycomb cliffs.',
    description: 'A masterpiece of underground architecture carved in chalk, featuring unique cross-shaped chambers and carved inscriptions.',
    overview: 'Shakpak-Ata is arguably the most artistically refined underground mosque in Mangystau. Carved into a limestone cliff near Tyub-Karagan peninsula, the mosque features a rare cruciform layout (four chambers aligned to cardinal directions) and intricate wall petroglyphs depicting horses, hands, and Arabic calligraphy.',
    history: 'The exact dating remains a subject of ongoing archaeological research, with early elements dating from the 9th to 10th centuries. The name is linked to Shakpak-Ata, a legendary Sufi healer known as the "Father of Flint".',
    geology: 'The exterior limestone cliffs showcase stunning natural weathering patterns resembling honeycomb structures (tafoni), created by wind and salt spray erosion from the Caspian Sea.',
    whatYouWillSee: [
      'Cross-shaped underground prayer rooms with central dome openings',
      'Ancient petroglyphs of horses, lotus flowers, and Sufi calligraphy',
      'Surrounding honeycomb chalk cliff formations (Tafoni)',
      'The ancient necropolis overlooking the Caspian horizon'
    ],
    howToGetThere: 'Located approximately 130 km north of Aktau on the Tupkaragan peninsula via asphalt road followed by a short gravel stretch.',
    bestTimeToVisit: 'April to October.',
    location: 'Tupkaragan District, 130 km north of Aktau',
    latitude: 44.4333,
    longitude: 51.1333,
    difficulty: 'Easy',
    duration: 'Half day',
    bestSeason: 'April–May / September–October',
    seasons: ['Spring', 'Summer', 'Autumn'],
    type: ['Sacred', 'Historical', 'Geological', 'Photography'],
    travelStyles: ['Cultural', 'Photography', 'Family'],
    accessType: 'SUV recommended',
    heroImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600',
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200', caption: 'Chalk portal of Shakpak-Ata Underground Mosque', category: 'SACRED SITES' }
    ],
    safety: [
      'Do not damage, touch, or alter fragile historical wall carvings or inscriptions.',
      'Watch your step on slippery chalk steps inside lower chambers.'
    ],
    whatToBring: ['Flashlight or Phone Light', 'Modest Clothing', 'Camera'],
    nearbyAttractions: ['Kapan Canyon', 'Caspian Sea Coast'],
    transport: 'Accessible by standard vehicle or SUV from Aktau.'
  },
  {
    id: 'torysh',
    name: 'Valley of Balls (Torysh)',
    slug: 'torysh',
    subtitle: 'Hundreds of mysterious spherical stone concretions scattered across desert valleys.',
    description: 'An enigmatic geological field strewn with thousands of spherical stone balls ranging from marble-sized pebbles to giant boulders.',
    overview: 'Torysh, known globally as the "Valley of Balls", is one of Mangystau’s most mysterious natural wonders. Scattered across vast desert rolling hills are thousands of stone spheres (concretions), many perfectly round, looking like giant bowling balls discarded by ancient mythical titans.',
    history: 'Local Kazakh folklore attributes the valley to invading enemy armies turned to stone by divine intervention. Scientific explanation centers on natural geological concretion processes inside ancient seabed sediments millions of years ago.',
    geology: 'Concretions formed in deep sedimentary clay layers when mineralized waters deposited calcium carbonate and silica around organic nuclei (mollusk shells or organic fragments). As surrounding softer clay eroded over millions of years, the harder spherical stones remained behind.',
    whatYouWillSee: [
      'Vast field of spherical stone balls ranging up to 3 metres in diameter',
      'Hollow, cracked, and split stone spheres exposing inner crystal rings',
      'Surrounding desert steppe hills dotted with unique stone clusters',
      'Photogenic sunset shadows cast by spherical rock alignments'
    ],
    howToGetThere: 'Located approximately 105 km north of Aktau via asphalt road towards Taushyk followed by a 15 km unpaved desert dirt road.',
    bestTimeToVisit: 'April–May and September–October.',
    location: 'Tupkaragan District, Mangystau',
    latitude: 44.3167,
    longitude: 51.5833,
    difficulty: 'Easy',
    duration: 'Half day',
    bestSeason: 'April–May / September–October',
    seasons: ['Spring', 'Summer', 'Autumn'],
    type: ['Geological', 'Nature', 'Photography'],
    travelStyles: ['Family', 'Photography', 'Adventure'],
    accessType: 'SUV recommended',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600',
    images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200', caption: 'Spherical stone concretions at Torysh', category: 'TORYSH' }
    ],
    safety: [
      'Do not vandalize or attempt to roll or move stone balls; they are protected geological heritage.',
      'Desert heat can build quickly; wear sun protection.'
    ],
    whatToBring: ['Camera', 'Comfortable Walking Shoes', 'Sun Hat', 'Water'],
    nearbyAttractions: ['Sherkala Mountain', 'Ayrakty Mountains'],
    transport: '1.5 hours drive from Aktau. SUV recommended for off-road tracks.'
  },
  {
    id: 'karakiya',
    name: 'Karakiya Depression',
    slug: 'karakiya',
    subtitle: 'The lowest point in Kazakhstan and one of the deepest dry depressions on Earth.',
    description: 'A vast land basin dropping to 132 metres below sea level, offering panoramic views of raw geological scale.',
    overview: 'Karakiya Depression (meaning "Black Mouth" or "Black Slope") is one of the world’s lowest dry land basins, reaching 132 metres below world sea level. Stretching over 85 km in length, this immense basin presents a striking landscape of steep cliff drop-offs, salt lakes, and dry desert plains.',
    history: 'Ancient trade routes skirted the high cliffs of Karakiya. Nomads avoided entering the deep basin floor during peak summer due to intense microclimatic heat trapped within the low-altitude basin.',
    geology: 'Formed through karst processes where underground water dissolved soluble limestone layers, causing vast surface land collapse, followed by tectonic sinking and wind deflation.',
    whatYouWillSee: [
      'Panoramic roadside viewing point overlooking the vast basin floor',
      'The sign officially marking 132 metres below sea level',
      'Dramatic geological stratification in cliff wall exposures',
      'Migratory bird stopovers at seasonal salt pools in spring'
    ],
    howToGetThere: 'Located just 50 km southeast of Aktau along the main paved highway leading to Zhanaozen.',
    bestTimeToVisit: 'All year. Spring and Autumn provide optimal climate for hiking near the upper rim.',
    location: 'Karakiya District, 50 km from Aktau',
    latitude: 43.4000,
    longitude: 51.9000,
    difficulty: 'Easy',
    duration: '1–3 hours',
    bestSeason: 'Spring / Autumn / All year',
    seasons: ['Spring', 'Autumn', 'Winter', 'All year'],
    type: ['Geological', 'Nature'],
    travelStyles: ['Relaxation', 'Family', 'Photography'],
    accessType: 'Easy road access',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600',
    images: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200', caption: 'Overlook across the Karakiya Depression', category: 'KARAKIYA' }
    ],
    safety: [
      'Temperatures inside the depression basin can be 5–8°C hotter than surrounding plains in summer.',
      'Maintain distance from crumbling cliff rims at roadside overlooks.'
    ],
    whatToBring: ['Camera', 'Sunglasses', 'Drinking Water'],
    nearbyAttractions: ['Aktau City', 'Shopan-Ata'],
    transport: '40 minutes drive from Aktau along smooth asphalt highway.'
  },
  {
    id: 'ayrakty',
    name: 'Ayrakty Mountains',
    slug: 'ayrakty',
    subtitle: 'The Valley of Castles with towering residual rock fortresses and ancient petroglyphs.',
    description: 'A striking group of isolated mountain massifs resembling medieval fortresses, turrets, and gothic castles rising from the steppe.',
    overview: 'Ayrakty-Shomanay, famously named the "Valley of Castles" by Ukrainian poet and painter Taras Shevchenko in 1851, is a collection of residual mountain blocks. Weathered by wind and water, the flat-topped massifs feature vertical spires, battlements, and carved ravines that look like natural medieval strongholds.',
    history: 'On the flat summit tops of Ayrakty, archaeologists discovered ancient petroglyphs depicting saiga antelopes, argali sheep, camels, and hunting scenes etched into limestone blocks centuries ago.',
    geology: 'Ayrakty represents remnant residual mountains created as softer surrounding terrain eroded away. The hard caprock layer protects underlying chalk sediments from collapsing.',
    whatYouWillSee: [
      'Towering mountain silhouettes resembling fantasy castles and cathedrals',
      'Panoramic hiking trails reaching upper ridge viewpoints',
      'Ancient petroglyphs carved into hilltop stone slabs',
      'Blooming wild tulips in spring valleys between peaks'
    ],
    howToGetThere: 'Located approximately 180 km northeast of Aktau, near Sherkala Mountain.',
    bestTimeToVisit: 'April to May (tulip season) and September to October.',
    location: 'Mangystau District, near Shetpe',
    latitude: 44.2167,
    longitude: 52.1167,
    difficulty: 'Easy',
    duration: 'Half day',
    bestSeason: 'April–May / September–October',
    seasons: ['Spring', 'Autumn'],
    type: ['Nature', 'Geological', 'Photography', 'Adventure'],
    travelStyles: ['Adventure', 'Photography', 'Family'],
    accessType: 'SUV recommended',
    heroImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600',
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200', caption: 'Valley of Castles rock towers', category: 'AYRAKTY' }
    ],
    safety: [
      'Hiking to upper ridge view points requires careful footing on loose gravel paths.',
      'Avoid hiking during strong windstorms.'
    ],
    whatToBring: ['Trekking Boots', 'Water', 'Camera', 'Windbreaker'],
    nearbyAttractions: ['Sherkala Mountain', 'Torysh Valley of Balls'],
    transport: '2 hours drive from Aktau. Combined easily in 1-day loop tours.'
  }
];

export const INITIAL_STORIES: TravelStory[] = [
  {
    id: 'geological-story-bozzhyra',
    title: 'The Geological Story of Bozzhyra',
    slug: 'geological-story-bozzhyra',
    excerpt: 'How millions of years of ocean deposits, tectonic forces, and wind erosion sculpted Central Asia’s most iconic chalk towers.',
    category: 'GEOLOGY & LANDSCAPES',
    author: 'Dr. Almaz Beketov',
    readTime: '6 min read',
    publishDate: 'October 12, 2024',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200',
    content: `Standing on the edge of the Ustyurt Plateau looking down into Bozzhyra, it is difficult to imagine that this arid chalk canyon was once the bottom of a vibrant prehistoric ocean. 

Millions of years ago, the Tethys Ocean covered much of modern Central Asia. Over eons, countless microscopic marine organisms lived, died, and sank to the seabed, depositing thick layers of calcium-rich white sediment. As sea levels receded and tectonic collisions raised the land mass, the seabed was uplifted into the Ustyurt Plateau.

Subsequent climatic changes brought rain and relentless desert winds. Water carved deep drainage gorges into the soft limestone, while wind sculpted remaining vertical blocks into isolated columns, spires, and amphitheaters. The famous "Bozzhyra Fangs" represent hard limestone cores that successfully resisted erosion while surrounding softer rock dissolved away.`
  },
  {
    id: 'who-was-beket-ata',
    title: 'Who Was Beket-Ata? Legendary Master of the Desert',
    slug: 'who-was-beket-ata',
    excerpt: 'Exploring the life, spiritual legacy, and architectural marvels of Mangystau’s most revered 18th-century Sufi scholar.',
    category: 'HERITAGE & SACRED SITES',
    author: 'Gulnara Zhumabayeva',
    readTime: '8 min read',
    publishDate: 'September 28, 2024',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200',
    content: `Beket Myrzagululy, known affectionately across Kazakhstan as Beket-Ata, was born in 1750 near the Emba River. From early youth, he displayed exceptional intellectual curiosity, traveling to the ancient city of Khiva to study under famous Islamic scholars.

Upon completing his education in mathematics, astronomy, and theology, Beket-Ata returned to his native Mangystau. Rather than building wooden or brick structures in a desert devoid of timber, he used his knowledge of architectural geometry to carve underground mosques directly inside white chalk cliffs.

He constructed four major rock mosques across Mangystau: in Akmeshit, Baely, Tobykty, and his final resting place at Oglandy. These underground complexes provided stable temperatures, acoustic resonance for prayer, and safety during times of conflict. Today, thousands of pilgrims travel across desert roads to seek spiritual reflection at Beket-Ata.`
  },
  {
    id: 'why-underground-mosques',
    title: 'Why Mangystau Has Underground Mosques',
    slug: 'why-underground-mosques',
    excerpt: 'How local geology, harsh desert climate, and nomadic traditions birthed a unique subterranean architectural style.',
    category: 'ARCHITECTURE',
    author: 'Kairat Saparov',
    readTime: '5 min read',
    publishDate: 'August 15, 2024',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200',
    content: `In most world regions, mosques are constructed rising toward the heavens with tall minarets and expansive domes. In Mangystau, however, ancient master builders went into the earth.

This architectural evolution was driven by three key factors:

1. Desert Climate Protection: Mangystau summer temperatures exceed 40°C while winter winds drop below freezing. Underground chalk chambers maintain a steady, natural 16–18°C temperature year-round.
2. Natural Materials: Timber and stone building blocks were scarce in the desert plateau, but soft chalk and limestone cliffs were abundant and easily hand-carved using simple chisels.
3. Spiritual Retreat (Khilwa): Sufi tradition emphasizes meditation and quiet retreat away from worldly distractions. Subterranean chambers offered quiet sanctuary for prayer and study.`
  },
  {
    id: 'inside-valley-of-balls',
    title: 'Inside the Valley of Balls: Geology or Myth?',
    slug: 'inside-valley-of-balls',
    excerpt: 'Unraveling the mystery behind Torysh’s spherical stones through scientific geology and ancient Kazakh legends.',
    category: 'GEOLOGY & MYTHOLOGY',
    author: 'Elena Petrova',
    readTime: '4 min read',
    publishDate: 'July 04, 2024',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    content: `Walking through Torysh feels like stepping onto a giant bowling alley left behind by ancient gods. Thousands of round stone spheres cover rolling steppe hills.

Local Kazakh myths say that when an invading enemy horde swept across the steppe, local saints prayed for deliverance, and divine forces instantly turned the entire enemy army into spherical stone boulders.

Geologists offer an equally fascinating scientific explanation: spherical concretions. Millions of years ago, mineral-rich underground fluids seeped through porous mud layers. Minerals crystallized uniformly in concentric rings around a central organic fragment, forming solid spherical rocks that remained intact when softer surrounding clay eroded away.`
  }
];

export const INITIAL_PACKING_ITEMS: PackingItem[] = [
  { id: 'water', name: 'Drinking Water (5L/day)', category: 'Essential', description: 'At least 5 litres per person per day when traveling into remote desert areas.', requiredFor: ['4x4 Expedition', 'Desert Hiking'] },
  { id: 'sunscreen', name: 'SPF 50+ Sunscreen', category: 'Essential', description: 'High protection against strong desert UV rays and salt glare.', requiredFor: ['4x4 Expedition', 'Desert Hiking', 'General Travel'] },
  { id: 'hat', name: 'Wide-Brim Sun Hat & Sunglasses', category: 'Clothing', description: 'Essential protection against sunstroke and dust.', requiredFor: ['Desert Hiking', 'General Travel'] },
  { id: 'boots', name: 'Trekking Boots or Sturdy Trail Shoes', category: 'Clothing', description: 'Ankle support for walking on loose chalk, salt crust, and gravel trails.', requiredFor: ['Desert Hiking', '4x4 Expedition'] },
  { id: 'modest', name: 'Modest Clothing (Long Pants & Sleeves)', category: 'Clothing', description: 'Required for entering sacred underground mosques (headscarf for women).', requiredFor: ['Sacred Sites'] },
  { id: 'jacket', name: 'Warm Windproof Layer', category: 'Clothing', description: 'Desert temperatures drop rapidly after sunset; strong plateau winds occur year-round.', requiredFor: ['4x4 Expedition', 'Desert Hiking'] },
  { id: 'powerbank', name: 'High-Capacity Power Bank', category: 'Gear', description: 'No electrical outlets exist in remote canyon camps.', requiredFor: ['4x4 Expedition', 'General Travel'] },
  { id: 'maps', name: 'Offline Maps (Maps.me / Organic Maps)', category: 'Gear', description: 'Mobile coverage is absent in 80% of Mangystau off-road destinations.', requiredFor: ['4x4 Expedition', 'Desert Hiking'] },
  { id: 'firstaid', name: 'Personal First-Aid Kit', category: 'Essential', description: 'Basic bandages, antiseptic, rehydration salts, and personal medications.', requiredFor: ['4x4 Expedition', 'Desert Hiking', 'General Travel'] },
  { id: 'cash', name: 'Cash (Kazakhstani Tenge - KZT)', category: 'Personal', description: 'Credit cards are accepted in Aktau city, but cash is required in rural settlements.', requiredFor: ['General Travel', 'Sacred Sites'] }
];
