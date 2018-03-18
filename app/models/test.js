'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Test = new Schema({
    userName:{type:String, trim:true, default:'UserName'}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('userTest', Test, 'test');