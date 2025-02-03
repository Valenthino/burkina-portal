import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import Link from "next/link"
import { 
  HiOutlineDocumentText,
  HiOutlineClipboardDocument,
  HiOutlineScale,
  HiOutlineCurrencyDollar,
  HiOutlineArrowRight
} from "react-icons/hi2"

export default function BusinessCreationPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Création d'entreprise", href: "/entreprises/creation" }
  ]

  const sections = [
    {
      title: "Procédures",
      description: "Guide étape par étape pour créer votre entreprise",
      href: "/entreprises/creation/procedures",
      icon: HiOutlineDocumentText,
      highlights: [
        "Réservation du nom commercial",
        "Constitution du dossier",
        "Immatriculation",
        "Déclarations sociales"
      ]
    },
    {
      title: "Documents requis",
      description: "Liste complète des documents nécessaires",
      href: "/entreprises/creation/documents",
      icon: HiOutlineClipboardDocument,
      highlights: [
        "Documents d'identité",
        "Documents constitutifs",
        "Documents administratifs",
        "Documents financiers"
      ]
    },
    {
      title: "Statut juridique",
      description: "Choisir la forme juridique adaptée à votre activité",
      href: "/entreprises/creation/statut",
      icon: HiOutlineScale,
      highlights: [
        "Entreprise individuelle",
        "SARL",
        "Société anonyme",
        "SAS"
      ]
    },
    {
      title: "Financement",
      description: "Options de financement pour votre projet",
      href: "/entreprises/creation/financement",
      icon: HiOutlineCurrencyDollar,
      highlights: [
        "Crédit bancaire",
        "Microfinance",
        "Fonds d'appui",
        "Capital investissement"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Créer votre entreprise</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <Link key={section.title} href={section.href}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-primary">
                    <section.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                      <HiOutlineArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <ul className="space-y-2">
                      {section.highlights.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-1.5">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Besoin d'assistance ?</h2>
          <p className="text-gray-700 mb-4">
            Le Centre de Formalités des Entreprises (CEFORE) vous accompagne dans toutes 
            vos démarches de création d'entreprise.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Guichet unique :</span> (+226) 25 37 44 44
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> cefore@me.bf
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Adresse :</span> Avenue de Lyon, Ouagadougou
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 