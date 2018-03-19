'use strict'
var api=require('express').Router()
    ,CarController=require('./car.d.controller')
;

api.post("/",CarController.insert);
api.put("/",CarController.insert);
api.get("/",CarController.findAll);
api.get("/:id",CarController.findById);

api.post("/ruta/:id",CarController.insertRuta);
api.post("/gasolina/:id",CarController.insertGasolina);
api.post("/ryg",CarController.getGasolinaAndRuta);
api.get("/denis",function (req,res) {
    var g={

        t:"ww"
    };
    res.send("golfa");
})
module.exports=api;
