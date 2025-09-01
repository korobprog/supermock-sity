import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { navigateToExternal, handleExternalClick } from "@/lib/utils";

import { 
  Code,  
  MessageSquare, 
  Brain,
  BookOpen,
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Languages,
  Briefcase,
  Settings,
  Video,
  Play
} from "lucide-react";

const LearningProcess = () => {
  const languages = [
    { code: "🇺🇸", name: "English" },
    { code: "🇷🇺", name: "Russian" },
    { code: "🇪🇸", name: "Spanish" },
    { code: "🇫🇷", name: "French" },
    { code: "🇩🇪", name: "German" },
    { code: "🇨🇳", name: "Chinese" }
  ];

  const professions = [
    "Frontend Developer",
    "Backend Developer", 
    "Fullstack Developer",
    "Mobile Developer",
    "DevOps Engineer",
    "QA Engineer",
    "UX/UI Designer",
    "Data Analyst",
    "Data Scientist",
    "Product Manager"
  ];

  const processSteps = [
    {
      id: 1,
      title: "Выбор языка",
      description: "Собеседования на 6 языках",
      icon: Languages,
      iconColor: "gradient-primary",
      details: "Выберите язык для прохождения собеседования из 6 доступных языков"
    },
    {
      id: 2,
      title: "Выбор профессии",
      description: "10+ технических направлений",
      icon: Briefcase,
      iconColor: "gradient-secondary",
      details: "Определитесь с технической специализацией для подготовки"
    },
    {
      id: 3,
      title: "Инструменты и технологии",
      description: "Стек технологий профессии",
      icon: Settings,
      iconColor: "gradient-accent",
      details: "Изучите необходимые инструменты и технологии для выбранной профессии"
    },
    {
      id: 4,
      title: "Моковое интервью",
      description: "Реалистичная симуляция",
      icon: Video,
      iconColor: "gradient-primary",
      details: "Проходите реалистичные собеседования с реальными участниками"
    },
    {
      id: 5,
      title: "Получение фидбека",
      description: "Детальная обратная связь",
      icon: MessageSquare,
      iconColor: "gradient-secondary",
      details: "Получите подробный анализ ваших ответов и поведения"
    },
    {
      id: 6,
      title: "AI анализ и планирование",
      description: "Персонализированные рекомендации",
      icon: Brain,
      iconColor: "gradient-accent",
      details: "ИИ анализирует результаты и составляет план развития"
    },
    {
      id: 7,
      title: "Обучение в приложениях",
      description: "Практические задания",
      icon: BookOpen,
      iconColor: "gradient-primary",
      details: "Выполняйте практические задания для закрепления навыков"
    },
    {
      id: 8,
      title: "Повторение цикла",
      description: "Непрерывное развитие",
      icon: RefreshCw,
      iconColor: "gradient-secondary",
      details: "Возвращайтесь к началу для постоянного совершенствования"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Процесс <span className="gradient-primary bg-clip-text text-transparent">обучения</span>
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Пошаговый план подготовки к техническим собеседованиям с использованием AI-технологий
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            className="wave-shimmer"
            onClick={(e) => handleExternalClick('https://app.supermock.ru', e)}
          >
            <Play className="mr-2 h-5 w-5" />
            Начать обучение
          </Button>
        </div>
      </section>

      {/* Process Mind Map */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative">
                  {/* Connection Lines */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-primary/50 to-secondary/50 transform -translate-x-1/2 z-0"></div>
                  )}
                  
                  <Card className="neu-card border-0 hover:glow-primary transition-all duration-300 hover:scale-105 relative z-10">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${step.iconColor} flex items-center justify-center mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        <Badge variant="secondary" className="mr-2">
                          {step.id}
                        </Badge>
                        <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base font-medium text-muted-foreground">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {step.details}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Поддерживаемые <span className="gradient-primary bg-clip-text text-transparent">языки</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Проходите собеседования на родном языке
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
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

      {/* Professions Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Технические <span className="gradient-secondary bg-clip-text text-transparent">профессии</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Подготовка к собеседованиям по всем IT-направлениям
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {professions.map((profession, index) => (
              <Card key={index} className="neu-card border-0 hover:glow-secondary transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl gradient-secondary flex items-center justify-center mb-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">{profession}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process by Plan Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-primary bg-clip-text text-transparent">Learning Process</span> по тарифам
            </h2>
            <p className="text-xl text-muted-foreground">
              Разные уровни доступа к функциям обучения в зависимости от выбранного плана
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="neu-card border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Free</CardTitle>
                <CardDescription>Базовые возможности</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Моковые собеседования</h4>
                      <p className="text-sm text-muted-foreground">Базовые симуляции интервью</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Базовый фидбек</h4>
                      <p className="text-sm text-muted-foreground">Простая обратная связь</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={(e) => handleExternalClick('https://app.supermock.ru', e)}>
                  Выбрать Free
                </Button>
              </CardContent>
            </Card>

            {/* Basic Plan */}
            <Card className="neu-card border-0 ring-2 ring-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Basic</CardTitle>
                <CardDescription>Расширенный анализ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Моковые собеседования</h4>
                      <p className="text-sm text-muted-foreground">Расширенные симуляции</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">ИИ помощник</h4>
                      <p className="text-sm text-muted-foreground">AI-поддержка во время интервью</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">AI анализ и планирование</h4>
                      <p className="text-sm text-muted-foreground">Персонализированные рекомендации</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Расширенная аналитика</h4>
                      <p className="text-sm text-muted-foreground">Детальная статистика прогресса</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={(e) => handleExternalClick('https://app.supermock.ru', e)}>
                  Выбрать Basic
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="neu-card border-0 ring-2 ring-accent/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Pro</CardTitle>
                <CardDescription>Полный цикл обучения</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Все функции Basic</h4>
                      <p className="text-sm text-muted-foreground">Полный доступ к аналитике</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Обучение в приложениях</h4>
                      <p className="text-sm text-muted-foreground">Практические задания</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Повторение цикла</h4>
                      <p className="text-sm text-muted-foreground">Непрерывное развитие</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Приоритетная поддержка</h4>
                      <p className="text-sm text-muted-foreground">Эксклюзивные функции</p>
                    </div>
                  </div>
                </div>
                <Button variant="hero" className="w-full wave-shimmer" onClick={(e) => handleExternalClick('https://app.supermock.ru', e)}>
                  Выбрать Pro
                </Button>
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
                  Готовы <span className="gradient-accent bg-clip-text text-transparent">начать</span> обучение?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Присоединяйтесь к тысячам разработчиков, которые уже улучшили свои навыки с Super Mock
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="wave-shimmer"
                    onClick={(e) => handleExternalClick('https://app.supermock.ru', e)}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Начать обучение
                  </Button>
                  <Button variant="outline" size="xl" onClick={() => window.location.href = '/pricing'}>
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Сравнить тарифы
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

export default LearningProcess;
