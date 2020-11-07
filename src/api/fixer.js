const axios = require('axios');

module.exports = axios.create({ baseURL: 'http://data.fixer.io/api/' });
