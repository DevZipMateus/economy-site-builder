import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(67) 99294-5076",
      link: "tel:+5567992945076"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "economysuprimentos@hotmail.com",
      link: "mailto:economysuprimentos@hotmail.com"
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a Sexta: 07:30 às 17:30 | Sábado: 07:30 às 11:30",
      link: null
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://www.instagram.com/economysuprimentos/"
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://www.facebook.com/economysuprimentosoficial/"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
              Entre em contato
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Estamos prontos para atender você e oferecer as melhores soluções
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-foreground">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-words"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-lg animate-scale-in">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">
              Siga-nos nas redes sociais
            </h3>
            <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon size={24} className="sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5567992945076"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              Fale conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
