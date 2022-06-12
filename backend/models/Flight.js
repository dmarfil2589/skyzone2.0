const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const flightSchema = new Schema({
    airline: { type: Schema.Types.ObjectId, ref: 'Airline', required: true },
    number: { type: Number, required: true },
    type: { 
        type: String, 
        required: true, 
        enum: {
            values: [ 'ida', 'ida y vuelta' ],
            message: '[ VALUE ] no es valido',
        },
        default: 'ida',
    },
    price: { type: Number, required: true },
    scales: { type: Number, required: true, default: 0 },
    timeOfFlight: { type: Number, required: true }, //tiempo en minutos, ojo
    class: {
        type: String, 
        required: true, 
        enum: {
            values: [ 'economica', 'ejecutiva', 'primera', 'privado' ],
            message: '[ VALUE ] no es valido',
        },
        default: 'economica',
    },
    origin: { type: Schema.Types.ObjectId, ref: 'City', required: true },
    destiny: { type: Schema.Types.ObjectId, ref: 'City', required: true },
    exitDate: { type: Date, required: true },
},
{
    timestamps: true
});

const Flight = mongoose.models.Flight || model('Flight', flightSchema);
module.exports = Flight;