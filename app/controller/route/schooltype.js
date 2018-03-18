'use strict'
let router= require('express').Router();
const schoolTypeFun = require('./../process/schooltype');

router.get('/test', schoolTypeFun.test);
router.post('/save', schoolTypeFun.saveSchoolType);
router.get('/getAll',schoolTypeFun.getAllSchoolType);
module.exports = router;