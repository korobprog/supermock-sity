# 🌐 SuperMock Site Repository

Этот репозиторий содержит лендинг для AI-платформы подготовки к собеседованиям **SuperMock**.

## 📋 Информация о репозитории

- **Название**: `supermock-sity`
- **URL**: https://github.com/korobprog/supermock-sity.git
- **Назначение**: Лендинг сайт для SuperMock AI Interview Platform
- **Статус**: ✅ Активный

## 🚀 Деплой

### Автоматический деплой (GitHub Actions)
```bash
# Просто запушьте в main ветку
git add .
git commit -m "Update site"
git push origin main
```

### Ручной деплой
```bash
# Деплой в production
./deploy.sh production

# Деплой в staging
./deploy.sh staging
```

## 🌐 Доступ к сайту

- **Production**: http://217.198.6.238:3000
- **Staging**: http://217.198.6.238:8080

## 📁 Структура деплоя на сервере

- **Production**: `/var/www/supermock-ai-interview`
- **Staging**: `/var/www/supermock-ai-interview-staging`

## 🔧 CI/CD Pipeline

### GitHub Actions Workflows
- **`.github/workflows/deploy.yml`** - Production деплой
- **`.github/workflows/deploy-staging.yml`** - Staging деплой

### Триггеры
- **Production**: push в main ветку
- **Staging**: push в develop/staging или PR

## 🛠️ Технологии

- **Frontend**: React 18 + TypeScript + Vite
- **Стили**: Tailwind CSS + Shadcn/ui
- **Контейнеризация**: Docker + Nginx
- **CI/CD**: GitHub Actions
- **Пакетный менеджер**: pnpm

## 📊 Статистика сайта

- **6 языков** программирования
- **10+ технических профессий**
- **1000+ собеседований**
- **87% успешность**

## 🎯 Основные страницы

- **Главная** (`/`) - Лендинг с описанием возможностей
- **Возможности** (`/features`) - Детальное описание функций
- **Профессии** (`/professions`) - Список поддерживаемых профессий
- **Языки** (`/languages`) - Поддерживаемые языки программирования
- **Цены** (`/pricing`) - Тарифные планы
- **FAQ** (`/faq`) - Часто задаваемые вопросы
- **Документация** (`/documentation`) - Техническая документация

## 🔗 Внешние ссылки

- **Основное приложение**: https://app.supermock.ru
- **API документация**: /documentation
- **Поддержка**: /support

## 📝 Документация

- [CI/CD Setup](CI_CD_SETUP.md) - Настройка автоматического деплоя
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Руководство по деплою
- [Instructions](INSTRUCTIONS_README.md) - Инструкции по использованию

## 🎨 Дизайн

- Современный минималистичный дизайн
- Адаптивная верстка для всех устройств
- Градиенты и анимации
- Оптимизация производительности

## 🔄 Workflow разработки

1. **Разработка** в feature ветке
2. **PR** → автоматический деплой в staging
3. **Тестирование** в staging
4. **Merge в main** → автоматический деплой в production

## 🛡️ Безопасность

- SSH ключи в GitHub Secrets
- Изолированные Docker контейнеры
- Security headers в Nginx
- Автоматическая очистка образов

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи контейнера: `docker logs supermock-ai-interview`
2. Проверьте статус GitHub Actions
3. Убедитесь, что порты не заняты
4. Проверьте доступность сервера

---

**SuperMock Site** - современный лендинг для AI-платформы подготовки к собеседованиям! 🚀
