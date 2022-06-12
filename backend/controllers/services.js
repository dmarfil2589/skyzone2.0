const { response } = require('express');

const Business = require('../models/Business');
const Service = require('../models/Services');
const { errorDBMessage } = require('../helpers/errorDbMessage');


const findServices = async (req, res = response) => {
    const { destiny = [] } = req.body;

    const filter = {
        city: { $in: destiny },
    };

    if ( destiny.length === 0 )
        delete filter.city;

    try {

        const business = await Business.find( filter ).select('_id').lean();
        const services = await Service.find({ business: { $in: business } }).populate('business').sort({ name: 1 }).lean();

        return res.status(200).json({ services });

    } catch (error) {
        return errorDBMessage( error, res );
    }
};

module.exports = {
    findServices
};