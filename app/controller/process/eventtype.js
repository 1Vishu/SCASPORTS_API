'use strict'
const mongoose = require('mongoose');
const EventType = mongoose.model('Event_type');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveEventType: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat("empty_field","Data not Present",400);
            let eventType = await EventType.findOne({event_type:req.body.event_type});
            if(eventType){
                throw validation.errorFormat('duplicate', 'Event Type Already Exists', 409);
            }
            let eventTypeData=new EventType();
            eventTypeData.event_type=req.body.event_type;
            await eventTypeData.save();
            res.status(200).send({msg: 'done', data: eventTypeData});
        }
        catch(err){
            let error;
            if(!err.code || !err.status || !err.message) {
                error = validation.errorFormat('internal_error', 'Internal server error', 500);
            }
            else{
                error = err;
            }
            res.status(error.status).send({code: error.code, message: error.message});
        }
    },
    getAllEventType:async(req,res)=>{
        try{
            let eventType = await EventType.find();
            if(!eventType){
                throw validation.errorFormat('Not Found','Data Not Available ',404);
            }
            res.status(200).send({msg:'Data Found', data:eventType});  
        }
        catch(err){
            let error;
            if(!err.code || !err.status || !err.message) {
                error = validation.errorFormat('internal_error', 'Internal server error', 500);
            }
            else{
                error = err;
            }
            res.status(error.status).send({code: error.code, message: error.message});
        }
    }
}