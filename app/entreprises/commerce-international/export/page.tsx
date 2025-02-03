import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineGlobeAlt
} from "react-icons/hi2"

type ExportStep = {
  title: string
  description: string
  requirements: string[]
  duration: string
  cost: string
  icon: React.ComponentType<{ className?: string }>
}

export default function ExportProceduresPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Commerce international", href: "/entreprises/commerce-international" },
    { label: "Procédures d'export", href: "/entreprises/commerce-international/export" }
  ]

  const exportSteps: ExportStep[] = [
    {
      title: "Enregistrement comme exportateur",
      description: "Obtention de la carte professionnelle d'exportateur",
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
      title: "Déclaration d'exportation",
      description: "Enregistrement de l'intention d'exportation",
      requirements: [
        "Facture proforma",
        "Carte d'exportateur",
        "Certificat d'origine",
        "Contrat commercial",
        "Spécifications produits"
      ],
      duration: "2 jours ouvrables",
      cost: "25 000 FCFA",
      icon: HiOutlineGlobeAlt
    },
    {
      title: "Contrôle et certification",
      description: "Vérification de conformité des produits",
      requirements: [
        "Certificat sanitaire",
        "Certificat phytosanitaire",
        "Certificat de qualité",
        "Rapport d'inspection",
        "Certificat d'origine"
      ],
      duration: "3-5 jours ouvrables",
      cost: "Variable selon produit",
      icon: HiOutlineDocumentText
    },
    {
      title: "Dédouanement export",
      description: "Procédures douanières pour l'exportation",
      requirements: [
        "Déclaration en douane",
        "Documents de transport",
        "Facture définitive",
        "Certificats requis",
        "Bordereau de suivi"
      ],
      duration: "1-2 jours ouvrables",
      cost: "Selon régime douanier",
      icon: HiOutlineTruck
    }
  ]

  const exportableProducts = [
    {
      category: "Produits agricoles",
      items: [
        "Coton",
        "Sésame",
        "Karité",
        "Noix de cajou",
        "Mangues"
      ]
    },
    {
      category: "Produits miniers",
      items: [
        "Or",
        "Zinc",
        "Manganèse",
        "Cuivre",
        "Granite"
      ]
    },
    {
      category: "Produits transformés",
      items: [
        "Beurre de karité",
        "Huiles végétales",
        "Produits artisanaux",
        "Cuir et peaux",
        "Textiles"
      ]
    }
  ]

  const incentives = [
    {
      title: "Avantages fiscaux",
      benefits: [
        "Exonération de TVA",
        "Régime suspensif des droits",
        "Crédit d'impôt export",
        "Admission temporaire"
      ]
    },
    {
      title: "Facilités douanières",
      benefits: [
        "Procédures simplifiées",
        "Entrepôts sous douane",
        "Transit accéléré",
        "Guichet unique"
      ]
    },
    {
      title: "Support technique",
      benefits: [
        "Formation aux exportateurs",
        "Études de marché",
        "Mise en relation B2B",
        "Participation aux foires"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Procédures d'Exportation</h1>

        <div className="space-y-8">
          {exportSteps.map((step) => (
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
          <h2 className="text-2xl font-semibold mb-6">Produits exportables</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {exportableProducts.map((category) => (
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
          <h2 className="text-2xl font-semibold mb-6">Incitations à l'exportation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {incentives.map((incentive) => (
              <Card key={incentive.title} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{incentive.title}</h3>
                <ul className="space-y-2">
                  {incentive.benefits.map((benefit, index) => (
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
          <h2 className="text-xl font-semibold mb-4">Assistance aux exportateurs</h2>
          <p className="text-gray-700 mb-4">
            Pour toute assistance concernant les procédures d'exportation, 
            contactez l'Agence de Promotion des Exportations du Burkina (APEX-B).
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Service exportations :</span> (+226) 25 37 44 48
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> apex@commerce.gov.bf
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Site web :</span>{" "}
              <a 
                href="https://www.apex.bf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.apex.bf
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 