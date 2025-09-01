# CI/CD Pipeline для SuperMock AI Interview

## 🚀 Быстрый старт

### Автоматический деплой (GitHub Actions)

1. **Настройте GitHub Secrets** (см. `CI_CD_SETUP.md`)
2. **Запушьте в main ветку** - автоматический деплой в production
3. **Создайте PR** - автоматический деплой в staging

### Ручной деплой

```bash
# Деплой в production
pnpm run deploy:production

# Деплой в staging
pnpm run deploy:staging

# Или напрямую
./deploy.sh production
./deploy.sh staging
```

## 📋 Структура CI/CD

### GitHub Actions Workflows

- **`.github/workflows/deploy.yml`** - Production деплой
  - Триггер: push в main/master
  - Сборка и деплой на порт 80

- **`.github/workflows/deploy-staging.yml`** - Staging деплой
  - Триггер: push в develop/staging или PR
  - Сборка, линтинг и деплой на порт 8080

### Docker

- **`Dockerfile`** - Многоэтапная сборка (Node.js + Nginx)
- **`docker-compose.yml`** - Управление контейнерами
- **`nginx.conf`** - Конфигурация веб-сервера

### Скрипты

- **`deploy.sh`** - Скрипт для ручного деплоя
- **`env.production`** - Переменные для production
- **`env.staging`** - Переменные для staging

## 🔧 Команды

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

# Сборка для разных окружений
pnpm run build:production
pnpm run build:staging
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
- Логи: GitHub → Actions → Deploy to Production/Staging
- Статус: ✅/❌ в списке workflows

### Сервер
```bash
# Подключение к серверу
ssh -i ~/.ssh/timeweb_vps_key root@217.198.6.238

# Статус контейнеров
docker ps

# Логи production
docker logs supermock-ai-interview

# Логи staging
docker logs supermock-ai-interview-staging

# Использование ресурсов
docker stats
```

## 🔄 Workflow

### Development → Staging → Production

1. **Разработка** в feature ветке
2. **PR** → автоматический деплой в staging
3. **Тестирование** в staging (порт 8080)
4. **Merge в main** → автоматический деплой в production
5. **Мониторинг** production

### Rollback

```bash
# Откат к предыдущей версии
ssh -i ~/.ssh/timeweb_vps_key root@217.198.6.238

# Остановка текущего контейнера
docker stop supermock-ai-interview

# Запуск предыдущего образа (если есть)
docker run -d --name supermock-ai-interview-backup \
  --restart unless-stopped -p 80:80 \
  supermock-ai-interview:previous
```

## 🛡️ Безопасность

- SSH ключи в GitHub Secrets
- Изолированные Docker контейнеры
- Security headers в Nginx
- Автоматическая очистка образов
- Health checks

## 📝 Логирование

### GitHub Actions
- Автоматические уведомления о статусе деплоя
- Комментарии в PR с ссылками на staging

### Docker
- Логи контейнеров
- Health check статусы
- Метрики использования ресурсов

## 🚨 Troubleshooting

### Проблемы с деплоем

1. **Проверьте GitHub Secrets**
2. **Убедитесь, что Docker установлен на сервере**
3. **Проверьте логи контейнера**
4. **Убедитесь, что порты не заняты**

### Проблемы с доступом

1. **Проверьте firewall на сервере**
2. **Убедитесь, что контейнер запущен**
3. **Проверьте nginx конфигурацию**

### Проблемы с SSL

Для добавления HTTPS:
1. Настройте SSL сертификат
2. Обновите nginx.conf
3. Добавьте порт 443 в docker-compose.yml
