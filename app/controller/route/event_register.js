'use strict'
let router= require('express').Router();
const regeventFun = require('./../process/event_register');
router.get('/test', regeventFun.test);
router.post('/save',regeventFun.saveEventRegister);
router.post('/getAll',regeventFun.getAllEvent);
module.exports = router;