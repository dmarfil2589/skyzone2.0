const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const countrySchema = new Schema({
    name: { type: String, required: true, index: true },
    code: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String },
},
{
    timestamps: true
});

const Country = mongoose.models.Country || model('Country', countrySchema);
module.exports = Country;