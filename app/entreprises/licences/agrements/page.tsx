import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineCheckCircle,
  HiOutlineDocumentDuplicate,
  HiOutlineCurrencyDollar,
  HiOutlineClock
} from "react-icons/hi2"

type ApprovalType = {
  title: string
  description: string
  requirements: string[]
  validity: string
  cost: string
  processingTime: string
  sector: string
}

export default function ApprovalsPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Licences et permis", href: "/entreprises/licences" },
    { label: "Agréments sectoriels", href: "/entreprises/licences/agrements" }
  ]

  const approvals: ApprovalType[] = [
    {
      title: "Agrément d'entrepreneur",
      description: "Autorisation pour exercer des activités de construction et de BTP",
      requirements: [
        "Qualification professionnelle",
        "Expérience dans le secteur",
        "Capacité financière",
        "Matériel technique",
        "Personnel qualifié"
      ],
      validity: "5 ans",
      cost: "250 000 FCFA",
      processingTime: "45 jours",
      sector: "Construction"
    },
    {
      title: "Agrément transport",
      description: "Autorisation pour le transport de marchandises et de personnes",
      requirements: [
        "Parc automobile conforme",
        "Assurance spécifique",
        "Licence de transport",
        "Personnel qualifié",
        "Base logistique"
      ],
      validity: "3 ans",
      cost: "200 000 FCFA",
      processingTime: "30 jours",
      sector: "Transport"
    },
    {
      title: "Agrément import-export",
      description: "Autorisation pour les activités de commerce international",
      requirements: [
        "Capital minimum",
        "Expérience commerciale",
        "Local professionnel",
        "Registre de commerce",
        "Garantie bancaire"
      ],
      validity: "2 ans",
      cost: "300 000 FCFA",
      processingTime: "60 jours",
      sector: "Commerce International"
    },
    {
      title: "Agrément services financiers",
      description: "Autorisation pour les activités de microfinance et services financiers",
      requirements: [
        "Capital minimum requis",
        "Plan d'affaires",
        "Système de gestion",
        "Personnel qualifié",
        "Dispositif de contrôle interne"
      ],
      validity: "5 ans",
      cost: "500 000 FCFA",
      processingTime: "90 jours",
      sector: "Services Financiers"
    }
  ]

  const evaluationCriteria = [
    {
      title: "Capacité technique",
      criteria: [
        "Équipements et matériels",
        "Qualifications du personnel",
        "Expérience dans le secteur",
        "Références professionnelles"
      ]
    },
    {
      title: "Capacité financière",
      criteria: [
        "Capital social",
        "Garanties bancaires",
        "États financiers",
        "Plan de financement"
      ]
    },
    {
      title: "Conformité réglementaire",
      criteria: [
        "Situation fiscale",
        "Couverture sociale",
        "Assurances professionnelles",
        "Normes sectorielles"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Agréments Professionnels</h1>

        <div className="space-y-8">
          {approvals.map((approval) => (
            <Card key={approval.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <HiOutlineCheckCircle className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{approval.title}</h2>
                  <p className="text-gray-600 mb-4">{approval.description}</p>
                  
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineCurrencyDollar className="w-5 h-5" />
                        <span className="font-medium">Coût</span>
                      </div>
                      <p className="text-gray-600">{approval.cost}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineClock className="w-5 h-5" />
                        <span className="font-medium">Validité</span>
                      </div>
                      <p className="text-gray-600">{approval.validity}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineDocumentDuplicate className="w-5 h-5" />
                        <span className="font-medium">Délai</span>
                      </div>
                      <p className="text-gray-600">{approval.processingTime}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span className="font-medium">Secteur</span>
                      </div>
                      <p className="text-gray-600">{approval.sector}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Exigences :</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {approval.requirements.map((req, index) => (
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
          <h2 className="text-2xl font-semibold mb-6">Critères d'évaluation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {evaluationCriteria.map((criteria) => (
              <Card key={criteria.title} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{criteria.title}</h3>
                <ul className="space-y-2">
                  {criteria.criteria.map((item, index) => (
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
            Pour toute information sur les agréments professionnels, 
            contactez le service des agréments de votre secteur d'activité.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Construction et BTP :</span>
                <br />
                (+226) 25 32 46 57
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Transport :</span>
                <br />
                (+226) 25 32 46 58
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Commerce International :</span>
                <br />
                (+226) 25 32 46 59
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Services Financiers :</span>
                <br />
                (+226) 25 32 46 60
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 