var Account=require('./account.a.entity').AccountModel
    ,bcryp=require('bcrypt-nodejs')
    ,token=require('../../tols/jwt')
    ;


module.exports.AccountCruds=Account;

module.exports.AccountLogin=function(user,password,callback){
    Account.findOne({
            userName:user
        },
        (err,data)=>{
            console.log(err,data,"ww",user)
            if(err)callback(err,null);
            else
                if (data) {
                    console.log(data)
                    bcryp.compare(password,data.password,
                         (err,check)=>{
                            if(check)
                                callback(null,{ token:token.createToken(data)});
                            else
                                callback({"mensaje":"El usuario o contraseña es invalido"},null);
                    });
                }
                else callback(err,null);
        }
    );
};
module.exports.AccountCreate=function(obj,callback){
    bcryp.hash(obj.password,null,null,(err,hash)=>{
        if(err)
            callback({"error":"error en la encriptacion"},null);
        else {
            obj.password = hash;
            var account =new Account(obj);
            account.save((e,data)=>{
                if(e)
                    callback(e,null);
                else
                    callback(null,data);
            });
        }
    });
};