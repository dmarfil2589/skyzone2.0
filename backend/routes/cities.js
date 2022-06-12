/* 
    routes from cities
    host + /api/cities
*/

const { Router } = require('express');
const { getCities } = require('../controllers/cities');

const router = Router();

router.get('/', getCities);

module.exports = router;