const Hapi = require('@hapi/hapi');

const ratesService = require('./services/ratesService');
require('dotenv').config({ path: `${__dirname}/variables.env` })

const port = process.env.PORT || 4000;

const init = async () => {
    const server = new Hapi.Server({
        port: port,
        host: '0.0.0.0'
    });

    server.settings.uri =

        server.route({
            method: 'POST',
            path: '/getRates',
            handler: async (req, h) => {
                const pairs = await ratesService.getRates();
                return h.response(pairs);
            }
        })

    server.route({
        method: 'POST',
        path: '/addRateWithFees',
        handler: async (req, h) => {
            const rateSaved = await ratesService.addRateWithFees(req.payload);
            return h.response(rateSaved);
        }

    })

    server.route({
        method: 'POST',
        path: '/getRatesWithFees',
        handler: async (req, h) => {
            const rates = await ratesService.getRatesWithFees();
            return h.response(rates);
        }

    })

    await server.start();
    console.log(`Server running on port ${server.info.port}`);
    console.log(`Server host ${server.info.host}`);
    console.log(`Enviroment variable host ${process.env.HOST}`);
}

init();
