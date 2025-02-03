import { Card } from "@/app/components/ui/card"
import { 
  HiOutlineBuildingOffice2,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineDocumentCheck
} from "react-icons/hi2"

type SectorItem = {
  sector: string
  benefits: string[]
  duration: string
}

type ZoneItem = {
  zone: string
  benefits: string[]
  duration: string
}

type CategoryItem = {
  category: string
  benefits: string[]
  duration: string
}

type ExemptionItem = SectorItem | ZoneItem | CategoryItem

type ExemptionType = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: ExemptionItem[]
}

function getItemTitle(item: ExemptionItem): string {
  if ('sector' in item) return item.sector
  if ('zone' in item) return item.zone
  return item.category
}

export default function ExonerationsPage() {
  const exemptionTypes: ExemptionType[] = [
    {
      title: "Exonérations sectorielles",
      icon: HiOutlineBuildingOffice2,
      items: [
        {
          sector: "Agriculture",
          benefits: [
            "Exonération de TVA sur les intrants agricoles",
            "Réduction d'impôt sur les bénéfices agricoles",
            "Exonération de droits de douane sur le matériel agricole"
          ],
          duration: "Permanente"
        },
        {
          sector: "Industries manufacturières",
          benefits: [
            "Crédit d'impôt pour investissement productif",
            "Exonération temporaire d'impôt sur les sociétés",
            "Réduction des droits d'importation sur les équipements"
          ],
          duration: "5 ans renouvelables"
        }
      ]
    },
    {
      title: "Exonérations géographiques",
      icon: HiOutlineGlobeAlt,
      items: [
        {
          zone: "Zones économiques spéciales",
          benefits: [
            "Exonération totale d'impôt sur les sociétés",
            "Exonération de patente",
            "Régime douanier privilégié"
          ],
          duration: "10 ans"
        },
        {
          zone: "Zones rurales",
          benefits: [
            "Réduction d'impôt sur les bénéfices",
            "Exonération de contribution foncière",
            "Allègements fiscaux sur l'emploi local"
          ],
          duration: "3 ans"
        }
      ]
    },
    {
      title: "Exonérations pour l'innovation",
      icon: HiOutlineLightBulb,
      items: [
        {
          category: "Recherche et développement",
          benefits: [
            "Crédit d'impôt recherche",
            "Exonération sur les brevets",
            "Déductions pour dépenses de R&D"
          ],
          duration: "Variable selon les projets"
        },
        {
          category: "Startups innovantes",
          benefits: [
            "Exonération d'impôt sur les sociétés",
            "Allègements de charges sociales",
            "Facilités pour le recrutement de chercheurs"
          ],
          duration: "3 ans"
        }
      ]
    }
  ]

  const applicationProcess = [
    {
      step: "1. Éligibilité",
      description: "Vérifier les conditions d'éligibilité selon votre secteur d'activité",
      documents: [
        "Statuts de l'entreprise",
        "Business plan",
        "États financiers"
      ]
    },
    {
      step: "2. Demande",
      description: "Soumettre un dossier complet à la Direction Générale des Impôts",
      documents: [
        "Formulaire de demande",
        "Justificatifs d'investissement",
        "Étude d'impact économique"
      ]
    },
    {
      step: "3. Instruction",
      description: "Examen du dossier par la commission des agréments",
      duration: "2 à 3 mois"
    },
    {
      step: "4. Agrément",
      description: "Délivrance de l'agrément et suivi des obligations",
      requirements: [
        "Respect des engagements",
        "Reporting régulier",
        "Contrôles périodiques"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Exonérations Fiscales</h1>

        <div className="space-y-8">
          {exemptionTypes.map((type) => (
            <Card key={type.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <type.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-4">{type.title}</h2>
                  <div className="space-y-6">
                    {type.items.map((item) => (
                      <div key={getItemTitle(item)} className="border-l-2 border-gray-200 pl-4">
                        <h3 className="font-medium text-gray-900 mb-2">
                          {getItemTitle(item)}
                        </h3>
                        <div className="mb-2">
                          <h4 className="font-medium text-gray-900 mb-1">Avantages :</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {item.benefits.map((benefit, index) => (
                              <li key={index} className="text-gray-600">{benefit}</li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-gray-600">
                          <span className="font-medium">Durée :</span> {item.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Procédure de demande</h2>
          <div className="space-y-4">
            {applicationProcess.map((step) => (
              <Card key={step.step} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary">
                    <HiOutlineDocumentCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    {step.documents && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Documents requis :</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {step.documents.map((doc, index) => (
                            <li key={index} className="text-gray-600">{doc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {step.requirements && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Exigences :</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {step.requirements.map((req, index) => (
                            <li key={index} className="text-gray-600">{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {step.duration && (
                      <p className="text-gray-600 mt-2">
                        <span className="font-medium">Durée :</span> {step.duration}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact et assistance</h2>
          <p className="text-gray-700 mb-4">
            Pour toute information complémentaire sur les exonérations fiscales,
            contactez le service des agréments de la Direction Générale des Impôts.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Service des agréments :</span> (+226) 25 30 89 91
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> agrements@dgi.bf
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Adresse :</span> Avenue de la Nation, Ouagadougou
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 