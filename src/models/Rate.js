const { Schema, model } = require('mongoose');

const rateSchema = new Schema({
    pair: {
        type: String
    },
    originalRate: {
        type: Number
    },
    fee: {
        type: Number
    },
    feeAmount: {
        type: Number
    },
    rateWithFee: {
        type: Number
    }
}, {
    timestamps: true
})

module.exports = model('Rate', rateSchema);