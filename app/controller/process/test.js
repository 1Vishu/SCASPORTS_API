'use strict'
module.exports = {
    test(req,res){
        res.status(200).send({message: 'done'});
    }
}