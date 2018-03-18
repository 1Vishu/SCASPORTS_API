'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    uid:{type: String, trime: true},
    type_id:{type: mongoose.Schema.ObjectId, ref:'User_type'},
    name:{type: String, trim: true},
    password:{type: String, trim: true},
    section:{type: String, trime: true},
    school:{type:mongoose.Schema.ObjectId, ref:'School_type'},
    email:{type: String, trim: true},
    contact:{type: String,trim: true},
    gender:{type: String, trime:true},
    Block:{type: String, trim: true},
    room_no:{type: String, trim: true},
    cabin:{type: String, trim: true},
    device_id:{type: String, trim:true},
    is_active:{type: Boolean, default: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('User_master', user, 'user_master');