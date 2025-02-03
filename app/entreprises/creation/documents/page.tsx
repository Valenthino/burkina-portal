import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineDocumentText,
  HiOutlineIdentification,
  HiOutlineBuildingOffice2,
  HiOutlineCurrencyDollar
} from "react-icons/hi2"

type DocumentCategory = {
  title: string
  description: string
  documents: {
    name: string
    details: string
    required: boolean
    copies: number
  }[]
  icon: React.ComponentType<{ className?: string }>
}

export default function RequiredDocumentsPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Création d'entreprise", href: "/entreprises/creation" },
    { label: "Documents requis", href: "/entreprises/creation/documents" }
  ]

  const documentCategories: DocumentCategory[] = [
    {
      title: "Documents d'identité",
      description: "Pièces justificatives d'identité des fondateurs et dirigeants",
      documents: [
        {
          name: "Pièce d'identité",
          details: "CNIB, passeport ou carte de résident en cours de validité",
          required: true,
          copies: 2
        },
        {
          name: "Photos d'identité",
          details: "Photos récentes en couleur format 4x4",
          required: true,
          copies: 4
        },
        {
          name: "Extrait de casier judiciaire",
          details: "Original datant de moins de 3 mois",
          required: true,
          copies: 1
        },
        {
          name: "Certificat de résidence",
          details: "Pour les étrangers uniquement",
          required: false,
          copies: 1
        }
      ],
      icon: HiOutlineIdentification
    },
    {
      title: "Documents constitutifs",
      description: "Documents juridiques de constitution de l'entreprise",
      documents: [
        {
          name: "Statuts de la société",
          details: "Document original notarié pour les sociétés",
          required: true,
          copies: 4
        },
        {
          name: "Déclaration de souscription",
          details: "Liste des souscripteurs et état des versements",
          required: true,
          copies: 2
        },
        {
          name: "PV assemblée constitutive",
          details: "Pour les SA uniquement",
          required: false,
          copies: 2
        },
        {
          name: "Déclaration de régularité",
          details: "Conformité aux dispositions légales",
          required: true,
          copies: 2
        }
      ],
      icon: HiOutlineDocumentText
    },
    {
      title: "Documents administratifs",
      description: "Documents relatifs au local et à l'activité",
      documents: [
        {
          name: "Contrat de bail",
          details: "Ou titre de propriété du local professionnel",
          required: true,
          copies: 2
        },
        {
          name: "Attestation de localisation",
          details: "Plan de localisation du siège",
          required: true,
          copies: 1
        },
        {
          name: "Autorisation préalable",
          details: "Pour les activités réglementées",
          required: false,
          copies: 1
        },
        {
          name: "Diplômes et certificats",
          details: "Pour les professions réglementées",
          required: false,
          copies: 1
        }
      ],
      icon: HiOutlineBuildingOffice2
    },
    {
      title: "Documents financiers",
      description: "Justificatifs financiers et bancaires",
      documents: [
        {
          name: "Attestation de dépôt de capital",
          details: "Délivrée par la banque ou le notaire",
          required: true,
          copies: 1
        },
        {
          name: "Justificatif d'apports",
          details: "Pour les apports en nature",
          required: false,
          copies: 1
        },
        {
          name: "Plan de financement",
          details: "Pour les grands projets",
          required: false,
          copies: 1
        },
        {
          name: "Attestation bancaire",
          details: "Relevé d'identité bancaire",
          required: true,
          copies: 1
        }
      ],
      icon: HiOutlineCurrencyDollar
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Documents requis pour la création d'entreprise</h1>

        <div className="space-y-8">
          {documentCategories.map((category) => (
            <Card key={category.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <category.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <div className="space-y-4">
                    {category.documents.map((doc) => (
                      <div key={doc.name} className="border-l-2 border-gray-200 pl-4">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-gray-900">{doc.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded ${
                            doc.required 
                              ? "bg-red-100 text-red-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {doc.required ? "Obligatoire" : "Facultatif"}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{doc.details}</p>
                        <p className="text-gray-500 text-sm mt-1">
                          Nombre de copies : {doc.copies}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Informations importantes</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Tous les documents doivent être en français ou accompagnés d'une traduction certifiée</li>
            <li>• Les copies doivent être certifiées conformes</li>
            <li>• Les documents étrangers doivent être légalisés</li>
            <li>• Certains documents peuvent être exigés en plus selon la nature de l'activité</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-blue-200">
            <p className="text-gray-700">
              Pour plus d'informations, contactez le CEFORE au (+226) 25 37 44 44
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 