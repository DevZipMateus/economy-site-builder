import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img src={logo} alt="Economy Suprimentos" className="h-64 w-auto" />
            <p className="text-sm text-primary-foreground/80">
              A marca da qualidade e preço baixo. Especialistas em suprimentos para impressoras há 13 anos.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/economysuprimentos/" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/economysuprimentosoficial/" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <button onClick={() => {
                window.location.href = "/#about";
              }} className="hover:text-accent transition-colors text-left">
                  Sobre nós
                </button>
              </li>
              <li>
                <button onClick={() => {
                window.location.href = "/#products";
              }} className="hover:text-accent transition-colors text-left">
                  Produtos
                </button>
              </li>
              <li>
                <button onClick={() => {
                window.location.href = "/#services";
              }} className="hover:text-accent transition-colors text-left">
                  Serviços
                </button>
              </li>
              <li>
                <Link to="/catalogo" className="hover:text-accent transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <button onClick={() => {
                window.location.href = "/#contact";
              }} className="hover:text-accent transition-colors text-left">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+5567992945076" className="hover:text-accent transition-colors block">
                    (67) 99294-5076
                  </a>
                  <a href="tel:+556733877740" className="hover:text-accent transition-colors block mt-1">
                    (67) 3387-7740
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:economysuprimentos@hotmail.com" className="hover:text-accent transition-colors break-all">
                  economysuprimentos@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horário de funcionamento</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Segunda a Sexta</p>
                  <p className="text-primary-foreground/80">07:30 às 17:30</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sábado</p>
                  <p className="text-primary-foreground/80">07:30 às 11:30</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Economy Suprimentos. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 58.396.260/0001-08</p>
        </div>
      </div>
    </footer>;
};
export default Footer;