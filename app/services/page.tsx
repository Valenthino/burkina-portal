import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const serviceCategories = [
  {
    title: 'Documents & État Civil',
    icon: '📄',
    services: [
      { name: 'Acte de naissance', link: '/services/documents/naissance' },
      { name: 'Carte Nationale d\'Identité', link: '/services/documents/cni' },
      { name: 'Passeport', link: '/services/documents/passeport' },
      { name: 'Certificat de résidence', link: '/services/documents/residence' }
    ]
  },
  {
    title: 'Entreprises & Commerce',
    icon: '💼',
    services: [
      { name: 'Création d\'entreprise', link: '/services/entreprises/creation' },
      { name: 'Licences commerciales', link: '/services/entreprises/licences' },
      { name: 'Marchés publics', link: '/services/entreprises/marches-publics' },
      { name: 'Taxes et impôts', link: '/services/entreprises/taxes' }
    ]
  },
  {
    title: 'Éducation',
    icon: '🎓',
    services: [
      { name: 'Inscription scolaire', link: '/services/education/inscription' },
      { name: 'Bourses d\'études', link: '/services/education/bourses' },
      { name: 'Formation professionnelle', link: '/services/education/formation' },
      { name: 'Équivalence de diplômes', link: '/services/education/equivalence' }
    ]
  },
  {
    title: 'Santé & Social',
    icon: '🏥',
    services: [
      { name: 'Carte d\'assurance maladie', link: '/services/sante/assurance' },
      { name: 'Vaccination', link: '/services/sante/vaccination' },
      { name: 'Aide sociale', link: '/services/sante/aide-sociale' },
      { name: 'Services aux seniors', link: '/services/sante/seniors' }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-[#EDEFF3]">
        {/* Hero Section */}
        <section className="bg-[#153B3C] text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Services Gouvernementaux
            </h1>
            <p className="text-xl mb-8 text-[#EDEFF3] max-w-2xl">
              Accédez à tous les services gouvernementaux en ligne. Simple, rapide et sécurisé.
            </p>
            <div className="relative">
              <input
                type="search"
                placeholder="Rechercher un service..."
                className="w-full max-w-2xl px-6 py-4 rounded-lg text-[#153B3C] focus:outline-none focus:ring-2 focus:ring-[#153B3C]"
              />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  <ul className="space-y-4">
                    {category.services.map((service, idx) => (
                      <li key={idx}>
                        <Link 
                          href={service.link}
                          className="flex items-center justify-between p-4 rounded-lg bg-[#EDEFF3] hover:bg-[#E2E4E8] transition-colors"
                        >
                          <span className="text-[#153B3C]">{service.name}</span>
                          <svg className="w-5 h-5 text-[#153B3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Services les plus demandés</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Carte d\'identité', icon: '🪪', time: '3-5 jours' },
                { name: 'Passeport', icon: '📔', time: '1-2 semaines' },
                { name: 'Permis de conduire', icon: '🚗', time: '1-2 semaines' },
                { name: 'Acte de naissance', icon: '👶', time: '1-2 jours' }
              ].map((service, index) => (
                <div key={index} className="card p-6 text-center">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="font-bold mb-2">{service.name}</h3>
                  <p className="text-[#4A5568]">Délai: {service.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16">
          <div className="container">
            <div className="card p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Besoin d'aide ?</h2>
              <p className="text-[#4A5568] mb-6">
                Notre équipe est disponible pour vous aider dans vos démarches administratives
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/contact" className="btn-primary">
                  Contactez-nous
                </Link>
                <Link href="/faq" className="btn-secondary">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 