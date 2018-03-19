var objectid=require('mongodb').ObjectID;
module.exports.isEntero=function(x){
    return x.toString().match(/^-?\d+$/);
};
module.exports.isReal=function(x){
    return x.toString().match(/^-?\d+(\.\d+)?$/);
};
module.exports.isNombre=function(x){
    return x.match(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,40}$/);
};
module.exports.isEmail=function(x){
    return x.match(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/);
};
module.exports.isPassword=function(x){
    return true;
};
module.exports.isId=function(x){
    return objectid.isValid(x);
};
module.exports.isSexo=function(x){
    return (x=='hombre'||x=='mujer');
};
module.exports.isRole=function(x){
    return (x=='R_user'||x=='R_admi'||x=='R_vendedor');
};
module.exports.isAll=function(x){
    return true;
};

