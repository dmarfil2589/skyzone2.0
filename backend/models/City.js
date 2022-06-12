const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CitySchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    image: { type: String, required: true, unique: true },
    description: { type: String },
},
{
    timestamps: true
});

const City = mongoose.models.City || model('City', CitySchema);
module.exports = City;