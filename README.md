# CarbonFight

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/48178d7adaa54b29950b701f33a0893a)](https://app.codacy.com/gh/CarbonFight/calculation/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/48178d7adaa54b29950b701f33a0893a)](https://app.codacy.com/gh/CarbonFight/calculation/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)

[CarbonFight](https://carbonfight.app) is an OpenSource project. 
This repository contains backend serverless functions.

# CalculationsCO2e
"CalculationsCO2e" is an API that allows you to determine the CO2e emissions of a daily action based on the 250 most common CO2e emission factors.

# Links
Swagger :  [API Swagger](https://api.carbonfight.app/v1/documentation/#/)

Codacy : [Codacy](https://app.codacy.com/gh/CarbonFight/calculation/dashboard)

## Requirements

Install Nodejs

```bash
# On Ubuntu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

npm install
```

Install Firebase CLI

```bash
# On Ubuntu
sudo npm install -g firebase-tools
firebase login
```

Install project dependencies : 

```bash
# Working directory
cd functions
```

```bash
npm install
```

```bash
npm install express
```

```bash
npm install cors
```

```bash
npm install --save-dev jest
```

```bash
npm install jest supertest express
```

```bash
npm install swagger-ui-express
```

## How to run app WITH firebase emulator

Configure emulator : 

```bash
cd functions
firebase emulators:start
```

Execute project : 

```bash
firebase serve
```

http://localhost:5000/documentation/#/

## How to run app WITHOUT firebase emulator

Uncomment code in functions/index.js from line 24 to 28 to configure the server

```bash
const port = 3000;
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}...`);
});
```

Run :
```bash
npm run local
```

Access the local Swagger documentation : http://localhost:3000/documentation/#/

## How to run Local tests with Jest

```bash
npm test 
```

## How to update data

To update data, follow these steps:

Copy the serviceAccountKey.json file to the root of your project.
Run the following command:

```bash
npm run data
```

## How to deploy in firebase after making changes

Connect to your firebase account and run command :

```bash
firebase deploy --only functions --project <nomduprojet>
```

## How to deploy project in a new firebase account

Create firebase account : (https://firebase.google.com/) and connect.

Open terminal :

```bash
firebase login
```

Init the project :

```bash
firebase init
```

Deploy project :

```bash
firebase deploy --only functions --project <nomduprojet>
```
