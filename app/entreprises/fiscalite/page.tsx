import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { ExternalLink } from "lucide-react"

export default function TaxationPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Fiscalité", href: "/entreprises/fiscalite" }
  ]

  const taxTypes = [
    {
      title: "Impôt sur les Sociétés (IS)",
      rate: "27.5%",
      description: "Applicable aux bénéfices réalisés par les sociétés et autres personnes morales",
      deadline: "30 avril de chaque année"
    },
    {
      title: "Taxe sur la Valeur Ajoutée (TVA)",
      rate: "18%",
      description: "Applicable aux ventes de biens et services",
      deadline: "Mensuelle (avant le 20 du mois suivant)"
    },
    {
      title: "Contribution des Patentes",
      rate: "Variable",
      description: "Basée sur le chiffre d'affaires et la nature de l'activité",
      deadline: "31 mars de chaque année"
    },
    {
      title: "Impôt Minimum Forfaitaire (IMF)",
      rate: "0.5%",
      description: "Du chiffre d'affaires, avec un minimum de 300 000 FCFA",
      deadline: "31 mars de chaque année"
    }
  ]

  const obligations = [
    {
      title: "Déclarations mensuelles",
      items: [
        "TVA",
        "Retenues à la source",
        "Cotisations sociales",
        "État des salaires"
      ]
    },
    {
      title: "Déclarations annuelles",
      items: [
        "Déclaration de résultats",
        "États financiers",
        "Déclaration statistique et fiscale",
        "Déclaration des salaires et rémunérations"
      ]
    }
  ]

  const regimes = [
    {
      title: "Régime du réel normal",
      conditions: "Chiffre d'affaires supérieur à 100 millions FCFA",
      obligations: [
        "Tenue d'une comptabilité complète",
        "Déclarations mensuelles",
        "États financiers annuels"
      ]
    },
    {
      title: "Régime du réel simplifié",
      conditions: "Chiffre d'affaires entre 30 et 100 millions FCFA",
      obligations: [
        "Comptabilité simplifiée",
        "Déclarations trimestrielles",
        "États financiers simplifiés"
      ]
    },
    {
      title: "Régime de la Contribution des Micro-entreprises",
      conditions: "Chiffre d'affaires inférieur à 30 millions FCFA",
      obligations: [
        "Tenue d'un livre de recettes et dépenses",
        "Déclaration annuelle unique",
        "Paiement d'un impôt synthétique"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Fiscalité des entreprises</h1>

        <div className="mb-12">
          <a 
            href="https://esintax.bf"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="p-6 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-700 mb-2">eSINTAX - Plateforme de télédéclaration</h2>
                  <p className="text-gray-700">
                    Accédez à la plateforme officielle pour effectuer vos déclarations et paiements d'impôts en ligne
                  </p>
                </div>
                <div className="flex items-center text-blue-600 font-medium">
                  Accéder à eSINTAX
                  <ExternalLink className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Card>
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Principaux impôts et taxes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {taxTypes.map((tax) => (
              <Card key={tax.title} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tax.title}</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Taux:</span> {tax.rate}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Description:</span> {tax.description}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Échéance:</span> {tax.deadline}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Régimes d'imposition</h2>
          <div className="space-y-6">
            {regimes.map((regime) => (
              <Card key={regime.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{regime.title}</h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-medium">Conditions:</span> {regime.conditions}
                </p>
                <div>
                  <h4 className="font-medium mb-2">Obligations:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    {regime.obligations.map((obligation) => (
                      <li key={obligation} className="text-gray-700">{obligation}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Obligations déclaratives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {obligations.map((category) => (
              <Card key={category.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Direction Générale des Impôts</h2>
          <p className="text-gray-700 mb-4">
            Pour plus d'informations sur la fiscalité des entreprises, contactez la Direction Générale des Impôts.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Adresse:</span> 03 BP 7048 Ouagadougou 03
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Téléphone:</span> (+226) 25 30 89 89
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> dgi@finances.gov.bf
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 