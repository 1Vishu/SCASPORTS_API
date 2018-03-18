'use strict';
let mongoose = require('mongoose');
require('colors');
module.exports = (app)=>{
    console.log('db set');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://root:root@ds125628.mlab.com:25628/scasports', {
        useMongoClient: true
    });
    mongoose.connection.on('connected', ()=> {
        console.log('Mongoose default connection open to '.green );
    });

    mongoose.connection.once('open',()=> {
        console.log('Connected to mongodb!'.green);
    });

     mongoose.connection.on('error', (err)=> {
        console.error('Mongoose default connection error: ' + err,''.red);
    });

     mongoose.connection.on('disconnected', ()=> {
        console.log('Mongoose default connection disconnected',''.red);
    });

    process.on('SIGINT',  ()=> {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination',''.red);
            process.exit(0);
        });
    });
}