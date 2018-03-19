var
    CarRepository=require('./car.b.repository'),
    Car=CarRepository.CarCruds,
    ObjectId=require('mongoose').Types.ObjectId;

module.exports.insertRuta=function (req,res) {
    var id=req.params.id;

    var ruta={
        "lat" : req.body.lat,
        "lng" : req.body.lng,
        "fecha":new Date()
    };

    CarRepository.CarInsertRuta(id,ruta,(err,data)=>{
        if(err)
            res.status(500).send({"error":"no inserto en la bd","error2":e});
        else
            res.status(200).send({"ok":"ruta insertado!!"});
    });
};
module.exports.insertGasolina=function (req,res) {
    var id=req.params.id;

    var gasolina={
        porcentaje : req.body.porcentaje,
        fecha:new Date()
    };

    CarRepository.CarInsertGasoline(id,gasolina,(err,data)=>{
        if(err)
            res.status(500).send({"error":"no inserto en la bd","error2":e});
        else
            res.status(200).send({"ok":"ruta insertado!!"});
    });
};

module.exports.getGasolinaAndRuta=function (req,res) {

    var id=req.body.id;

    CarRepository.CarGetUltimaGasolinaAndRuta(id,(err,data)=>{
        if(err)
            res.status(500).send({"error":"no inserto en la bd","error2":e});
        else
            res.status(200).send(data);
    });
};
module.exports.insert=function (req,res) {

    var car=new Car(req.body);
    car.save((err,data)=>{
        if(err)
            res.status(500).send({"error":"no inserto en la bd","error2":e});
        else
            res.status(200).send({"ok":"account insertado!!"});
    });
};

module.exports.findAll=function (req,res) {
    Car.find((e,data)=>{
        if(e)
            res.status(500).send({"error":"no inserto en la bd","error2":e});
        else
            res.status(200).send(data);
       // res.views(homepage)
    });
};
module.exports.findById=function (req,res) {
    var userId=req.params.id;
    Car.findById(userId,
        (e,data)=>{
            if(e) res.status(500).send({"error":"no inserto en la bd","error2":e});
            else
            if(data) res.status(200).send(data);
            else     res.status(404).send(data);
        }
    );
};
module.exports.remove=function (req,res) {
    var carId=req.params.id;
    Car.findByIdAndRemove(carId,
        (e,data)=>{
            if(e) res.status(500).send({"error":"no inserto en la bd","error2":e});
            else
            if(data) res.status(200).send(data);
            else     res.status(404).send(data);
        }
    );
};
