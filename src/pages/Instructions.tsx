import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { navigateToExternal, handleExternalClick } from "@/lib/utils";
import { 
  Play,
  Users,
  Video,
  MessageSquare,
  Star,
  ArrowRight,
  ExternalLink,
  FileText,
  CheckCircle,
  Lightbulb,
  Mail,
  UserCheck,
  Search,
  Heart,
} from "lucide-react";
import Footer from "@/components/Footer";

const Instructions = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Нажмите кнопку SuperMock",
      description: "Начать обучение",
      icon: Play,
      color: "gradient-primary",
      details: "Перейдите на главную страницу и нажмите кнопку 'Начать обучение' для входа в систему"
    },
    {
      number: "2️⃣",
      title: "Выберите профессию",
      description: "Укажите область, в которой хотите практиковаться",
      icon: Users,
      color: "gradient-secondary",
      details: "Выберите из списка доступных профессий ту, которая соответствует вашим целям обучения"
    },
    {
      number: "3️⃣",
      title: "Выберите роль",
      description: "Кандидат или интервьюер",
      icon: UserCheck,
      color: "gradient-accent",
      details: "Определитесь с ролью: хотите ли вы практиковаться как кандидат или как интервьюер"
    },
    {
      number: "4️⃣",
      title: "Найдите собеседование",
      description: "Система подберет подходящего партнера",
      icon: Search,
      color: "gradient-primary",
      details: "Наша система автоматически найдет для вас подходящего партнера для практики"
    },
    {
      number: "5️⃣",
      title: "Проведите собеседование",
      description: "Используйте встроенную видеосвязь",
      icon: Video,
      color: "gradient-secondary",
      details: "Проведите полноценное собеседование с использованием встроенной видеосвязи"
    },
    {
      number: "6️⃣",
      title: "Оставьте фидбек",
      description: "Оцените партнера и получите оценку",
      icon: Star,
      color: "gradient-accent",
      details: "После собеседования оставьте конструктивный отзыв и получите оценку от партнера"
    }
  ];

  const tips = [
    {
      icon: Heart,
      title: "Будьте вежливы и профессиональны",
      description: "Соблюдайте деловой этикет и относитесь к партнеру с уважением"
    },
    {
      icon: MessageSquare,
      title: "Оставляйте конструктивный фидбек",
      description: "Помогите партнеру улучшить навыки, предоставив полезные рекомендации"
    },
    {
      icon: CheckCircle,
      title: "Практикуйтесь регулярно",
      description: "Для лучших результатов уделяйте время практике на регулярной основе"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Справка по SuperMock</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Пошаговое руководство по использованию платформы для практики собеседований
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={(e) => handleExternalClick('https://app.supermock.ru', e)}
            >
              <Play className="mr-2 h-5 w-5" />
              Начать обучение
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/support'}>
              <Mail className="mr-2 h-5 w-5" />
              Есть вопросы?
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Пошаговое <span className="gradient-accent bg-clip-text text-transparent">руководство</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Следуйте этим простым шагам для начала практики собеседований
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="neu-card border-0 hover:glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold">{step.number}</span>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-base font-medium">{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.details}
                    </p>
                    <div className="w-full h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              💡 <span className="gradient-primary bg-clip-text text-transparent">Советы</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Полезные рекомендации для эффективной практики
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Card key={index} className="neu-card border-0 hover:glow-accent transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{tip.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
                  Есть <span className="gradient-accent bg-clip-text text-transparent">вопросы</span>?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Напишите нам! 📧 Мы всегда готовы помочь
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="wave-shimmer"
                    onClick={() => window.location.href = '/support'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Связаться с нами
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl" 
                    onClick={(e) => handleExternalClick('https://app.supermock.ru', e)}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Начать практику
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

export default Instructions;
