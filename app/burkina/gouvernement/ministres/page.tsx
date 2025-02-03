import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Minister } from '@/lib/types';

export const metadata: Metadata = {
    title: 'Membres du Gouvernement | Burkina Faso',
    description: 'Les membres du Gouvernement du Burkina Faso',
};

// Additional ministers found in images
const ministers: Minister[] = [
    {
        id: '1',
        name: 'Rimtalba Jean Emmanuel OUEDRAOGO',
        title: 'Premier Ministre',
        ministry: "Premier Ministère",
        photo_url: '/images/Ministres/Premier Ministre.png',
        bio: "Le Premier ministre organise et coordonne l'action gouvernementale.",
        order: 1,
    },
    {
        id: '2',
        name: 'Général de Brigade Célestin SIMPORE',
        title: "Ministre d'État, Ministre de la Défense et des Anciens Combattants",
        ministry: "Ministère de la Défense et des Anciens Combattants",
        photo_url: '/images/Ministres/Général de Brigade Célestin SIMPORÉ Ministre d\'État, Ministre de la Défense et des Anciens Combattants.png',
        order: 2,
    },
    {
        id: '3',
        name: 'Emile ZERBO',
        title: "Ministre d'État, Ministre de l'Administration territoriale et de la Mobilité",
        ministry: "Ministère de l'Administration territoriale et de la Mobilité",
        photo_url: '/images/Ministres/Emile ZERBO Ministre d\'État, Ministre de l\'Administration territoriale et de la Mobilité.png',
        order: 3,
    },
    {
        id: '4',
        name: 'Commandant Ismaël SOMBIE',
        title: "Ministre d'État, Ministre de l'Agriculture, des Ressources animales et halieutiques",
        ministry: "Ministère de l'Agriculture",
        photo_url: '/images/Ministres/Commandant Ismaël SOMBIÉ Ministre d\'État, Ministre de l\'Agriculture, des Ressources animales et halieutiques.png',
        order: 4,
    },
    {
        id: '5',
        name: 'Amadou DICKO',
        title: "Ministre délégué auprès du Ministre d'État, Ministre de l'Agriculture, des Ressources animales et halieutiques, chargé des Ressources animales",
        ministry: "Ministère de l'Agriculture",
        photo_url: '/images/Ministres/Amadou DICKO Ministre délégué auprès du Ministre d\'État, Ministre de l\'Agriculture, des Ressources animales et halieutiques, chargé des Ressources animales.png',
        order: 5,
    },
    {
        id: '6',
        name: 'Aboubakar NACANABO',
        title: "Ministre de l'Économie et des Finances",
        ministry: "Ministère de l'Économie et des Finances",
        photo_url: '/images/Ministres/Aboubakar NACANABO Ministre de l\'Économie et des Finances.png',
        order: 6,
    },
    {
        id: '7',
        name: 'Fatoumata BAKO/TRAORÉ',
        title: "Ministre délégué auprès du Ministre de l'Économie et des Finances, chargé du Budget",
        ministry: "Ministère de l'Économie et des Finances",
        photo_url: '/images/Ministres/Fatoumata BAKO:TRAORÉ Ministre délégué auprès du Ministre de l\'Économie et des Finances, chargé du Budget.png',
        order: 7,
    },
    {
        id: '8',
        name: 'Commissaire divisionnaire de Police Mahamadou SANA',
        title: "Ministre de la Sécurité",
        ministry: "Ministère de la Sécurité",
        photo_url: '/images/Ministres/Commissaire divisionnaire de Police Mahamadou SANA Ministre de la Sécurité.png',
        order: 8,
    },
    {
        id: '9',
        name: 'Karamoko Jean Marie TRAORE',
        title: "Ministre des Affaires étrangères, de la Coopération régionale et des Burkinabè de l'extérieur",
        ministry: "Ministère des Affaires étrangères",
        photo_url: '/images/Ministres/Karamoko Jean Marie TRAORÉ Ministre des Affaires étrangères, de la Coopération régionale et des Burkinabè de l\'Extérieur.png',
        order: 9,
    },
    {
        id: '10',
        name: 'Stella Eldine KABRÉ/KABORÉ',
        title: "Ministre délégué auprès du Ministre des Affaires étrangères, de la Coopération régionale et des Burkinabè de l'Extérieur, chargé de la Coopération régionale",
        ministry: "Ministère des Affaires étrangères",
        photo_url: '/images/Ministres/Stella Eldine KABRÉ:KABORÉ Ministre délégué auprès du Ministre des Affaires étrangères, de la Coopération régionale et des Burkinabè de l\'Extérieur, chargé de la Coopération régionale.png',
        order: 10,
    },
    {
        id: '11',
        name: 'Mathias TRAORE',
        title: "Ministre de la Fonction publique, du Travail et de la Protection sociale",
        ministry: "Ministère de la Fonction publique",
        photo_url: '/images/Ministres/Mathias TRAORÉ Ministre de la Fonction publique, du Travail et de la Protection sociale.png',
        order: 11,
    },
    {
        id: '12',
        name: 'Pingdwendé Gilbert OUEDRAOGO',
        title: "Ministre de la Communication, de la Culture, des Arts et du Tourisme, Porte-Parole du Gouvernement",
        ministry: "Ministère de la Communication",
        photo_url: '/images/Ministres/Pingdwendé Gilbert OUÉDRAOGO Ministre de la Communication, de la Culture, des Arts et du Tourisme, Porte-parole du Gouvernement.png',
        order: 12,
    },
    {
        id: '13',
        name: 'Commandant Passowendé Pélagie KABRE/KABORE',
        title: "Ministre de l'Action humanitaire et de la Solidarité nationale",
        ministry: "Ministère de l'Action humanitaire",
        photo_url: '/images/Ministres/Commandant Passodwendé Pélagie KABRÉ:KABORÉ Ministre de l\'Action humanitaire et de la Solidarité nationale.png',
        order: 13,
    },
    {
        id: '14',
        name: 'Edasso Rodrigue BAYALA',
        title: "Ministre de la Justice et des Droits humains, chargé des Relations avec les Institutions, Garde des Sceaux",
        ministry: "Ministère de la Justice",
        photo_url: '/images/Ministres/Edasso Rodrigue BAYALA Ministre de la Justice et des Droits humains, chargé des Relations avec les Institutions, Garde des Sceaux.png',
        order: 14,
    },
    {
        id: '15',
        name: 'Robert Lucien Jean-Claude KARGOUGOU',
        title: "Ministre de la Santé",
        ministry: "Ministère de la Santé",
        photo_url: '/images/Ministres/Robert Lucien Jean-Claude KARGOUGOU Ministre de la Santé.png',
        order: 15,
    },
    {
        id: '16',
        name: 'Aminata ZERBO/SABANE',
        title: "Ministre de la Transition digitale, des Postes et des Communications électroniques",
        ministry: "Ministère de la Transition digitale",
        photo_url: '/images/Ministres/Aminata ZERBO:SABANÉ Ministre de la Transition digitale, des Postes et des Communications électroniques.png',
        order: 16,
    },
    {
        id: '17',
        name: 'Serge Gnaniodem PODA',
        title: "Ministre de l'Industrie, du Commerce et de l'Artisanat",
        ministry: "Ministère de l'Industrie",
        photo_url: '/images/Ministres/Serge Gnaniodem PODA Ministre de l\'Industrie, du Commerce et de l\'Artisanat.png',
        order: 17,
    },
    {
        id: '18',
        name: 'Adama Luc SORGHO',
        title: "Ministre des Infrastructures et du Désenclavement",
        ministry: "Ministère des Infrastructures",
        photo_url: '/images/Ministres/Adama Luc SORGHO Ministre des Infrastructures et du Désenclavement.png',
        order: 18,
    },
    {
        id: '19',
        name: 'Yacouba Zabré GOUBA',
        title: "Ministre de l'Énergie, des Mines et des Carrières",
        ministry: "Ministère de l'Énergie",
        photo_url: '/images/Ministres/Yacouba Zabré GOUBA Ministre de l\'Énergie, des Mines et des Carrières.png',
        order: 19,
    },
    {
        id: '20',
        name: 'Jacques Sosthène DINGARA',
        title: "Ministre de l'Enseignement de base, de l'Alphabétisation et de la Promotion des Langues nationales",
        ministry: "Ministère de l'Enseignement de base",
        photo_url: '/images/Ministres/Jacques Sosthène DINGARA Ministre de l\'Enseignement de base, de l\'Alphabétisation et de la Promotion des Langues nationales.png',
        order: 20,
    },
    {
        id: '21',
        name: 'Boubakar SAVADOGO',
        title: "Ministre de l'Enseignement secondaire, de la Formation professionnelle et technique",
        ministry: "Ministère de l'Enseignement secondaire",
        photo_url: '/images/Ministres/Boubakar SAVADOGO Ministre de l\'Enseignement secondaire, de la Formation professionnelle et technique.png',
        order: 21,
    },
    {
        id: '22',
        name: 'Adjima THIOMBIANO',
        title: "Ministre de l'Enseignement supérieur, de la Recherche et de l'Innovation",
        ministry: "Ministère de l'Enseignement supérieur",
        photo_url: '/images/Ministres/Adjima THIOMBIANO Ministre de l\'Enseignement supérieur, de la Recherche et de l\'Innovation.png',
        order: 22,
    },
    {
        id: '23',
        name: 'Roger BARO',
        title: "Ministre de l'Environnement, de l'Eau et de l'Assainissement",
        ministry: "Ministère de l'Environnement",
        photo_url: '/images/Ministres/Roger BARO Ministre de l\'Environnement, de l\'Eau et de l\'Assainissement.png',
        order: 23,
    },
    {
        id: '24',
        name: 'Anuuyirtole Roland SOMDA',
        title: "Ministre des Sports, de la Jeunesse et de l'Emploi",
        ministry: "Ministère des Sports",
        photo_url: '/images/Ministres/Anuuyirtole Roland SOMDA Ministre des Sports, de la Jeunesse et de l\'Emploi.png',
        order: 24,
    },
    {
        id: '25',
        name: 'Mikaïlou SIDIBÉ',
        title: "Ministre de l'Urbanisme et de l'Habitat",
        ministry: "Ministère de l'Urbanisme",
        photo_url: '/images/Ministres/Mikaïlou SIDIBÉ Ministre de l\'Urbanisme et de l\'Habitat.png',
        order: 25,
    }
];

