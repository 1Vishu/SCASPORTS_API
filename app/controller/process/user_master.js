'use strict'
const mongoose = require('mongoose');
const User = mongoose.model('User_master');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    userSave: async(req,res)=>{
         try{
            if(!req.body)
            throw validation.errorFormat("empty_field","Data not Present",400)
            let user=await User.findOne({$or: [{email: req.body.email}, {contact:req.body.contact},{uid:req.body.uid}]});
            if(user){
                if(user.contact==req.body.contact)
                    throw validation.errorFormat('duplicate', 'contact number already exist', 409);
                if(user.email == req.body.email)
                    throw validation.errorFormat('duplicate', 'email already exist', 409);
                if(user.uid == req.body.uid)
                    throw validation.errorFormat('duplicate', 'UserId Already exist',409);
            }
            let userData;
            if(validation.phoneValidation(req.body.contact))
                if(validation.emailValidation(req.body.email)){
                    userData= new User();
                }
                userData.uid = req.body.uid;
                userData.type_id = req.body.type_id;
                userData.name = req.body.name;
                userData.password = req.body.password;
                userData.section = req.body.section;
                userData.school = req.body.school;
                userData.email = req.body.email;
                userData.contact = req.body.contact;
                userData.gender = req.body.gender;
                userData.Block = req.body.Block;
                userData.room_no = req.body.room_no;
                userData.cabin = req.body.cabin;
                userData.device_id = req.body.device_id;
                await userData.save();
                 res.status(200).send({msg: 'done', data: userData});
        }
        catch(err){
            let error;
            if(!err.code || !err.status || !err.message) {
                error = validation.validation.errorFormat('internal_error', 'Internal server error', 500);
            }
            else{
                error = err;
            }
            res.status(error.status).send({code: error.code, message: error.message});
        }
    },
    userLogin: async(req,res)=>{
        try{
            let user=await User.findOne({$and: [{uid: req.body.uid}, {password:req.body.userPassword}]}).populate({path: 'type_id school'});
            if(!user){
                throw validation.errorFormat('Not Found', 'User Not Exists', 404);
            }
            res.status(200).send({msg:'Data Found for User',data:user});
        }
        catch(err){
            let error; 
            if(!err.code || !err.status || !err.message) {
                error = validation.validation.errorFormat('internal_error', 'Internal server error', 500);
            }
            else{
                error = err;
            }
            res.status(error.status).send({code: error.code, message: error.message});
        }
    }
}