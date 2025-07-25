# 🤖 Bot Zap - Automatizador via WhatsApp

Este projeto é um bot automatizado para interações via WhatsApp. Ele utiliza Docker para facilitar o deploy e garantir um ambiente padronizado.

---

## 🚀 Como rodar com Docker

### 1. Clone o repositório

```bash
git clone https://github.com/peikoso/bot_zap.git
cd bot_zap
````

### 2. Crie o arquivo .env dentro de python_project
```bash
GOOGLE_API_KEY=
````

###  3. Construa e suba os containers
```bash
docker compose up --build
````

### 4. Autentique o Whatsapp pelo QR code no terminal
