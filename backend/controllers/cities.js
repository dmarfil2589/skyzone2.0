const { response } = require('express');
const City = require('../models/City');
const { errorDBMessage } = require('../helpers/errorDbMessage');

const getCities = async ( req, res = response ) => {

    try {
        const cities = await City.find().lean();        

        return res.status(200).json({ cities });

    } catch (error) {
        return errorDBMessage( error, res );
    }
};

module.exports = {
    getCities,
};