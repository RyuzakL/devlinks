FROM node:20-alpine

WORKDIR /app

# Copie des defs de dépendances en premier → cache plus efficace
COPY package*.json ./
# RUN npm ci --omit=dev      # prod deps uniquement dans limage finale

# Copie du code (après les deps pour profiter du cache)
COPY . .

EXPOSE 4000
CMD ["npm", "run", "dev"]  # ⇢ ts-node-dev ou nodemon
