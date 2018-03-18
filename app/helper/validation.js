'use strict'

module.exports = {
    phoneValidation(data){
        if(!data)
            throw this.errorFormat('data_required', 'empty filed', 400);
        if(data.length != 10)
            throw this.errorFormat('invalid_format', 'invalid data format : '+data, 400);
        if(data[0] == '0')
            throw this.errorFormat('invalid_format', 'invalid data format : '+data, 400);
        let flg =0;
        for(let i=0; i< data.length; i++){
            if( data.charCodeAt(i)<48 || data.charCodeAt(i)>57){
                flg=1;
                break;
            }
        }
        if(flg == 1)
            throw this.errorFormat('invalid_format', 'invalid data format : '+data, 400);
        else 
            return true;
    },
    emailValidation(data){
        if(!data)
            throw this.errorFormat('data_required', 'empty filed', 400);
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(data)){
            throw this.errorFormat('invalid_format', 'invalid data format : '+ data, 400);
        }
        else
            return true;
    },
    errorFormat(code, message, status){
        let error = new Error();
        error.code = code;
        error.message = message;
        error.status = status;
        return error;
    }
}