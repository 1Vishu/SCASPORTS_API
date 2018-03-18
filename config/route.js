'use strict';
let router = require('express').Router();
const allRoute = require('../app/controller/route');

router.use('/route', allRoute);

module.exports = router;