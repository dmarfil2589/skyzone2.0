const { response } = require('express');
const Flight = require('../models/Flight');
const { errorDBMessage } = require('../helpers/errorDbMessage');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc)

const getFlights = async ( req, res = response ) => {

    try {
        const flights = await Flight.find().populate('origin destiny').limit(200).lean();

        return res.status(200).json({ flights });

    } catch (error) {
        return errorDBMessage( error, res );
    }
};

const findFlights = async (req, res = response) => {
    const { 
        origin = '',
        destiny = [],
        travelDay = '',
        returnDay = '',
        scales = 0,
        duration = '',
        budget = '',
        flightType = '',
        flightClass = ''
    } = req.body;

    const filter = {
        timeOfFlight: { $lte: duration * 60 },
        price : { $lte: budget },
        origin,
        destiny: { $in: destiny },
        exitDate: { $gte: dayjs( travelDay ).utc(true).toISOString(), $lte: dayjs( travelDay ).utc(true).add(1, 'day').toISOString() },
        returnDate: { $gte: dayjs( returnDay ).utc(true).toISOString(), $lte: dayjs( returnDay ).utc(true).add(1, 'day').toISOString() },
        scales: { $lte: scales },
        type: flightType,
        class: flightClass
    };

    if( budget >= 2000 )
        delete filter.price;

    if( scales === 0 )
        delete filter.scales;

    if( duration >= 12 )
        delete filter.duration;

    if ( flightType === 'ida' )
        delete filter.returnDate;

    if ( destiny.length === 0 )
        delete filter.destiny;
    
    try {
        const flights = await Flight.find( filter ).populate('origin destiny airline').sort({ price: 1 }).lean();

        return res.status(200).json({ flights });

    } catch (error) {
        return errorDBMessage( error, res );
    }
};

module.exports = {
    getFlights,
    findFlights
};