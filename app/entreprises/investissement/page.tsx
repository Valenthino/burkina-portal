import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"

export default function InvestmentGuidePage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Guide de l'investissement", href: "/entreprises/investissement" }
  ]

  const investmentSectors = [
    {
      title: "Agriculture et agro-industrie",
      opportunities: [
        "Production agricole mécanisée",
        "Transformation des produits agricoles",
        "Élevage moderne",
        "Production de biocarburants"
      ]
    },
    {
      title: "Mines et carrières",
      opportunities: [
        "Exploitation minière (or, zinc, manganèse)",
        "Exploitation de carrières",
        "Services miniers",
        "Transformation des minerais"
      ]
    },
    {
      title: "Énergies renouvelables",
      opportunities: [
        "Énergie solaire",
        "Biomasse",
        "Mini-centrales hydroélectriques",
        "Solutions de stockage d'énergie"
      ]
    },
    {
      title: "Technologies et services",
      opportunities: [
        "Services numériques",
        "E-commerce",
        "Fintech",
        "Services aux entreprises"
      ]
    }
  ]

  const incentives = [
    {
      title: "Avantages fiscaux",
      benefits: [
        "Exonération de TVA sur les équipements",
        "Réduction d'impôt sur les bénéfices",
        "Exemption de droits de douane",
        "Crédit d'impôt pour la formation"
      ]
    },
    {
      title: "Avantages douaniers",
      benefits: [
        "Admission temporaire",
        "Régime de zone franche",
        "Entrepôt sous douane",
        "Facilitation des procédures"
      ]
    },
    {
      title: "Garanties aux investisseurs",
      benefits: [
        "Protection des investissements",
        "Libre transfert des capitaux",
        "Non-discrimination",
        "Arbitrage international"
      ]
    }
  ]

  const procedures = [
    {
      step: "1. Étude de faisabilité",
      description: "Réalisation d'une étude de marché et d'un plan d'affaires détaillé"
    },
    {
      step: "2. Création de l'entreprise",
      description: "Enregistrement auprès du CEFORE et obtention des documents légaux"
    },
    {
      step: "3. Demande d'agrément",
      description: "Soumission du dossier à l'Agence de Promotion des Investissements"
    },
    {
      step: "4. Obtention des avantages",
      description: "Signature de la convention d'investissement et mise en œuvre du projet"
    }
  ]

  const supportServices = [
    {
      title: "Agence de Promotion des Investissements",
      services: [
        "Accompagnement personnalisé",
        "Information sur les opportunités",
        "Facilitation administrative",
        "Mise en relation d'affaires"
      ]
    },
    {
      title: "Chambre de Commerce",
      services: [
        "Formation et conseil",
        "Networking",
        "Documentation économique",
        "Certification des documents"
      ]
    },
    {
      title: "Maison de l'Entreprise",
      services: [
        "Assistance technique",
        "Appui à la création",
        "Développement des compétences",
        "Accès au financement"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Guide de l'investissement au Burkina Faso</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Secteurs prioritaires d'investissement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentSectors.map((sector) => (
              <Card key={sector.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{sector.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {sector.opportunities.map((opportunity) => (
                    <li key={opportunity} className="text-gray-700">{opportunity}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Avantages aux investisseurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {incentives.map((incentive) => (
              <Card key={incentive.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{incentive.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {incentive.benefits.map((benefit) => (
                    <li key={benefit} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Procédure d'investissement</h2>
          <div className="space-y-4">
            {procedures.map((procedure) => (
              <Card key={procedure.step} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{procedure.step}</h3>
                <p className="text-gray-700">{procedure.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Services d'appui aux investisseurs</h2>
          <div className="space-y-6">
            {supportServices.map((service) => (
              <Card key={service.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {service.services.map((item) => (
                    <li key={item} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Agence de Promotion des Investissements du Burkina</h2>
          <p className="text-gray-700 mb-4">
            Pour plus d'informations sur les opportunités d'investissement, contactez l'API-BF.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Adresse:</span> 132 Avenue de Lyon, 11 BP 379 Ouagadougou 11
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Téléphone:</span> (+226) 25 37 44 49
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> info@investburkina.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 