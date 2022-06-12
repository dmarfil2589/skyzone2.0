const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const airlineSchema = new Schema({
    name: { type: String, required: true, unique: true },
    logo: { type: String, required: true, unique: true },
    pageweb: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
},
{
    timestamps: true
});

const Airline = mongoose.models.Airline || model('Airline', airlineSchema);
module.exports = Airline;