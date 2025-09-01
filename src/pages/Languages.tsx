import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { navigateToExternal, handleExternalClick } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const Languages = () => {
  const languages = [
    { code: "🇺🇸", name: "English", description: "Английский язык" },
    { code: "🇷🇺", name: "Russian", description: "Русский язык" },
    { code: "🇪🇸", name: "Spanish", description: "Испанский язык" },
    { code: "🇫🇷", name: "French", description: "Французский язык" },
    { code: "🇩🇪", name: "German", description: "Немецкий язык" },
    { code: "🇨🇳", name: "Chinese", description: "Китайский язык" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Поддерживаемые <span className="gradient-primary bg-clip-text text-transparent">языки</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Проходите собеседования на родном языке
          </p>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {languages.map((language, index) => (
              <Card key={index} className="neu-card border-0 hover:glow-accent transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{language.code}</div>
                  <h3 className="font-medium mb-2">{language.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="neu-card border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-2">Глобальный доступ</h3>
                <p className="text-muted-foreground">
                  Подготовка к собеседованиям на 6 основных языках мира
                </p>
              </CardContent>
            </Card>
            <Card className="neu-card border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Ваши коллеги с Вашим стеком и языком</h3>
                <p className="text-muted-foreground">
                  Выбирай время в течение дня
                </p>
              </CardContent>
            </Card>
            <Card className="neu-card border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-2">Естественное общение</h3>
                <p className="text-muted-foreground">
                  Комфортное общение на родном языке без языковых барьеров
                </p>
              </CardContent>
            </Card>
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
                  Выберите <span className="gradient-accent bg-clip-text text-transparent">язык</span> и начните обучение
                </h2>
                <p className="text-xl text-muted-foreground">
                  Подготовьтесь к собеседованию на любом из 6 поддерживаемых языков
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

export default Languages;
