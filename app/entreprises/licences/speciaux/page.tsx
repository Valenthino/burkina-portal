import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineShieldCheck,
  HiOutlineDocumentDuplicate,
  HiOutlineCurrencyDollar,
  HiOutlineClock
} from "react-icons/hi2"

type SpecialLicenseType = {
  title: string
  description: string
  requirements: string[]
  validity: string
  cost: string
  processingTime: string
  authority: string
}

export default function SpecialLicensesPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Licences et permis", href: "/entreprises/licences" },
    { label: "Permis spéciaux", href: "/entreprises/licences/speciaux" }
  ]

  const specialLicenses: SpecialLicenseType[] = [
    {
      title: "Licence pour produits pharmaceutiques",
      description: "Autorisation pour l'importation, la distribution et la vente de produits pharmaceutiques",
      requirements: [
        "Diplôme en pharmacie",
        "Inscription à l'Ordre des Pharmaciens",
        "Plan des locaux aux normes",
        "Contrat avec un pharmacien responsable",
        "Système de traçabilité des produits"
      ],
      validity: "5 ans",
      cost: "500 000 FCFA",
      processingTime: "3 mois",
      authority: "Ministère de la Santé"
    },
    {
      title: "Licence pour produits chimiques",
      description: "Autorisation pour la manipulation et le commerce de produits chimiques contrôlés",
      requirements: [
        "Étude d'impact environnemental",
        "Plan de gestion des risques",
        "Certificats de sécurité",
        "Qualification du personnel",
        "Système de stockage conforme"
      ],
      validity: "2 ans",
      cost: "750 000 FCFA",
      processingTime: "45 jours",
      authority: "Ministère de l'Environnement"
    },
    {
      title: "Licence pour matériaux précieux",
      description: "Permis pour le commerce de l'or, des diamants et autres pierres précieuses",
      requirements: [
        "Agrément professionnel",
        "Garantie bancaire",
        "Système de sécurité",
        "Registre de traçabilité",
        "Certification Kimberley Process"
      ],
      validity: "1 an",
      cost: "1 000 000 FCFA",
      processingTime: "60 jours",
      authority: "Ministère des Mines"
    },
    {
      title: "Licence pour produits alimentaires spéciaux",
      description: "Autorisation pour les aliments diététiques, compléments alimentaires et produits fortifiés",
      requirements: [
        "Certificats d'analyse",
        "Attestation de Bonnes Pratiques de Fabrication",
        "Système HACCP",
        "Étiquetage conforme",
        "Dossier technique des produits"
      ],
      validity: "3 ans",
      cost: "300 000 FCFA",
      processingTime: "30 jours",
      authority: "Ministère de la Santé"
    }
  ]

  const inspectionProcess = [
    {
      title: "Inspection initiale",
      steps: [
        "Vérification des installations",
        "Contrôle des équipements",
        "Audit des procédures",
        "Évaluation du personnel"
      ]
    },
    {
      title: "Inspections périodiques",
      steps: [
        "Contrôle qualité",
        "Vérification des registres",
        "Évaluation de conformité",
        "Mise à jour des procédures"
      ]
    },
    {
      title: "Inspections inopinées",
      steps: [
        "Contrôle surprise",
        "Prélèvements pour analyse",
        "Vérification des stocks",
        "Contrôle des documents"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Licences Spéciales</h1>

        <div className="space-y-8">
          {specialLicenses.map((license) => (
            <Card key={license.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <HiOutlineShieldCheck className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{license.title}</h2>
                  <p className="text-gray-600 mb-4">{license.description}</p>
                  
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineCurrencyDollar className="w-5 h-5" />
                        <span className="font-medium">Coût</span>
                      </div>
                      <p className="text-gray-600">{license.cost}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineClock className="w-5 h-5" />
                        <span className="font-medium">Validité</span>
                      </div>
                      <p className="text-gray-600">{license.validity}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineDocumentDuplicate className="w-5 h-5" />
                        <span className="font-medium">Délai</span>
                      </div>
                      <p className="text-gray-600">{license.processingTime}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineShieldCheck className="w-5 h-5" />
                        <span className="font-medium">Autorité</span>
                      </div>
                      <p className="text-gray-600">{license.authority}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Exigences :</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {license.requirements.map((req, index) => (
                        <li key={index} className="text-gray-600">{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Processus d'inspection</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {inspectionProcess.map((process) => (
              <Card key={process.title} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{process.title}</h3>
                <ul className="space-y-2">
                  {process.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1.5">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact et assistance</h2>
          <p className="text-gray-700 mb-4">
            Pour toute information sur les licences spéciales, contactez le service approprié 
            selon votre secteur d'activité.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Produits pharmaceutiques :</span>
                <br />
                (+226) 25 32 46 53
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Produits chimiques :</span>
                <br />
                (+226) 25 32 46 54
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Matériaux précieux :</span>
                <br />
                (+226) 25 32 46 55
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Produits alimentaires :</span>
                <br />
                (+226) 25 32 46 56
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 