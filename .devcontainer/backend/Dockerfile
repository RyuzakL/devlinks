FROM node:20-alpine

# Dossier déjà créé par l'image officielle node, mais tu peux t'assurer des permissions
RUN mkdir -p /app && chown node:node /app

WORKDIR /app

# Copie des defs de dépendances en premier → cache plus efficace
COPY package*.json ./

# Copie du code (après les deps pour profiter du cache)
COPY . .

RUN npm run build

USER node

EXPOSE 4000
CMD ["npm", "run", "start"] 
