'use strict'
const mongoose = require('mongoose');
const EventCreate = mongoose.model('Event_Create');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveEvent: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat("empty_field","Data not Present",400);
            let eventCreateData=new EventCreate();
            eventCreateData.uid_id=req.body.uid_id;
            eventCreateData.doe=req.body.doe;
            eventCreateData.event_img_url=req.body.event_img_url;
            eventCreateData.place=req.body.place;
            eventCreateData.school=req.body.school;
            eventCreateData.event_type=req.body.event_type;
            eventCreateData.event_name=req.body.event_name;
            eventCreateData.event_description=req.body.event_description;
            await eventCreateData.save();
            res.status(200).send({msg: 'done', data: eventCreateData});
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
    getAllRegisterEvent:async(req,res)=>{
        try{
            let eventCreateData = await EventCreate.find();
            if(!eventCreateData){
                throw validation.errorFormat('Not Found','Data Not Available ',404);
            }
            res.status(200).send({msg:'Data Found', data:eventCreateData});  
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