export interface Embassy {
    country: string;
    city: string;
    type: 'Ambassade' | 'Consulat';
    address: string;
    phone?: string;
    email?: string;
    website?: string;
    region: 'Afrique' | 'Europe' | 'Amériques' | 'Asie' | 'Moyen-Orient';
    services?: string[];
    notes?: string;
}

export const embassies: Embassy[] = [
    {
        country: 'France',
        city: 'Paris',
        type: 'Ambassade',
        address: '159 Boulevard Haussmann, 75008 Paris',
        phone: '+33 1 43 59 90 63',
        email: 'ambassade@burkina-faso.fr',
        website: 'https://www.ambassadeburkinafrance.org',
        region: 'Europe',
        services: [
            'Visas',
            'Passeports',
            'Légalisation de documents',
            'Assistance consulaire',
            'Services aux étudiants'
        ]
    },
    {
        country: 'États-Unis',
        city: 'Washington DC',
        type: 'Ambassade',
        address: '2340 Massachusetts Avenue NW, Washington, DC 20008',
        phone: '+1 202-332-5577',
        email: 'embassy@burkina-usa.org',
        website: 'https://www.burkina-usa.org',
        region: 'Amériques',
        services: [
            'Visas',
            'Passeports',
            'Services consulaires',
            'Relations commerciales'
        ]
    },
    {
        country: 'Canada',
        city: 'Ottawa',
        type: 'Ambassade',
        address: '48 Range Road, Ottawa, ON K1N 8J4',
        phone: '+1 613-238-4796',
        email: 'ambottawa@diplomatie.gov.bf',
        region: 'Amériques',
        services: [
            'Visas',
            'Passeports',
            'Services consulaires',
            'Services aux étudiants',
            'Relations commerciales'
        ]
    },
    {
        country: 'Côte d\'Ivoire',
        city: 'Abidjan',
        type: 'Ambassade',
        address: 'Cocody Ambassades, Rue des Jardins',
        phone: '+225 22 48 99 60',
        email: 'ambabidjan@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Passeports',
            'Services consulaires',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Sénégal',
        city: 'Dakar',
        type: 'Ambassade',
        address: 'Avenue Cheikh Anta Diop x Rue Leo Frobenius, Fann Résidence',
        phone: '+221 33 825 88 87',
        email: 'ambadakar@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques'
        ]
    },
    {
        country: 'Maroc',
        city: 'Rabat',
        type: 'Ambassade',
        address: '12, Rue Thami Lamdawar, Souissi',
        phone: '+212 537 63 09 73',
        email: 'ambarabat@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services aux étudiants',
            'Coopération culturelle'
        ]
    },
    {
        country: 'Ghana',
        city: 'Accra',
        type: 'Ambassade',
        address: 'No. 772 Independence Avenue, Accra',
        phone: '+233 302 774 308',
        email: 'ambaaccra@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Mali',
        city: 'Bamako',
        type: 'Ambassade',
        address: 'Badalabougou Est, Rue 14, Porte 65',
        phone: '+223 20 22 32 69',
        email: 'ambabamako@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Passeports',
            'Services consulaires',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Niger',
        city: 'Niamey',
        type: 'Ambassade',
        address: 'Avenue du Général de Gaulle, Plateau',
        phone: '+227 20 72 37 37',
        email: 'ambaniamey@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Belgique',
        city: 'Bruxelles',
        type: 'Ambassade',
        address: 'Avenue Frankling Roosevelt 126, 1050 Bruxelles',
        phone: '+32 2 734 66 09',
        email: 'ambassade@burkina.be',
        website: 'https://www.ambassadeburkinabe.be',
        region: 'Europe',
        services: [
            'Visas',
            'Passeports',
            'Relations avec l\'UE',
            'Services consulaires'
        ]
    },
    {
        country: 'Allemagne',
        city: 'Berlin',
        type: 'Ambassade',
        address: 'Karolingerplatz 10-11, 14052 Berlin',
        phone: '+49 30 301 059 80',
        email: 'ambaberlin@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération technique'
        ]
    },
    {
        country: 'Chine',
        city: 'Beijing',
        type: 'Ambassade',
        address: 'No. 8 Sanlitun Dongwujie, Chaoyang District',
        phone: '+86 10 6532 3391',
        email: 'ambapekin@diplomatie.gov.bf',
        region: 'Asie',
        services: [
            'Visas',
            'Relations commerciales',
            'Coopération économique'
        ]
    },
    {
        country: 'Japon',
        city: 'Tokyo',
        type: 'Ambassade',
        address: '2-2-1 Yoyogi, Shibuya-ku, Tokyo 151-0053',
        phone: '+81 3 3485 1930',
        email: 'ambatokyo@diplomatie.gov.bf',
        region: 'Asie',
        services: [
            'Visas',
            'Relations commerciales',
            'Coopération technique',
            'Services consulaires'
        ]
    },
    {
        country: 'Arabie Saoudite',
        city: 'Riyad',
        type: 'Ambassade',
        address: 'Diplomatic Quarter, P.O. Box 94397',
        phone: '+966 11 488 1434',
        email: 'ambaryad@diplomatie.gov.bf',
        region: 'Moyen-Orient',
        services: [
            'Visas',
            'Services consulaires',
            'Affaires religieuses'
        ]
    },
    {
        country: 'Égypte',
        city: 'Le Caire',
        type: 'Ambassade',
        address: '3 Ahmed Nessim St., Giza',
        phone: '+20 2 3761 9434',
        email: 'ambacaire@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Coopération culturelle',
            'Services aux étudiants'
        ]
    },
    {
        country: 'Afrique du Sud',
        city: 'Pretoria',
        type: 'Ambassade',
        address: '798 George Avenue, Arcadia, Pretoria',
        phone: '+27 12 342 6978',
        email: 'ambapretoria@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques'
        ]
    },
    {
        country: 'Éthiopie',
        city: 'Addis-Abeba',
        type: 'Ambassade',
        address: 'Bole Sub-City, Woreda 03, African Avenue',
        phone: '+251 11 661 5863',
        email: 'ambaaddis@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations avec l\'UA',
            'Coopération multilatérale'
        ]
    },
    {
        country: 'Russie',
        city: 'Moscou',
        type: 'Ambassade',
        address: 'Kaloshin pereulok 6, 119002 Moscou',
        phone: '+7 495 241 03 14',
        email: 'ambamoscou@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération technique'
        ]
    },
    {
        country: 'Italie',
        city: 'Rome',
        type: 'Consulat',
        address: 'Via XX Settembre 86, 00187 Rome',
        phone: '+39 06 420 17 405',
        email: 'consulat.rome@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Algérie',
        city: 'Alger',
        type: 'Ambassade',
        address: '14 Rue des Frères Benhafid, El Mouradia, Alger',
        phone: '+213 21 69 10 71',
        email: 'ambaalger@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Services aux étudiants'
        ]
    },
    {
        country: 'Tunisie',
        city: 'Tunis',
        type: 'Ambassade',
        address: '13 Rue du Métal, Zone Industrielle Charguia I, 2035 Tunis',
        phone: '+216 71 767 632',
        email: 'ambatunis@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Services aux étudiants',
            'Coopération culturelle'
        ]
    },
    {
        country: 'Nigeria',
        city: 'Abuja',
        type: 'Ambassade',
        address: 'Plot 1129, Joseph Gomwalk Street, Asokoro District, Abuja',
        phone: '+234 9 876 5432',
        email: 'ambaabuja@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Coopération économique'
        ]
    },
    {
        country: 'Cameroun',
        city: 'Yaoundé',
        type: 'Ambassade',
        address: 'Quartier Bastos, Boulevard de l\'URSS, Yaoundé',
        phone: '+237 222 20 68 97',
        email: 'ambayaounde@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Assistance aux ressortissants',
            'Relations économiques'
        ]
    },
    {
        country: 'Gabon',
        city: 'Libreville',
        type: 'Ambassade',
        address: 'Boulevard Triomphal Omar Bongo, Quartier Batterie IV, Libreville',
        phone: '+241 11 44 47 09',
        email: 'ambalib@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Togo',
        city: 'Lomé',
        type: 'Ambassade',
        address: 'Boulevard du 13 Janvier, Quartier Nyékonakpoè, Lomé',
        phone: '+228 22 21 79 06',
        email: 'ambalome@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Royaume-Uni',
        city: 'Londres',
        type: 'Ambassade',
        address: '44 Lancaster Gate, London W2 3NA',
        phone: '+44 20 7937 3422',
        email: 'ambalondres@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Services aux étudiants'
        ]
    },
    {
        country: 'Suisse',
        city: 'Genève',
        type: 'Consulat',
        address: '10 Route de Florissant, 1206 Genève',
        phone: '+41 22 347 63 30',
        email: 'consulat.geneve@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Relations avec les organisations internationales'
        ]
    },
    {
        country: 'Espagne',
        city: 'Madrid',
        type: 'Ambassade',
        address: 'Calle Serrano 90, 28006 Madrid',
        phone: '+34 91 577 34 92',
        email: 'ambamadrid@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération culturelle'
        ]
    },
    {
        country: 'Suède',
        city: 'Stockholm',
        type: 'Ambassade',
        address: 'Birger Jarlsgatan 37, 111 45 Stockholm',
        phone: '+46 8 611 63 10',
        email: 'ambastockholm@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Coopération technique',
            'Relations économiques'
        ]
    },
    {
        country: 'Inde',
        city: 'New Delhi',
        type: 'Ambassade',
        address: 'C-32 Anand Niketan, New Delhi 110021',
        phone: '+91 11 2411 1408',
        email: 'ambanewdelhi@diplomatie.gov.bf',
        region: 'Asie',
        services: [
            'Visas',
            'Services consulaires',
            'Coopération technique',
            'Relations commerciales'
        ]
    },
    {
        country: 'Corée du Sud',
        city: 'Séoul',
        type: 'Ambassade',
        address: '389-1 Hannam-dong, Yongsan-gu, Seoul',
        phone: '+82 2 794 1951',
        email: 'ambaseoul@diplomatie.gov.bf',
        region: 'Asie',
        services: [
            'Visas',
            'Services consulaires',
            'Coopération technique',
            'Relations économiques'
        ]
    },
    {
        country: 'Indonésie',
        city: 'Jakarta',
        type: 'Ambassade',
        address: 'Jalan H.R. Rasuna Said Kav. X-5 No.2-3, Kuningan, Jakarta',
        phone: '+62 21 522 3530',
        email: 'ambajakarta@diplomatie.gov.bf',
        region: 'Asie',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération culturelle'
        ]
    },
    {
        country: 'Bénin',
        city: 'Cotonou',
        type: 'Ambassade',
        address: 'Quartier Haie Vive, Lot 1108, Cotonou',
        phone: '+229 21 30 10 53',
        email: 'ambacotonou@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Guinée',
        city: 'Conakry',
        type: 'Ambassade',
        address: 'Corniche Nord, Commune de Dixinn, Conakry',
        phone: '+224 621 35 35 15',
        email: 'ambaconakry@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Mauritanie',
        city: 'Nouakchott',
        type: 'Ambassade',
        address: 'Ilot K, Rue 42-141, Tevragh Zeina, Nouakchott',
        phone: '+222 45 25 17 60',
        email: 'ambanouakchott@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'République Démocratique du Congo',
        city: 'Kinshasa',
        type: 'Ambassade',
        address: 'Avenue de la Justice, Commune de la Gombe, Kinshasa',
        phone: '+243 81 500 5050',
        email: 'ambakinshasa@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Angola',
        city: 'Luanda',
        type: 'Ambassade',
        address: 'Rua Comandante Nzaji, Bairro Alvalade, Luanda',
        phone: '+244 222 32 1095',
        email: 'ambaluanda@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération minière'
        ]
    },
    {
        country: 'Kenya',
        city: 'Nairobi',
        type: 'Ambassade',
        address: 'Gigiri Drive, UN Avenue, Nairobi',
        phone: '+254 20 712 2426',
        email: 'ambanairobi@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Coopération régionale'
        ]
    },
    {
        country: 'Zimbabwe',
        city: 'Harare',
        type: 'Ambassade',
        address: '2 Pine Road, Belgravia, Harare',
        phone: '+263 24 279 3647',
        email: 'ambaharare@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération agricole'
        ]
    },
    {
        country: 'Soudan',
        city: 'Khartoum',
        type: 'Ambassade',
        address: 'Street 15, Block 11, Riyadh Area, Khartoum',
        phone: '+249 183 571 195',
        email: 'ambakhartoum@diplomatie.gov.bf',
        region: 'Afrique',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération culturelle'
        ]
    },
    {
        country: 'Pays-Bas',
        city: 'La Haye',
        type: 'Ambassade',
        address: 'Groot Hertoginnelaan 26, 2517 EG La Haye',
        phone: '+31 70 362 6672',
        email: 'ambalahaye@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Relations avec la CPI',
            'Coopération économique'
        ]
    },
    {
        country: 'Autriche',
        city: 'Vienne',
        type: 'Ambassade',
        address: 'Strohgasse 14c, 1030 Vienne',
        phone: '+43 1 586 85 72',
        email: 'ambavienne@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Relations avec l\'ONUDI',
            'Coopération technique'
        ]
    },
    {
        country: 'Portugal',
        city: 'Lisbonne',
        type: 'Consulat',
        address: 'Avenida da Liberdade 180, 1250-146 Lisbonne',
        phone: '+351 21 346 5464',
        email: 'consulat.lisbonne@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Assistance aux ressortissants'
        ]
    },
    {
        country: 'Norvège',
        city: 'Oslo',
        type: 'Ambassade',
        address: 'Drammensveien 88C, 0271 Oslo',
        phone: '+47 22 44 82 80',
        email: 'ambaoslo@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Coopération au développement',
            'Relations économiques'
        ]
    },
    {
        country: 'Danemark',
        city: 'Copenhague',
        type: 'Ambassade',
        address: 'Vesterbrogade 35, 1620 Copenhague',
        phone: '+45 33 31 61 90',
        email: 'ambacopenhague@diplomatie.gov.bf',
        region: 'Europe',
        services: [
            'Visas',
            'Services consulaires',
            'Coopération technique',
            'Relations économiques'
        ]
    },
    {
        country: 'Malaisie',
        city: 'Kuala Lumpur',
        type: 'Ambassade',
        address: 'Suite 15.01, Level 15, Menara HLA, No 3 Jalan Kia Peng',
        phone: '+60 3 2141 2644',
        email: 'ambakl@diplomatie.gov.bf',
        region: 'Asie',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Coopération économique'
        ]
    },
    {
        country: 'Thaïlande',
        city: 'Bangkok',
        type: 'Ambassade',
        address: '87 Wireless Road, Lumpini, Pathumwan, Bangkok 10330',
        phone: '+66 2 251 0156',
        email: 'ambabangkok@diplomatie.gov.bf',
        region: 'Asie',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Coopération agricole'
        ]
    },
    {
        country: 'Vietnam',
        city: 'Hanoi',
        type: 'Ambassade',
        address: '9 Dao Tan Street, Ba Dinh District, Hanoi',
        phone: '+84 24 3845 2486',
        email: 'ambahanoi@diplomatie.gov.bf',
        region: 'Asie',
        services: [
            'Visas',
            'Services consulaires',
            'Coopération agricole',
            'Relations économiques'
        ]
    },
    {
        country: 'Pakistan',
        city: 'Islamabad',
        type: 'Ambassade',
        address: 'Street 6, Diplomatic Enclave, G-5, Islamabad',
        phone: '+92 51 283 1127',
        email: 'ambaislamabad@diplomatie.gov.bf',
        region: 'Asie',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Coopération technique'
        ]
    },
    {
        country: 'Émirats Arabes Unis',
        city: 'Abu Dhabi',
        type: 'Ambassade',
        address: 'Villa 51, Street 27, Al Wahat District, Abu Dhabi',
        phone: '+971 2 446 5200',
        email: 'ambaabudhabi@diplomatie.gov.bf',
        region: 'Moyen-Orient',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération commerciale'
        ]
    },
    {
        country: 'Qatar',
        city: 'Doha',
        type: 'Ambassade',
        address: 'West Bay, Zone 66, Street 840, Building 63, Doha',
        phone: '+974 4411 5863',
        email: 'ambadoha@diplomatie.gov.bf',
        region: 'Moyen-Orient',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération énergétique'
        ]
    },
    {
        country: 'Koweït',
        city: 'Koweït City',
        type: 'Ambassade',
        address: 'Block 6, Street 9, Villa 34, Jabriya Area, Kuwait City',
        phone: '+965 2531 5291',
        email: 'ambakuwait@diplomatie.gov.bf',
        region: 'Moyen-Orient',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération financière'
        ]
    },
    {
        country: 'Brésil',
        city: 'Brasília',
        type: 'Ambassade',
        address: 'SHIS QI 05, Conjunto 18, Casa 24, Lago Sul, Brasília-DF',
        phone: '+55 61 3364 6181',
        email: 'ambabrasilia@diplomatie.gov.bf',
        region: 'Amériques',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Coopération agricole'
        ]
    },
    {
        country: 'Argentine',
        city: 'Buenos Aires',
        type: 'Consulat',
        address: 'Av. Santa Fe 846, C1059 Buenos Aires',
        phone: '+54 11 4312 7291',
        email: 'consulat.buenosaires@diplomatie.gov.bf',
        region: 'Amériques',
        services: [
            'Visas',
            'Services consulaires',
            'Relations commerciales',
            'Coopération technique'
        ]
    },
    {
        country: 'Mexique',
        city: 'Mexico',
        type: 'Ambassade',
        address: 'Paseo de la Reforma 2608, Lomas Altas, Miguel Hidalgo',
        phone: '+52 55 5520 7198',
        email: 'ambamexico@diplomatie.gov.bf',
        region: 'Amériques',
        services: [
            'Visas',
            'Services consulaires',
            'Relations économiques',
            'Coopération culturelle'
        ]
    }
]; 