import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineCheckCircle
} from "react-icons/hi2"

export default function BusinessProceduresPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Création d'entreprise", href: "/entreprises/creation" },
    { label: "Procédures", href: "/entreprises/creation/procedures" }
  ]

  const procedures = [
    {
      title: "Réservation du nom commercial",
      description: "Vérification et réservation du nom de l'entreprise auprès du registre du commerce",
      steps: [
        "Recherche d'antériorité du nom",
        "Demande de réservation",
        "Obtention du certificat de réservation"
      ],
      duration: "24-48 heures",
      cost: "5 000 FCFA",
      location: "CEFORE - Guichet unique"
    },
    {
      title: "Constitution du dossier",
      description: "Préparation des documents constitutifs de l'entreprise",
      steps: [
        "Rédaction des statuts",
        "Déclaration de souscription",
        "Attestation de dépôt de capital",
        "Photocopies des pièces d'identité"
      ],
      duration: "3-5 jours",
      cost: "Variable selon le type",
      location: "Notaire ou CEFORE"
    },
    {
      title: "Immatriculation",
      description: "Enregistrement officiel de l'entreprise",
      steps: [
        "Dépôt du dossier complet",
        "Paiement des frais",
        "Attribution du RCCM",
        "Obtention de l'IFU"
      ],
      duration: "24-72 heures",
      cost: "45 000 FCFA",
      location: "CEFORE"
    },
    {
      title: "Déclarations sociales",
      description: "Enregistrement auprès des organismes sociaux",
      steps: [
        "Immatriculation à la CNSS",
        "Déclaration du personnel",
        "Affiliation à la caisse de retraite",
        "Obtention des registres obligatoires"
      ],
      duration: "48 heures",
      cost: "Gratuit",
      location: "CNSS"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Procédures de création d'entreprise</h1>

        <div className="space-y-8">
          {procedures.map((procedure) => (
            <Card key={procedure.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <HiOutlineDocumentText className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{procedure.title}</h2>
                  <p className="text-gray-600 mb-4">{procedure.description}</p>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineClock className="w-5 h-5" />
                        <span className="font-medium">Délai</span>
                      </div>
                      <p className="text-gray-600">{procedure.duration}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineCurrencyDollar className="w-5 h-5" />
                        <span className="font-medium">Coût</span>
                      </div>
                      <p className="text-gray-600">{procedure.cost}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span className="font-medium">Lieu</span>
                      </div>
                      <p className="text-gray-600">{procedure.location}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Étapes :</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {procedure.steps.map((step, index) => (
                        <li key={index} className="text-gray-600">{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Besoin d'assistance ?</h2>
          <p className="text-gray-700 mb-4">
            Pour toute information sur la création d'entreprise, 
            contactez le Centre de Formalités des Entreprises (CEFORE).
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Téléphone :</span> (+226) 25 37 44 44
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> cefore@me.bf
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Adresse :</span> Avenue de Lyon, Ouagadougou
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 