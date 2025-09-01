# 🔐 GitHub Secrets Setup для CI/CD

## 📋 **Необходимые Secrets для автоматического деплоя**

Для работы CI/CD нужно настроить следующие секреты в GitHub репозитории:

### 🔑 **Основные Secrets (Settings → Secrets and variables → Actions)**

| Secret Name | Описание | Пример значения |
|-------------|----------|-----------------|
| `SERVER_HOST` | IP адрес сервера | `217.198.6.238` |
| `SERVER_USER` | Пользователь для SSH | `root` |
| `SERVER_SSH_KEY` | Приватный SSH ключ | Содержимое `~/.ssh/timeweb_vps_key` |
| `SERVER_PORT` | SSH порт | `22` |

### 🛠 **Как добавить Secrets:**

1. **Перейдите в репозиторий на GitHub**
   - Откройте `https://github.com/korobprog/supermock-ai-interview`
   - Или `https://github.com/korobprog/supermock-sity`

2. **Откройте Settings**
   - Нажмите на вкладку "Settings"
   - В левом меню выберите "Secrets and variables" → "Actions"

3. **Добавьте каждый Secret:**
   - Нажмите "New repository secret"
   - Введите Name (например, `SERVER_HOST`)
   - Введите Value (например, `217.198.6.238`)
   - Нажмите "Add secret"

### 🔑 **Получение SSH ключа:**

```bash
# Показать содержимое SSH ключа
cat ~/.ssh/timeweb_vps_key
```

**Скопируйте ВСЕ содержимое файла (включая строки BEGIN и END) в Secret `SERVER_SSH_KEY`**

### 🌍 **Environment Variables (опционально)**

Если хотите использовать GitHub Environments:

1. **Создайте Environment "production"**
   - Settings → Environments → "New environment"
   - Name: `production`

2. **Добавьте Environment Secrets:**
   - `VITE_API_URL`: `https://api.supermock.ru`
   - `VITE_SITE_URL`: `https://supermock.ru`
   - `VITE_APP_ENV`: `production`

## 🚀 **Проверка настройки:**

После добавления всех Secrets:

1. **Сделайте push в main ветку**
   ```bash
   git push origin main
   ```

2. **Проверьте GitHub Actions**
   - Перейдите в "Actions" вкладку
   - Должен запуститься workflow "Deploy SuperMock Site to Production"

3. **Проверьте логи**
   - Если есть ошибки, они будут видны в логах Actions

## 🔧 **Альтернативный Workflow:**

Если основной workflow не работает, используйте стабильную версию:
- Файл: `.github/workflows/deploy-stable.yml`
- Более надежная обработка pnpm
- Дополнительная отладочная информация

## 📝 **Примеры значений:**

### Для supermock-ai-interview:
```
SERVER_HOST: 217.198.6.238
SERVER_USER: root
SERVER_SSH_KEY: -----BEGIN OPENSSH PRIVATE KEY-----
                ... (содержимое ключа) ...
                -----END OPENSSH PRIVATE KEY-----
SERVER_PORT: 22
```

### Для supermock-sity:
```
SERVER_HOST: 217.198.6.238
SERVER_USER: root
SERVER_SSH_KEY: -----BEGIN OPENSSH PRIVATE KEY-----
                ... (содержимое ключа) ...
                -----END OPENSSH PRIVATE KEY-----
SERVER_PORT: 22
```

## ⚠️ **Важные замечания:**

1. **SSH ключ должен быть приватным** - никогда не публикуйте его
2. **Права доступа** - убедитесь, что SSH ключ имеет права на сервер
3. **Брандмауэр** - порт 22 должен быть открыт на сервере
4. **Пользователь** - должен иметь права на выполнение Docker команд

## 🎯 **Результат:**

После правильной настройки Secrets:
- ✅ Автоматический деплой при push в main
- ✅ Автоматическая сборка Docker образа
- ✅ Автоматический запуск контейнера с Traefik
- ✅ Автоматическая проверка здоровья сайта

---

**Настройте Secrets и CI/CD будет работать автоматически!** 🚀
