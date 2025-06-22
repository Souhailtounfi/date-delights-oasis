
import { Link } from 'react-router-dom';
import { Mail, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-background font-bold text-lg">T</span>
              </div>
              <span className="font-playfair text-xl font-bold gradient-gold">TAZEDATES</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Depuis 2020, nous créons des expériences gustatives uniques avec nos dattes premium 
              farcies aux meilleurs fruits secs et noix du monde.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@tazedates.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Produits', href: '/products' },
                { name: 'À Propos', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-4">Collections</h3>
            <ul className="space-y-2">
              {[
                'Classic Collection',
                'Premium Selection',
                'Gourmet Series',
                'Gift Boxes',
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/products" 
                    className="text-muted-foreground hover:text-gold-500 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 TAZEDATES. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-gold-500 text-sm transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-gold-500 text-sm transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
