import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import { 
  HiOutlineBanknotes,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineBuildingOffice2
} from "react-icons/hi2"

export default function BusinessFinancingPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Création d'entreprise", href: "/entreprises/creation" },
    { label: "Financement", href: "/entreprises/creation/financement" }
  ]

  const financingOptions = [
    {
      title: "Financement bancaire",
      icon: HiOutlineBanknotes,
      description: "Prêts et crédits auprès des institutions financières",
      options: [
        {
          name: "Crédit d'investissement",
          details: "Pour l'acquisition d'équipements et matériels",
          requirements: [
            "Plan d'affaires détaillé",
            "Apport personnel minimum de 20%",
            "Garanties réelles",
            "États financiers prévisionnels"
          ]
        },
        {
          name: "Crédit de trésorerie",
          details: "Pour le fonds de roulement",
          requirements: [
            "Activité existante",
            "Historique bancaire",
            "Garanties",
            "Bilans des exercices précédents"
          ]
        }
      ]
    },
    {
      title: "Fonds d'appui",
      icon: HiOutlineGlobeAlt,
      description: "Programmes gouvernementaux et internationaux",
      options: [
        {
          name: "Fonds Burkinabè de Développement Économique et Social",
          details: "Soutien aux PME/PMI",
          requirements: [
            "Projet viable",
            "Création d'emplois",
            "Impact socio-économique",
            "Conformité environnementale"
          ]
        },
        {
          name: "Programmes internationaux",
          details: "Financements des partenaires au développement",
          requirements: [
            "Critères spécifiques selon le programme",
            "Dossier technique complet",
            "Étude de faisabilité",
            "Plan de développement durable"
          ]
        }
      ]
    },
    {
      title: "Microfinance",
      icon: HiOutlineUserGroup,
      description: "Solutions de financement adaptées aux petites entreprises",
      options: [
        {
          name: "Microcrédit professionnel",
          details: "Pour les petits entrepreneurs",
          requirements: [
            "Formation en gestion",
            "Apport personnel de 10%",
            "Caution solidaire",
            "Activité génératrice de revenus"
          ]
        },
        {
          name: "Crédit groupe",
          details: "Pour les associations professionnelles",
          requirements: [
            "Groupe constitué",
            "Caution mutuelle",
            "Formation collective",
            "Projet commun"
          ]
        }
      ]
    },
    {
      title: "Capital investissement",
      icon: HiOutlineChartBar,
      description: "Participation au capital de l'entreprise",
      options: [
        {
          name: "Capital risque",
          details: "Pour les startups innovantes",
          requirements: [
            "Innovation technologique",
            "Équipe qualifiée",
            "Potentiel de croissance",
            "Stratégie de sortie"
          ]
        },
        {
          name: "Capital développement",
          details: "Pour les entreprises en croissance",
          requirements: [
            "Historique prouvé",
            "Rentabilité existante",
            "Gouvernance structurée",
            "Perspectives d'expansion"
          ]
        }
      ]
    }
  ]

  const supportStructures = [
    {
      name: "Maison de l'Entreprise",
      icon: HiOutlineBanknotes,
      services: [
        "Accompagnement dans la recherche de financement",
        "Mise en relation avec les institutions financières",
        "Aide à la préparation des dossiers",
        "Suivi post-financement"
      ],
      contact: {
        address: "01 BP 529 Ouagadougou 01",
        phone: "(+226) 25 39 80 58",
        email: "info@me.bf"
      }
    },
    {
      name: "Fonds Burkinabè de Développement Économique et Social",
      icon: HiOutlineGlobeAlt,
      services: [
        "Prêts participatifs",
        "Garantie bancaire",
        "Capital-risque",
        "Assistance technique"
      ],
      contact: {
        phone: "(+226) 25 31 11 44",
        email: "fbdes@fbdes.gov.bf"
      }
    },
    {
      name: "Chambre de Commerce",
      icon: HiOutlineUserGroup,
      services: [
        "Information sur les financements",
        "Orientation des porteurs",
        "Appui à la formalisation",
        "Networking"
      ],
      contact: {
        phone: "(+226) 25 30 61 14",
        email: "cci@cci.bf"
      }
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Financement de votre entreprise</h1>
        
        <div className="space-y-8">
          {financingOptions.map((option) => (
            <Card key={option.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <option.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
                  <p className="text-gray-600 mb-6">{option.description}</p>

                  <div className="space-y-6">
                    {option.options.map((subOption, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">{subOption.name}</h3>
                        <p className="text-gray-600 mb-4">{subOption.details}</p>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Conditions requises :</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {subOption.requirements.map((req, idx) => (
                              <li key={idx} className="text-gray-600">{req}</li>
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
          <h2 className="text-2xl font-semibold mb-6">Structures d'accompagnement</h2>
          
          <div className="space-y-6">
            {supportStructures.map((structure) => (
              <Card key={structure.name} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary">
                    <structure.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">{structure.name}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Services proposés :</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {structure.services.map((service, index) => (
                          <li key={index} className="text-gray-600">{service}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Contact :</h4>
                      <div className="space-y-1 text-gray-600">
                        <p>Adresse : {structure.contact.address}</p>
                        <p>Téléphone : {structure.contact.phone}</p>
                        <p>Email : {structure.contact.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Besoin d'accompagnement ?</h2>
          <p className="text-gray-700 mb-4">
            Nos conseillers sont là pour vous aider à trouver le financement 
            le plus adapté à votre projet et vous accompagner dans vos démarches.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Ligne d'assistance :</span> (+226) 25 37 44 44
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> financement@me.bf
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