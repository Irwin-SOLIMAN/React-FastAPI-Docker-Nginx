FROM node:23-alpine3.20

WORKDIR /app

COPY *.html *.ts *.json *.js ./

RUN npm install

CMD ["npm", "run", "dev"]

