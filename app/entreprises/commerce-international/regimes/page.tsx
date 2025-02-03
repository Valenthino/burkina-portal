import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineScale,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineBuildingOffice2
} from "react-icons/hi2"

type CustomsRegime = {
  title: string
  description: string
  benefits: string[]
  conditions: string[]
  duration: string
  icon: React.ComponentType<{ className?: string }>
}

export default function CustomsRegimesPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Commerce international", href: "/entreprises/commerce-international" },
    { label: "Régimes spéciaux", href: "/entreprises/commerce-international/regimes" }
  ]

  const customsRegimes: CustomsRegime[] = [
    {
      title: "Admission temporaire",
      description: "Régime permettant l'importation temporaire de marchandises en suspension des droits et taxes",
      benefits: [
        "Suspension des droits et taxes",
        "Pas de caution pour certains cas",
        "Procédure simplifiée",
        "Réexportation possible"
      ],
      conditions: [
        "Demande préalable",
        "Engagement de réexportation",
        "Identification des marchandises",
        "Garantie bancaire (si requise)"
      ],
      duration: "6 mois à 1 an renouvelable",
      icon: HiOutlineClock
    },
    {
      title: "Entrepôt sous douane",
      description: "Stockage des marchandises sous contrôle douanier avec suspension des droits",
      benefits: [
        "Stockage longue durée",
        "Report du paiement",
        "Manipulation possible",
        "Transfert autorisé"
      ],
      conditions: [
        "Agrément d'entrepôt",
        "Comptabilité-matières",
        "Cautionnement",
        "Contrôle douanier"
      ],
      duration: "2 ans maximum",
      icon: HiOutlineBuildingOffice2
    },
    {
      title: "Perfectionnement actif",
      description: "Transformation de marchandises importées destinées à la réexportation",
      benefits: [
        "Exonération des droits",
        "Compensation à l'équivalent",
        "Sous-traitance possible",
        "Valeur ajoutée locale"
      ],
      conditions: [
        "Autorisation préalable",
        "Taux de rendement",
        "Identification des produits",
        "Délai de réexportation"
      ],
      duration: "1 an renouvelable",
      icon: HiOutlineScale
    },
    {
      title: "Transit douanier",
      description: "Transport de marchandises sous contrôle douanier d'un point à un autre",
      benefits: [
        "Suspension des droits",
        "Itinéraire flexible",
        "Transbordement possible",
        "Garantie unique"
      ],
      conditions: [
        "Déclaration T1",
        "Scellement douanier",
        "Garantie de transit",
        "Délai de route"
      ],
      duration: "Selon distance (max 30 jours)",
      icon: HiOutlineDocumentText
    }
  ]

  const specialProcedures = [
    {
      title: "Exportation temporaire",
      steps: [
        "Demande d'autorisation",
        "Inventaire détaillé",
        "Engagement de réimportation",
        "Suivi douanier"
      ]
    },
    {
      title: "Transbordement",
      steps: [
        "Déclaration sommaire",
        "Autorisation douanière",
        "Supervision du transfert",
        "Apurement du régime"
      ]
    },
    {
      title: "Transformation sous douane",
      steps: [
        "Agrément technique",
        "Comptabilité-matières",
        "Contrôle de fabrication",
        "Apurement des comptes"
      ]
    }
  ]

  const documentation = [
    {
      title: "Documents principaux",
      items: [
        "Déclaration en douane (D3, D6, D15)",
        "Acquit-à-caution",
        "Soumission cautionnée",
        "Registre de suivi"
      ]
    },
    {
      title: "Documents annexes",
      items: [
        "Facture commerciale",
        "Document de transport",
        "Certificat d'origine",
        "Autorisation spécifique"
      ]
    },
    {
      title: "Garanties requises",
      items: [
        "Caution bancaire",
        "Garantie globale",
        "Consignation",
        "Dispense (cas spéciaux)"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Régimes Douaniers</h1>

        <div className="space-y-8">
          {customsRegimes.map((regime) => (
            <Card key={regime.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <regime.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{regime.title}</h2>
                  <p className="text-gray-600 mb-4">{regime.description}</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Avantages :</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {regime.benefits.map((benefit, index) => (
                          <li key={index} className="text-gray-600">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Conditions :</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {regime.conditions.map((condition, index) => (
                          <li key={index} className="text-gray-600">{condition}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Durée :</h3>
                      <p className="text-gray-600">{regime.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Procédures spéciales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {specialProcedures.map((procedure) => (
              <Card key={procedure.title} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{procedure.title}</h3>
                <ul className="space-y-2">
                  {procedure.steps.map((step, index) => (
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
          <h2 className="text-2xl font-semibold mb-6">Documentation requise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {documentation.map((doc) => (
              <Card key={doc.title} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{doc.title}</h3>
                <ul className="space-y-2">
                  {doc.items.map((item, index) => (
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
          <h2 className="text-xl font-semibold mb-4">Contact et assistance</h2>
          <p className="text-gray-700 mb-4">
            Pour toute information sur les régimes douaniers, 
            contactez la Direction Générale des Douanes.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Service des régimes économiques :</span> (+226) 25 30 86 00
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> regimes@douanes.bf
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Site web :</span>{" "}
              <a 
                href="https://www.douanes.bf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.douanes.bf
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 