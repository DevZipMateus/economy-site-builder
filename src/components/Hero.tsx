import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Economy Suprimentos
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
            Referência em soluções inteligentes para impressão, unindo economia, qualidade e inovação no atendimento a empresas e consumidores
          </h2>
          <p className="text-lg md:text-xl mb-12 text-primary-foreground/80">
            A marca da qualidade e preço baixo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://api.whatsapp.com/send?phone=556733877740"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center gap-2 text-lg"
            >
              Solicite um orçamento
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <button
              onClick={scrollToContact}
              className="bg-background/10 text-primary-foreground px-8 py-4 rounded-lg hover:bg-background/20 transition-all duration-300 font-semibold border border-primary-foreground/30 backdrop-blur-sm text-lg"
            >
              Entre em contato
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold mb-2">13</div>
              <div className="text-primary-foreground/80">Anos de experiência</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Qualidade garantida</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-primary-foreground/80">Atendimento ágil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
