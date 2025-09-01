import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { navigateToExternal, handleExternalClick } from "@/lib/utils";
import Footer from "@/components/Footer";
import { 
  Monitor,
  Database,
  Code,
  Smartphone,
  Settings,
  TestTube,
  Palette,
  BarChart,
  BarChart3,
  Users,
  ArrowRight
} from "lucide-react";

const Professions = () => {
  const professions = [
    { name: "Frontend", icon: Monitor, description: "Разработка пользовательских интерфейсов" },
    { name: "Backend", icon: Database, description: "Серверная разработка и API" },
    { name: "Fullstack", icon: Code, description: "Полный стек разработки" },
    { name: "Mobile", icon: Smartphone, description: "Мобильная разработка" },
    { name: "DevOps", icon: Settings, description: "Инфраструктура и автоматизация" },
    { name: "QA", icon: TestTube, description: "Тестирование и обеспечение качества" },
    { name: "UX/UI", icon: Palette, description: "Дизайн пользовательского опыта" },
    { name: "Data Analyst", icon: BarChart, description: "Анализ данных" },
    { name: "Data Scientist", icon: BarChart3, description: "Наука о данных и ML" },
    { name: "Product Manager", icon: Users, description: "Управление продуктом" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Технические <span className="gradient-secondary bg-clip-text text-transparent">профессии</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Подготовка к собеседованиям по всем IT-направлениям
          </p>
        </div>
      </section>

      {/* Professions Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {professions.map((profession, index) => {
              const Icon = profession.icon;
              return (
                <Card key={index} className="neu-card border-0 hover:glow-secondary transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl gradient-secondary flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{profession.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {profession.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="neu-card p-6 text-center rounded-2xl">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">10+</div>
              <div className="text-xs text-muted-foreground mt-1 leading-tight break-words">Технических<br />профессий 💼</div>
            </div>
            <div className="neu-card p-6 text-center rounded-2xl">
              <div className="text-3xl font-bold gradient-secondary bg-clip-text text-transparent">6</div>
              <div className="text-xs text-muted-foreground mt-1">Языков 🌍</div>
            </div>
            <div className="neu-card p-6 text-center rounded-2xl">
              <div className="text-3xl font-bold gradient-accent bg-clip-text text-transparent">1000</div>
              <div className="text-xs text-muted-foreground mt-1 leading-tight break-words">Собеседований 📊</div>
            </div>
            <div className="neu-card p-6 text-center rounded-2xl">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">87%</div>
              <div className="text-xs text-muted-foreground mt-1">Успешность 🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <Card className="neu-card border-0 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                  Выберите <span className="gradient-accent bg-clip-text text-transparent">профессию</span> и начните подготовку
                </h2>
                <p className="text-xl text-muted-foreground">
                  Подготовьтесь к собеседованию по любой технической специальности
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="wave-shimmer"
                    onClick={(e) => handleExternalClick('https://app.supermock.ru', e)}
                  >
                    Начать обучение
                  </Button>
                  <Button variant="outline" size="xl" onClick={() => window.location.href = '/learning-process'}>
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Процесс обучения
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
<Footer />
    </div>
  );
};

export default Professions;
