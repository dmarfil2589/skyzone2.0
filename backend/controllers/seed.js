const { response } = require('express');
const City = require('../models/City');
const Airline = require('../models/Airline');
const Flight = require('../models/Flight');
const { errorDBMessage } = require('../helpers/errorDbMessage');
const { cities, airlines, flights } = require('../constants/db');

const seedData = async ( req, res = response ) => {

    try {
        /* 
        descomentar si se quiere borrar todo pero hay que reescribir los ids de los vuelos
        await City.deleteMany();
        await City.insertMany( cities );

        await Airline.deleteMany();
        await Airline.insertMany( airlines ); 
        */

        await Flight.deleteMany();
        await Flight.insertMany( flights );

        return res.status(200).json( 'data importada' );

    } catch (error) {
        return errorDBMessage( error, res );
    }
};

module.exports = {
    seedData,
};