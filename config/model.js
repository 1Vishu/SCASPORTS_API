'use strict'
module.exports =(app)=>{
    require('../app/models/test');
    require('../app/models/user_master');
    require('../app/models/usertype');
    require('../app/models/schooltype');
    require('../app/models/eventtype');
    require('../app/models/event_register');
    require('../app/models/event_create');
    console.log('Models set');
    return app;
}