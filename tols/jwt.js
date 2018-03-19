var jwt=require('jwt-simple'),
    moment=require('moment'),
    clave=require('../config/global').clavesecreta;


module.exports.createToken=function(obj){
    var payload={};
    payload["userName"]=obj.userName;
    payload["email"]=obj.email;
    payload["role"]=obj.role;
    payload["iat"]=moment().unix();
    payload["exp"]=moment().add(30,'days').unix();

    return jwt.encode(payload,clave);
};

