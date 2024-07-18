# use alpine version - more lightweight
FROM node:21-alpine AS build

# environment variable
ENV NODE_ENV=production

# create a custom user that has access to this container
RUN apk add shadow

RUN groupadd -r customgroup && useradd -r -g customgroup customuser

ENV HOME /home/customuser

RUN mkdir -p $HOME && chown -R customuser:customgroup $HOME

# create its own work directory
WORKDIR $HOME/app

RUN chown -R customuser:customgroup $HOME/app

# efficiently use caching by first installing dependencies
COPY package*.json ./
RUN npm ci

# copy installed dependencies to work directory
COPY . .

# expose the port
EXPOSE 3000

CMD ["npm", "run", "start"]