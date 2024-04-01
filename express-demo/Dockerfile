FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install 

COPY . .

RUN npm install pm2 -g

EXPOSE 3000

CMD [ "pm2-runtime","start" ,"ecosystem.config.cjs","--env","production" ]