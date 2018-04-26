var
    tallerModel= require('./taller.entity').TallerSchemaModel;
    mongoose=require('mongoose');

module.exports.insert=function (req,res) {
    var newTaller=tallerModel(req.body);
    newTaller.save(function(err){
        if(err)throw err;
        res.status(200).send({
            res:'OK'
        })
    })
};

module.exports.findAll=function (req,res) {
    tallerModel.find({},function(err, docs){
        res.send(docs)
    })
};
module.exports.delete=function(req,res){
    id=req.params.id;
    tallerModel.remove({"_id":new mongoose.mongo.ObjectId(id)},function(err){
        if(err) throw  err;
        res.status(200).send({
            res:'ok'
        });
    })
};