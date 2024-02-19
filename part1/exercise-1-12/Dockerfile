FROM node:16

EXPOSE 5000

WORKDIR /usr/src/app

COPY . .

# install all packages
RUN npm install

# build static files
RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "-l", "5000", "build"]
