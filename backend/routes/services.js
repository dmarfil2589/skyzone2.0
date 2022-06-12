/* 
    routes from services
    host + /api/services
*/

const { Router } = require('express');
const { findServices } = require('../controllers/services');

const router = Router();

router.post('/find', findServices);

module.exports = router;