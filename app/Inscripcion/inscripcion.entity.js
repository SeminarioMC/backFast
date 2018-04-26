var Mongoose=require('mongoose'),
    Schema=Mongoose.Schema,
    InscripcionSchema=Schema({
        dni:String,
        nombre:String,
        apellidos:String,
        correo:String,
        talleres:[Schema.Types.ObjectId]
    });
module.exports.InscripcionSchema=InscripcionSchema;
module.exports.InscripcionModel=Mongoose.model("account",InscripcionSchema);
