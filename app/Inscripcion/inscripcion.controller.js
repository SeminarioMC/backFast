var
    ObjectId=require('mongoose').Types.ObjectId
    ins= require('./inscripcion.entity').InscripcionModel;

module.exports.insert=function (req,res) {
    var newIns=ins(req.body);
    newIns.save(function(err){
        if(err)
            res.status(403).send({error:'eres un guffy'});
        res.status(200).send({
            res:'OK'
        })
    })
};

module.exports.obtener=function (req,res) {
    // var newIns=ins(req.body);
    ins.find({},function(err, docs){
        res.send(docs)
    })
};