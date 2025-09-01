import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Heart, MessageCircle, GraduationCap, Percent, Users } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="gradient-primary bg-clip-text text-transparent">Поддержка</span>
              </h1>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            💜 Мы верим, что каждый достоин возможности развиваться и расти
          </p>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Learning */}
            <Card className="neu-card border-0 hover:glow-primary transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl mb-2">Бесплатное обучение</CardTitle>
                <CardDescription className="text-base">
                  Для людей с ограниченными возможностями и малоимущих
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Полный доступ к платформе</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Все функции и возможности</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Персональная поддержка</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Discounts */}
            <Card className="neu-card border-0 hover:glow-secondary transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <Percent className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-2xl mb-2">Скидки и льготы</CardTitle>
                <CardDescription className="text-base">
                  Для тех, кто оказался в сложной жизненной ситуации
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Индивидуальные скидки до 50%</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Гибкие условия оплаты</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Рассмотрение каждого случая</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="neu-card border-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Как получить поддержку?
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Мы рассмотрим вашу ситуацию и предложим оптимальное решение
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-semibold">Напишите нам</h3>
                    <p className="text-muted-foreground text-sm">
                      Опишите вашу ситуацию в Telegram
                    </p>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-semibold">Мы изучим</h3>
                    <p className="text-muted-foreground text-sm">
                      Рассмотрим вашу заявку в течение 24 часов
                    </p>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-lg font-semibold">Получите помощь</h3>
                    <p className="text-muted-foreground text-sm">
                      Предложим подходящий вариант поддержки
                    </p>
                  </div>
                </div>
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
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-red-500" />
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold">
                  Готовы <span className="gradient-accent bg-clip-text text-transparent">помочь</span> вам
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Напишите нам в Telegram, и мы обязательно рассмотрим вашу ситуацию. 
                  Каждый случай уникален, и мы найдем способ помочь вам.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://t.me/supermock_support', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Написать в Telegram
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  💜 Мы ответим в течение 24 часов
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="neu-card border-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
              <CardContent className="p-12 text-center">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                      <Users className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground">
                    Наше социальное влияние
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">10%</div>
                      <p className="text-muted-foreground">От всех оплат идет на помощь нуждающимся</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold gradient-secondary bg-clip-text text-transparent">100+</div>
                      <p className="text-muted-foreground">Людей получили бесплатный доступ к обучению</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold gradient-accent bg-clip-text text-transparent">24ч</div>
                      <p className="text-muted-foreground">Среднее время ответа на заявки о поддержке</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
