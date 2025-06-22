
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Walnut Dates",
      description: "Dattes Medjool premium farcies aux noix fraîches de Californie. Chaque datte est soigneusement dénoyautée et farcies à la main.",
      price: "€24.99",
      originalPrice: "€29.99",
      image: "🌰",
      category: "Classic",
      inStock: true,
      featured: false
    },
    {
      id: 2,
      name: "Pistachio Paradise",
      description: "Délicates dattes aux pistaches de Sicile, un mariage parfait entre la douceur de la datte et le croquant de la pistache.",
      price: "€28.99",
      originalPrice: null,
      image: "🥜",
      category: "Premium",
      inStock: true,
      featured: true
    },
    {
      id: 3,
      name: "Almond Elegance",
      description: "Aux amandes grillées et miel d'acacia, ces dattes offrent une expérience gustative raffinée et authentique.",
      price: "€26.99",
      originalPrice: "€31.99",
      image: "🥥",
      category: "Gourmet",
      inStock: true,
      featured: false
    },
    {
      id: 4,
      name: "Hazelnut Harmony",
      description: "Farcies aux noisettes torréfiées du Piémont, ces dattes révèlent des arômes intenses et une texture exceptionnelle.",
      price: "€25.99",
      originalPrice: null,
      image: "🌰",
      category: "Classic",
      inStock: false,
      featured: false
    },
    {
      id: 5,
      name: "Mixed Nuts Deluxe",
      description: "Assortiment de noix premium: amandes, noix, pistaches et noisettes. Notre signature collection pour les connaisseurs.",
      price: "€32.99",
      originalPrice: null,
      image: "🥜",
      category: "Premium",
      inStock: true,
      featured: true
    },
    {
      id: 6,
      name: "Cashew Dream",
      description: "Aux noix de cajou et chocolat blanc, une création exclusive qui allie tradition et innovation culinaire.",
      price: "€29.99",
      originalPrice: "€34.99",
      image: "🥥",
      category: "Gourmet",
      inStock: true,
      featured: false
    }
  ];

  const categories = ["All", "Classic", "Premium", "Gourmet"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold gradient-gold mb-4">
            Our Premium Collection
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez notre gamme complète de dattes premium, farcies aux meilleurs fruits secs 
            et noix sélectionnés avec soin.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" 
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-background"
                  : "border-gold-500/50 text-gold-500 hover:bg-gold-500/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:border-gold-500/50 transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm relative">
                {product.featured && (
                  <Badge className="absolute top-4 right-4 z-10 bg-gold-500 text-background">
                    Featured
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge variant="destructive" className="absolute top-4 left-4 z-10">
                    Out of Stock
                  </Badge>
                )}
                
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-6xl">{product.image}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-playfair text-lg text-foreground">{product.name}</CardTitle>
                    <span className="text-xs bg-gold-500/20 text-gold-500 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gold-500">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-background"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
