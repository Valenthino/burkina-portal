import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi2"

type IndexItem = {
  title: string
  description: string
  url: string
}

export default function AZIndexPage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Index A-Z", href: "/entreprises/index-a-z" }
  ]

  const indexItems: IndexItem[] = [
    // A
    {
      title: "Agréments sectoriels",
      description: "Obtention des agréments spécifiques par secteur d'activité",
      url: "/entreprises/licences/agrements"
    },
    {
      title: "Appels d'offres",
      description: "Consultation des appels d'offres publics en cours",
      url: "/entreprises/marches-publics/appels-offres"
    },
    // C
    {
      title: "Commerce international",
      description: "Guide des procédures d'import-export",
      url: "/entreprises/commerce-international"
    },
    {
      title: "Création d'entreprise",
      description: "Guide complet pour créer votre entreprise",
      url: "/entreprises/creation"
    },
    // D
    {
      title: "Déclarations fiscales",
      description: "Procédures de déclaration des impôts et taxes",
      url: "/entreprises/fiscalite/declarations"
    },
    {
      title: "Documents requis",
      description: "Liste des documents nécessaires pour la création d'entreprise",
      url: "/entreprises/creation/documents"
    },
    // E
    {
      title: "Exportation",
      description: "Guide des procédures d'exportation",
      url: "/entreprises/commerce-international/export"
    },
    {
      title: "Exonérations fiscales",
      description: "Guide des avantages fiscaux disponibles",
      url: "/entreprises/fiscalite/exonerations"
    },
    // F
    {
      title: "Financement",
      description: "Options de financement pour votre entreprise",
      url: "/entreprises/creation/financement"
    },
    {
      title: "Fiscalité",
      description: "Guide complet de la fiscalité des entreprises",
      url: "/entreprises/fiscalite"
    },
    // I
    {
      title: "Importation",
      description: "Guide des procédures d'importation",
      url: "/entreprises/commerce-international/import"
    },
    {
      title: "Incitations à l'investissement",
      description: "Avantages accordés aux investisseurs",
      url: "/entreprises/investissement/incitations"
    },
    {
      title: "Investissement",
      description: "Guide complet pour investir au Burkina Faso",
      url: "/entreprises/investissement"
    },
    // L
    {
      title: "Licences commerciales",
      description: "Guide des autorisations commerciales",
      url: "/entreprises/licences/commerce"
    },
    {
      title: "Licences et permis",
      description: "Guide complet des autorisations d'exercice",
      url: "/entreprises/licences"
    },
    // M
    {
      title: "Marchés publics",
      description: "Guide de participation aux marchés publics",
      url: "/entreprises/marches-publics"
    },
    // P
    {
      title: "Permis spéciaux",
      description: "Guide des autorisations spéciales",
      url: "/entreprises/licences/speciaux"
    },
    {
      title: "Procédures de création",
      description: "Étapes de création d'une entreprise",
      url: "/entreprises/creation/procedures"
    },
    // R
    {
      title: "Régimes douaniers",
      description: "Guide des régimes douaniers spéciaux",
      url: "/entreprises/commerce-international/regimes"
    },
    {
      title: "Réglementation des marchés publics",
      description: "Cadre légal des marchés publics",
      url: "/entreprises/marches-publics/reglementation"
    },
    // S
    {
      title: "Secteurs prioritaires",
      description: "Secteurs prioritaires pour l'investissement",
      url: "/entreprises/investissement/secteurs"
    },
    {
      title: "Statut juridique",
      description: "Choix de la forme juridique de l'entreprise",
      url: "/entreprises/creation/statut"
    },
    // T
    {
      title: "TVA",
      description: "Guide de la Taxe sur la Valeur Ajoutée",
      url: "/entreprises/fiscalite/tva"
    }
  ]

  // Group items by first letter
  const groupedItems = indexItems.reduce((acc, item) => {
    const firstLetter = item.title.charAt(0).toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(item)
    return acc
  }, {} as Record<string, IndexItem[]>)

  // Get sorted letters
  const letters = Object.keys(groupedItems).sort()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Index des services A-Z</h1>

        {/* Quick jump navigation */}
        <div className="mb-8 flex flex-wrap gap-2">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#section-${letter}`}
              className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-primary hover:text-white transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>

        {/* Index content */}
        <div className="space-y-8">
          {letters.map((letter) => (
            <div key={letter} id={`section-${letter}`}>
              <h2 className="text-2xl font-semibold mb-4 text-primary">{letter}</h2>
              <div className="grid gap-4">
                {groupedItems[letter].map((item) => (
                  <Link key={item.url} href={item.url}>
                    <Card className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                        <div className="text-primary">
                          <HiOutlineArrowRight className="w-5 h-5" />
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