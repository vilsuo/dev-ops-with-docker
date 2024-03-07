FROM node:20

WORKDIR /usr/src/app

# uses port 3000 by default
EXPOSE 3000

COPY package* .

# install dependencies
RUN npm install

COPY . .

# build for production
RUN npm run tsc

CMD ["npm", "run", "start"]