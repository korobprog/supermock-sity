import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigateToExternal, handleExternalClick } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { path: "/features", label: "Возможности" },
    { path: "/learning-process", label: "Процесс" },
    { path: "/professions", label: "Профессии" },
    { path: "/languages", label: "Языки" },
    { path: "/pricing", label: "Цены" },
    { path: "/instructions", label: "📖 Справка" },
    { path: "/support", label: "💜 Поддержка" },
    { path: "/about", label: "О нас" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 neu-card backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div onClick={closeMobileMenu}>
          <Logo />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`transition-colors ${
                isActive(item.path) 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className="hidden lg:flex">
          <Button variant="outline" onClick={(e) => handleExternalClick('https://app.supermock.ru', e)}>
            Войти
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 neu-card border-t border-border/50">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`block py-2 transition-colors ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border/50">
              <Button onClick={(e) => handleExternalClick('https://app.supermock.ru', e)} variant="outline" className="w-full">
                Войти
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
