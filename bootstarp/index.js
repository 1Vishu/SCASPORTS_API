'use strict'
require('dotenv').config();
let express=require('express');
let app=express();
let config = require('../config')(app);

module.exports=()=>{
    app.listen(process.env.PORT || 8000,()=> console.log('App started from develoment_branch'));
}