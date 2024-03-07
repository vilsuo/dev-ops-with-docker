# Requirements
node:20

# How to start
First install the dependencies
```sh
npm run install
```

### Development
Start with watching for changes
```sh
npm run dev
```

### Production
First build the project
```sh
npm run tsc
```
and then start
```sh
npm run start
```
## Environment variables
The server uses port 3000 by default. To override this, supply a environment variable `PORT` with the value of the desired port.