const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/toys', {
    // these just come from the warnings, googling it, or the docs
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
    console.log(
        `Connected to MongoDB ${db.name} database on ${db.host}:${db.port}.`
    );
});
