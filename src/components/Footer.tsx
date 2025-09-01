import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Super Mock
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              AI-платформа для подготовки к техническим собеседованиям с поддержкой 6 языков и персонализированной обратной связью.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Email: info@supermock.ru</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><Link to="/features" className="hover:text-primary transition-colors">Возможности</Link></div>
              <div><Link to="/professions" className="hover:text-primary transition-colors">Профессии</Link></div>
              <div><Link to="/languages" className="hover:text-primary transition-colors">Языки</Link></div>
              <div><Link to="/pricing" className="hover:text-primary transition-colors">Цены</Link></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><Link to="/instructions" className="hover:text-primary transition-colors">📖 Справка</Link></div>
              <div><Link to="/documentation" className="hover:text-primary transition-colors">Документация</Link></div>
              <div><Link to="/support" className="hover:text-primary transition-colors">💜 Поддержка</Link></div>
              <div><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></div>
              <div><Link to="/about" className="hover:text-primary transition-colors">О нас</Link></div>
              <div><Link to="/privacy-policy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link></div>
              <div><Link to="/terms-of-service" className="hover:text-primary transition-colors">Условия использования</Link></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Оплата</h4>
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-bold text-primary">
                IO Money
              </div>
              <div className="text-lg font-bold text-secondary">
                Payeer
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://github.com/korobprog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://t.me/korobprog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Telegram
            </a>
            <a 
              href="https://www.linkedin.com/in/korobprog/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Super Mock. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
