import { Card } from "@/app/components/ui/card"
import { 
  HiOutlineShoppingBag,
  HiOutlineDocumentDuplicate,
  HiOutlineCurrencyDollar,
  HiOutlineClock
} from "react-icons/hi2"

type LicenseType = {
  title: string
  description: string
  requirements: string[]
  validity: string
  cost: string
  processingTime: string
}

export default function CommerceLicensesPage() {
  const licenseTypes: LicenseType[] = [
    {
      title: "Carte de commerçant",
      description: "Obligatoire pour toute personne physique exerçant une activité commerciale",
      requirements: [
        "Copie de la pièce d'identité",
        "Extrait de casier judiciaire",
        "Photos d'identité",
        "Justificatif de domicile",
        "Attestation de patente"
      ],
      validity: "5 ans",
      cost: "25 000 FCFA",
      processingTime: "7 jours ouvrables"
    },
    {
      title: "Autorisation d'exercice du commerce",
      description: "Requise pour les sociétés commerciales et établissements",
      requirements: [
        "Statuts de la société",
        "RCCM",
        "Attestation fiscale",
        "Plan de localisation",
        "Contrat de bail ou titre de propriété"
      ],
      validity: "1 an renouvelable",
      cost: "50 000 FCFA",
      processingTime: "15 jours ouvrables"
    },
    {
      title: "Licence d'importation",
      description: "Nécessaire pour l'importation de marchandises à des fins commerciales",
      requirements: [
        "RCCM",
        "Attestation de situation fiscale",
        "Agrément en qualité d'importateur",
        "Liste des produits à importer",
        "Attestation de compte bancaire"
      ],
      validity: "1 an",
      cost: "100 000 FCFA",
      processingTime: "21 jours ouvrables"
    },
    {
      title: "Autorisation spéciale",
      description: "Pour le commerce de produits réglementés (alimentaire, pharmaceutique, etc.)",
      requirements: [
        "Licence commerciale de base",
        "Certificats sanitaires",
        "Attestations de conformité",
        "Diplômes et qualifications requises",
        "Inspection des locaux"
      ],
      validity: "2 ans",
      cost: "75 000 FCFA",
      processingTime: "30 jours ouvrables"
    }
  ]

  const renewalProcess = [
    {
      step: "1. Préparation du dossier",
      details: "Rassembler les documents requis 3 mois avant l'expiration"
    },
    {
      step: "2. Vérification de conformité",
      details: "Mise à jour des documents et attestations"
    },
    {
      step: "3. Dépôt de la demande",
      details: "Soumission du dossier complet avec justificatif de paiement"
    },
    {
      step: "4. Délivrance",
      details: "Retrait de la nouvelle licence après validation"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Licences Commerciales</h1>

        <div className="space-y-8">
          {licenseTypes.map((license) => (
            <Card key={license.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <HiOutlineShoppingBag className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{license.title}</h2>
                  <p className="text-gray-600 mb-4">{license.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineCurrencyDollar className="w-5 h-5" />
                        <span className="font-medium">Coût</span>
                      </div>
                      <p className="text-gray-600">{license.cost}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineClock className="w-5 h-5" />
                        <span className="font-medium">Validité</span>
                      </div>
                      <p className="text-gray-600">{license.validity}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineDocumentDuplicate className="w-5 h-5" />
                        <span className="font-medium">Délai</span>
                      </div>
                      <p className="text-gray-600">{license.processingTime}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Documents requis :</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {license.requirements.map((req, index) => (
                        <li key={index} className="text-gray-600">{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Procédure de renouvellement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {renewalProcess.map((step) => (
              <Card key={step.step} className="p-6">
                <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
                <p className="text-gray-600">{step.details}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Besoin d'assistance ?</h2>
          <p className="text-gray-700 mb-4">
            Pour toute question concernant les licences commerciales, 
            contactez le service des licences du Ministère du Commerce.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Service des licences :</span> (+226) 25 32 47 55
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> licences@commerce.gov.bf
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Horaires :</span> Lundi au vendredi, 7h30 - 16h00
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 