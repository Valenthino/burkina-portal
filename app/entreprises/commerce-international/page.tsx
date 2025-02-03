import { Card } from "@/app/components/ui/card"
import { Breadcrumb } from "@/app/components/ui/breadcrumb"

export default function InternationalTradePage() {
  const breadcrumbItems = [
    { label: "Entreprises", href: "/entreprises" },
    { label: "Commerce international", href: "/entreprises/commerce-international" }
  ]

  const importProcedures = [
    {
      title: "Documents requis pour l'importation",
      items: [
        "Facture commerciale",
        "Connaissement ou lettre de transport aérien",
        "Certificat d'origine",
        "Déclaration en douane (D6)",
        "Attestation de vérification COTECNA",
        "Certificat phytosanitaire (pour les produits agricoles)",
        "Licence d'importation (pour certains produits)"
      ]
    },
    {
      title: "Étapes de dédouanement",
      items: [
        "Dépôt de la déclaration en douane",
        "Vérification documentaire",
        "Inspection physique des marchandises",
        "Paiement des droits et taxes",
        "Mainlevée et enlèvement des marchandises"
      ]
    }
  ]

  const exportProcedures = [
    {
      title: "Documents requis pour l'exportation",
      items: [
        "Facture commerciale",
        "Certificat d'origine",
        "Déclaration d'exportation",
        "Certificat sanitaire (si applicable)",
        "Certificat de qualité",
        "Licence d'exportation (pour certains produits)"
      ]
    },
    {
      title: "Procédures d'exportation",
      items: [
        "Enregistrement comme exportateur",
        "Obtention des certificats nécessaires",
        "Déclaration en douane",
        "Inspection avant embarquement",
        "Obtention du bon à embarquer"
      ]
    }
  ]

  const customsRegimes = [
    {
      title: "Admission temporaire",
      description: "Permet l'importation temporaire de marchandises en suspension des droits et taxes",
      conditions: [
        "Demande préalable auprès des douanes",
        "Garantie bancaire",
        "Durée limitée à 12 mois",
        "Réexportation obligatoire"
      ]
    },
    {
      title: "Entrepôt sous douane",
      description: "Stockage des marchandises importées sans paiement immédiat des droits et taxes",
      conditions: [
        "Agrément de l'entrepôt",
        "Tenue d'une comptabilité-matières",
        "Caution bancaire",
        "Durée maximale de stockage de 3 ans"
      ]
    },
    {
      title: "Transit douanier",
      description: "Transport de marchandises sous contrôle douanier",
      conditions: [
        "Déclaration de transit",
        "Scellement des marchandises",
        "Itinéraire obligatoire",
        "Délai de route fixé"
      ]
    }
  ]

  const taxes = [
    {
      title: "Droits de douane",
      details: [
        "Taux selon le tarif extérieur commun CEDEAO",
        "0% pour les biens sociaux essentiels",
        "5% pour les matières premières",
        "10% pour les produits intermédiaires",
        "20% pour les biens de consommation finale"
      ]
    },
    {
      title: "Autres taxes",
      details: [
        "TVA (18%)",
        "Prélèvement Communautaire de Solidarité (1%)",
        "Prélèvement Communautaire CEDEAO (0.5%)",
        "Redevance Statistique (1%)"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">Procédures d'import-export</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Importation</h2>
          <div className="space-y-6">
            {importProcedures.map((procedure) => (
              <Card key={procedure.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{procedure.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {procedure.items.map((item) => (
                    <li key={item} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Exportation</h2>
          <div className="space-y-6">
            {exportProcedures.map((procedure) => (
              <Card key={procedure.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{procedure.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {procedure.items.map((item) => (
                    <li key={item} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Régimes douaniers spéciaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customsRegimes.map((regime) => (
              <Card key={regime.title} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{regime.title}</h3>
                <p className="text-gray-700 mb-4">{regime.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Conditions:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    {regime.conditions.map((condition) => (
                      <li key={condition} className="text-gray-700">{condition}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Droits et taxes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {taxes.map((tax) => (
              <Card key={tax.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{tax.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {tax.details.map((detail) => (
                    <li key={detail} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Direction Générale des Douanes</h2>
          <p className="text-gray-700 mb-4">
            Pour plus d'informations sur les procédures douanières, contactez la Direction Générale des Douanes.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Adresse:</span> 01 BP 506 Ouagadougou 01
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Téléphone:</span> (+226) 25 30 68 64
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> info.douanes@douanes.bf
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 