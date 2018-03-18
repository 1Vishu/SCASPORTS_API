'use strict'
let router= require('express').Router();
const userTypeFun = require('./../process/usertype');

router.get('/test', userTypeFun.test);
router.post('/save', userTypeFun.saveUserType);
router.get('/getAll',userTypeFun.getAllUserType);
module.exports = router;