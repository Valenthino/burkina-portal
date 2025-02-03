import { Card } from "@/app/components/ui/card"
import { 
  HiOutlineCalculator,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineExclamationCircle
} from "react-icons/hi2"
import Link from "next/link"

export default function TVAPage() {
  const tvaInfo = [
    {
      title: "Taux et application",
      icon: HiOutlineCalculator,
      content: [
        {
          subtitle: "Taux normal",
          details: "18% applicable à la plupart des biens et services"
        },
        {
          subtitle: "Taux zéro",
          details: "0% pour les exportations et certains produits de première nécessité"
        },
        {
          subtitle: "Exonérations",
          details: "Produits agricoles non transformés, services médicaux, éducation"
        }
      ]
    },
    {
      title: "Obligations déclaratives",
      icon: HiOutlineDocumentText,
      content: [
        {
          subtitle: "Déclaration mensuelle",
          details: "À déposer avant le 20 du mois suivant"
        },
        {
          subtitle: "Contenu de la déclaration",
          details: "TVA collectée, TVA déductible, TVA à payer"
        },
        {
          subtitle: "Pièces justificatives",
          details: "Factures conformes, registres des ventes et achats"
        }
      ]
    },
    {
      title: "Modalités de paiement",
      icon: HiOutlineCalendar,
      content: [
        {
          subtitle: "Délai de paiement",
          details: "Au plus tard le 20 du mois suivant la période de déclaration"
        },
        {
          subtitle: "Moyens de paiement",
          details: "Virement bancaire, chèque certifié, télépaiement via eSINTAX"
        },
        {
          subtitle: "Acomptes",
          details: "Possibilité de versements provisionnels pour les grandes entreprises"
        }
      ]
    }
  ]

  const specialCases = [
    {
      title: "Régime du réel normal",
      conditions: "Chiffre d'affaires > 100 millions FCFA",
      obligations: [
        "Déclaration mensuelle",
        "Comptabilité détaillée",
        "Factures normalisées"
      ]
    },
    {
      title: "Régime du réel simplifié",
      conditions: "Chiffre d'affaires entre 30 et 100 millions FCFA",
      obligations: [
        "Déclaration trimestrielle",
        "Comptabilité allégée",
        "Factures simplifiées"
      ]
    },
    {
      title: "Régime de la contribution des micro-entreprises",
      conditions: "Chiffre d'affaires < 30 millions FCFA",
      obligations: [
        "Exonération de TVA",
        "Impôt synthétique",
        "Registre des recettes"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Taxe sur la Valeur Ajoutée (TVA)</h1>
          <Link 
            href="https://esintax.bf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
          >
            Déclarer sur eSINTAX
            <HiOutlineExclamationCircle className="w-5 h-5" />
          </Link>
        </div>

        <div className="space-y-8">
          {tvaInfo.map((section) => (
            <Card key={section.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <section.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((item) => (
                      <div key={item.subtitle}>
                        <h3 className="font-medium text-gray-900 mb-1">{item.subtitle}</h3>
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Régimes spéciaux</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {specialCases.map((regime) => (
              <Card key={regime.title} className="p-6">
                <h3 className="font-semibold text-lg mb-2">{regime.title}</h3>
                <p className="text-gray-600 mb-4">{regime.conditions}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Obligations :</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {regime.obligations.map((obligation, index) => (
                      <li key={index} className="text-gray-600">{obligation}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Besoin d'assistance ?</h2>
          <p className="text-gray-700 mb-4">
            Pour toute question relative à la TVA ou assistance pour vos déclarations, 
            contactez la Direction Générale des Impôts.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Service TVA :</span> (+226) 25 30 89 89
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> dgi@finances.gov.bf
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Support eSINTAX :</span> (+226) 25 30 89 85
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 