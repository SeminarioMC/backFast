var Car=require('./car.a.entity').CarModel
    GasolinaSchema=require('./car.a.entity').GasolineSchema
    RutaSchema=require('./car.a.entity').RutaSchema
;

module.exports.CarCruds=Car;

module.exports.CarInsertRuta=function(id,ruta,callback){


    Car.findByIdAndUpdate(id,
        {
            "$push":{
                ruta:ruta
            },
            "$set":{
                ultimaRuta:ruta
            }
        }
        ,(err,data)=>{

        if(err)callback(err,null);
        else callback(null,data);
    })
};
module.exports.CarInsertGasoline=function(id,gasolina,callback){


    Car.findByIdAndUpdate(id,
        {
            "$push":{
                gasolina:gasolina
            },
            "$set":{
                ultimaGasolina:gasolina
            }
        },(err,data)=>{
            if(err)callback(err,null);
            else callback(null,data);
    })
};

module.exports.CarGetUltimaGasolinaAndRuta=function(id,callback){
    const query = Car.findById(id).select({ultimaGasolina:1,ultimaRuta:1}).exec((err,data)=>{
        if(err)callback(err,null);
        else callback(null,data);
    });
};
