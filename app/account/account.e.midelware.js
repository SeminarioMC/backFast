'use strict'
var jwt=require('jwt-simple'),
    moment=require('moment'),
    clave=require('../../config/global').clavesecreta;


module.exports.ensureAuth=function(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({"error":"La peticion no tiene la cabecera autorizada"})
    }
    var token=req.headers.authorization.replace(/['"]+/g,'');

    try {
        var payload = jwt.decode(token, clave);
        if(payload.exp<=moment().unix()){
            return res.status(401).send({"error":"El seccion a expirado"});
        }
    }catch (e){
        return res.status(404).send({"error":"El token  no es valido"});
    }
    req.user=payload;
    next();
};
module.exports.Admy=function(req,res,next){
    if(!req.user)
        res.status(404).send({"error":"no ay permisos"});
    else
        if(req.user.role.indexOf("admi")!=-1)
            next();
        else
            res.status(404).send({"error":"no ay permisos"});
    return;
}

