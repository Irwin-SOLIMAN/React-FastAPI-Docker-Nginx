FROM node:23-alpine3.20

WORKDIR /app

COPY ./index.html ./
COPY ./package.json ./
RUN npm install

CMD ["npm", "run", "dev"]

