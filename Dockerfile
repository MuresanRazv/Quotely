FROM node:21-alpine AS build

ENV NODE_ENV=production

RUN apk add shadow

RUN groupadd -r customgroup && useradd -r -g customgroup customuser

ENV HOME /home/customuser

RUN mkdir -p $HOME && chown -R customuser:customgroup $HOME

WORKDIR $HOME/app

RUN chown -R customuser:customgroup $HOME/app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]