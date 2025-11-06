import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
      setIsMobileMenuOpen(false);
    }
  };
  const handleNavigation = (id: string) => {
    if (location.pathname !== "/") {
      // Se não estiver na home, navega primeiro e depois rola
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      // Se já estiver na home, só rola
      scrollToSection(id);
    }
  };
  const navItems = [{
    label: "Início",
    id: "hero",
    path: "/"
  }, {
    label: "Sobre",
    id: "about",
    path: "/"
  }, {
    label: "Produtos",
    id: "products",
    path: "/"
  }, {
    label: "Serviços",
    id: "services",
    path: "/"
  }, {
    label: "Catálogo",
    path: "/catalogo"
  }, {
    label: "Contato",
    id: "contact",
    path: "/"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary text-primary-foreground ${isScrolled ? "shadow-lg" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Economy Suprimentos" className="h-56 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => item.id ? <button key={item.id} onClick={() => handleNavigation(item.id)} className="text-primary-foreground hover:text-accent font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                  {item.label}
                </button> : <Link key={item.label} to={item.path} className="text-primary-foreground hover:text-accent font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                  {item.label}
                </Link>)}
            <a href="https://api.whatsapp.com/send?phone=5567992945076" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-6 py-2.5 rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
              Fale conosco
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-primary-foreground/20 animate-fade-in">
            {navItems.map(item => item.id ? <button key={item.id} onClick={() => handleNavigation(item.id)} className="block w-full text-left px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                  {item.label}
                </button> : <Link key={item.label} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                  {item.label}
                </Link>)}
            <a href="https://api.whatsapp.com/send?phone=5567992945076" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-accent-foreground px-4 py-3 rounded-lg hover:bg-accent/90 transition-colors mt-2 mx-4" style={{
          width: "calc(100% - 2rem)"
        }}>
              Fale conosco
            </a>
          </nav>}
      </div>
    </header>;
};
export default Header;