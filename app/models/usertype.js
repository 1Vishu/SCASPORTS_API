'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userType = new Schema({
    user_type:{type: String, trim: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('User_type', userType, 'user_type');