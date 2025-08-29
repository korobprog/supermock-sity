import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mic, 
  Code, 
  MessageCircle, 
  BarChart3, 
  FileText, 
  Gamepad2,
  Rocket,
  Monitor,
  Smartphone,
  Database,
  Settings,
  TestTube,
  Palette,
  BarChart,
  Lightbulb,
  Users
} from "lucide-react";
import heroImage from "@/assets/hero-ai-illustration.jpg";

const Index = () => {
  const professions = [
    { name: "Frontend", icon: Monitor },
    { name: "Backend", icon: Database },
    { name: "Fullstack", icon: Code },
    { name: "Mobile", icon: Smartphone },
    { name: "DevOps", icon: Settings },
    { name: "QA", icon: TestTube },
    { name: "UX/UI", icon: Palette },
    { name: "Data Analyst", icon: BarChart },
    { name: "Data Scientist", icon: BarChart3 },
    { name: "Product Manager", icon: Users }
  ];

  const languages = [
    { code: "🇺🇸", name: "English" },
    { code: "🇷🇺", name: "Russian" },
    { code: "🇪🇸", name: "Spanish" },
    { code: "🇫🇷", name: "French" },
    { code: "🇩🇪", name: "German" },
    { code: "🇨🇳", name: "Chinese" }
  ];

  const features = [
    { icon: Mic, title: "WebRTC видеозвонки", description: "Качественная связь в реальном времени" },
    { icon: Code, title: "Программирование в реальном времени", description: "Совместное написание кода" },
    { icon: MessageCircle, title: "Чат интервьюер ↔ кандидат", description: "Мгновенная коммуникация" },
    { icon: BarChart3, title: "AI анализ", description: "Умная оценка навыков" },
    { icon: FileText, title: "Персонализированная обратная связь", description: "Детальные рекомендации" },
    { icon: Gamepad2, title: "Интерактивное обучение", description: "Геймификация процесса" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 neu-card backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            Super Mock
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Возможности</a>
            <a href="#professions" className="text-muted-foreground hover:text-primary transition-colors">Профессии</a>
            <a href="#languages" className="text-muted-foreground hover:text-primary transition-colors">Языки</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
          </div>
          <Button variant="outline" className="hidden md:inline-flex">
            Войти
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Подготовьтесь к{" "}
                  <span className="gradient-primary bg-clip-text text-transparent">
                    собеседованию
                  </span>{" "}
                  на 6 языках
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Super Mock — AI-платформа для интервью с уникальным подбором кандидатов и интервьюеров
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="animate-pulse-glow">
                  🚀 Начать обучение
                </Button>
                <Button variant="hero-secondary" size="xl">
                  💻 Открыть приложение
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="neu-card p-6 text-center rounded-2xl">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">Tech Professions 💼</div>
                </div>
                <div className="neu-card p-6 text-center rounded-2xl">
                  <div className="text-3xl font-bold gradient-secondary bg-clip-text text-transparent">6</div>
                  <div className="text-sm text-muted-foreground mt-1">Languages 🌍</div>
                </div>
                <div className="neu-card p-6 text-center rounded-2xl">
                  <div className="text-3xl font-bold gradient-accent bg-clip-text text-transparent">1000</div>
                  <div className="text-sm text-muted-foreground mt-1">Interviews 📊</div>
                </div>
                <div className="neu-card p-6 text-center rounded-2xl">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">87%</div>
                  <div className="text-sm text-muted-foreground mt-1">Success Rate 🎯</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="AI Interview Platform Illustration" 
                  className="rounded-2xl shadow-2xl animate-float neu-card"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Возможности <span className="gradient-secondary bg-clip-text text-transparent">платформы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные технологии для эффективной подготовки к собеседованиям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="neu-card border-0 hover:glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professions Section */}
      <section id="professions" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Технические <span className="gradient-accent bg-clip-text text-transparent">профессии</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Подготовка к собеседованиям по всем IT-направлениям
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {professions.map((profession, index) => {
              const Icon = profession.icon;
              return (
                <Card key={index} className="neu-card border-0 hover:glow-secondary transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl gradient-secondary flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{profession.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Поддерживаемые <span className="gradient-primary bg-clip-text text-transparent">языки</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Проходите собеседования на родном языке
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {languages.map((language, index) => (
              <Card key={index} className="neu-card border-0 hover:glow-accent transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{language.code}</div>
                  <h3 className="font-medium">{language.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Современные <span className="gradient-secondary bg-clip-text text-transparent">технологии</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="neu-card border-0">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Rocket className="h-8 w-8 text-neon-blue" />
                  <CardTitle className="text-2xl">Astro Components 🚀</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Static, Fast, SEO-friendly архитектура для максимальной производительности
                </CardDescription>
                <div className="space-y-2">
                  <Badge variant="secondary">Статический контент</Badge>
                  <Badge variant="secondary">SEO оптимизация</Badge>
                  <Badge variant="secondary">Быстрая загрузка</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="neu-card border-0">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-neon-cyan text-2xl">⚛️</div>
                  <CardTitle className="text-2xl">React Components</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Dynamic, Interactive, Translated компоненты для интерактивности
                </CardDescription>
                <div className="space-y-2">
                  <Badge variant="secondary">Интерактивность</Badge>
                  <Badge variant="secondary">Мультиязычность</Badge>
                  <Badge variant="secondary">Реактивность</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neu-card p-6 text-center rounded-2xl">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">&lt;1s</div>
              <div className="text-muted-foreground mt-2">First Contentful Paint</div>
            </div>
            <div className="neu-card p-6 text-center rounded-2xl">
              <div className="text-4xl font-bold gradient-secondary bg-clip-text text-transparent">&lt;2s</div>
              <div className="text-muted-foreground mt-2">Largest Contentful Paint</div>
            </div>
            <div className="neu-card p-6 text-center rounded-2xl">
              <div className="text-4xl font-bold gradient-accent bg-clip-text text-transparent">0.05</div>
              <div className="text-muted-foreground mt-2">Cumulative Layout Shift</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                О <span className="gradient-accent bg-clip-text text-transparent">Super Mock</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Super Mock — это инновационная AI-платформа, которая революционизирует процесс подготовки к техническим собеседованиям. Мы объединяем передовые технологии искусственного интеллекта с многоязычной поддержкой для создания персонализированного опыта обучения.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша платформа помогает кандидатам улучшить навыки программирования, коммуникации и решения задач через реалистичные симуляции интервью с AI-анализом и обратной связью в реальном времени.
              </p>
              <Button variant="hero" size="lg">
                Узнать больше
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl gradient-primary opacity-20 animate-pulse-glow"></div>
                <div className="absolute inset-4 rounded-2xl neu-card flex items-center justify-center">
                  <div className="text-center">
                    <Lightbulb className="h-16 w-16 mx-auto mb-4 text-neon-cyan" />
                    <h3 className="text-xl font-bold mb-2">AI + Multilingual</h3>
                    <p className="text-muted-foreground">Умные технологии для глобального сообщества</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
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
                <div><a href="#" className="hover:text-primary transition-colors">Возможности</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Профессии</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Языки</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Цены</a></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="#" className="hover:text-primary transition-colors">Документация</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Поддержка</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">FAQ</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">GitHub</a></div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Telegram</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Super Mock. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;