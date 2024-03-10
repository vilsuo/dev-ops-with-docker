FROM node:16

WORKDIR /usr/src/app

EXPOSE 5000

COPY package* .

RUN npm install

COPY . .

# build static files
RUN REACT_APP_BACKEND_URL=http://localhost/api npm run build

RUN npm install -g serve

CMD ["serve", "-s", "-l", "5000", "build"]
