var
    AccountRepository=require('./account.b.repository'),
    Account=AccountRepository.AccountCruds,
    ObjectId=require('mongoose').Types.ObjectId;

module.exports.insert=function (req,res) {
    AccountRepository.AccountCreate(req.body,(err,data)=>{
        if(err)
            res.status(500).send({"error":"no inserto en la bd","error2":e});
        else
            res.status(200).send({"ok":"account insertado!!"});
    });
};
module.exports.update=function (req,res) {
    req.body.password=undefined;
    var account=new Account(req.body);

    Account.findByIdAndUpdate(req.body._id,account,
        (e,data)=>{
            if(e) res.status(500).send({"error":"no inserto en la bd","error2":e});
            else
                if(data) res.status(200).send(data);
                else res.status(404).send(data)
        });
};


module.exports.findAll=function (req,res) {
    Account.find((e,data)=>{
        if(e)
            res.status(500).send({"error":"no inserto en la bd","error2":e});
        else
            res.status(200).send(data);
    });
};
module.exports.findById=function (req,res) {
    var userId=req.params.id;
    Account.findById(userId,
        (e,data)=>{
            if(e) res.status(500).send({"error":"no inserto en la bd","error2":e});
            else
            if(data) res.status(200).send(data);
            else     res.status(404).send(data);
        }
    );
};
module.exports.remove=function (req,res) {
    var userId=req.params.id;
    Account.findByIdAndRemove(userId,
        (e,data)=>{
            if(e) res.status(500).send({"error":"no inserto en la bd","error2":e});
            else
            if(data) res.status(200).send(data);
            else     res.status(404).send(data);
        }
    );
};
module.exports.login=function (req,res) {
    var username=req.body.userName,
        password=req.body.password;
    AccountRepository.AccountLogin(username,password,(err,data)=>{
        if(err)
            res.status(400).send({"error":err});
        else
            res.status(200).send(data);
    });
};
