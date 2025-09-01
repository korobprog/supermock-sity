# Настройка CI/CD для автоматического деплоя

## Что было настроено

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Автоматический деплой при пуше в main/master ветку
   - Сборка приложения с помощью pnpm
   - Деплой на сервер через SSH
   - Запуск Docker контейнера

2. **Исправленный Dockerfile**
   - Корректные пути для копирования файлов
   - Многоэтапная сборка (build + production)

## Настройка GitHub Secrets

Для работы CI/CD нужно добавить следующие секреты в настройках репозитория:

1. Перейдите в ваш GitHub репозиторий
2. Нажмите **Settings** → **Secrets and variables** → **Actions**
3. Добавьте следующие секреты:

### SERVER_HOST
```
217.198.6.238
```

### SERVER_USER
```
root
```

### SERVER_SSH_KEY
Содержимое вашего SSH ключа `~/.ssh/timeweb_vps_key`:
```bash
cat ~/.ssh/timeweb_vps_key
```

### SERVER_PORT
```
22
```

## Подготовка сервера

Убедитесь, что на сервере установлен Docker:

```bash
# Подключение к серверу
ssh -i ~/.ssh/timeweb_vps_key root@217.198.6.238

# Установка Docker (если не установлен)
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Запуск Docker сервиса
systemctl start docker
systemctl enable docker
```

## Как работает CI/CD

1. **Триггер**: Пуш в main/master ветку или ручной запуск
2. **Сборка**: Установка зависимостей и сборка приложения
3. **Деплой**: Копирование файлов на сервер
4. **Контейнеризация**: Сборка и запуск Docker контейнера
5. **Проверка**: Health check для подтверждения успешного деплоя

## Ручной деплой

Если нужно запустить деплой вручную:

1. Перейдите в **Actions** в GitHub репозитории
2. Выберите workflow **Deploy to Production**
3. Нажмите **Run workflow**

## Мониторинг

- Логи деплоя: GitHub Actions → Deploy to Production
- Статус контейнера на сервере: `docker ps`
- Логи контейнера: `docker logs supermock-ai-interview`

## Полезные команды на сервере

```bash
# Проверить статус контейнера
docker ps

# Посмотреть логи
docker logs supermock-ai-interview

# Перезапустить контейнер
docker restart supermock-ai-interview

# Остановить контейнер
docker stop supermock-ai-interview

# Удалить контейнер и образ
docker rm -f supermock-ai-interview
docker rmi supermock-ai-interview:latest
```

## Структура деплоя

- **Директория на сервере**: `/var/www/supermock-ai-interview`
- **Порт**: 3000 (HTTP)
- **Контейнер**: `supermock-ai-interview`
- **Автоперезапуск**: Да (unless-stopped)

## Безопасность

- SSH ключи хранятся в GitHub Secrets
- Контейнер изолирован
- Nginx настроен с security headers
- Автоматическая очистка неиспользуемых образов
