'use strict'
var api=require('express').Router(),
    tallerController=require("./taller.controller")
;

api.get('/',tallerController.findAll);
api.post('/',tallerController.insert);

module.exports=api;

