const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BusinessSchema = new Schema({
    city: { type: Schema.Types.ObjectId, required: true, ref: 'City' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
},
{
    timestamps: true
});

const Business = mongoose.models.Business || model('Business', BusinessSchema);
module.exports = Business;