var Mongoose=require('mongoose'),
    Schema=Mongoose.Schema,
    TallerSchema=Schema({
        nombre:String,
        horario:String,
        costo:String
    });
module.exports.TallerSchema=TallerSchema;
module.exports.TallerSchemaModel=Mongoose.model("taller",TallerSchema);
