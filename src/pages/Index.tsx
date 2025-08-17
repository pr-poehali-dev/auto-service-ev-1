import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      id: 'shinomontzh',
      icon: 'Settings',
      title: 'Шиномонтаж',
      description: 'Сезонная замена, срочный шиномонтаж, ремонт проколов, шиномонтаж EV',
      prices: [
        { size: 'R13-R16', price: 'От 400 ₽/колесо' },
        { size: 'R17-R20', price: 'От 550 ₽/колесо' },
        { size: 'EV', price: '+30% к тарифу' }
      ]
    },
    {
      id: 'to',
      icon: 'Wrench',
      title: 'Техобслуживание',
      description: 'Пакеты ТО (Эконом/Стандарт/Премиум), замена жидкостей, диагностика систем',
      prices: [
        { size: 'Эконом', price: 'От 1990 ₽' },
        { size: 'Стандарт', price: 'От 4990 ₽' },
        { size: 'Премиум EV', price: 'От 14990 ₽' }
      ]
    },
    {
      id: 'remont',
      icon: 'Tool',
      title: 'Ремонт',
      description: 'Подвеска, тормоза, двигатель, электрика, обработка кузова от коррозии',
      prices: [
        { size: 'Амортизаторы', price: 'От 1500 ₽' },
        { size: 'Тормозные колодки', price: 'От 500 ₽' },
        { size: 'Диагностика', price: 'От 400 ₽' }
      ]
    }
  ];

  const benefits = [
    {
      icon: 'Clock',
      title: 'Скорость & Удобство',
      description: 'Онлайн-запись 24/7, SMS/Telegram уведомления, гарантия времени на шиномонтаж'
    },
    {
      icon: 'Eye',
      title: 'Прозрачность',
      description: 'Видео- и фотоотчеты о работах, предварительное согласование работ/цен'
    },
    {
      icon: 'Award',
      title: 'Экспертность',
      description: 'Сертифицированные мастера по EV, современное оборудование, оригинальные запчасти'
    },
    {
      icon: 'ShieldCheck',
      title: 'Гарантии',
      description: 'Гарантия на все работы и запчасти с четко указанными сроками'
    }
  ];

  const reviews = [
    {
      name: 'Александр М.',
      rating: 5,
      text: 'Отличный сервис! Быстро поменяли шины, все объяснили и показали. Буду обращаться еще.',
      service: 'Шиномонтаж'
    },
    {
      name: 'Елена К.',
      rating: 5,
      text: 'Прошла ТО для своего электромобиля. Мастера знают свое дело, все сделали качественно.',
      service: 'ТО для EV'
    },
    {
      name: 'Михаил П.',
      rating: 5,
      text: 'Срочно нужно было починить подвеску. Сделали быстро, дали гарантию, цены честные.',
      service: 'Ремонт подвески'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/img/f11a5d34-550e-4028-b464-711181ebf68a.jpg)'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            От шиномонтажа до сложного ремонта
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
            Быстро, честно, с гарантией
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-4 text-lg">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться онлайн (за 60 сек)
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-4 text-lg"
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Срочный шиномонтаж
            </Button>
          </div>

          {/* Current Promotion */}
          <div className="bg-white/95 text-primary rounded-xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Percent" className="mr-2" size={20} />
              <span className="font-semibold">Акция этого месяца</span>
            </div>
            <p className="text-lg font-medium">
              Замена масла + диагностика = 1990₽
            </p>
            <p className="text-sm opacity-80 mt-1">
              Шиномонтаж EV со скидкой 15%
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексное обслуживание автомобилей любого класса, включая электромобили
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.prices.map((price, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span className="font-medium">{price.size}</span>
                        <Badge variant="secondary" className="font-semibold">
                          {price.price}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">
              Наши ключевые преимущества и уникальные предложения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={benefit.icon} size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">
              25+ реальных отзывов с VK, Яндекс Карты, 2ГИС
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">{review.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {review.service}
                    </Badge>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Контакты и запись</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Адрес и время работы</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="mt-1" />
                  <div>
                    <p className="font-medium">город Белгород</p>
                    <p className="opacity-90">2-ой переулок Лермонтова 5А</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="mt-1" />
                  <div>
                    <p className="font-medium">Пн-Пт: 10:00 - 21:00</p>
                    <p className="opacity-90">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} />
                  <p className="font-medium">+7 904 088 89 85</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Онлайн запись</h3>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 font-medium"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться через сайт
                </Button>
                <div className="flex gap-3">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Telegram
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Icon name="Phone" className="mr-2" size={20} />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-white/20" />
          
          <div className="mt-8">
            <p className="text-lg opacity-90">
              Мы предлагаем комплексное обслуживание автомобилей любого класса, включая электромобили.
            </p>
            <p className="opacity-80 mt-2">
              Наша философия - честность, скорость и экспертность в каждом решении.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;