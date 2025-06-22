
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
      
      {/* Decorative curves */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gold-500/20 to-transparent" 
           style={{
             clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 80%)'
           }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold">
            <span className="block text-foreground">Savourez nos</span>
            <span className="block gradient-gold">dates douceur</span>
            <span className="block text-foreground">délicate!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre collection exclusive de dattes premium, délicatement farcies 
            aux noix et fruits secs les plus fins. Une expérience gustative extraordinaire 
            qui éveille tous vos sens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-background font-semibold px-8 py-3 text-lg"
              asChild
            >
              <Link to="/products">ORDER NOW</Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold-500/50 text-gold-500 hover:bg-gold-500/10 px-8 py-3 text-lg"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Product showcase preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Classic Walnut", desc: "Dattes Medjool aux noix" },
            { name: "Pistachio Delight", desc: "Farcies aux pistaches" },
            { name: "Almond Premium", desc: "Aux amandes grillées" }
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-gold-500/50 transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-32 bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gold-500 text-2xl">🌰</span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
