'use strict'
let router= require('express').Router();
const regeventFun = require('./../process/event_create');
router.get('/test', regeventFun.test);
router.post('/save', regeventFun.saveEvent);
router.post('/getAll', regeventFun.getAllRegisterEvent);
module.exports = router;