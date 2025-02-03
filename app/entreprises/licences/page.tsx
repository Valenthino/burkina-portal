import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"

export default function LicensesAndPermitsPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Licences et permis", href: "/entreprises/licences" }
  ]

  const commonLicenses = [
    {
      title: "Carte de commerçant",
      requirements: [
        "Être âgé d'au moins 18 ans",
        "Avoir un casier judiciaire vierge",
        "Disposer d'un local commercial",
        "Être inscrit au Registre du Commerce"
      ],
      cost: "15 000 FCFA",
      validity: "5 ans"
    },
    {
      title: "Licence d'importation/exportation",
      requirements: [
        "Être inscrit au Registre du Commerce",
        "Avoir un numéro IFU",
        "Disposer d'un local professionnel",
        "Attestation de situation fiscale"
      ],
      cost: "50 000 FCFA",
      validity: "1 an"
    },
    {
      title: "Autorisation d'exercice",
      requirements: [
        "Diplôme ou qualification professionnelle",
        "Certificat de nationalité",
        "Attestation de résidence",
        "Casier judiciaire"
      ],
      cost: "25 000 FCFA",
      validity: "3 ans"
    }
  ]

  const sectorSpecificLicenses = [
    {
      sector: "Restauration et alimentation",
      permits: [
        "Certificat de salubrité",
        "Licence sanitaire",
        "Autorisation de vente de boissons"
      ]
    },
    {
      sector: "Transport",
      permits: [
        "Licence de transport",
        "Autorisation de circulation",
        "Carte de transporteur"
      ]
    },
    {
      sector: "Construction",
      permits: [
        "Permis de construire",
        "Agrément technique",
        "Autorisation environnementale"
      ]
    },
    {
      sector: "Commerce de détail",
      permits: [
        "Autorisation d'occupation du domaine public",
        "Licence de vente",
        "Carte professionnelle"
      ]
    }
  ]

  const specialAuthorizations = [
    {
      title: "Activités réglementées",
      description: "Certaines activités nécessitent des autorisations spéciales des ministères concernés",
      examples: [
        "Pharmacies",
        "Établissements financiers",
        "Sociétés minières",
        "Télécommunications"
      ]
    },
    {
      title: "Zones spéciales",
      description: "Activités dans des zones particulières nécessitant des permis spécifiques",
      examples: [
        "Zones industrielles",
        "Zones franches",
        "Zones protégées",
        "Zones touristiques"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Licences et autorisations d'exercice</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Licences courantes</h2>
          <div className="space-y-6">
            {commonLicenses.map((license) => (
              <Card key={license.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{license.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Conditions requises:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      {license.requirements.map((req) => (
                        <li key={req} className="text-gray-700">{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-8">
                    <p className="text-gray-700">
                      <span className="font-medium">Coût:</span> {license.cost}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Validité:</span> {license.validity}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Licences par secteur d'activité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectorSpecificLicenses.map((sector) => (
              <Card key={sector.sector} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{sector.sector}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {sector.permits.map((permit) => (
                    <li key={permit} className="text-gray-700">{permit}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Autorisations spéciales</h2>
          <div className="space-y-6">
            {specialAuthorizations.map((auth) => (
              <Card key={auth.title} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{auth.title}</h3>
                <p className="text-gray-700 mb-4">{auth.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Exemples:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    {auth.examples.map((example) => (
                      <li key={example} className="text-gray-700">{example}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ministère du Commerce</h2>
          <p className="text-gray-700 mb-4">
            Pour plus d'informations sur les licences et autorisations, contactez la Direction Générale du Commerce.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Adresse:</span> 01 BP 514 Ouagadougou 01
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Téléphone:</span> (+226) 25 32 47 55
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> dgc@commerce.gov.bf
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 