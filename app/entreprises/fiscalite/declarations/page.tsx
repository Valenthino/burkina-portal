import { Card } from "@/app/components/ui/card"
import { 
  HiOutlineDocumentDuplicate,
  HiOutlineClock,
  HiOutlineClipboardDocument,
  HiOutlineExclamationCircle
} from "react-icons/hi2"
import Link from "next/link"

export default function DeclarationsPage() {
  const declarations = [
    {
      title: "Déclarations mensuelles",
      icon: HiOutlineDocumentDuplicate,
      items: [
        {
          name: "TVA",
          deadline: "20 du mois suivant",
          requirements: [
            "État détaillé des opérations taxables",
            "Relevé des déductions de TVA",
            "Justificatifs des exportations"
          ]
        },
        {
          name: "Retenues à la source",
          deadline: "10 du mois suivant",
          requirements: [
            "État des salaires versés",
            "Détail des retenues effectuées",
            "Bordereau de versement"
          ]
        }
      ]
    },
    {
      title: "Déclarations trimestrielles",
      icon: HiOutlineClock,
      items: [
        {
          name: "Contribution des patentes",
          deadline: "Fin du trimestre",
          requirements: [
            "Déclaration du chiffre d'affaires",
            "Justificatifs des activités",
            "Attestation de situation fiscale"
          ]
        },
        {
          name: "Taxe patronale d'apprentissage",
          deadline: "15 du mois suivant le trimestre",
          requirements: [
            "État des salaires",
            "Liste des apprentis",
            "Justificatifs de formation"
          ]
        }
      ]
    },
    {
      title: "Déclarations annuelles",
      icon: HiOutlineClipboardDocument,
      items: [
        {
          name: "Impôt sur les sociétés",
          deadline: "30 avril",
          requirements: [
            "États financiers",
            "Tableau des amortissements",
            "Détail des charges déductibles",
            "Liste des immobilisations"
          ]
        },
        {
          name: "Impôt sur les revenus",
          deadline: "31 mars",
          requirements: [
            "Déclaration des revenus",
            "Justificatifs des charges",
            "Attestations de retenues"
          ]
        }
      ]
    }
  ]

  const penalties = [
    {
      type: "Retard de déclaration",
      amount: "25 000 FCFA par mois de retard",
      details: "Applicable dès le premier jour de retard"
    },
    {
      type: "Absence de déclaration",
      amount: "50% des droits dus",
      details: "Après mise en demeure restée sans suite"
    },
    {
      type: "Déclaration inexacte",
      amount: "30% des droits éludés",
      details: "En cas d'erreur ou d'omission volontaire"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Déclarations Fiscales</h1>
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
          {declarations.map((section) => (
            <Card key={section.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <section.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                  <div className="space-y-6">
                    {section.items.map((item) => (
                      <div key={item.name} className="border-l-2 border-gray-200 pl-4">
                        <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-2">
                          <span className="font-medium">Échéance :</span> {item.deadline}
                        </p>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Documents requis :</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {item.requirements.map((req, index) => (
                              <li key={index} className="text-gray-600">{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Pénalités</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {penalties.map((penalty) => (
              <Card key={penalty.type} className="p-6">
                <h3 className="font-semibold text-lg mb-2">{penalty.type}</h3>
                <p className="text-primary font-medium mb-2">{penalty.amount}</p>
                <p className="text-gray-600">{penalty.details}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Assistance aux déclarations</h2>
          <p className="text-gray-700 mb-4">
            Pour toute assistance concernant vos déclarations fiscales, 
            n'hésitez pas à contacter nos services.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Service des déclarations :</span> (+226) 25 30 89 90
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> declarations@dgi.bf
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