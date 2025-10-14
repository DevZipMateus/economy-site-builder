import { Printer, Droplet, FileText, Activity } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Droplet,
      title: "Cartuchos de tinta",
      description: "Cartuchos originais e compatíveis para todas as marcas de impressoras"
    },
    {
      icon: Printer,
      title: "Toners preto e branco",
      description: "Toners de alta qualidade para impressões monocromáticas"
    },
    {
      icon: Printer,
      title: "Toners coloridos",
      description: "Toners coloridos para impressões vibrantes e profissionais"
    },
    {
      icon: Activity,
      title: "Recargas",
      description: "Recarga de cartuchos de tinta e toners com economia garantida"
    },
    {
      icon: Droplet,
      title: "Refil de tinta Epson",
      description: "Refis de alta qualidade para impressoras Epson"
    },
    {
      icon: Droplet,
      title: "Refil de tinta Canon",
      description: "Refis compatíveis com toda linha Canon"
    },
    {
      icon: Droplet,
      title: "Refil de tinta HP",
      description: "Refis específicos para impressoras HP"
    },
    {
      icon: FileText,
      title: "Papel A4",
      description: "Papel A4 de qualidade para impressões do dia a dia"
    },
    {
      icon: Activity,
      title: "Fita matricial",
      description: "Fitas para impressoras matriciais de todas as marcas"
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nossos produtos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo o que você precisa para suas impressoras com a melhor relação custo-benefício do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://api.whatsapp.com/send?phone=556733877740"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              Solicite seu orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
