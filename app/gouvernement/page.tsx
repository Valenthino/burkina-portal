import Header from '../components/Header';
import Footer from '../components/Footer';

const governmentMembers = [
  {
    name: 'Ibrahim Traoré',
    role: 'Président de la Transition',
    image: '/members/president.jpg',
    description: 'Chef de l\'État et Président de la Transition'
  },
  {
    name: 'Rimtalba Jean Emmanuel Ouédraogo',
    role: 'Premier Ministre',
    image: '/members/Premier Ministre.jpg',
    description: 'Chef du gouvernement'
  },
  // Add more members as needed
];

const ministries = [
  {
    name: 'Ministère de la Défense',
    minister: 'Général de Brigade Célestin SIMPORE',
    responsibilities: ['Sécurité nationale', 'Forces armées', 'Défense du territoire']
  },

  {
    name: 'Ministre d\'État, Ministre de l\'Administration territoriale et de la Mobilité',
    minister: 'Monsieur Emile ZERBO',
    responsibilities: ['Administration territoriale', 'Mobilité', 'Gestion territoriale']
  },
  {
    name: 'Ministre d\'État, Ministre de l\'Agriculture, des Ressources animales et halieutiques',
    minister: 'Commandant Ismaël SOMBIE',
    responsibilities: ['Agriculture', 'Élevage', 'Ressources halieutiques']
  },

  {
    name: 'Ministère de l\'Économie et des Finances',
    minister: 'Aboubakar Nacanabo',
    responsibilities: ['Finances publiques', 'Développement économique', 'Budget']
  },
  {
    name: ' Ministre de la Sécurité',
    minister: 'Commissaire divisionnaire de Police Mahamadou SANA',
    responsibilities: ['Sécurité intérieure', 'Police', 'Gestion des affaires juridiques policières']
  },

  {
    name: 'Ministre des Affaires étrangères, de la Coopération régionale et des Burkinabè de l\'extérieur',
    minister: 'Karamoko Jean Marie TRAORE',
    responsibilities: ['Relations internationales', 'Diplomatie', 'Coopération']
  },

  {
    name: 'Ministre de la Fonction publique, du Travail et de la Protection sociale',
    minister: 'Monsieur Mathias TRAORE',
    responsibilities: ['Fonction publique', 'Travail', 'Protection sociale']
  },
  {
    name: 'Ministre de la Communication, de la Culture, des Arts et du Tourisme, Porte-Parole du Gouvernement',
    minister: 'Monsieur Pingdwendé Gilbert OUEDRAOGO',
    responsibilities: ['Communication', 'Culture', 'Arts', 'Tourisme', 'Porte-parole']
  },
  {
    name: 'Ministre de l\'Action humanitaire et de la Solidarité nationale',
    minister: 'Commandant Passowendé Pélagie KABRE/KABORE',
    responsibilities: ['Action humanitaire', 'Solidarité nationale', 'PDI']
  },
  {
    name: 'Ministre de la Justice et des Droits humains, chargé des Relations avec les Institutions, Garde des Sceaux',
    minister: 'Monsieur Edasso Rodrigue BAYALA',
    responsibilities: ['Justice', 'Droits humains', 'Relations avec les Institutions']
  },
  {
    name: 'Ministre de la Santé',
    minister: 'Monsieur Robert Lucien Jean-Claude KARGOUGOU',
    responsibilities: ['Santé publique', 'Prévention des maladies', 'Gestion des hôpitaux']
  },
  {
    name: 'Ministre de la Transition digitale, des Postes et des Communications électroniques',
    minister: 'Madame Aminata ZERBO/SABANE',
    responsibilities: ['Transition digitale', 'Postes', 'Communications électroniques']
  },
  {
    name: 'Ministre de l\'Industrie, du Commerce et de l\'Artisanat',
    minister: 'Monsieur Serge Gnaniodem PODA',
    responsibilities: ['Industrie', 'Commerce', 'Artisanat']
  },
  {
    name: 'Ministre des Infrastructures et du Désenclavement',
    minister: 'Monsieur Adama Luc SORGHO',
    responsibilities: ['Infrastructures', 'Désenclavement', 'Développement des transports']
  },  
  {
    name: 'Ministre de l\'Énergie, des Mines et des Carrières',
    minister: 'Monsieur Yacouba Zabré GOUBA',
    responsibilities: ['Énergie', 'Mines', 'Carrières']
  },
  {
    name: 'Ministre de l\'Enseignement de base, de l\'Alphabétisation et de la Promotion des Langues nationales',
    minister: 'Monsieur Jacques Sosthène DINGARA',
    responsibilities: ['Enseignement de base', 'Alphabétisation', 'Promotion des Langues nationales']
  },

  // Add more ministries
];

export default function GovernmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-[#EDEFF3]">
        {/* Hero Section */}
        <section className="bg-[#153B3C] text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Le Gouvernement du Burkina Faso
            </h1>
            <p className="text-xl mb-4 text-[#EDEFF3]">
              Découvrez les membres du gouvernement et leurs responsabilités
            </p>
          </div>
        </section>

        {/* Key Members */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Membres Clés du Gouvernement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {governmentMembers.map((member, index) => (
                <div key={index} className="card p-6">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-[#153B3C]/10" />
                    <div className="w-full h-full bg-[#EDEFF3] flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#153B3C] font-semibold mb-2">{member.role}</p>
                  <p className="text-[#4A5568]">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ministries */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Les Ministères</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ministries.map((ministry, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-xl font-bold mb-3">{ministry.name}</h3>
                  <p className="text-[#153B3C] font-semibold mb-4">
                    Ministre: {ministry.minister}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Responsabilités principales:</h4>
                    <ul className="list-disc list-inside text-[#4A5568] space-y-1">
                      {ministry.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organization Chart */}
        <section className="py-16 bg-[#EDEFF3]">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Structure Gouvernementale</h2>
            <div className="card p-8">
              <div className="prose max-w-none">
                <p className="text-center text-[#4A5568] mb-8">
                  Le gouvernement du Burkina Faso est organisé selon une structure hiérarchique 
                  permettant une gestion efficace des affaires de l'État.
                </p>
                {/* Add organizational chart or more detailed structure information */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 