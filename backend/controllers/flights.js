const { response } = require('express');
const Flight = require('../models/Flight');
const { errorDBMessage } = require('../helpers/errorDbMessage');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc)

const getFlights = async ( req, res = response ) => {

    try {
        const flights = await Flight.find().populate('origin destiny').lean();

        return res.status(200).json({ flights });

    } catch (error) {
        return errorDBMessage( error, res );
    }
};

const findFlights = async (req, res = response) => {
    const { origin = '', destiny = '', travelDay = '', returnDay = '', scales = '', duration = '', budget = '' } = req.body;

    const filter = {
        timeOfFlight: { $lte: duration * 60 },
        price : { $lte: budget },
        origin,
        destiny,
        exitDate: { $gte: dayjs( travelDay ).subtract('4', 'hours').toISOString() },
        scales: { $lte: scales }
    };

    if( budget >= 2000 )
        delete filter.price;

    if( scales === 0 )
        delete filter.scales;

    if( duration >= 12 )
        delete filter.duration;

    try {
        const flights = await Flight.find( filter ).populate('origin destiny').lean();

        return res.status(200).json({ flights });

    } catch (error) {
        return errorDBMessage( error, res );
    }
};

module.exports = {
    getFlights,
    findFlights
};