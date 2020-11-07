const fixerApi = require("../api/fixer");

require('../database');
const Rate = require('../models/Rate');
const FIXER_API_KEY = process.env.FIXER_API_KEY;

const getRates = async () => {
    const response = await fixerApi.post(`latest?access_key=${FIXER_API_KEY}&symbols=USD,ARS,BRL`);

    let pairRates = {};
    pairRates.success = response.data.success;

    if (pairRates.success) {
        pairRates.pairs = calculateAllPairRates(response.data.rates);
    }

    return pairRates;
}

const calculateAllPairRates = pairs => {
    const eurUsdRate = pairs.USD;
    const eurArsRate = pairs.ARS;
    const eurBrlRate = pairs.BRL;
    const usdArsRate = eurArsRate / eurUsdRate;
    const usdBrlRate = eurBrlRate / eurUsdRate;
    const brlArsRate = eurArsRate / eurBrlRate;

    const pairRates = [
        { pair: 'EUR-USD', rate: eurUsdRate },
        { pair: 'EUR-ARS', rate: eurArsRate },
        { pair: 'EUR-BRL', rate: eurBrlRate },
        { pair: 'USD-ARS', rate: usdArsRate },
        { pair: 'USD-BRL', rate: usdBrlRate },
        { pair: 'BRL-ARS', rate: brlArsRate },
    ];
    return pairRates;
}

const addRateWithFees = async (newRate) => {
    const rate = new Rate(newRate);
    const savedRate = await rate.save();

    const r = {};
    r.pair = savedRate.pair;
    r.originalRate = savedRate.originalRate;
    r.fee = savedRate.fee;
    r.feeAmount = savedRate.feeAmount;
    r.rateWithFee = savedRate.rateWithFee;

    return r;
}

const getRatesWithFees = async () => {
    const rates = await Rate.find();
    return rates;
}


module.exports.getRates = getRates;
module.exports.addRateWithFees = addRateWithFees;
module.exports.getRatesWithFees = getRatesWithFees; 