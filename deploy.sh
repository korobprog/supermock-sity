#!/bin/bash

# Скрипт для быстрого деплоя на сервер
# Использование: ./deploy.sh [production|staging]

set -e

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Конфигурация
SERVER_HOST="217.198.6.238"
SERVER_USER="root"
SSH_KEY="$HOME/.ssh/timeweb_vps_key"
SSH_PORT="22"

# Определяем окружение
ENVIRONMENT=${1:-production}

if [[ "$ENVIRONMENT" != "production" && "$ENVIRONMENT" != "staging" ]]; then
    echo -e "${RED}Ошибка: Укажите окружение (production или staging)${NC}"
    echo "Использование: ./deploy.sh [production|staging]"
    exit 1
fi

echo -e "${GREEN}🚀 Начинаем деплой в окружение: $ENVIRONMENT${NC}"

# Проверяем SSH ключ
if [ ! -f "$SSH_KEY" ]; then
    echo -e "${RED}Ошибка: SSH ключ не найден: $SSH_KEY${NC}"
    exit 1
fi

# Сборка проекта
echo -e "${YELLOW}📦 Собираем проект...${NC}"
pnpm install --frozen-lockfile
pnpm run build

# Создаем временную директорию
TEMP_DIR="/tmp/supermock-ai-interview-$(date +%s)"
echo -e "${YELLOW}📁 Создаем временную директорию: $TEMP_DIR${NC}"

# Копируем файлы на сервер
echo -e "${YELLOW}📤 Копируем файлы на сервер...${NC}"
ssh -i "$SSH_KEY" -p "$SSH_PORT" "$SERVER_USER@$SERVER_HOST" "mkdir -p $TEMP_DIR"

# Копируем все файлы кроме node_modules и .git
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude 'dist' \
    -e "ssh -i $SSH_KEY -p $SSH_PORT" \
    ./ "$SERVER_USER@$SERVER_HOST:$TEMP_DIR/"

# Определяем настройки для окружения
if [[ "$ENVIRONMENT" == "production" ]]; then
    CONTAINER_NAME="supermock-ai-interview"
    PORT="3000"
    DIRECTORY="/var/www/supermock-ai-interview"
else
    CONTAINER_NAME="supermock-ai-interview-staging"
    PORT="8080"
    DIRECTORY="/var/www/supermock-ai-interview-staging"
fi

# Выполняем деплой на сервере
echo -e "${YELLOW}🔧 Выполняем деплой на сервере...${NC}"
ssh -i "$SSH_KEY" -p "$SSH_PORT" "$SERVER_USER@$SERVER_HOST" << EOF
    # Останавливаем текущий контейнер
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
    
    # Удаляем старый образ
    docker rmi $CONTAINER_NAME:latest 2>/dev/null || true
    
    # Создаем директорию для проекта
    mkdir -p $DIRECTORY
    
    # Копируем файлы из временной директории
    cp -r $TEMP_DIR/* $DIRECTORY/
    
    # Переходим в директорию проекта
    cd $DIRECTORY
    
    # Собираем Docker образ
    docker build -t $CONTAINER_NAME:latest .
    
    # Запускаем контейнер
    docker run -d \
        --name $CONTAINER_NAME \
        --restart unless-stopped \
        -p $PORT:80 \
        $CONTAINER_NAME:latest
    
    # Очищаем временную директорию
    rm -rf $TEMP_DIR
    
    # Очищаем неиспользуемые образы
    docker image prune -f
EOF

# Проверяем статус
echo -e "${YELLOW}🔍 Проверяем статус деплоя...${NC}"
sleep 5

# Проверяем, что контейнер запущен
CONTAINER_STATUS=$(ssh -i "$SSH_KEY" -p "$SSH_PORT" "$SERVER_USER@$SERVER_HOST" "docker ps --filter name=$CONTAINER_NAME --format '{{.Status}}'")

if [[ -n "$CONTAINER_STATUS" ]]; then
    echo -e "${GREEN}✅ Контейнер успешно запущен!${NC}"
    echo -e "${GREEN}🌐 Приложение доступно по адресу: http://$SERVER_HOST:$PORT${NC}"
    echo -e "${GREEN}📊 Статус контейнера: $CONTAINER_STATUS${NC}"
else
    echo -e "${RED}❌ Ошибка: Контейнер не запущен${NC}"
    echo -e "${YELLOW}📋 Логи контейнера:${NC}"
    ssh -i "$SSH_KEY" -p "$SSH_PORT" "$SERVER_USER@$SERVER_HOST" "docker logs $CONTAINER_NAME"
    exit 1
fi

echo -e "${GREEN}🎉 Деплой завершен успешно!${NC}"
