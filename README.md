# Settle Challenge
This is the backend for the Settle Challenge


### API Endpoints
All of this API endpoints are exposed by POST method
#### /getRates
Obtiene los rates actuales de cada uno de los pares de simbolos extraidos de la API de Fixer.io

###### Request
[https://stormy-lowlands-36541.herokuapp.com/getRates](https://stormy-lowlands-36541.herokuapp.com/getRates)

###### Response
```javascript
{
  "success": true,
  "pairs": [
    {
      "pair": "EUR-USD",
      "rate": 1.187435
    }
  ]
}
```

#### /getRatesWithFees
Obtiene los rates creados por el usuario

###### Request
[https://stormy-lowlands-36541.herokuapp.com/getRatesWithFees](https://stormy-lowlands-36541.herokuapp.com/getRatesWithFees)

###### Response
```javascript
{
[
  {
    "_id": "5fa60d343065530017aa4d13",
    "pair": "EUR-USD",
    "originalRate": 1.5,
    "fee": 166665,
    "feeAmount": 0.16,
    "rateWithFee": 1.4,
    "createdAt": "2020-11-07T02:57:56.917Z",
    "updatedAt": "2020-11-07T02:57:56.917Z",
    "__v": 0
  },
  {
    "_id": "5fa60d513065530017aa4d14",
    "pair": "USD-BRL",
    "originalRate": 1.5,
    "fee": 15,
    "feeAmount": 0.16,
    "rateWithFee": 1.4,
    "createdAt": "2020-11-07T02:58:25.064Z",
    "updatedAt": "2020-11-07T02:58:25.064Z",
    "__v": 0
  },
  ]
}
```

#### /addRateWithFees
Crea un rate con fees

###### Request
[https://stormy-lowlands-36541.herokuapp.com/addRateWithFees](https://stormy-lowlands-36541.herokuapp.com/addRateWithFees)

```javascript
{
  "pair": "USD-ARS",
  "originalRate": 1.5,
  "fee": 15,
  "feeAmount": 0.16,
  "rateWithFee": 1.4
}
```

###### Response
```javascript
{
  "pair": "USD-ARS",
  "originalRate": 1.5,
  "fee": 15,
  "feeAmount": 0.16,
  "rateWithFee": 1.4
}
```

### Tech
This project uses some dependencies to work properly

* [HapiJs] - Build powerful, scalable applications, with minimal overhead and full out-of-the-box functionality
* [Hapi-cors] - Enables cors for a hapijs app based on config.
* [Axios] - Promise based HTTP client for the browser and node.js

### Installation

This project requires [Node.js](https://nodejs.org/) v4+ to run locally.

Install the dependencies and start the server.

```sh
$ cd settle-challenge-be
$ npm install
$ npm start
```

### Configuration
This project uses Fixer.io API, so it needs the access key in order to access to the endpoints
* Enter to variables.env file in the root of project
* Look at the line with FIXER_API_KEY=<ACCESS_KEY> 
* Replace <ACCESS_KEY> with your ones and now you can start the project
