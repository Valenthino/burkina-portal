import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineClipboard
} from "react-icons/hi2"

type ImportStep = {
  title: string
  description: string
  requirements: string[]
  duration: string
  cost: string
  icon: React.ComponentType<{ className?: string }>
}

export default function ImportProceduresPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Commerce international", href: "/entreprises/commerce-international" },
    { label: "Procédures d'import", href: "/entreprises/commerce-international/import" }
  ]

  const importSteps: ImportStep[] = [
    {
      title: "Enregistrement comme importateur",
      description: "Obtention de la carte d'importateur auprès du Ministère du Commerce",
      requirements: [
        "RCCM",
        "Attestation fiscale",
        "Attestation CNSS",
        "Pièce d'identité",
        "Photos d'identité"
      ],
      duration: "5 jours ouvrables",
      cost: "50 000 FCFA",
      icon: HiOutlineDocumentText
    },
    {
      title: "Intention d'importation",
      description: "Déclaration préalable d'importation pour les marchandises",
      requirements: [
        "Facture proforma",
        "Carte d'importateur",
        "Spécifications techniques",
        "Certificat d'origine",
        "Licence spécifique (si nécessaire)"
      ],
      duration: "2 jours ouvrables",
      cost: "25 000 FCFA",
      icon: HiOutlineClipboard
    },
    {
      title: "Dédouanement",
      description: "Procédures douanières pour la mise à la consommation",
      requirements: [
        "Déclaration en douane",
        "Connaissement/LTA",
        "Facture commerciale",
        "Certificat d'origine",
        "Attestation de vérification"
      ],
      duration: "3-5 jours ouvrables",
      cost: "Variable selon la valeur",
      icon: HiOutlineTruck
    },
    {
      title: "Paiement des droits et taxes",
      description: "Règlement des droits de douane et autres taxes",
      requirements: [
        "Liquidation douanière",
        "Quittance de paiement",
        "Attestation de change",
        "Bordereau de taxation",
        "Reçu d'inspection"
      ],
      duration: "1 jour ouvrable",
      cost: "Selon le tarif douanier",
      icon: HiOutlineCurrencyDollar
    }
  ]

  const requiredDocuments = [
    {
      category: "Documents commerciaux",
      items: [
        "Facture commerciale",
        "Liste de colisage",
        "Document de transport",
        "Certificat d'origine",
        "Attestation d'assurance"
      ]
    },
    {
      category: "Documents réglementaires",
      items: [
        "Licence d'importation",
        "Certificat phytosanitaire",
        "Certificat de conformité",
        "Autorisation spéciale",
        "Certificat sanitaire"
      ]
    },
    {
      category: "Documents douaniers",
      items: [
        "Déclaration en douane",
        "Bordereau de suivi",
        "Attestation de vérification",
        "Bon à enlever",
        "Quittance de paiement"
      ]
    }
  ]

  const restrictedItems = [
    {
      category: "Produits interdits",
      items: [
        "Drogues et stupéfiants",
        "Armes et munitions",
        "Espèces protégées",
        "Déchets toxiques",
        "Contrefaçons"
      ]
    },
    {
      category: "Produits réglementés",
      items: [
        "Médicaments",
        "Produits chimiques",
        "Produits alimentaires",
        "Matériel de télécommunication",
        "Véhicules d'occasion"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Procédures d'Importation</h1>

        <div className="space-y-8">
          {importSteps.map((step) => (
            <Card key={step.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Documents requis :</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {step.requirements.map((req, index) => (
                          <li key={index} className="text-gray-600">{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Délai :</h3>
                      <p className="text-gray-600">{step.duration}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Coût :</h3>
                      <p className="text-gray-600">{step.cost}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Documents nécessaires</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {requiredDocuments.map((category) => (
              <Card key={category.category} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
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

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Restrictions à l'importation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {restrictedItems.map((category) => (
              <Card key={category.category} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
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
          <h2 className="text-xl font-semibold mb-4">Assistance aux importateurs</h2>
          <p className="text-gray-700 mb-4">
            Pour toute assistance concernant les procédures d'importation, 
            contactez la Direction Générale du Commerce.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Service des importations :</span> (+226) 25 32 47 56
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> importations@commerce.gov.bf
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Guichet unique :</span> Ouagadougou, Zone industrielle de Kossodo
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 