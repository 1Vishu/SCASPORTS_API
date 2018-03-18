'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let event_create = new Schema({
       uid_id:{type: mongoose.Schema.ObjectId, ref: 'User_master'},
       doe:{type: String, trim: true},
       event_img_url:{type: String, trim: true},
       place:{type: String, trime: true},
       school:{type:mongoose.Schema.ObjectId, ref: 'School_type'},
       event_type:{type: mongoose.Schema.ObjectId, ref: 'Event_type'},
       event_name:{type: String, trim: true},
       event_description:{type: String, trime:true},
       is_active:{type: Boolean, default: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('Event_Create', event_create, 'event_create');