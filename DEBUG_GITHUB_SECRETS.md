# 🔍 Отладка GitHub Secrets

## ❌ **Проблема: "missing server host"**

Ошибка означает, что GitHub Actions не может найти Secrets. Давайте проверим настройку:

## 🔍 **Шаг 1: Проверьте правильный репозиторий**

У вас есть **ДВА репозитория**:
1. `https://github.com/korobprog/supermock-ai-interview`
2. `https://github.com/korobprog/supermock-sity`

**Secrets нужно добавить в ТОТ репозиторий, где запускается workflow!**

### Как проверить:
1. Откройте GitHub Actions вкладку
2. Посмотрите, в каком репозитории запускается workflow
3. Добавьте Secrets именно в этот репозиторий

## 🔍 **Шаг 2: Проверьте имена Secrets**

Secrets должны называться **ТОЧНО**:
- `SERVER_HOST` (не `server_host` или `HOST`)
- `SERVER_USER` (не `server_user` или `USER`)
- `SERVER_SSH_KEY` (не `server_ssh_key` или `SSH_KEY`)
- `SERVER_PORT` (не `server_port` или `PORT`)

## 🔍 **Шаг 3: Запустите тестовый workflow**

1. **Перейдите в Actions вкладку**
2. **Найдите workflow "Test GitHub Secrets"**
3. **Нажмите "Run workflow"** (кнопка справа)
4. **Выберите ветку "main"**
5. **Нажмите "Run workflow"**

Этот workflow покажет, какие Secrets настроены правильно.

## 🔍 **Шаг 4: Проверьте значения Secrets**

### SERVER_HOST:
```
217.198.6.238
```

### SERVER_USER:
```
root
```

### SERVER_PORT:
```
22
```

### SERVER_SSH_KEY:
```
-----BEGIN OPENSSH PRIVATE KEY-----
(содержимое вашего SSH ключа)
-----END OPENSSH PRIVATE KEY-----
```

## 🔍 **Шаг 5: Как получить SSH ключ**

```bash
# Показать содержимое SSH ключа
cat ~/.ssh/timeweb_vps_key
```

**Скопируйте ВСЕ содержимое (включая строки BEGIN и END)**

## 🔍 **Шаг 6: Пошаговая настройка**

### Для репозитория `supermock-ai-interview`:

1. Откройте: `https://github.com/korobprog/supermock-ai-interview`
2. Нажмите "Settings" (вкладка)
3. В левом меню выберите "Secrets and variables" → "Actions"
4. Нажмите "New repository secret"
5. Добавьте каждый Secret:

```
Name: SERVER_HOST
Value: 217.198.6.238
```

```
Name: SERVER_USER
Value: root
```

```
Name: SERVER_PORT
Value: 22
```

```
Name: SERVER_SSH_KEY
Value: -----BEGIN OPENSSH PRIVATE KEY-----
(содержимое ключа)
-----END OPENSSH PRIVATE KEY-----
```

### Для репозитория `supermock-sity`:

Повторите те же шаги для: `https://github.com/korobprog/supermock-sity`

## 🔍 **Шаг 7: Проверка**

После добавления всех Secrets:

1. **Запустите тестовый workflow**
2. **Проверьте логи** - должны быть зеленые галочки
3. **Если есть ошибки** - исправьте значения

## ⚠️ **Частые ошибки:**

1. **Неправильный репозиторий** - Secrets в одном, workflow в другом
2. **Неправильные имена** - регистр букв важен
3. **Пустые значения** - проверьте, что все поля заполнены
4. **Неправильный SSH ключ** - должен включать BEGIN и END строки

## 🎯 **Результат:**

После правильной настройки тестовый workflow покажет:
```
✅ All secrets are configured!
SSH connection successful!
```

---

**Запустите тестовый workflow и проверьте результат!** 🔍
