'use strict'
var express=require('express')
    ,cors = require('cors')
    ,bodyParser=require('body-parser')
    ,app=express()
    ,mongo=require('mongoose')
    ,inscripcionRuta=require('./app/Inscripcion/inscripciones.routes')
;

app.use(cors());

mongo.connect('mongodb://PaulPinelo:PaulPinelo@cluster0-shard-00-00-zbs3g.mongodb.net:27017,cluster0-shard-00-01-zbs3g.mongodb.net:27017,cluster0-shard-00-02-zbs3g.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')
    .then(()=>{
        console.log("Conectado a la BD...")

    })
    .catch(err=>console.log(err));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/in',inscripcionRuta);

module.exports=app;