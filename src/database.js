const mongoose = require('mongoose');
require('dotenv').config({ path: `${__dirname}/variables.env` })

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected'))
    .catch(err => console.log(err));