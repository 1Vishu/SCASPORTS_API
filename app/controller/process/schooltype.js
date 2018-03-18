'use strict'
const mongoose = require('mongoose');
const SchoolType = mongoose.model('School_type');
const Promise = require('bluebird');
const validation = require('../../helper/validation');
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    },
    saveSchoolType: async(req, res)=>{
        try{
            if(!req.body)
            throw validation.errorFormat("empty_field","Data not Present",400);
            let schoolType = await SchoolType.findOne({school_type:req.body.school_type});
            if(schoolType){
                throw validation.errorFormat('duplicate', 'School Type Already Exists', 409);
            }
            let schoolTypeData=new SchoolType();
            schoolTypeData.school_type=req.body.school_type;
            await schoolTypeData.save();
            res.status(200).send({msg: 'done', data: schoolTypeData});
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
    getAllSchoolType:async(req,res)=>{
        try{
            let schoolType = await SchoolType.find();
            if(!schoolType){
                throw validation.errorFormat('Not Found','Data Not Available ',404);
            }
            res.status(200).send({msg:'Data Found', data:schoolType});  
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