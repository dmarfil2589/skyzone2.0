/* 
    routes from flights
    host + /api/flights
*/

const { Router } = require('express');
const { getFlights, findFlights } = require('../controllers/flights');

const router = Router();

router.get('/', getFlights);
router.post('/find', findFlights);

module.exports = router;