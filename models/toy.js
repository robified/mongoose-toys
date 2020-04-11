const mongoose = require('mongoose');

// destructuring assignment of the Schema class from mongoose
const { Schema } = mongoose;

const toySchema = new mongoose.Schema({
    name: String,
    yearMade: Number,
    maker: [String],
    stillAvailable: Boolean,
});

// model() is used to compile a schema to a model
// takes two arguments: 1) name of the model, 2) name of the schema
module.exports = mongoose.model('Toy', toySchema);
