import { Card } from "@/app/components/ui/card"
import Link from "next/link"
import { 
  HiOutlineBuildingOffice2,
  HiOutlineCalculator,
  HiOutlineClipboardDocument,
  HiOutlineCurrencyDollar,
  HiOutlineGlobeAlt,
  HiOutlineBriefcase,
  HiOutlineArrowRight
} from "react-icons/hi2"

type ServiceSection = {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  sublinks: {
    title: string
    url: string
    description?: string
  }[]
}

export default function EntreprisesPage() {
  const services: ServiceSection[] = [
    {
      title: "Création d'entreprise",
      description: "Guide complet pour créer votre entreprise au Burkina Faso",
      href: "/entreprises/creation",
      icon: HiOutlineBuildingOffice2,
      sublinks: [
        { 
          title: "Procédures", 
          url: "/entreprises/creation/procedures",
          description: "Guide étape par étape de la création d'entreprise"
        },
        { 
          title: "Documents requis", 
          url: "/entreprises/creation/documents",
          description: "Liste des documents nécessaires pour la création"
        },
        { 
          title: "Statut juridique", 
          url: "/entreprises/creation/statut",
          description: "Choisir la forme juridique adaptée"
        },
        { 
          title: "Financement", 
          url: "/entreprises/creation/financement",
          description: "Options de financement disponibles"
        }
      ]
    },
    {
      title: "Fiscalité",
      description: "Informations sur la fiscalité des entreprises et les procédures de déclaration",
      href: "/entreprises/fiscalite",
      icon: HiOutlineCalculator,
      sublinks: [
        { 
          title: "TVA", 
          url: "/entreprises/fiscalite/tva",
          description: "Taxe sur la Valeur Ajoutée"
        },
        { 
          title: "Déclarations", 
          url: "/entreprises/fiscalite/declarations",
          description: "Obligations déclaratives"
        },
        { 
          title: "Exonérations", 
          url: "/entreprises/fiscalite/exonerations",
          description: "Avantages fiscaux disponibles"
        }
      ]
    },
    {
      title: "Licences et permis",
      description: "Obtention des autorisations nécessaires pour votre activité",
      href: "/entreprises/licences",
      icon: HiOutlineClipboardDocument,
      sublinks: [
        { 
          title: "Licences commerciales", 
          url: "/entreprises/licences/commerce",
          description: "Autorisations pour le commerce"
        },
        { 
          title: "Permis spéciaux", 
          url: "/entreprises/licences/speciaux",
          description: "Autorisations pour activités réglementées"
        },
        { 
          title: "Agréments sectoriels", 
          url: "/entreprises/licences/agrements",
          description: "Agréments par secteur d'activité"
        }
      ]
    },
    {
      title: "Guide de l'investissement",
      description: "Tout savoir sur l'investissement au Burkina Faso",
      href: "/entreprises/investissement",
      icon: HiOutlineCurrencyDollar,
      sublinks: [
        { 
          title: "Secteurs prioritaires", 
          url: "/entreprises/investissement/secteurs",
          description: "Opportunités d'investissement par secteur"
        },
        { 
          title: "Cadre juridique", 
          url: "/entreprises/investissement/juridique",
          description: "Réglementation des investissements"
        },
        { 
          title: "Incitations", 
          url: "/entreprises/investissement/incitations",
          description: "Avantages pour les investisseurs"
        }
      ]
    },
    {
      title: "Commerce international",
      description: "Procédures douanières et commerce international",
      href: "/entreprises/commerce-international",
      icon: HiOutlineGlobeAlt,
      sublinks: [
        { 
          title: "Procédures d'import", 
          url: "/entreprises/commerce-international/import",
          description: "Guide des importations"
        },
        { 
          title: "Procédures d'export", 
          url: "/entreprises/commerce-international/export",
          description: "Guide des exportations"
        },
        { 
          title: "Régimes spéciaux", 
          url: "/entreprises/commerce-international/regimes",
          description: "Régimes douaniers particuliers"
        }
      ]
    },
    {
      title: "Marchés publics",
      description: "Participation aux appels d'offres publics",
      href: "/entreprises/marches-publics",
      icon: HiOutlineBriefcase,
      sublinks: [
        { 
          title: "Appels d'offres", 
          url: "/entreprises/marches-publics/appels-offres",
          description: "Consultez les appels d'offres"
        },
        { 
          title: "Procédures", 
          url: "/entreprises/marches-publics/procedures",
          description: "Comment répondre aux appels d'offres"
        },
        { 
          title: "Réglementation", 
          url: "/entreprises/marches-publics/reglementation",
          description: "Cadre légal des marchés publics"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Services aux entreprises</h1>
          <Link 
            href="/entreprises/index-a-z"
            className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors"
          >
            Index A-Z
            <HiOutlineArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="space-y-12">
          {services.map((service) => (
            <div key={service.href}>
              <div className="flex items-center gap-3 mb-6">
                <service.icon className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">{service.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href={service.href}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-50">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <p className="text-gray-600 mb-4">{service.description}</p>
                      </div>
                      <div className="flex items-center text-primary font-medium">
                        Vue d'ensemble
                        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </Card>
                </Link>

                {service.sublinks.map((sublink) => (
                  <Link key={sublink.url} href={sublink.url}>
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                      <div className="flex flex-col h-full">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{sublink.title}</h3>
                          {sublink.description && (
                            <p className="text-sm text-gray-600 mb-4">{sublink.description}</p>
                          )}
                        </div>
                        <div className="flex items-center text-primary">
                          <HiOutlineArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Besoin d'assistance ?</h2>
          <p className="text-gray-700 mb-4">
            La Maison de l'Entreprise du Burkina Faso (MEBF) vous accompagne dans toutes vos démarches.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Téléphone :</span> (+226) 25 39 80 58
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> info@me.bf
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Adresse :</span> 132 Avenue de Lyon, Ouagadougou
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 