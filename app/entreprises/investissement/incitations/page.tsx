import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineCurrencyDollar,
  HiOutlineBuildingOffice2,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt
} from "react-icons/hi2"

type IncentiveType = {
  title: string
  description: string
  benefits: string[]
  conditions: string[]
  duration: string
  icon: React.ComponentType<{ className?: string }>
}

export default function IncentivesPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Guide de l'investissement", href: "/entreprises/investissement" },
    { label: "Incitations", href: "/entreprises/investissement/incitations" }
  ]

  const incentives: IncentiveType[] = [
    {
      title: "Avantages fiscaux",
      description: "Réductions et exonérations d'impôts pour les nouveaux investissements",
      benefits: [
        "Exonération d'impôt sur les sociétés",
        "Réduction de la TVA",
        "Exonération de patente",
        "Crédit d'impôt à l'exportation",
        "Amortissements accélérés"
      ],
      conditions: [
        "Investissement minimum de 100 millions FCFA",
        "Création d'au moins 20 emplois permanents",
        "Respect des normes environnementales",
        "Comptabilité régulière"
      ],
      duration: "5 à 7 ans selon le secteur",
      icon: HiOutlineCurrencyDollar
    },
    {
      title: "Avantages douaniers",
      description: "Facilités douanières pour l'importation d'équipements et matières premières",
      benefits: [
        "Admission temporaire",
        "Exonération de droits de douane",
        "Régime d'entrepôt industriel",
        "Système de drawback",
        "Facilitation des procédures"
      ],
      conditions: [
        "Équipements neufs",
        "Liste validée des importations",
        "Engagement d'exportation",
        "Garantie bancaire"
      ],
      duration: "Phase d'installation + 3 ans",
      icon: HiOutlineGlobeAlt
    },
    {
      title: "Avantages fonciers",
      description: "Facilités d'accès au foncier et aux zones industrielles",
      benefits: [
        "Prix préférentiel des terrains",
        "Bail emphytéotique",
        "Exonération de taxes foncières",
        "Infrastructures de base",
        "Guichet unique foncier"
      ],
      conditions: [
        "Plan d'aménagement approuvé",
        "Délai de mise en valeur",
        "Respect du cahier des charges",
        "Garanties financières"
      ],
      duration: "15 à 30 ans",
      icon: HiOutlineBuildingOffice2
    },
    {
      title: "Avantages sociaux",
      description: "Incitations liées à l'emploi et à la formation professionnelle",
      benefits: [
        "Réduction des charges sociales",
        "Prime à l'emploi local",
        "Subvention à la formation",
        "Facilités de recrutement",
        "Appui à l'expertise"
      ],
      conditions: [
        "Plan de formation approuvé",
        "Quota d'emplois locaux",
        "Contrats formalisés",
        "Reporting social"
      ],
      duration: "3 ans renouvelables",
      icon: HiOutlineUserGroup
    }
  ]

  const eligibilityCriteria = [
    {
      title: "Critères généraux",
      items: [
        "Entreprise légalement constituée",
        "Projet économiquement viable",
        "Impact social positif",
        "Respect de l'environnement"
      ]
    },
    {
      title: "Secteurs prioritaires",
      items: [
        "Agriculture et agro-industrie",
        "Industries manufacturières",
        "Énergies renouvelables",
        "Technologies de l'information"
      ]
    },
    {
      title: "Zones géographiques",
      items: [
        "Zones économiques spéciales",
        "Régions prioritaires",
        "Pôles de croissance",
        "Zones rurales"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Incitations aux Investissements</h1>

        <div className="space-y-8">
          {incentives.map((incentive) => (
            <Card key={incentive.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <incentive.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{incentive.title}</h2>
                  <p className="text-gray-600 mb-4">{incentive.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Avantages :</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {incentive.benefits.map((benefit, index) => (
                          <li key={index} className="text-gray-600">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Conditions :</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {incentive.conditions.map((condition, index) => (
                          <li key={index} className="text-gray-600">{condition}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-600">
                      <span className="font-medium">Durée :</span> {incentive.duration}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Critères d'éligibilité</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {eligibilityCriteria.map((criteria) => (
              <Card key={criteria.title} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{criteria.title}</h3>
                <ul className="space-y-2">
                  {criteria.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1.5">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Demande d'incitations</h2>
          <p className="text-gray-700 mb-4">
            Pour bénéficier des incitations, soumettez votre dossier au guichet unique 
            de l'API-BF avec les documents requis.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Guichet unique :</span> (+226) 25 37 44 44
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> incitations@investburkina.com
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Formulaires :</span>{" "}
              <a 
                href="https://www.investburkina.com/incitations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Télécharger les formulaires
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 