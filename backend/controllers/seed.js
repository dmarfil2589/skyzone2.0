const { response } = require('express');
const { v4: uuidv4 } = require('uuid');
const dayjs = require("dayjs");

const City = require('../models/City');
const Airline = require('../models/Airline');
const Flight = require('../models/Flight');
const Country = require('../models/Country');

const { errorDBMessage } = require('../helpers/errorDbMessage');
const { cities, countries, airlines, types, classes } = require('../constants/db');

const seedData = async ( req, res = response ) => {

    try {
        await Country.deleteMany();
        await Country.insertMany( countries );

        const newCountries = await Country.find().lean();
        
        const updatedCities = cities.map( city => {
            const country = newCountries.find( element => element.code === city.country )
            
            return {
                ...city,
                country: country._id
            };
        });

        await City.deleteMany();
        await City.insertMany( updatedCities );

        await Airline.deleteMany();
        await Airline.insertMany( airlines ); 
       
        await Flight.deleteMany();

        const newAirlines = await Airline.find().lean();
        const newCities = await City.find().lean();

        const array = Array.from({length: Number( process.env.MAX_FLIGHTS ) || 0}, (v, k) => k+1); 

        const updatedFlights = array.map( () => {

            const numberOfCities = newCities.length;
            const numberOfAirlines = newAirlines.length;

            const indexType = getRandomInt( types.length );
            const type = types[ indexType ];
            const indexClass = getRandomInt( classes.length );

            const price = getRandomInt( process.env.MAX_PRICE_FLIGHTS || 0 );
            const scales = getRandomInt( process.env.MAX_SCALES || 100 ) ;
            const timeOfFlight = getRandomInt( process.env.MAX_TIME_FLIGHT || 0 );

            let exitDays = getRandomInt( process.env.MAX_DAYS_FORWARD || 0 );
            let exitHours = getRandomInt( process.env.MAX_HOURS_FORWARD || 0 );
            let exitMinutes = getRandomInt( process.env.MAX_MINUTES_FORWARD || 0 );

            let exitDate = dayjs( new Date() ).add(exitDays, 'days').add(exitHours, 'hours').add(exitMinutes, 'minutes').toISOString();

            let returnDays = getRandomInt( process.env.MAX_DAYS_FORWARD || 0 );
            let returnHours = getRandomInt( process.env.MAX_HOURS_FORWARD || 0 );
            let returnMinutes = getRandomInt( process.env.MAX_MINUTES_FORWARD || 0 );

            let returnDate = dayjs( new Date() ).add(returnDays, 'days').add(returnHours, 'hours').add(returnMinutes, 'minutes').toISOString();

            while( exitDate >= returnDate ) {
                exitDays = getRandomInt( process.env.MAX_DAYS_FORWARD || 0 );
                exitHours = getRandomInt( process.env.MAX_HOURS_FORWARD || 0 );
                exitMinutes = getRandomInt( process.env.MAX_MINUTES_FORWARD || 0 );

                exitDate = dayjs( new Date() ).add(exitDays, 'days').add(exitHours, 'hours').add(exitMinutes, 'minutes').toISOString();

                returnDays = getRandomInt( process.env.MAX_DAYS_FORWARD || 0 );
                returnHours = getRandomInt( process.env.MAX_HOURS_FORWARD || 0 );
                returnMinutes = getRandomInt( process.env.MAX_MINUTES_FORWARD || 0 );

                returnDate = dayjs( new Date() ).add(returnDays, 'days').add(returnHours, 'hours').add(returnMinutes, 'minutes').toISOString();
            };

            let numberOrigin = 0;
            let numberDestiny = 0;

            while ( numberOrigin === numberDestiny) {
                numberOrigin = getRandomInt(numberOfCities);
                numberDestiny = getRandomInt(numberOfCities);
            };

            const flight = {
                airline: newAirlines[ getRandomInt(numberOfAirlines) ]._id,
                number: uuidv4(),
                type,
                price,
                scales,
                timeOfFlight,
                class: classes[ indexClass ],
                origin: newCities[ numberOrigin ]._id,
                destiny: newCities[ numberDestiny ]._id,
                exitDate,
                returnDate,
            };

            if ( type === 'ida' )
                delete flight.returnDate;

            return {
                ...flight
            }
        });

        await Flight.insertMany( updatedFlights );

        return res.status(200).json( 'data importada' );

    } catch (error) {
        return errorDBMessage( error, res );
    }
};

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

module.exports = {
    seedData,
};