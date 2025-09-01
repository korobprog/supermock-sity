# 📚 Руководство по репозиториям SuperMock

## 🏠 Репозитории

### 1. **supermock-ai-interview** (Основной)
- **URL**: https://github.com/korobprog/supermock-ai-interview.git
- **Назначение**: Основной репозиторий проекта
- **Remote**: `origin`

### 2. **supermock-sity** (Сайт)
- **URL**: https://github.com/korobprog/supermock-sity.git
- **Назначение**: Лендинг сайт для SuperMock
- **Remote**: `supermock-sity`

## 🔄 Работа с репозиториями

### Отправка изменений в оба репозитория

```bash
# 1. Добавить изменения
git add .

# 2. Создать коммит
git commit -m "Update SuperMock site"

# 3. Отправить в основной репозиторий
git push origin main

# 4. Отправить в репозиторий сайта
git push supermock-sity main
```

### Отправка только в один репозиторий

```bash
# Только в основной
git push origin main

# Только в сайт
git push supermock-sity main
```

## 🚀 Деплой

### Автоматический деплой (GitHub Actions)

**Для supermock-sity:**
- Пуш в `main` → автоматический деплой в production
- PR → автоматический деплой в staging

**Для supermock-ai-interview:**
- Пуш в `main` → автоматический деплой в production
- PR → автоматический деплой в staging

### Ручной деплой

```bash
# Деплой production
./deploy.sh production

# Деплой staging
./deploy.sh staging
```

## 🌐 Доступ к сайтам

### SuperMock Site (supermock-sity)
- **Production**: http://217.198.6.238:3000
- **Staging**: http://217.198.6.238:8080

### SuperMock AI Interview (supermock-ai-interview)
- **Production**: http://217.198.6.238:3000 (тот же сервер)
- **Staging**: http://217.198.6.238:8080 (тот же сервер)

## 📁 Структура на сервере

```
/var/www/
├── supermock-ai-interview/          # Production (оба репозитория)
└── supermock-ai-interview-staging/  # Staging (оба репозитория)
```

## 🔧 CI/CD Pipeline

### GitHub Actions Workflows

**supermock-sity:**
- `.github/workflows/deploy.yml` - "Deploy SuperMock Site to Production"
- `.github/workflows/deploy-staging.yml` - "Deploy SuperMock Site to Staging"

**supermock-ai-interview:**
- `.github/workflows/deploy.yml` - "Deploy SuperMock Site to Production"
- `.github/workflows/deploy-staging.yml` - "Deploy SuperMock Site to Staging"

## 📝 Документация

### supermock-sity
- [README.md](README.md) - Основная документация
- [README_SUPERMOCK_SITY.md](README_SUPERMOCK_SITY.md) - Специальная документация
- [CI_CD_SETUP.md](CI_CD_SETUP.md) - Настройка CI/CD
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Руководство по деплою

### supermock-ai-interview
- [README.md](README.md) - Основная документация
- [CI_CD_SETUP.md](CI_CD_SETUP.md) - Настройка CI/CD
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Руководство по деплою

## 🎯 Рекомендации

### Для разработки
1. Работайте в основном репозитории `supermock-ai-interview`
2. Тестируйте изменения локально
3. Отправляйте в оба репозитория для синхронизации

### Для деплоя
1. Используйте автоматический деплой через GitHub Actions
2. Для быстрого деплоя используйте `./deploy.sh`
3. Проверяйте статус на сервере после деплоя

### Для мониторинга
1. Проверяйте GitHub Actions в обоих репозиториях
2. Мониторьте логи контейнеров на сервере
3. Проверяйте доступность сайтов

## 🔗 Полезные команды

```bash
# Проверить статус репозиториев
git remote -v

# Проверить статус изменений
git status

# Посмотреть историю коммитов
git log --oneline

# Проверить статус контейнеров на сервере
ssh -i ~/.ssh/timeweb_vps_key root@217.198.6.238 "docker ps"

# Посмотреть логи контейнера
ssh -i ~/.ssh/timeweb_vps_key root@217.198.6.238 "docker logs supermock-ai-interview"
```

---

**SuperMock** - два репозитория, один проект! 🚀
