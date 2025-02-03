import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineBuildingOffice2,
  HiOutlineCog6Tooth,
  HiOutlineGlobeAlt,
  HiOutlineStar
} from "react-icons/hi2"

type InvestmentSector = {
  title: string
  description: string
  opportunities: string[]
  incentives: string[]
  requirements: string[]
  icon: React.ComponentType<{ className?: string }>
}

export default function InvestmentSectorsPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Guide de l'investissement", href: "/entreprises/investissement" },
    { label: "Secteurs prioritaires", href: "/entreprises/investissement/secteurs" }
  ]

  const sectors: InvestmentSector[] = [
    {
      title: "Agriculture et Agro-industrie",
      description: "Secteur prioritaire avec un fort potentiel de croissance et d'exportation",
      opportunities: [
        "Transformation des produits agricoles",
        "Production de biocarburants",
        "Cultures de rente",
        "Élevage intensif",
        "Irrigation et technologies agricoles"
      ],
      incentives: [
        "Exonération de TVA sur les équipements",
        "Réduction d'impôt sur les bénéfices",
        "Facilités d'accès au foncier",
        "Subventions pour l'irrigation"
      ],
      requirements: [
        "Étude d'impact environnemental",
        "Plan d'affaires détaillé",
        "Expertise technique",
        "Capital minimum de 50 millions FCFA"
      ],
      icon: HiOutlineBuildingOffice2
    },
    {
      title: "Industries manufacturières",
      description: "Développement de la production locale et substitution aux importations",
      opportunities: [
        "Industries textiles",
        "Matériaux de construction",
        "Emballages",
        "Produits métalliques",
        "Assemblage électronique"
      ],
      incentives: [
        "Zone franche industrielle",
        "Avantages fiscaux sur 7 ans",
        "Facilités douanières",
        "Formation professionnelle subventionnée"
      ],
      requirements: [
        "Investissement minimum de 100 millions FCFA",
        "Création d'au moins 20 emplois",
        "Respect des normes environnementales",
        "Transfert de technologie"
      ],
      icon: HiOutlineCog6Tooth
    },
    {
      title: "Services et Technologies",
      description: "Modernisation de l'économie et innovation technologique",
      opportunities: [
        "Services financiers digitaux",
        "E-commerce",
        "Centres d'appels",
        "Solutions logicielles",
        "Formation professionnelle"
      ],
      incentives: [
        "Exonération fiscale sur 5 ans",
        "Aide à l'installation",
        "Accès à la fibre optique",
        "Appui à la formation"
      ],
      requirements: [
        "Plan de développement numérique",
        "Certification qualité",
        "Personnel qualifié",
        "Infrastructure sécurisée"
      ],
      icon: HiOutlineGlobeAlt
    },
    {
      title: "Mines et Énergie",
      description: "Exploitation durable des ressources naturelles et énergies renouvelables",
      opportunities: [
        "Exploitation minière",
        "Énergie solaire",
        "Services miniers",
        "Bioénergie",
        "Distribution d'énergie"
      ],
      incentives: [
        "Code minier avantageux",
        "Partenariats public-privé",
        "Garanties d'investissement",
        "Avantages fiscaux spéciaux"
      ],
      requirements: [
        "Licence d'exploitation",
        "Étude environnementale approfondie",
        "Plan de réhabilitation",
        "Capital important"
      ],
      icon: HiOutlineStar
    }
  ]

  const priorityAreas = [
    {
      title: "Zones économiques spéciales",
      benefits: [
        "Régime fiscal préférentiel",
        "Infrastructures modernes",
        "Guichet unique",
        "Accès aux marchés régionaux"
      ]
    },
    {
      title: "Pôles de croissance",
      benefits: [
        "Clusters industriels",
        "Support logistique",
        "Main d'œuvre qualifiée",
        "Écosystème d'innovation"
      ]
    },
    {
      title: "Zones rurales prioritaires",
      benefits: [
        "Avantages fiscaux majorés",
        "Aide à l'installation",
        "Accès aux ressources",
        "Impact social valorisé"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Secteurs d'Investissement Prioritaires</h1>

        <div className="space-y-8">
          {sectors.map((sector) => (
            <Card key={sector.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <sector.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{sector.title}</h2>
                  <p className="text-gray-600 mb-4">{sector.description}</p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Opportunités</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {sector.opportunities.map((opp, index) => (
                          <li key={index} className="text-gray-600">{opp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Avantages</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {sector.incentives.map((inc, index) => (
                          <li key={index} className="text-gray-600">{inc}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Conditions</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {sector.requirements.map((req, index) => (
                          <li key={index} className="text-gray-600">{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Zones prioritaires</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {priorityAreas.map((area) => (
              <Card key={area.title} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{area.title}</h3>
                <ul className="space-y-2">
                  {area.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1.5">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Assistance aux investisseurs</h2>
          <p className="text-gray-700 mb-4">
            L'Agence de Promotion des Investissements du Burkina Faso (API-BF) 
            vous accompagne dans vos projets d'investissement.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Guichet unique :</span> (+226) 25 37 44 44
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> info@investburkina.com
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Site web :</span>{" "}
              <a 
                href="https://www.investburkina.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.investburkina.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 