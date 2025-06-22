
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Premium Walnut Dates",
      description: "Dattes Medjool premium farcies aux noix fraîches",
      price: "€24.99",
      image: "🌰",
      category: "Classic"
    },
    {
      id: 2,
      name: "Pistachio Paradise",
      description: "Délicates dattes aux pistaches de Sicile",
      price: "€28.99",
      image: "🥜",
      category: "Premium"
    },
    {
      id: 3,
      name: "Almond Elegance",
      description: "Aux amandes grillées et miel d'acacia",
      price: "€26.99",
      image: "🥥",
      category: "Gourmet"
    },
    {
      id: 4,
      name: "Hazelnut Harmony",
      description: "Farcies aux noisettes torréfiées",
      price: "€25.99",
      image: "🌰",
      category: "Classic"
    },
    {
      id: 5,
      name: "Mixed Nuts Deluxe",
      description: "Assortiment de noix premium",
      price: "€32.99",
      image: "🥜",
      category: "Premium"
    },
    {
      id: 6,
      name: "Cashew Dream",
      description: "Aux noix de cajou et chocolat blanc",
      price: "€29.99",
      image: "🥥",
      category: "Gourmet"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-gold mb-4">
            Notre Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaque datte est soigneusement sélectionnée et farcies à la main avec les meilleurs ingrédients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:border-gold-500/50 transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm">
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
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-gold-500">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-background">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
