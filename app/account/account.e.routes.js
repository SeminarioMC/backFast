'use strict'
var api=require('express').Router()
    ,UserController=require('./account.d.controller')
    ,mdAuth=require('./account.e.midelware')
;

api.post("/",UserController.insert);
api.put("/",UserController.update);
api.get("/",UserController.findAll);
api.get("/:id",mdAuth.ensureAuth,mdAuth.Admy,UserController.findById);
api.delete('/:id',mdAuth.ensureAuth,mdAuth.Admy,UserController.remove);
api.post("/login",UserController.login);
module.exports=api;
