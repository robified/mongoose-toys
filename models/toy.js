// destructuring assignment of the Schema class
const mongoose, { Schema } = require('mongoose');

const toySchema = new Schema({
    name: String,
    yearMade: Nummber,
    maker: [String],
    stillAvailable: Boolean
});

// model() is used to compile a schema to a model
// takes two arguments: 1) name of the model, 2) name of the schema
module.exports = mongoose.model('Toy', toySchema);