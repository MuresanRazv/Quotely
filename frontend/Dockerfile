FROM node:20-alpine as dev

WORKDIR /app

ENTRYPOINT ["npm", "start"]

# use alpine version - more lightweight
FROM node:20-alpine as build

# set workdir for cleaner file management
WORKDIR /app

# efficient caching of dependencies installation
COPY package*.json ./
RUN npm ci

COPY . .

# build app
RUN npm run build

# use multi stage building for reducing image size
FROM node:20-alpine as production

WORKDIR /app

# copy only necessary files from previous stage (save ~500mb)
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public

EXPOSE 3000

# start application
CMD ["npm", "start"]