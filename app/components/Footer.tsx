export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Ouagadougou, Burkina Faso</li>
              <li>Téléphone: +226 20 20 20 20</li>
              <li>Email: contact@gov.bf</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/citoyens" className="hover:text-gray-300 transition-colors">Services aux citoyens</a></li>
              <li><a href="/services/entreprises" className="hover:text-gray-300 transition-colors">Services aux entreprises</a></li>
              <li><a href="/services/non-residents" className="hover:text-gray-300 transition-colors">Non-résidents</a></li>
              <li><a href="/services/formulaires" className="hover:text-gray-300 transition-colors">Formulaires</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><a href="/a-propos" className="hover:text-gray-300 transition-colors">À propos du Burkina Faso</a></li>
              <li><a href="/gouvernement" className="hover:text-gray-300 transition-colors">Le gouvernement</a></li>
              <li><a href="/publications" className="hover:text-gray-300 transition-colors">Publications</a></li>
              <li><a href="/marches-publics" className="hover:text-gray-300 transition-colors">Marchés publics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="/actualites" className="hover:text-gray-300 transition-colors">Actualités</a></li>
              <li><a href="/evenements" className="hover:text-gray-300 transition-colors">Événements</a></li>
              <li><a href="/emplois" className="hover:text-gray-300 transition-colors">Offres d'emploi</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition-colors">Nous contacter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm">
              <p>&copy; {new Date().getFullYear()} Gouvernement du Burkina Faso. Tous droits réservés.</p>
            </div>
            <div className="text-sm md:text-right space-x-4">
              <a href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions légales</a>
              <a href="/confidentialite" className="hover:text-gray-300 transition-colors">Politique de confidentialité</a>
              <a href="/accessibilite" className="hover:text-gray-300 transition-colors">Accessibilité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 