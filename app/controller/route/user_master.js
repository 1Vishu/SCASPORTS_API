'use strict'
let router= require('express').Router();
const userFun = require('./../process/user_master');
router.get('/test', userFun.test);
router.post('/save',userFun.userSave);
router.post('/login',userFun.userLogin);
module.exports = router;