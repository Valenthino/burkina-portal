import { Card } from "@/app/components/ui/card"

export default function PublicProcurementPage() {
  const tenderTypes = [
    {
      title: "Appel d'offres ouvert",
      description: "Procédure publique où tout candidat peut soumettre une offre",
      characteristics: [
        "Publication large",
        "Concurrence maximale",
        "Délai minimal de 30 jours",
        "Ouverture publique des plis"
      ]
    },
    {
      title: "Appel d'offres restreint",
      description: "Procédure où seuls les candidats présélectionnés peuvent participer",
      characteristics: [
        "Présélection des candidats",
        "Liste restreinte",
        "Délai minimal de 21 jours",
        "Domaines spécialisés"
      ]
    },
    {
      title: "Gré à gré",
      description: "Attribution directe sans mise en concurrence",
      characteristics: [
        "Cas d'urgence",
        "Prestataire unique",
        "Montant limité",
        "Autorisation spéciale requise"
      ]
    }
  ]

  const requirements = [
    {
      title: "Documents administratifs",
      items: [
        "Attestation de situation fiscale",
        "Attestation de la CNSS",
        "Attestation de non faillite",
        "Registre du commerce",
        "Agrément technique (si requis)"
      ]
    },
    {
      title: "Capacités techniques",
      items: [
        "Références similaires",
        "Personnel qualifié",
        "Matériel requis",
        "Certifications spécifiques",
        "Méthodologie d'exécution"
      ]
    },
    {
      title: "Capacités financières",
      items: [
        "États financiers",
        "Chiffre d'affaires minimum",
        "Ligne de crédit",
        "Garantie de soumission",
        "Capacité de préfinancement"
      ]
    }
  ]

  const procedures = [
    {
      step: "1. Recherche des opportunités",
      description: "Consultation régulière des avis d'appel d'offres dans les journaux et sur les plateformes en ligne"
    },
    {
      step: "2. Retrait du dossier",
      description: "Achat ou téléchargement du dossier d'appel d'offres auprès de l'autorité contractante"
    },
    {
      step: "3. Préparation de l'offre",
      description: "Constitution du dossier technique et financier selon les exigences du DAO"
    },
    {
      step: "4. Soumission",
      description: "Dépôt de l'offre dans les délais et selon le format requis"
    },
    {
      step: "5. Ouverture des plis",
      description: "Séance publique d'ouverture des offres"
    }
  ]

  const tips = [
    {
      title: "Bonnes pratiques",
      items: [
        "Lire attentivement le dossier d'appel d'offres",
        "Respecter scrupuleusement les délais",
        "Vérifier la conformité des documents",
        "Participer aux visites de site",
        "Demander des éclaircissements si nécessaire"
      ]
    },
    {
      title: "Erreurs à éviter",
      items: [
        "Documents incomplets ou non conformes",
        "Non-respect des formats demandés",
        "Offre financière mal calculée",
        "Retard dans la soumission",
        "Garanties bancaires non conformes"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Marchés publics</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Types de marchés publics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tenderTypes.map((type) => (
            <Card key={type.title} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-700 mb-4">{type.description}</p>
              <div>
                <h4 className="font-medium mb-2">Caractéristiques:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  {type.characteristics.map((char) => (
                    <li key={char} className="text-gray-700">{char}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Conditions de participation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {requirements.map((req) => (
            <Card key={req.title} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{req.title}</h3>
              <ul className="list-disc pl-6 space-y-2">
                {req.items.map((item) => (
                  <li key={item} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Procédure de soumission</h2>
        <div className="space-y-4">
          {procedures.map((proc) => (
            <Card key={proc.step} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{proc.step}</h3>
              <p className="text-gray-700">{proc.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Conseils pratiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip) => (
            <Card key={tip.title} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
              <ul className="list-disc pl-6 space-y-2">
                {tip.items.map((item) => (
                  <li key={item} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Direction Générale des Marchés Publics</h2>
        <p className="text-gray-700 mb-4">
          Pour plus d'informations sur les marchés publics, contactez la Direction Générale des Marchés Publics.
        </p>
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-medium">Adresse:</span> Avenue de l'Indépendance, Ouagadougou
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Téléphone:</span> (+226) 25 32 64 00
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span> dgmp@marchespublics.gov.bf
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Site web:</span>{" "}
            <a href="https://www.marchespublics.gov.bf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              www.marchespublics.gov.bf
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 