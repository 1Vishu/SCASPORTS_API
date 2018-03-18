'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventType = new Schema({
    event_type:{type: String, trim: true},
    is_active:{type: Boolean, trim: true, default: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('Event_type', eventType, 'event_type');