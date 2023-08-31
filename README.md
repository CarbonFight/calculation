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

## How to run app in your local

Uncomment code in functions/index.js from line 24 to 28 to configure the server

```bash
const port = 3000;
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}...`);
});
```

Run :
```bash
cd functions
npm run local
```

Access the local Swagger documentation : http://localhost:3000/documentation/#/

## How to run Local tests with Jest

```bash
cd functions
npm test 
```


## How to update data

To update data, follow these steps:

Copy the serviceAccountKey.json file to the root of your project.
Run the following command:

```bash
cd functions
npm run data
```

## How to deploy in firebase after making changes

```bash
cd functions
firebase login //use your login and your password
firebase deploy --only functions --project calculationco2e
```
