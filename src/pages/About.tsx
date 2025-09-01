import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Code, 
  Brain, 
  MessageCircle, 
  Target, 
  Rocket,
  Mail,
  Linkedin,
  Github,
  Globe
} from "lucide-react";
import myPhoto from "@/assets/my2.png";
import telegramIcon from "@/assets/telegram-outline-svgrepo-com.svg";
import { Link } from "react-router-dom";
import TechnologySection from "@/components/TechnologySection";

const About = () => {
  const skills = [
    { 
      name: "AI/ML", 
      icon: Brain, 
      color: "gradient-primary",
      gradient: "from-blue-500/60 via-purple-500/40 to-pink-500/60",
      description: "Машинное обучение, нейронные сети, обработка естественного языка"
    },
    { 
      name: "Web Development", 
      icon: Code, 
      color: "gradient-secondary",
      gradient: "from-green-500/60 via-cyan-500/40 to-blue-500/60",
      description: "Frontend и Backend разработка, современные фреймворки"
    },
    { 
      name: "Interview Coaching", 
      icon: MessageCircle, 
      color: "gradient-accent",
      gradient: "from-orange-500/60 via-yellow-500/40 to-red-500/60",
      description: "Подготовка к собеседованиям, развитие soft skills"
    },
    { 
      name: "Product Management", 
      icon: Target, 
      color: "gradient-primary",
      gradient: "from-purple-500/60 via-pink-500/40 to-indigo-500/60",
      description: "Управление продуктом, аналитика, стратегия развития"
    }
  ];

  const projectFeatures = [
    "Персональный AI-ментор для каждого пользователя",
    "Моковые интервью с реалистичными сценариями",
    "Адаптивное обучение на основе ваших пробелов",
    "Развитие как технических, так и soft skills"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <User className="w-4 h-4 mr-2" />
                  О нас
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Коробков{" "}
                  <span className="gradient-primary bg-clip-text text-transparent">
                    Максим Викторович
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Создатель SuperMock — инновационной платформы для подготовки к собеседованиям с использованием искусственного интеллекта
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="mailto:korobprog@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="wave-shimmer hover:scale-105 transition-all duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    Связаться
                  </Button>
                </Link>
                <Link to="https://t.me/korobprog" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero-secondary" size="xl">
                    <img 
                      src={telegramIcon} 
                      alt="Telegram" 
                      className="w-5 h-5 mr-2 filter brightness-0 invert"
                    />
                    Telegram
                  </Button>
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="neu-card p-8 rounded-full w-80 h-80 flex items-center justify-center">
                <div className="relative">
                  {/* Outer glow effect */}
                  <div className="absolute inset-0 w-72 h-72 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-xl animate-pulse"></div>
                  
                  {/* Main frame */}
                  <div className="relative w-64 h-64 rounded-full p-2 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 shadow-2xl">
                    {/* Inner frame */}
                    <div className="w-full h-full rounded-full p-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                      {/* Photo container */}
                      <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                        <img 
                          src={myPhoto} 
                          alt="Коробков Максим Викторович" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-secondary to-accent animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                О проекте{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  SuperMock
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Уникальная платформа персонального обучения IT профессиям
              </p>
            </div>

            <Card className="neu-card border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Minimalist intro */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold">Основные принципы:</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Многие курсы IT не живые, они не индивидуальные. Каждый человек особенный и все разные, 
                      нет одинаковых людей, а значит и принцип в обучении должен быть к каждому особенный и личностный.
                    </p>
                  </div>

                  {/* Expandable content */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="neu-button hover:glow-primary transition-all duration-300"
                        onClick={() => {
                          const content = document.getElementById('project-details');
                          const button = document.getElementById('read-more-btn');
                          if (content && button) {
                            if (content.classList.contains('hidden')) {
                              content.classList.remove('hidden');
                              button.innerHTML = 'Скрыть подробности';
                            } else {
                              content.classList.add('hidden');
                              button.innerHTML = 'Подробнее...';
                            }
                          }
                        }}
                        id="read-more-btn"
                      >
                        Подробнее...
                      </Button>
                    </div>

                    <div id="project-details" className="hidden space-y-6 text-muted-foreground leading-relaxed">
                      <div className="space-y-4">
                        <p>
                          Меня зовут <strong className="text-foreground">Коробков Максим Викторович</strong> и я разработчик с 20 летним стажем, 
                          начинал с автоматизированных систем торговли на финансовых биржах, в данный момент проектирую системы для нужд компаний.
                        </p>
                        
                        <p>
                          Мне приходят много идей в жизни из проблем с которыми сталкиваюсь, и как разработчик пробую их решить. 
                          Время самое ценное в нашей жизни, я столкнулся с проблемой, что на обучение много уходит времени. 
                          Я обучался в четырёх компаниях, этот опыт мне известен, все они пытаются решить проблемы, 
                          но многое их ученики уходят не удовлетворенными.
                        </p>

                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border-l-4 border-primary">
                          <h4 className="font-semibold text-foreground mb-2">Решение проблемы в подходе:</h4>
                          <p>
                            Самое главное к чему идем это цель, но пока к ней идем уже забудем то что проходили или учили. 
                            Вам это знакомо? Думаю да, всем это знакомо... Так какое решение тогда? 
                            А давайте не просто учить зубрить, а еще и жить, вариться в хорошем смысле понимании этого слова :)
                          </p>
                        </div>

                        <p>
                          Представь даже если Вы уже профи и чего-то добились в сфере IT. Вы джун и горите войти в IT 
                          и много зарабатывать денег на удаленке попивая сок на берегу моря, работая на макбуке... 
                          Но, есть одно "НО" — не берут работодатели даже если есть отклик, в их успешное общество, не подходите, 
                          лайв кодинг завалили или не правильно ответили, проектов мало нет коммерческого опыта.
                        </p>

                        <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg border-l-4 border-accent">
                          <h4 className="font-semibold text-foreground mb-2">Вот и пришла идея:</h4>
                          <p>
                            Создать сервис где все в одном месте и есть твой персональный ментор — настоящий друг хоть и ИИ!
                            Представьте, Вы что-то подучили какие-то основы на платформе, и потом ментор тебе говорит: 
                            "А ты готов, давай иди на моковый собес, проходи его я буду смотреть на фидбек и дальше 
                            от этого отталкиваясь буду тебя вести, заполнять пробелы в твоих знаниях".
                          </p>
                        </div>

                        <p>
                          Ты проходишь собеседования, привыкаешь в общении и уверенно говоришь с интервьюером, 
                          не как раньше дрожащим голосом или молясь чтобы связь пропала и выйти из этого ада :) 
                          В общем учеба идет в радость потому что она сделана для тебя и под тебя настроена.
                        </p>

                        <div className="text-center p-6 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
                          <p className="text-lg font-medium text-foreground">
                            Вот такую систему разработал именно для тебя. Проходи собесы общаясь с коллегами, 
                            плати приемлемую сумму для обучения в знак благодарности поддержания проекта.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Ключевые <span className="gradient-secondary bg-clip-text text-transparent">возможности</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Что делает SuperMock уникальной платформой
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projectFeatures.map((feature, index) => (
                <Card key={index} className="neu-card border-0 hover:scale-105 transition-transform cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      <span className="text-lg text-muted-foreground">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <TechnologySection />

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">
              Навыки и{" "}
              <span className="gradient-secondary bg-clip-text text-transparent">
                технологии
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Специализация в области AI и веб-разработки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="neu-card hover:scale-105 transition-transform cursor-pointer group overflow-hidden">
                <div className="relative">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"></div>
                  
                  {/* Gradient Background */}
                  <div className="relative h-32 overflow-hidden rounded-t-lg">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} group-hover:scale-110 transition-transform duration-300`}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className={`w-5 h-5 text-white`} />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-white/20 backdrop-blur-sm"></div>
                </div>
                
                <CardHeader className="text-center pt-4">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{skill.name}</CardTitle>
                  {skill.description && (
                    <CardDescription className="text-sm leading-tight group-hover:text-foreground/80 transition-colors duration-300">
                      {skill.description}
                    </CardDescription>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Card className="neu-card max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Готов к{" "}
                <span className="gradient-accent bg-clip-text text-transparent">
                  сотрудничеству
                </span>
              </CardTitle>
              <CardDescription className="text-lg">
                открыт к новым проектам и профессиональным возможностям.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Button onClick={() => window.location.href = 'mailto:korobprog@gmail.com'} variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button onClick={() => window.location.href = 'https://www.linkedin.com/in/korobprog/'} variant="outline" className="w-full">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button onClick={() => window.location.href = 'https://github.com/korobprog'} variant="outline" className="w-full">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button onClick={() => window.location.href = 'https://t.me/korobprog'} variant="outline" className="w-full">
                  <img 
                    src={telegramIcon} 
                    alt="Telegram" 
                    className="w-5 h-5 mr-2 filter brightness-0 invert"
                  />
                  Телеграм
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
