var
    ObjectId=require('mongoose').Types.ObjectId
    ins= require('./inscripcion.entity').InscripcionModel;

module.exports.insert=function (req,res) {
    var newIns=ins(req.body);
    newIns.save(function(err){
        if(err)
            res.status(403).send({error:'error exist'});
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

module.exports.obtener_id=function(req,res){
    dni=req.params.id;
    ins.find({"dni":new mongoose.mongo.ObjectId(dni)},function (err,data) {
        if(err) throw  err;
        res.status(200).send({
            res:data
        })
    })
};