# 🚀 Руководство по деплою SuperMock AI Interview

## ✅ Статус деплоя

**Production**: ✅ Работает на http://217.198.6.238:3000

## 🎯 Быстрый старт

### 1. Автоматический деплой (GitHub Actions)

```bash
# Просто запушьте в main ветку
git add .
git commit -m "Update application"
git push origin main
```

### 2. Ручной деплой

```bash
# Деплой в production
./deploy.sh production

# Деплой в staging
./deploy.sh staging
```

## 📋 Что было настроено

### ✅ CI/CD Pipeline
- **GitHub Actions** для автоматического деплоя
- **Docker** контейнеризация
- **Nginx** веб-сервер
- **Многоэтапная сборка** (Node.js + Nginx)

### ✅ Структура деплоя
- **Production**: порт 3000
- **Staging**: порт 8080
- **Автоперезапуск** контейнеров
- **Health checks**

### ✅ Безопасность
- SSH ключи в GitHub Secrets
- Security headers в Nginx
- Изолированные контейнеры

## 🔧 Команды управления

### Локальная разработка
```bash
# Установка зависимостей
pnpm install

# Запуск dev сервера
pnpm dev

# Сборка
pnpm build

# Линтинг
pnpm lint
```

### Деплой
```bash
# Production
pnpm run deploy:production

# Staging
pnpm run deploy:staging
```

### Docker
```bash
# Сборка образа
docker build -t supermock-ai-interview .

# Запуск с docker-compose
docker-compose up -d

# Просмотр логов
docker logs supermock-ai-interview
```

## 🌐 Доступ к приложению

- **Production**: http://217.198.6.238:3000
- **Staging**: http://217.198.6.238:8080

## 📊 Мониторинг

### GitHub Actions
- Логи: GitHub → Actions → Deploy to Production
- Статус: ✅/❌ в списке workflows

### Сервер
```bash
# Подключение
ssh -i ~/.ssh/timeweb_vps_key root@217.198.6.238

# Статус контейнеров
docker ps

# Логи
docker logs supermock-ai-interview

# Использование ресурсов
docker stats
```

## 🔄 Workflow разработки

1. **Разработка** в feature ветке
2. **PR** → автоматический деплой в staging
3. **Тестирование** в staging
4. **Merge в main** → автоматический деплой в production
5. **Мониторинг** production

## 🛠️ Troubleshooting

### Проблемы с деплоем
```bash
# Проверить статус контейнера
docker ps

# Посмотреть логи
docker logs supermock-ai-interview

# Перезапустить контейнер
docker restart supermock-ai-interview
```

### Проблемы с доступом
```bash
# Проверить порты
netstat -tlnp | grep :3000

# Проверить firewall
ufw status
```

## 📁 Структура файлов

```
supermock-ai-interview/
├── .github/workflows/          # GitHub Actions
│   ├── deploy.yml             # Production деплой
│   └── deploy-staging.yml     # Staging деплой
├── deploy.sh                  # Скрипт ручного деплоя
├── docker-compose.yml         # Docker Compose
├── Dockerfile                 # Docker образ
├── nginx.conf                 # Nginx конфигурация
├── env.production             # Production переменные
├── env.staging               # Staging переменные
├── CI_CD_SETUP.md            # Настройка CI/CD
├── README_CI_CD.md           # Документация CI/CD
└── DEPLOYMENT_GUIDE.md       # Это руководство
```

## 🎉 Готово!

Ваше приложение успешно развернуто и доступно по адресу:
**http://217.198.6.238:3000**

### Следующие шаги:
1. Настройте GitHub Secrets для автоматического деплоя
2. Добавьте SSL сертификат для HTTPS
3. Настройте мониторинг и алерты
4. Настройте резервное копирование

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи контейнера
2. Проверьте статус GitHub Actions
3. Убедитесь, что порты не заняты
4. Проверьте доступность сервера
