FROM node:10-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN yarn

COPY . .

EXPOSE 3333
