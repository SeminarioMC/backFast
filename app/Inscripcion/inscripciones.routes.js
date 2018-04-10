'use strict'
var api=require('express').Router(),
    insController=require("./inscripcion.controller")

    // UserController=require('./account.d.controller'),
    // mdAuth=require('./account.e.midelware')
;

// api.post("/",UserController.insert);
// api.put("/",UserController.update);
api.get('/',insController.obtener);

api.post('/',insController.insert)
// api.get("/:id",mdAuth.ensureAuth,mdAuth.Admy,UserController.findById);
// api.delete('/:id',mdAuth.ensureAuth,mdAuth.Admy,UserController.remove);
// api.post("/login",UserController.login);
module.exports=api;
