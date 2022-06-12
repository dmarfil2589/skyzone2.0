const { response } = require('express');

const Business = require('../models/Business');
const { errorDBMessage } = require('../helpers/errorDbMessage');


const findBusiness = async (req, res = response) => {
    const { destiny = [] } = req.body;

    const filter = {
        city: { $in: destiny },
    };

    if ( destiny.length === 0 )
        delete filter.city;

    try {
        const business = await Business.find( filter ).sort({ name: 1 }).lean();

        return res.status(200).json({ business });

    } catch (error) {
        return errorDBMessage( error, res );
    }
};

module.exports = {
    findBusiness
};