'use strict'
let router= require('express').Router();
const eventTypeFun = require('./../process/eventtype');

router.get('/test', eventTypeFun.test);
router.post('/save', eventTypeFun.saveEventType);
router.get('/getAll',eventTypeFun.getAllEventType);
module.exports = router;