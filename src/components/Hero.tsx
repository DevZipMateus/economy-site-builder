import { ArrowRight, Truck } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative text-primary-foreground pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Economy Suprimentos - Soluções em impressão" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Economy Suprimentos
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-primary-foreground/90 font-light leading-relaxed max-w-3xl mx-auto px-4">
            Referência em soluções inteligentes para impressão, unindo economia, qualidade e inovação no atendimento a empresas e consumidores
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-primary-foreground/80">
            A marca da qualidade e preço baixo
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href="https://api.whatsapp.com/send?phone=5567992945076"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              Solicite um orçamento
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-background/10 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-background/20 transition-all duration-300 font-semibold border border-primary-foreground/30 backdrop-blur-sm text-base sm:text-lg"
            >
              Entre em contato
            </button>
          </div>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl sm:text-4xl font-bold mb-2">13</div>
              <div className="text-sm sm:text-base text-primary-foreground/80">Anos de experiência</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl sm:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm sm:text-base text-primary-foreground/80">Qualidade garantida</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center justify-center mb-2">
                <Truck className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="text-sm sm:text-base text-primary-foreground/80">Delivery grátis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
