# CarbonFight

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/48178d7adaa54b29950b701f33a0893a)](https://app.codacy.com/gh/CarbonFight/calculation/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

[CarbonFight](https://carbonfight.app) is an OpenSource project. 
This repository contains backend serverless functions.

# CalculationsCO2e
"CalculationsCO2e" is an API that allows you to determine the CO2e emissions of a daily action based on the 250 most common CO2e emission factors.

## Requirements

Install Nodejs

```bash
# On Ubuntu
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

npm install
```

Install Firebase CLI

```bash
# On Ubuntu
sudo npm install -g firebase-tools
firebase login
```

Install all project dependencies : 

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

## How to run app (local)

  * Uncomment code in index.js [**L24 to L28**]

  * Run :
```bash
npm start
```


Swagger : http://localhost:3000/api-docs/#/

## How to run Local tests with Jest

```bash
npm test 
```


## How to update data

To update the data, follow these steps:

1. Copy the [**serviceAccountKey.json**] file to the root of your project.
2. Run the following command:

```bash
npm run data
