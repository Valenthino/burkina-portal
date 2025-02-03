export interface ServiceItem {
    title: string;
    path: string;
    description: string;
    category: 'documents' | 'assistance' | 'economie' | 'education' | 'social';
}

export const internationalServices: ServiceItem[] = [
    // Documents et Formalités
    {
        title: "Visas",
        path: "/services/international/visas",
        description: "Demande et renouvellement de visas pour le Burkina Faso",
        category: "documents"
    },
    {
        title: "Passeports",
        path: "/services/international/passeports",
        description: "Services de passeports burkinabè à l'étranger",
        category: "documents"
    },
    {
        title: "Consulats et Ambassades",
        path: "/services/international/consulats",
        description: "Représentations diplomatiques du Burkina Faso",
        category: "documents"
    },
    {
        title: "Légalisation de documents",
        path: "/services/international/legalisation",
        description: "Authentification et légalisation de documents officiels",
        category: "documents"
    },

    // Assistance et Protection
    {
        title: "Assistance consulaire",
        path: "/services/international/assistance",
        description: "Aide aux ressortissants burkinabè à l'étranger",
        category: "assistance"
    },
    {
        title: "Protection des citoyens",
        path: "/services/international/protection",
        description: "Services de protection et d'urgence à l'étranger",
        category: "assistance"
    },
    {
        title: "Rapatriement",
        path: "/services/international/rapatriement",
        description: "Procédures de rapatriement et assistance",
        category: "assistance"
    },

    // Commerce et Économie
    {
        title: "Commerce international",
        path: "/services/international/commerce",
        description: "Import/export et relations commerciales",
        category: "economie"
    },
    {
        title: "Investissement",
        path: "/services/international/investissement",
        description: "Opportunités d'investissement au Burkina Faso",
        category: "economie"
    },
    {
        title: "Douanes",
        path: "/services/international/douanes",
        description: "Procédures douanières et réglementation",
        category: "economie"
    },

    // Éducation et Culture
    {
        title: "Études à l'étranger",
        path: "/services/international/etudes",
        description: "Bourses et accompagnement des étudiants",
        category: "education"
    },
    {
        title: "Coopération culturelle",
        path: "/services/international/culture",
        description: "Échanges culturels et promotion artistique",
        category: "education"
    },
    {
        title: "Formation professionnelle",
        path: "/services/international/formation",
        description: "Programmes de formation et stages internationaux",
        category: "education"
    },

    // Services sociaux
    {
        title: "Services à la diaspora",
        path: "/services/international/diaspora",
        description: "Services pour les Burkinabè de l'étranger",
        category: "social"
    },
    {
        title: "Santé internationale",
        path: "/services/international/sante",
        description: "Couverture santé et assistance médicale",
        category: "social"
    },
    {
        title: "Transport international",
        path: "/services/international/transport",
        description: "Services de transport et logistique",
        category: "social"
    },
    {
        title: "Traduction officielle",
        path: "/services/international/traduction",
        description: "Services de traduction et d'interprétation",
        category: "social"
    },
    {
        title: "Tourisme",
        path: "/services/international/tourisme",
        description: "Promotion touristique et assistance aux visiteurs",
        category: "social"
    }
]; 