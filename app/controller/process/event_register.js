'use strict'
const mongoose = require('mongoose');
const EventRegister = mongoose.model('Event_register');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveEventRegister: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat("empty_field","Data not Present",400);
            let eventregisterData=new EventRegister();
            eventregisterData.event_id=req.body.event_id;
            eventregisterData.uid=req.body.uid;
            eventregisterData.school=req.body.school;
            await eventregisterData.save();
            res.status(200).send({msg: 'done', data: eventregisterData});
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
    getAllEvent:async(req,res)=>{
        try{
            let eventRegister = await EventRegister.findOne({event_reg_school:req.body.event_reg_school});
            if(!eventRegister){
                throw validation.errorFormat('Not Found','Data Not Available ',404);
            }
            res.status(200).send({msg:'Data Found', data:eventRegister});  
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