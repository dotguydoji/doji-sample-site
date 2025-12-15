import { Location } from '../types';

export const locations: Location[] = [
  {
    id: 'manila',
    name: 'Manila',
    description: 'The historic heart of the Philippines, Manila is a vibrant hub of culture, education, and governance. It offers a unique blend of old-world charm and modern dynamism, making it a prime location for students, professionals, and families who value history and accessibility.',
    lifestyle: 'Academic, Historic, Urban',
    averagePrice: 'PHP 150,000 - 250,000 per sqm',
    amenities: {
      hospitals: ['Philippine General Hospital', 'Manila Doctors Hospital', 'University of Santo Tomas Hospital'],
      malls: ['SM City Manila', 'SM City San Lazaro', 'Robinsons Place Manila'],
      schools: ['University of Santo Tomas', 'De La Salle University', 'University of the Philippines Manila'],
      transport: ['LRT-1 Line', 'LRT-2 Line', 'Major road networks']
    },
    imageUrl: 'https://picsum.photos/seed/manila/800/600',
    properties: [1, 2, 3, 4]
  },
  {
    id: 'makati',
    name: 'Makati City',
    description: 'As the undisputed financial capital of the country, Makati City is the pinnacle of cosmopolitan living. It is home to the nation\'s top corporations, luxury malls, and premier residential towers. Living in Makati means being at the center of power, commerce, and sophistication.',
    lifestyle: 'Corporate, Luxury, Cosmopolitan',
    averagePrice: 'PHP 280,000 - 450,000 per sqm',
    amenities: {
      hospitals: ['Makati Medical Center', 'St. Luke\'s Medical Center - BGC (nearby)'],
      malls: ['Greenbelt', 'Glorietta', 'Power Plant Mall'],
      schools: ['Ateneo Graduate School of Business', 'Assumption College San Lorenzo'],
      transport: ['MRT-3 Line', 'Major highways (EDSA, SLEX)', 'Point-to-point buses']
    },
    imageUrl: 'https://picsum.photos/seed/makati/800/600',
    properties: [5, 6]
  },
  {
    id: 'pasay',
    name: 'Pasay City',
    description: 'Pasay City is a global gateway and a premier entertainment destination. Home to the international airport, the Mall of Asia Complex, and the vibrant Entertainment City, it offers a lifestyle of excitement and convenience. It is a highly strategic location for frequent travelers and investors.',
    lifestyle: 'Entertainment, Accessible, Dynamic',
    averagePrice: 'PHP 180,000 - 300,000 per sqm',
    amenities: {
      hospitals: ['Adventist Medical Center Manila', 'San Juan de Dios Hospital'],
      malls: ['SM Mall of Asia', 'Newport Mall', 'W Mall'],
      schools: ['De La Salle University (nearby)', 'College of Saint Benilde (nearby)'],
      transport: ['NAIA Airport', 'MRT-3 & LRT-1 Lines', 'Expressways (Skyway, NAIAX)']
    },
    imageUrl: 'https://picsum.photos/seed/pasay/800/600',
    properties: [7, 8, 9, 10]
  },
  {
    id: 'quezon-city',
    name: 'Quezon City',
    description: 'Dubbed the "City of Stars," Quezon City is the largest and most populous city in Metro Manila, offering a diverse and balanced lifestyle. It is a center for government, education, and media, featuring vast green spaces, premier academic institutions, and bustling commercial districts. It\'s an ideal home for families, students, and professionals looking for a dynamic yet well-rounded urban experience.',
    lifestyle: 'Balanced, Academic, Commercial',
    averagePrice: 'PHP 170,000 - 280,000 per sqm',
    amenities: {
      hospitals: ['Philippine Heart Center', 'St. Luke\'s Medical Center - Quezon City', 'East Avenue Medical Center'],
      malls: ['SM North EDSA', 'Trinoma', 'UP Town Center', 'Araneta City'],
      schools: ['University of the Philippines Diliman', 'Ateneo de Manila University', 'Miriam College'],
      transport: ['MRT-3 Line', 'LRT-2 Line', 'MRT-7 Line (Future)', 'Major road networks (EDSA, C5)']
    },
    imageUrl: 'https://picsum.photos/seed/quezoncity/800/600',
    properties: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  },
  {
    id: 'mandaluyong',
    name: 'Mandaluyong City',
    description: 'Known as the "Tiger City" of the Philippines, Mandaluyong is a dynamic economic hub strategically located at the very center of Metro Manila. It bridges major business districts like Makati, Ortigas, and BGC, offering unparalleled connectivity and a fast-paced, convenient lifestyle. It\'s the perfect address for professionals and families who want to be at the heart of everything.',
    lifestyle: 'Central, Commercial, Connected',
    averagePrice: 'PHP 190,000 - 320,000 per sqm',
    amenities: {
      hospitals: ['VRP Medical Center', 'Mandaluyong City Medical Center', 'The Medical City (nearby)'],
      malls: ['SM Megamall', 'Shangri-La Plaza', 'The Podium', 'Robinsons Forum'],
      schools: ['Lourdes School of Mandaluyong', 'La Salle Green Hills (nearby)', 'Saint Pedro Poveda College (nearby)'],
      transport: ['MRT-3 Line (Boni, Shaw, Ortigas)', 'EDSA', 'Major ferry terminals']
    },
    imageUrl: 'https://picsum.photos/seed/mandaluyong/800/600',
    properties: [26, 27, 28, 29, 30]
  },
  {
    id: 'pasig',
    name: 'Pasig City',
    description: 'Pasig City is a thriving urban center that seamlessly blends major business districts with serene residential enclaves. Home to a portion of the Ortigas CBD and trendy lifestyle hubs like Kapitolyo and Capitol Commons, Pasig offers a balanced environment for work, life, and leisure. Its continuous growth makes it a prime location for savvy investors and families.',
    lifestyle: 'Business, Lifestyle, Residential',
    averagePrice: 'PHP 180,000 - 310,000 per sqm',
    amenities: {
      hospitals: ['The Medical City Ortigas', 'Pasig City General Hospital', 'Rizal Medical Center'],
      malls: ['Estancia at Capitol Commons', 'Ayala Malls The 30th', 'SM Center Pasig', 'Tiendesitas'],
      schools: ['University of Asia and the Pacific', 'St. Paul College Pasig', 'Pamantasan ng Lungsod ng Pasig'],
      transport: ['MRT-3 Ortigas Station', 'Major road networks (C-5, Ortigas Ave)', 'BGC-Ortigas Link Bridge']
    },
    imageUrl: 'https://picsum.photos/seed/pasig/800/600',
    properties: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
  },
  {
    id: 'taguig',
    name: 'Taguig City',
    description: 'A premier economic powerhouse, Taguig City is home to the bustling Bonifacio Global City (BGC), a world-class hub for business, lifestyle, and luxury living. It offers a sophisticated urban experience with upscale malls, international schools, and top-tier medical facilities.',
    lifestyle: 'Cosmopolitan, Business-centric, Upscale',
    averagePrice: 'PHP 250,000 - 400,000 per sqm',
    amenities: {
      hospitals: ['St. Luke\'s Medical Center - BGC', 'Taguig-Pateros District Hospital'],
      malls: ['SM Aura Premier', 'Market! Market!', 'Bonifacio High Street', 'Uptown Mall'],
      schools: ['International School Manila', 'British School Manila', 'Manila Japanese School'],
      transport: ['BGC Bus System', 'Major road networks (C-5, SLEX)', 'Proximity to NAIA']
    },
    imageUrl: 'https://picsum.photos/seed/taguig/800/600',
    properties: [41, 42, 43, 44, 45, 46, 47, 48]
  },
  {
    id: 'caloocan',
    name: 'Caloocan City',
    description: 'Caloocan City is a historic and highly urbanized city known for its vibrant commercial centers and strategic transport links. It offers a dynamic and practical urban lifestyle, with growing infrastructure and accessible residential options for families and professionals.',
    lifestyle: 'Urban, Commercial, Accessible',
    averagePrice: 'PHP 120,000 - 180,000 per sqm',
    amenities: {
      hospitals: ['Caloocan City Medical Center', 'MCU-FDT Medical Foundation Hospital', 'Our Lady of Grace Hospital'],
      malls: ['SM City Grand Central', 'Victory Central Mall', 'Puregold Monumento'],
      schools: ['University of Caloocan City', 'Manila Central University', 'La Consolacion College'],
      transport: ['LRT-1 Line (Monumento, 5th Ave)', 'MRT-7 (Future)', 'Major road networks (EDSA, NLEX)']
    },
    imageUrl: 'https://picsum.photos/seed/caloocan/800/600',
    properties: [49]
  },
  {
    id: 'las-pinas',
    name: 'Las Piñas',
    description: 'Las Piñas City offers a blend of commercial vibrancy and residential tranquility. It provides a more relaxed, family-oriented community feel while still offering modern conveniences, making it an ideal home away from the central metro\'s congestion.',
    lifestyle: 'Suburban, Family-Oriented, Community-driven',
    averagePrice: 'PHP 140,000 - 220,000 per sqm',
    amenities: {
      hospitals: ['University of Perpetual Help DALTA Medical Center', 'Las Piñas Doctors Hospital', 'Pope John Paul II Hospital'],
      malls: ['SM Southmall', 'Robinsons Place Las Piñas', 'Vista Mall Las Piñas'],
      schools: ['University of Perpetual Help System DALTA', 'Southville International School', 'St. Joseph\'s Academy'],
      transport: ['Alabang-Zapote Road', 'Manila-Cavite Expressway (CAVITEX)', 'Proximity to NAIA']
    },
    imageUrl: 'https://picsum.photos/seed/laspinas/800/600',
    properties: [50, 51]
  },
  {
    id: 'paranaque',
    name: 'Parañaque City',
    description: 'Dubbed the "Gateway to the South," Parañaque City offers a dynamic lifestyle with its proximity to NAIA, the vibrant Entertainment City, and major business hubs. It combines serene residential villages with bustling commercial districts, providing a balanced urban experience.',
    lifestyle: 'Suburban, Connected, Entertainment-focused',
    averagePrice: 'PHP 160,000 - 290,000 per sqm',
    amenities: {
      hospitals: ['Parañaque Doctors\' Hospital', 'Medical Center Parañaque', 'Unihealth-Parañaque Hospital'],
      malls: ['SM City BF Parañaque', 'SM City Sucat', 'Ayala Malls Manila Bay'],
      schools: ['St. Paul College of Parañaque', 'PATTS College of Aeronautics', 'Manresa School'],
      transport: ['NAIA Airport', 'Skyway', 'SLEX', 'LRT-1 Extension', 'CAVITEX']
    },
    imageUrl: 'https://picsum.photos/seed/paranaque/800/600',
    properties: [52, 53, 54, 55, 56, 57]
  },
  {
    id: 'muntinlupa',
    name: 'Muntinlupa City',
    description: 'Known as the "Emerald City," Muntinlupa is a premier residential and commercial hub in the south. It is home to the Alabang Business District, exclusive villages, and high-end lifestyle centers, offering an upscale and tranquil suburban environment for discerning families and professionals.',
    lifestyle: 'Upscale, Corporate, Suburban',
    averagePrice: 'PHP 180,000 - 320,000 per sqm',
    amenities: {
      hospitals: ['Asian Hospital and Medical Center', 'Ospital ng Muntinlupa', 'Alabang Medical Center'],
      malls: ['Alabang Town Center', 'Festival Mall Alabang', 'Molito Lifestyle Center'],
      schools: ['De La Salle Santiago Zobel School', 'PAREF Woodrose School', 'San Beda College Alabang'],
      transport: ['SLEX', 'Skyway', 'PNR Railway', 'MCX']
    },
    imageUrl: 'https://picsum.photos/seed/muntinlupa/800/600',
    properties: [58]
  },
  {
    id: 'benguet',
    name: 'Benguet',
    description: 'Escape to the cool highlands of Benguet, the "Salad Bowl of the Philippines." This mountain province offers a serene lifestyle amidst breathtaking natural landscapes. It is the perfect location for a leisure property or a vacation home, providing a refreshing retreat from city life.',
    lifestyle: 'Leisure, Nature-centric, Cool-climate',
    averagePrice: 'PHP 150,000 - 250,000 per sqm (for condos)',
    amenities: {
      hospitals: ['Baguio General Hospital', 'Notre Dame De Chartres Hospital (in Baguio)'],
      malls: ['SM City Baguio'],
      schools: ['University of the Philippines Baguio', 'Saint Louis University (in Baguio)'],
      transport: ['Marcos Highway', 'Kennon Road']
    },
    imageUrl: 'https://picsum.photos/seed/benguet/800/600',
    properties: [59]
  },
  {
    id: 'batangas',
    name: 'Batangas',
    description: 'Batangas is a premier destination for leisure and industry, famous for its world-class dive sites, pristine beaches, and bustling economic zones. Owning a property here means having a personal sanctuary for weekend getaways and a valuable asset in a rapidly growing region.',
    lifestyle: 'Resort, Coastal, Industrial',
    averagePrice: 'PHP 170,000 - 300,000 per sqm (for condos)',
    amenities: {
      hospitals: ['Batangas Medical Center', 'San Juan District Hospital', 'Mary Mediatrix Medical Center'],
      malls: ['SM City Batangas', 'Robinsons Lipa', 'The Outlets at Lipa'],
      schools: ['Batangas State University', 'De La Salle Lipa'],
      transport: ['SLEX', 'STAR Tollway', 'Batangas Port']
    },
    imageUrl: 'https://picsum.photos/seed/batangas/800/600',
    properties: [60]
  },
  {
    id: 'cavite',
    name: 'Cavite',
    description: 'A province rich in history and experiencing rapid urbanization, Cavite offers a strategic and affordable alternative to Metro Manila. With its growing infrastructure, numerous commercial centers, and diverse residential options, it is an ideal location for families and professionals seeking a balanced suburban lifestyle.',
    lifestyle: 'Suburban, Historic, Developing',
    averagePrice: 'PHP 110,000 - 180,000 per sqm',
    amenities: {
      hospitals: ['St. Dominic Medical Center', 'Molino Doctors Hospital', 'De La Salle University Medical Center'],
      malls: ['SM City Bacoor', 'Vistamall Daang Hari', 'Robinsons Place General Trias'],
      schools: ['De La Salle University - Dasmariñas', 'Lyceum of the Philippines University - Cavite'],
      transport: ['CAVITEX', 'MCX', 'Aguinaldo Highway', 'LRT-1 Extension (Future)']
    },
    imageUrl: 'https://picsum.photos/seed/cavite/800/600',
    properties: [61]
  },
  {
    id: 'baguio-city',
    name: 'Baguio City',
    description: 'Crowned the "Summer Capital of the Philippines," Baguio City offers a unique mountain resort lifestyle with its cool climate, pine-scented air, and vibrant arts scene. Owning a property here is like having a year-round vacation home, a perfect escape from the lowland heat and a promising investment in a top tourist destination.',
    lifestyle: 'Mountain Retreat, Cool Climate, Touristic',
    averagePrice: 'PHP 180,000 - 280,000 per sqm',
    amenities: {
      hospitals: ['Baguio General Hospital', 'Notre Dame de Chartres Hospital', 'SLU Hospital of the Sacred Heart'],
      malls: ['SM City Baguio', 'Porta Vaga Mall', 'Abanao Square'],
      schools: ['University of the Philippines Baguio', 'Saint Louis University', 'University of Baguio'],
      transport: ['Loakan Airport', 'Major bus terminals', 'Marcos Highway']
    },
    imageUrl: 'https://picsum.photos/seed/baguio/800/600',
    properties: [62, 63]
  },
  {
    id: 'boracay',
    name: 'Boracay',
    description: 'Famed for its stunning white-sand beaches and vibrant nightlife, Boracay is a world-class tropical paradise. A condotel investment here offers the dual benefits of a personal luxury getaway and a professionally managed rental property, capitalizing on the island\'s high tourist traffic and strong demand for premium accommodations.',
    lifestyle: 'Beachfront, Luxury Leisure, High-End Tourist',
    averagePrice: 'PHP 250,000 - 400,000 per sqm',
    amenities: {
      hospitals: ['Ciriaco S. Tirol Hospital', 'Boracay Medical Center'],
      malls: ['D\'Mall Boracay', 'CityMall Boracay'],
      schools: ['Boracay European International School', 'Aklan State University (mainland)'],
      transport: ['Caticlan Airport (Godofredo P. Ramos Airport)', 'Cagban Jetty Port']
    },
    imageUrl: 'https://picsum.photos/seed/boracay/800/600',
    properties: [64]
  },
  {
    id: 'cebu',
    name: 'Cebu',
    description: 'As the "Queen City of the South," Cebu is a bustling metropolis that offers a perfect blend of urban dynamism and natural wonders. It\'s a major hub for commerce, IT, and tourism, providing a robust real estate market with strong potential for growth, making it an ideal location for both residential and investment properties.',
    lifestyle: 'Metropolitan, Commercial, Historic & Coastal',
    averagePrice: 'PHP 150,000 - 250,000 per sqm',
    amenities: {
      hospitals: ['Chong Hua Hospital', 'Cebu Doctors\' University Hospital', 'Perpetual Succour Hospital'],
      malls: ['Ayala Center Cebu', 'SM City Cebu', 'SM Seaside City Cebu'],
      schools: ['University of San Carlos', 'Cebu Normal University', 'University of the Philippines Cebu'],
      transport: ['Mactan-Cebu International Airport', 'Cebu International Port', 'Major road networks']
    },
    imageUrl: 'https://picsum.photos/seed/cebu/800/600',
    properties: [65]
  },
  {
    id: 'davao-city',
    name: 'Davao City',
    description: 'Known for its safety, clean environment, and vibrant economy, Davao City is one of the most livable cities in the Philippines. It offers a relaxed yet progressive lifestyle, with a mix of modern urban amenities and easy access to stunning natural attractions. Investing in Davao means buying into a city with a bright and stable future.',
    lifestyle: 'Safe, Eco-Friendly, Progressive Urban',
    averagePrice: 'PHP 130,000 - 220,000 per sqm',
    amenities: {
      hospitals: ['Davao Doctors Hospital', 'San Pedro Hospital', 'Brokenshire Hospital'],
      malls: ['SM Lanang Premier', 'Abreeza Mall', 'SM City Davao'],
      schools: ['Ateneo de Davao University', 'University of the Philippines Mindanao', 'University of the Immaculate Conception'],
      transport: ['Francisco Bangoy International Airport', 'Davao City Overland Transport Terminal']
    },
    imageUrl: 'https://picsum.photos/seed/davao/800/600',
    properties: [66]
  }
];