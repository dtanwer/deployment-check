FROM node:20.13.1-alpine3.20
WORKDIR  /app

COPY ./package*.json ./

RUN npm ci --omit=dev

COPY --chown=node:node . /app

EXPOSE 8000

CMD ["npm", "run", "start"]