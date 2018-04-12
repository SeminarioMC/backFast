'use strict'
var api=require('express').Router(),
    insController=require("./inscripcion.controller")
;

api.get('/',insController.obtener);

api.post('/',insController.insert);

module.exports=api;
