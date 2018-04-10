var Mongoose=require('mongoose'),
Schema=Mongoose.Schema,
    InscripcionSchema=Schema({
        nombre:String,
        fecha:String,
        categoria:String,
        prueba:String,
        longitud:String
    });

module.exports.InscripcionSchema=InscripcionSchema;
module.exports.InscripcionModel=Mongoose.model("account",InscripcionSchema);
