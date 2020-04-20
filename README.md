
## Description

This is a template from [nestjs](https://www.nestjs.com/) implementing JWT, this can be extended to quickly bootstrap another apps.

## Before Installing

For the JWT authentication, a secret key needs to be provided. The app reads the environmental variables for the key, you can set the variable as `JWT_SECRET_KEY`.

This configuration is made at `src/auth/constants.ts`.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ JWT_SECRET_KEY=XXXXXXX npm run start

# watch mode
$ JWT_SECRET_KEY=XXXXXXX npm run start:dev

# production mode
$ JWT_SECRET_KEY=XXXXXXX npm run start:prod
```
