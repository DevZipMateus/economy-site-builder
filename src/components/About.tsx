import { Heart, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Nossa história
          </h2>
          <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg mb-12 sm:mb-16 animate-fade-in">
            <p className="text-base sm:text-lg text-card-foreground leading-relaxed mb-4 sm:mb-6">
              A Economy nasceu de um sonho familiar. Buscando conciliar a vida profissional com a criação dos filhos, a família deu início, dentro de casa, a um projeto voltado ao fornecimento de suprimentos para impressoras.
            </p>
            <p className="text-base sm:text-lg text-card-foreground leading-relaxed mb-4 sm:mb-6">
              Mesmo diante dos desafios da vida — incluindo a perda do idealizador do projeto e as crises provocadas pela pandemia — a Economy se reinventou. Com resiliência e determinação, superou cada obstáculo e, hoje, celebra <strong>13 anos</strong> de uma trajetória marcada por esforço, superação e conquistas no setor de suprimentos de tecnologia.
            </p>
            <p className="text-base sm:text-lg text-card-foreground leading-relaxed">
              E seguimos em frente, prontos para continuar escrevendo essa história de sucesso!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-card rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow animate-slide-up">
              <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Visão</h3>
              <p className="text-sm sm:text-base text-card-foreground leading-relaxed">
                Ser referência nacional em soluções inteligentes para impressão, unindo economia, qualidade e inovação no atendimento a empresas e consumidores.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="text-primary" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Missão</h3>
              <p className="text-sm sm:text-base text-card-foreground leading-relaxed">
                Oferecer suprimentos e serviços para impressoras com excelência, agilidade e preço justo, promovendo a melhor experiência em impressão por meio de um atendimento personalizado e eficiente.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow animate-slide-up sm:col-span-2 md:col-span-1" style={{ animationDelay: "0.4s" }}>
              <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Valores</h3>
              <ul className="text-sm sm:text-base text-card-foreground leading-relaxed space-y-2">
                <li>• Inovação e evolução constante</li>
                <li>• Economia com qualidade</li>
                <li>• Comprometimento</li>
                <li>• Atendimento personalizado</li>
                <li>• Agilidade</li>
                <li>• Sustentabilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
