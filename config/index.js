'use strict'
module.exports = (app)=>{
    require('./appUse')(app);
    require('./db')();
    require('./model')(app);
    const routes = require('./route');
    app.use('/app', routes);
    app.use('/*', (req,res)=> res.status(400).send({error: 'Invalid path'}));
    console.log('app config');
    return app;
}