export default function MinistersPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#009e49]/5 to-[#ef2b2d]/5">
            <div className="container mx-auto px-4 py-12">
                {/* Hero Section - Prime Minister */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Membres du Gouvernement
                    </h1>
                    <p className="text-xl text-gray-600 mb-12">
                        Le Gouvernement du Burkina Faso
                    </p>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="p-8">
                            <div className="relative w-64 h-64 mx-auto mb-6">
                                <div className="absolute inset-0 rounded-full border-4 border-[#009e49]"></div>
                                {ministers[0].photo_url ? (
                                    <Image
                                        src={ministers[0].photo_url}
                                        alt={ministers[0].name}
                                        fill
                                        className="object-cover rounded-full"
                                        sizes="(max-width: 768px) 192px, 256px"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-400 text-4xl">Photo</span>
                                    </div>
                                )}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                {ministers[0].name}
                            </h2>
                            <div className="w-32 h-[0.5px] bg-gray-300 mx-auto my-3"></div>
                            <p className="text-xl font-medium text-[#009e49] mb-4">
                                {ministers[0].title}
                            </p>
                            {ministers[0].bio && (
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    {ministers[0].bio}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Other Ministers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {ministers.slice(1).map((minister) => (
                        <div
                            key={minister.id}
                            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex items-center p-6"
                        >
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <div className="absolute inset-0 rounded-full border-2 border-[#ef2b2d]"></div>
                                {minister.photo_url ? (
                                    <Image
                                        src={minister.photo_url}
                                        alt={minister.name}
                                        fill
                                        className="object-cover rounded-full"
                                        sizes="(max-width: 768px) 96px, 128px"
                                    />
                                ) : (
                                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-400 text-2xl">Photo</span>
                                    </div>
                                )}
                            </div>
                            <div className="ml-6 flex-grow">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                    {minister.name}
                                </h2>
                                <div className="w-24 h-[0.5px] bg-gray-300 my-3"></div>
                                <Link 
                                    href={`/burkina/gouvernement/ministeres/${minister.ministry.toLowerCase().replace(/[éè]/g, 'e').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                                    className="text-[#009e49] hover:text-[#007a38] font-medium mb-1 block transition-colors"
                                >
                                    {minister.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
} 