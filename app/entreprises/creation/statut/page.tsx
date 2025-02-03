import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineBuildingOffice2,
  HiOutlineScale
} from "react-icons/hi2"

type LegalForm = {
  title: string
  description: string
  advantages: string[]
  disadvantages: string[]
  requirements: {
    capital: string
    partners: string
    management: string
    taxation: string
  }
  icon: React.ComponentType<{ className?: string }>
}

export default function LegalStatusPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Création d'entreprise", href: "/entreprises/creation" },
    { label: "Statut juridique", href: "/entreprises/creation/statut" }
  ]

  const legalForms: LegalForm[] = [
    {
      title: "Entreprise Individuelle (EI)",
      description: "Structure simple adaptée aux petites activités commerciales, artisanales ou libérales",
      advantages: [
        "Création simple et rapide",
        "Coûts de constitution minimaux",
        "Gestion souple et autonome",
        "Pas de capital minimum requis"
      ],
      disadvantages: [
        "Responsabilité illimitée sur les biens personnels",
        "Crédibilité limitée auprès des partenaires",
        "Difficultés pour lever des fonds",
        "Protection sociale minimale"
      ],
      requirements: {
        capital: "Aucun minimum légal",
        partners: "Entrepreneur unique",
        management: "Dirigée par l'entrepreneur",
        taxation: "Impôt sur le revenu (BIC, BNC)"
      },
      icon: HiOutlineUser
    },
    {
      title: "SARL - Société à Responsabilité Limitée",
      description: "Forme la plus courante, adaptée aux PME avec responsabilité limitée aux apports",
      advantages: [
        "Responsabilité limitée aux apports",
        "Crédibilité auprès des partenaires",
        "Structure évolutive",
        "Possibilité SARL unipersonnelle"
      ],
      disadvantages: [
        "Formalités de constitution plus lourdes",
        "Coûts de création plus élevés",
        "Obligations comptables strictes",
        "Moins de souplesse de gestion"
      ],
      requirements: {
        capital: "Minimum 1 000 000 FCFA",
        partners: "1 à 100 associés",
        management: "Un ou plusieurs gérants",
        taxation: "Impôt sur les sociétés"
      },
      icon: HiOutlineUserGroup
    },
    {
      title: "SA - Société Anonyme",
      description: "Structure pour les grandes entreprises permettant de faire appel public à l'épargne",
      advantages: [
        "Image prestigieuse",
        "Facilité pour lever des capitaux",
        "Transmission des actions simplifiée",
        "Possibilité d'introduction en bourse"
      ],
      disadvantages: [
        "Coûts de constitution élevés",
        "Formalisme important",
        "Fonctionnement complexe",
        "Obligations légales nombreuses"
      ],
      requirements: {
        capital: "Minimum 10 000 000 FCFA",
        partners: "Minimum 1 actionnaire",
        management: "Conseil d'administration",
        taxation: "Impôt sur les sociétés"
      },
      icon: HiOutlineBuildingOffice2
    },
    {
      title: "SAS - Société par Actions Simplifiée",
      description: "Structure flexible combinant les avantages de la SA et de la SARL",
      advantages: [
        "Grande liberté statutaire",
        "Organisation souple",
        "Responsabilité limitée",
        "Pas de capital minimum"
      ],
      disadvantages: [
        "Coût de constitution élevé",
        "Expertise juridique nécessaire",
        "Pas d'appel public à l'épargne",
        "Régime fiscal contraignant"
      ],
      requirements: {
        capital: "Librement fixé par les statuts",
        partners: "1 ou plusieurs associés",
        management: "Président et dirigeants",
        taxation: "Impôt sur les sociétés"
      },
      icon: HiOutlineScale
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Choisir son statut juridique</h1>

        <div className="space-y-8">
          {legalForms.map((form) => (
            <Card key={form.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <form.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{form.title}</h2>
                  <p className="text-gray-600 mb-6">{form.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Avantages</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {form.advantages.map((advantage, index) => (
                          <li key={index} className="text-gray-600">{advantage}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Inconvénients</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {form.disadvantages.map((disadvantage, index) => (
                          <li key={index} className="text-gray-600">{disadvantage}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-3">Caractéristiques principales</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Capital social : </span>
                          {form.requirements.capital}
                        </p>
                        <p className="text-sm mt-2">
                          <span className="font-medium">Associés : </span>
                          {form.requirements.partners}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Direction : </span>
                          {form.requirements.management}
                        </p>
                        <p className="text-sm mt-2">
                          <span className="font-medium">Régime fiscal : </span>
                          {form.requirements.taxation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Besoin de conseils ?</h2>
          <p className="text-gray-700 mb-4">
            Le choix du statut juridique est une décision importante qui impacte l'avenir de votre entreprise. 
            Nos conseillers sont là pour vous guider dans ce choix.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">CEFORE :</span> (+226) 25 37 44 44
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Maison de l'Entreprise :</span> (+226) 25 39 80 58
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Chambre de Commerce :</span> (+226) 25 30 61 14
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 