'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventRegister = new Schema({
    event_id:{type: mongoose.Schema.ObjectId, ref: 'Event_type'},
    uid:{type: mongoose.Schema.ObjectId, ref:'User_master'},
    school:{type:mongoose.Schema.ObjectId, ref:'School_type'},
    is_register:{type: Boolean, trim: true, default: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('Event_register', eventRegister, 'event_register');