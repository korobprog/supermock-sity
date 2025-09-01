# Настройка CI/CD для автоматического деплоя
попробуем 1
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
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABFwAAAAdzc2gtcn
NhAAAAAwEAAQAAAQEAz9Kgwy4tVwhxINBoMmKK+8NGiq9U9f+PIp8nPMpwHEeCAO1RUFTs
DkQU9fU+Yy6rJEn/jAZEDGSF70PZhIuTDRiuMID7CvikeBrcOBRHrvtNUS3bDg7ljHHgyK
HDS/mQO2Q6a70HE3kXcBetwK8RE5+Zr3Dc0n/R+BGKzg1Mo36GgiJjRI4mR3w28sFglAWx
pLWkOmvhTiRtNnrHW/HCTIXK26/O6GWNdcKTkuwsELgZWcwU8Th16/vvoM9tPGK+0mWh/Q
mLpL1WbN4oolxhv1PLGRzizoiIspwitwt9vWMMtu8+MAR12NOFCS/hvW5Sz5TCC/Ev7nVF
N4bPgNklpwAAA9jXtzDY17cw2AAAAAdzc2gtcnNhAAABAQDP0qDDLi1XCHEg0GgyYor7w0
aKr1T1/48inyc8ynAcR4IA7VFQVOwORBT19T5jLqskSf+MBkQMZIXvQ9mEi5MNGK4wgPsK
+KR4Gtw4FEeu+01RLdsODuWMceDIocNL+ZA7ZDprvQcTeRdwF63ArxETn5mvcNzSf9H4EY
rODUyjfoaCImNEjiZHfDbywWCUBbGktaQ6a+FOJG02esdb8cJMhcrbr87oZY11wpOS7CwQ
uBlZzBTxOHXr+++gz208Yr7SZaH9CYukvVZs3iiiXGG/U8sZHOLOiIiynCK3C329Ywy27z
4wBHXY04UJL+G9blLPlMIL8S/udUU3hs+A2SWnAAAAAwEAAQAAAQAWC1SMKjtwTkVEYsw6
qU3uyKw/N7vpCtOnANTLqPmIC7m+2W1/pOe+glBANWRfEZXhF+Goe7L/fDDiIVioVkR3O3
/2myfbO7v5FXhN5oYitHtjZLF7Ze8ex6boAT39ssTZgpcufcg2COkzNapzlDOug4Zsyqmn
FnHc62zFezmpjygUkVeuiqqwHf7P/r23qXS2w3ngWvE/QfK0HEH2MhcZNX1wrGExa6ohFa
6rTrWTviPAae/HHZVpxLzUWxNSFhukDMxTV2cyseMdJ4pzDLMwkSmI+CrS/r0DNMS52124
UVCTt8T+p5G633omcMSfF7luM2bv516EV1Ztkg6A7kwBAAAAgACciLOQ/L0DeRUyt9cy86
eyYQfGsAMsfwyxfhzI6TtswKS72JPT4dVu1O37UMBrycTtHuJhd/aUTT0OrzukIjKobMnm
rRFshCqK/2VD4YQRwCY+hs/N/JVYexnTc1FJmQb2BvLHvtV2zzLu5iJ79whawExZ+Cmpl6
JbGUwALHzJAAAAgQD9f46rXa9T4YHp3/9mBopxA6dsyCX/O/dtpzsI/gNk91nZ0w4QUk8c
vQnwlKqS4reTVzd76YT+4Xhh+WUh3ArETUm2+WmPxUy1DfBTbmXy8m1rURyhmuU73+9tNs
13819pfknRkSnCHxzb5scy60JdZ+25bI3/mBZj7y8tzhmqAQAAAIEA0d+s3HMQtlU1iz9o
K+Je3txvpWbgPxwi1fgLSfTaazR5KmoXbpuz4wNi2qlofZSiKGc/tR0oOEbwdjRvxNJQ0e
U4YfsHrW4yopvs1B0An+2mSAk+F7e8SsyxQNnV+ADe9otbMbuedAy/curwrYyrO8gUolir
u3N0vQmGPOtFP6cAAAAia29yb2Jwcm9nQGtvcm9icHJvZy1EZWZhdWx0LXN0cmluZwE=
-----END OPENSSH PRIVATE KEY-----
```

### SERVER_PORT
```
22
```

## Настройка GitHub Environment

### 1. Создайте Environment "supermock"
1. Перейдите в **Settings** → **Environments**
2. Нажмите **New environment**
3. Введите имя: `supermock`
4. Нажмите **Configure environment**

### 2. Настройте Deployment protection rules
- ✅ **Required reviewers**: ВКЛЮЧЕНО (добавьте себя)
- ❌ **Wait timer**: ВЫКЛЮЧЕНО
- ✅ **Allow administrators to bypass**: ВКЛЮЧЕНО

### 3. Настройте Deployment branches
- Измените с "No restriction" на "Selected branches and tags"
- Введите: `main`

### 4. Добавьте Environment secrets
- `VITE_API_URL` = `https://api.supermock.ru`
- `VITE_SITE_URL` = `https://supermock.ru`
- `VITE_APP_ENV` = `production`

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
2. Выберите workflow **Deploy SuperMock Site to Production**
3. Нажмите **Run workflow**

## Мониторинг

- Логи деплоя: GitHub Actions → Deploy SuperMock Site to Production
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
