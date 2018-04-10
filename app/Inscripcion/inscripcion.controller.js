var
    // // AccountRepository=require('./account.b.repository'),
    // Account=AccountRepository.AccountCruds,
    ObjectId=require('mongoose').Types.ObjectId
    ins= require('./inscripcion.entity').InscripcionModel;


//INSERTAR
module.exports.insert=function (req,res) {
    var newIns=ins(req.body);
    newIns.save(function(err){
        res.send("Se ha guardado los datos")
    })
};

//OBTENER
module.exports.obtener=function (req,res) {
    // var newIns=ins(req.body);
    ins.find({},function(err, docs){
        res.send(docs)
    })
};