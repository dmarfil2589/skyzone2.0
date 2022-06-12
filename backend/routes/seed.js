/* 
    routes from seed
    host + /api/seed
*/

const { Router } = require('express');
const { seedData } = require('../controllers/seed');

const router = Router();

router.get('/', seedData);

module.exports = router;