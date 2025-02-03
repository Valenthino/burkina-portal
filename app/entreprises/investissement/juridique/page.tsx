import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineScale,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt
} from "react-icons/hi2"

type LegalSection = {
  title: string
  description: string
  content: string[]
  icon: React.ComponentType<{ className?: string }>
}

export default function LegalFrameworkPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Guide de l'investissement", href: "/entreprises/investissement" },
    { label: "Cadre juridique", href: "/entreprises/investissement/juridique" }
  ]

  const legalFramework: LegalSection[] = [
    {
      title: "Code des investissements",
      description: "Cadre juridique principal régissant les investissements au Burkina Faso",
      content: [
        "Garantie de traitement équitable",
        "Protection contre l'expropriation",
        "Liberté de transfert des capitaux",
        "Accès aux devises étrangères",
        "Règlement des différends"
      ],
      icon: HiOutlineScale
    },
    {
      title: "Droits et garanties",
      description: "Protections légales accordées aux investisseurs",
      content: [
        "Égalité de traitement entre investisseurs",
        "Protection de la propriété intellectuelle",
        "Garantie de rapatriement des bénéfices",
        "Accès aux tribunaux de commerce",
        "Recours à l'arbitrage international"
      ],
      icon: HiOutlineShieldCheck
    },
    {
      title: "Obligations légales",
      description: "Responsabilités des investisseurs envers l'État et la société",
      content: [
        "Respect des normes environnementales",
        "Conformité fiscale et sociale",
        "Création d'emplois locaux",
        "Formation professionnelle",
        "Reporting régulier"
      ],
      icon: HiOutlineDocumentText
    },
    {
      title: "Accords internationaux",
      description: "Traités et conventions protégeant les investissements",
      content: [
        "Conventions bilatérales d'investissement",
        "Accords de protection réciproque",
        "Traités de non double imposition",
        "Accords commerciaux régionaux",
        "Conventions OHADA"
      ],
      icon: HiOutlineGlobeAlt
    }
  ]

  const disputeResolution = [
    {
      title: "Médiation",
      steps: [
        "Désignation d'un médiateur agréé",
        "Procédure confidentielle",
        "Solution à l'amiable",
        "Accord contraignant"
      ]
    },
    {
      title: "Arbitrage national",
      steps: [
        "Centre d'arbitrage de la CCIB",
        "Tribunal arbitral",
        "Procédure accélérée",
        "Sentence exécutoire"
      ]
    },
    {
      title: "Arbitrage international",
      steps: [
        "CIRDI (Banque Mondiale)",
        "Chambre de Commerce Internationale",
        "OHADA",
        "Sentence internationale"
      ]
    }
  ]

  const recentReforms = [
    {
      year: "2022",
      changes: [
        "Simplification des procédures d'investissement",
        "Renforcement de la protection des investisseurs",
        "Modernisation du cadre fiscal",
        "Digitalisation des services"
      ]
    },
    {
      year: "2021",
      changes: [
        "Création du guichet unique",
        "Réforme du code des investissements",
        "Nouvelles incitations sectorielles",
        "Facilitation du commerce"
      ]
    },
    {
      year: "2020",
      changes: [
        "Adoption de la loi PPP",
        "Réforme du droit foncier",
        "Protection accrue de la PI",
        "Harmonisation OHADA"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Cadre Juridique des Investissements</h1>

        <div className="space-y-8">
          {legalFramework.map((section) => (
            <Card key={section.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <section.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {section.content.map((item, index) => (
                      <li key={index} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Résolution des différends</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {disputeResolution.map((method) => (
              <Card key={method.title} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{method.title}</h3>
                <ul className="space-y-2">
                  {method.steps.map((step, index) => (
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

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Réformes récentes</h2>
          <div className="space-y-4">
            {recentReforms.map((reform) => (
              <Card key={reform.year} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{reform.year}</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {reform.changes.map((change, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1.5">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{change}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Assistance juridique</h2>
          <p className="text-gray-700 mb-4">
            Pour toute question juridique concernant les investissements, 
            contactez le service juridique de l'API-BF.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Service juridique :</span> (+226) 25 37 44 45
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> juridique@investburkina.com
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Documentation :</span>{" "}
              <a 
                href="https://www.investburkina.com/juridique" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Télécharger les textes de loi
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 