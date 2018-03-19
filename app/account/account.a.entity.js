var Mongoose=require('mongoose'),
    Schema=Mongoose.Schema,
    AccountSchema=Schema({
        userName:String,
        email:String,
        password:String,
        role:[String],
    });
module.exports.AccountSchema=AccountSchema;
module.exports.AccountModel=Mongoose.model("account",AccountSchema);
