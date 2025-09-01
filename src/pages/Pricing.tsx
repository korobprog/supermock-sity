import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { navigateToExternal, handleExternalClick } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { ArrowRight, Check, X } from "lucide-react";
import Logo from "@/components/Logo";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$1",
      period: "USD за месяц",
      included: [
        "Безлимитные моковые собеседования",
        "Базовые функции платформы",
        "Срок действия: 1 месяц"
      ],
      excluded: [
        "ИИ помощник",
        "AI анализ и планирование",
        "Персонализированные рекомендации",
        "Обучение в приложениях",
        "Практические задания",
        "Приоритетная поддержка"
      ],
      popular: false,
      buttonText: "Выбрать план",
      buttonVariant: "outline" as const
    },
    {
      name: "Basic",
      price: "$9.99",
      period: "USD за месяц",
      included: [
        "Моковые собеседования",
        "ИИ помощник",
        "AI анализ и планирование",
        "Персонализированные рекомендации",
        "Расширенная аналитика",
        "Срок действия: 1 месяц"
      ],
      excluded: [
        "Обучение в приложениях",
        "Практические задания",
        "Повторение цикла",
        "Непрерывное развитие",
        "Приоритетная поддержка",
        "Эксклюзивные функции"
      ],
      popular: false,
      buttonText: "Выбрать план",
      buttonVariant: "outline" as const
    },
    {
      name: "Pro",
      price: "$20",
      period: "USD за 3 месяца",
      included: [
        "Выгодная цена (экономия 40%)",
        "Безлимитные моковые собеседования",
        "ИИ помощник",
        "AI анализ и планирование",
        "Персонализированные рекомендации",
        "Обучение в приложениях",
        "Практические задания",
        "Повторение цикла",
        "Непрерывное развитие",
        "Срок действия: 3 месяца",
        "Приоритетная поддержка",
        "Эксклюзивные функции"
      ],
      excluded: [],
      popular: true,
      buttonText: "Выбрать план",
      buttonVariant: "hero" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Выберите <span className="gradient-primary bg-clip-text text-transparent">тариф</span>
              </h1>
              <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30 text-sm px-3 py-1">
                BETA
              </Badge>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            🎯 Гибкие планы для эффективной подготовки к собеседованиям
          </p>
          
          {/* Beta Version Notice */}
          <div className="max-w-4xl mx-auto">
            <Card className="neu-card border-0 bg-gradient-to-r from-primary/5 to-secondary/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Сейчас платформа находится в Beta-версии
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Поэтому цены максимально доступные для всех. После выхода полной версии тарифы будут выше, 
                      так что сейчас самое выгодное время подключиться!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`neu-card border-0 relative overflow-hidden hover:glow-primary transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-primary/20' : ''}`}>
                {plan.popular && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 gradient-primary"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30">
                        Популярный
                      </Badge>
                    </div>
                  </>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.period}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Included Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground mb-3">✅ Что включено:</h4>
                    {plan.included.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-neon-green" />
                        </div>
                        <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Excluded Features */}
                  {plan.excluded.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-border/50">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-3">❌ Что не включено:</h4>
                      {plan.excluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-red-500" />
                          </div>
                          <span className="text-sm leading-relaxed text-muted-foreground line-through">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full wave-shimmer" 
                    size="lg"
                    onClick={(e) => handleExternalClick('https://app.supermock.ru', e)}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Responsibility Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="neu-card border-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <CardContent className="p-12 text-center">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <span className="text-3xl">💜</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground">
                    Мы рядом, когда трудно
                  </h2>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    SuperMock — это не только про карьеру и собеседования. Это про людей.
                  </p>
                  
                  <div className="text-left max-w-3xl mx-auto space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Мы знаем, как тяжело бывает тем, кто оказался в непростой жизненной ситуации. Поэтому:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">10% от всех оплат</strong> мы направляем на помощь тем, кому это особенно нужно.
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Люди с ограниченными возможностями и малоимущие</strong> могут учиться на нашей платформе бесплатно.
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed pt-4">
                      Потому что каждый достоин шанса на будущее с надеждой и любовью ❤️
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="neu-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Как выбрать тариф?</h3>
                <p className="text-muted-foreground">
                  Начните с Free плана для знакомства с платформой, затем переходите на Basic или Pro в зависимости от ваших потребностей.
                </p>
              </CardContent>
            </Card>
            <Card className="neu-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Можно ли отменить подписку?</h3>
                <p className="text-muted-foreground">
                  Да, вы можете отменить подписку в любое время. Оплаченный период будет активен до конца срока действия.
                </p>
              </CardContent>
            </Card>
            <Card className="neu-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Есть ли пробный период?</h3>
                <p className="text-muted-foreground">
                  Free план позволяет бесплатно протестировать основные возможности платформы.
                </p>
              </CardContent>
            </Card>
            <Card className="neu-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Какие способы оплаты?</h3>
                <p className="text-muted-foreground">
                  Мы принимаем оплату в USD через различные платежные системы.
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
                  Готовы <span className="gradient-accent bg-clip-text text-transparent">начать</span> обучение?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Выберите подходящий тариф и начните подготовку к собеседованию уже сегодня
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="animate-pulse-glow"
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

      <Footer />
    </div>
  );
};

export default Pricing;
