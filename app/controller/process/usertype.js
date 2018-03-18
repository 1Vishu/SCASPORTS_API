'use strict'
const mongoose = require('mongoose');
const UserType = mongoose.model('User_type');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveUserType: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat("empty_field","Data not Present",400);
            let userType = await UserType.findOne({user_type:req.body.user_type});
            if(userType){
                throw validation.errorFormat('duplicate', 'User Type Already Exists', 409);
            }
            let userTypeData=new UserType();
            userTypeData.user_type=req.body.user_type;
            await userTypeData.save();
            res.status(200).send({msg: 'done', data: userTypeData});
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
    getAllUserType:async(req,res)=>{
        try{
            let userType = await UserType.find();
            if(!userType){
                throw validation.errorFormat('Not Found','Data Not Available ',404);
            }
            res.status(200).send({msg:'Data Found', data:userType});  
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