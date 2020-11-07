const Hapi = require('@hapi/hapi');

const ratesService = require('./services/ratesService');
require('dotenv').config({ path: `${__dirname}/variables.env` })

const port = process.env.PORT || 4000;

const init = async () => {
    const server = new Hapi.Server({
        port: port,
        host: '0.0.0.0'
    });

    // server.connection({ routes: { cors: true } })

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

    try {
        await server.register({
            plugin: require('hapi-cors'),
            options: {
                origins: ['*']
            }
        })

        await server.start();
        console.log(`Server running on port ${server.info.port}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

init();
