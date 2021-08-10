FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN touch /root/.bashrc | echo "PS1='\w\$ '" >> /root/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

ENV NODE_VERSION 16.1.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]