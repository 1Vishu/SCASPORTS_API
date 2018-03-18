'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schoolType = new Schema({
    school_type:{type: String, trim: true},
    school_is_active:{type: Boolean, trim: true, default: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('School_type', schoolType, 'school_type');