'use client';

import { useState } from 'react';
import { FaPassport, FaGlobe, FaBuilding, FaClock, FaMoneyBill, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

interface VisaType {
    title: string;
    description: string;
    requirements: string[];
    duration: string;
    price?: string;
}

const visaTypes: VisaType[] = [
    {
        title: 'Visa Court Séjour',
        description: 'Pour les séjours touristiques ou d\'affaires de courte durée',
        requirements: [
            'Passeport valide (6 mois minimum)',
            'Formulaire de demande complété',
            'Photo d\'identité récente',
            'Justificatif d\'hébergement',
            'Billet d\'avion aller-retour',
            'Justificatif de moyens financiers'
        ],
        duration: 'Jusqu\'à 90 jours',
        price: '50 000 FCFA'
    },
    {
        title: 'Visa Long Séjour',
        description: 'Pour les séjours d\'études, de travail ou familiaux',
        requirements: [
            'Passeport valide (1 an minimum)',
            'Formulaire de demande complété',
            'Photo d\'identité récente',
            'Justificatif du motif de séjour',
            'Attestation d\'hébergement',
            'Certificat médical',
            'Casier judiciaire'
        ],
        duration: '1 an renouvelable',
        price: '100 000 FCFA'
    },
    {
        title: 'Visa d\'Affaires',
        description: 'Pour les voyages professionnels et commerciaux',
        requirements: [
            'Passeport valide (6 mois minimum)',
            'Formulaire de demande complété',
            'Photo d\'identité récente',
            'Lettre d\'invitation d\'une entreprise au Burkina',
            'Ordre de mission',
            'Justificatif de moyens financiers'
        ],
        duration: 'Jusqu\'à 180 jours',
        price: '75 000 FCFA'
    }
];

interface FaqItem {
    question: string;
    answer: string | string[];
    isOpen?: boolean;
}

export default function VisasPage() {
    const [faqItems, setFaqItems] = useState<FaqItem[]>([
        {
            question: "Principe général d'obtention du visa",
            answer: [
                "La demande de visa peut être effectuée de trois manières :",
                "- En ligne via la plateforme e-Visa",
                "- Auprès d'une ambassade ou d'un consulat du Burkina Faso",
                "- Au service de migration pour les renouvellements",
                "Le traitement de la demande prend en général 72 heures, après lesquelles vous recevrez une réponse."
            ]
        },
        {
            question: "Documents nécessaires",
            answer: [
                "Documents de base requis pour toute demande de visa :",
                "- Passeport en cours de validité (validité minimale de 6 mois)",
                "- Formulaire de demande dûment rempli",
                "- Photos d'identité récentes",
                "- Justificatif de voyage (billet d'avion, réservation)",
                "- Justificatif d'hébergement au Burkina Faso",
                "- Preuve de moyens financiers suffisants",
                "Des documents supplémentaires peuvent être demandés selon le type de visa."
            ]
        },
        {
            question: "Modalités de paiement",
            answer: [
                "Deux options de paiement sont disponibles :",
                "1. En espèces directement à l'ambassade :",
                "- Uniquement le montant du visa",
                "- Reçu délivré immédiatement",
                "2. Par paiement électronique :",
                "- Frais supplémentaires pour le traitement",
                "- Transaction sécurisée",
                "- Confirmation immédiate"
            ]
        },
        {
            question: "Délais et procédures",
            answer: [
                "Le processus se déroule comme suit :",
                "1. Soumission du dossier complet",
                "2. Délai de traitement de 72 heures",
                "3. Notification de la décision",
                "4. En cas d'accord :",
                "   - Réception d'un e-visa ou pré-visa",
                "   - Document à présenter à l'arrivée",
                "   - Validation à l'entrée sur le territoire"
            ]
        },
        {
            question: "Cas particuliers",
            answer: [
                "Situations nécessitant une attention particulière :",
                "- Visa pour les mineurs : autorisation parentale requise",
                "- Visa pour raisons médicales : justificatifs médicaux nécessaires",
                "- Visa pour études : attestation d'inscription ou de préinscription",
                "- Visa pour regroupement familial : justificatifs des liens familiaux",
                "Contactez l'ambassade pour plus de détails sur ces cas spécifiques."
            ]
        },
        {
            question: "Renouvellement du visa",
            answer: [
                "Pour renouveler votre visa :",
                "- Faire la demande 7 jours avant l'expiration",
                "- Se présenter en personne au service migration",
                "- Fournir les justificatifs de séjour",
                "- Présenter le visa précédent",
                "Le renouvellement peut donner lieu à :",
                "- Un nouveau visa sur le passeport",
                "- Un permis de séjour pour les longs séjours"
            ]
        }
    ]);

    const toggleFaq = (index: number) => {
        setFaqItems(faqItems.map((item, i) => ({
            ...item,
            isOpen: i === index ? !item.isOpen : item.isOpen
        })));
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Visas pour le Burkina Faso
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Informations et procédures pour l'obtention d'un visa
                    </p>
                    <a
                        href="https://applicant.visaburkina.bf/#/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-[#009e49] text-white font-semibold rounded-lg hover:bg-[#008a3f] transition-colors"
                    >
                        Faire une demande en ligne
                        <FaExternalLinkAlt className="ml-2" />
                    </a>
                </div>

                {/* Process Steps */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Processus de demande de visa
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-center mb-4">
                                <FaPassport className="w-6 h-6 text-[#009e49] mr-3" />
                                <h3 className="text-lg font-semibold">1. Préparer les documents</h3>
                            </div>
                            <p className="text-gray-600">
                                Rassemblez tous les documents requis selon le type de visa demandé
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-center mb-4">
                                <FaGlobe className="w-6 h-6 text-[#009e49] mr-3" />
                                <h3 className="text-lg font-semibold">2. Soumettre la demande</h3>
                            </div>
                            <p className="text-gray-600">
                                En ligne ou auprès d'une ambassade/consulat du Burkina Faso
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-center mb-4">
                                <FaClock className="w-6 h-6 text-[#009e49] mr-3" />
                                <h3 className="text-lg font-semibold">3. Attendre le traitement</h3>
                            </div>
                            <p className="text-gray-600">
                                Délai de traitement : 72 heures en moyenne
                            </p>
                        </div>
                    </div>
                </div>

                {/* Visa Types */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Types de visas disponibles
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {visaTypes.map((visa) => (
                            <div
                                key={visa.title}
                                className="bg-white rounded-xl shadow-sm overflow-hidden"
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {visa.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {visa.description}
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Documents requis :</h4>
                                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                                {visa.requirements.map((req) => (
                                                    <li key={req}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center">
                                                <FaClock className="w-4 h-4 text-gray-400 mr-2" />
                                                <span className="text-sm text-gray-600">{visa.duration}</span>
                                            </div>
                                            {visa.price && (
                                                <div className="flex items-center">
                                                    <FaMoneyBill className="w-4 h-4 text-gray-400 mr-2" />
                                                    <span className="text-sm text-gray-600">{visa.price}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Important Information */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Informations importantes
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Délais de traitement</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Traitement standard : 72 heures</li>
                                <li>Le délai peut varier selon le type de visa et la période</li>
                                <li>Possibilité de suivi en ligne de votre demande</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Paiement</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Paiement en espèces ou par carte bancaire</li>
                                <li>Frais supplémentaires pour le paiement électronique</li>
                                <li>Paiement non remboursable en cas de refus</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        Questions fréquentes sur les visas
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqItems.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-lg shadow-sm overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900">{item.question}</span>
                                    <FaChevronDown 
                                        className={`w-5 h-5 text-gray-500 transition-transform ${
                                            item.isOpen ? 'transform rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                {item.isOpen && (
                                    <div className="px-6 py-4 border-t border-gray-100">
                                        {Array.isArray(item.answer) ? (
                                            <div className="space-y-2">
                                                {item.answer.map((line, i) => (
                                                    <p key={i} className="text-gray-600">
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-600">{item.answer}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Questions connexes */}
                    <div className="max-w-4xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Questions connexes
                        </h2>
                        <div className="space-y-4">
                            <Link 
                                href="/services/international/consulats"
                                className="block text-blue-600 hover:underline"
                            >
                                → Où trouver une ambassade ou un consulat du Burkina Faso ?
                            </Link>
                            <Link 
                                href="/services/international/passeports"
                                className="block text-blue-600 hover:underline"
                            >
                                → Comment obtenir ou renouveler un passeport ?
                            </Link>
                            <Link 
                                href="/services/international/assistance"
                                className="block text-blue-600 hover:underline"
                            >
                                → Quelle assistance consulaire est disponible ?
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Besoin d'assistance ?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Contactez l'ambassade ou le consulat du Burkina Faso le plus proche de chez vous
                    </p>
                    <Link
                        href="/services/international/consulats"
                        className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <FaBuilding className="mr-2" />
                        Voir nos représentations diplomatiques
                    </Link>
                </div>
            </div>
        </main>
    );
} 