FROM node:20-alpine

# Instala dependências necessárias para o Puppeteer + Chromium
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    nodejs \
    yarn

WORKDIR /app

COPY . .

# Instala TODAS as dependências do seu projeto
RUN npm install

# Define o caminho correto do Chromium no Alpine
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

CMD ["node", "main.js"]
