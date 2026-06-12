FROM node:latest

WORKDIR /app

COPY ./images ./images
COPY ./package.json .
COPY ./index.html .
COPY ./server.js .

RUN npm install

ENV PORT=3007

EXPOSE 3007

CMD [ "npm", "start" ]

