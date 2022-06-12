const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ServiceSchema = new Schema({
    business: { type: Schema.Types.ObjectId, required: true, ref: 'Business' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    type: { 
        type: String, 
        required: true,
        enum: {
            values: [ 'alimentacion', 'salud', 'entretenimiento', 'transporte' ],
            message: '[ VALUE ] no es valido',
        },
        default: 'entretenimiento',
    }
},
{
    timestamps: true
});

const Service = mongoose.models.Service || model('Service', ServiceSchema);
module.exports = Service;