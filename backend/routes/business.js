/* 
    routes from business
    host + /api/business
*/

const { Router } = require('express');
const { findBusiness } = require('../controllers/business');

const router = Router();

router.post('/find', findBusiness);

module.exports = router;