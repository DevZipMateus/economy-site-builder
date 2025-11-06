import { Wrench, CheckCircle, Clock, ThumbsUp } from "lucide-react";

const Services = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Atendimento ágil",
      description: "Delivery rápido e manutenção eficiente para que seus equipamentos nunca parem"
    },
    {
      icon: ThumbsUp,
      title: "Qualidade garantida",
      description: "Trabalhamos apenas com produtos de alta qualidade e procedência"
    },
    {
      icon: CheckCircle,
      title: "Melhor custo-benefício",
      description: "Economia com qualidade, garantindo o melhor desempenho"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
              Serviços
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Além de produtos de qualidade, oferecemos serviços especializados
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 text-primary-foreground animate-scale-in">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="bg-accent/20 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center flex-shrink-0">
                <Wrench size={32} className="text-accent sm:w-10 sm:h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                  Manutenção de impressoras
                </h3>
                <p className="text-base sm:text-lg text-primary-foreground/90 mb-3 sm:mb-4">
                  Manutenção preventiva e corretiva em impressoras de todas as marcas
                </p>
                <p className="text-sm sm:text-base text-primary-foreground/80">
                  Nossa equipe especializada garante que seus equipamentos funcionem com máxima eficiência, evitando paradas e prejuízos no seu negócio.
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5567992945076"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-accent text-accent-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold whitespace-nowrap text-center text-sm sm:text-base"
              >
                Agende agora
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <benefit.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
