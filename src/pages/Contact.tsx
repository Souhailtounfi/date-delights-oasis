
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Home } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold gradient-gold mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Une question ? Un projet spécial ? Notre équipe est là pour vous accompagner 
            dans votre découverte de nos créations premium.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      Prénom
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="Votre prénom"
                      className="bg-card/50 border-border/50 focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Nom
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Votre nom"
                      className="bg-card/50 border-border/50 focus:border-gold-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="votre@email.com"
                    className="bg-card/50 border-border/50 focus:border-gold-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Sujet de votre message"
                    className="bg-card/50 border-border/50 focus:border-gold-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Décrivez votre demande..."
                    rows={6}
                    className="bg-card/50 border-border/50 focus:border-gold-500"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-background"
                >
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">
                  Informations de contact
                </h2>
                <div className="space-y-6">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <Mail className="h-5 w-5 text-gold-500" />
                        <span>Email</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">contact@tazedates.com</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Réponse sous 24h du lundi au vendredi
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <Home className="h-5 w-5 text-gold-500" />
                        <span>Atelier</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        123 Rue de la Gourmandise<br />
                        75001 Paris, France
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Visites sur rendez-vous uniquement
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
                  Horaires de service
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lundi - Vendredi</span>
                    <span className="text-foreground">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Samedi</span>
                    <span className="text-foreground">10h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimanche</span>
                    <span className="text-foreground">Fermé</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
                  Questions fréquentes
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Livraison gratuite ?</p>
                    <p className="text-muted-foreground">Oui, dès 50€ d'achat en France métropolitaine</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Conservation ?</p>
                    <p className="text-muted-foreground">3 semaines à température ambiante, 2 mois au réfrigérateur</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Commandes personnalisées ?</p>
                    <p className="text-muted-foreground">Oui, contactez-nous pour vos événements spéciaux</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
