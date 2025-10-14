import { Heart, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Nossa história
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mb-16 animate-fade-in">
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              A Economy nasceu de um sonho familiar. Buscando conciliar a vida profissional com a criação dos filhos, a família deu início, dentro de casa, a um projeto voltado ao fornecimento de suprimentos para impressoras.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Mesmo diante dos desafios da vida — incluindo a perda do idealizador do projeto e as crises provocadas pela pandemia — a Economy se reinventou. Com resiliência e determinação, superou cada obstáculo e, hoje, celebra <strong>13 anos</strong> de uma trajetória marcada por esforço, superação e conquistas no setor de suprimentos de tecnologia.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              E seguimos em frente, prontos para continuar escrevendo essa história de sucesso!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow animate-slide-up">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Visão</h3>
              <p className="text-card-foreground leading-relaxed">
                Ser referência nacional em soluções inteligentes para impressão, unindo economia, qualidade e inovação no atendimento a empresas e consumidores.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Missão</h3>
              <p className="text-card-foreground leading-relaxed">
                Oferecer suprimentos e serviços para impressoras com excelência, agilidade e preço justo, promovendo a melhor experiência em impressão por meio de um atendimento personalizado e eficiente.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Valores</h3>
              <ul className="text-card-foreground leading-relaxed space-y-2">
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
