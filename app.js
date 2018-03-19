'use strict'
var express=require('express')
    ,bodyParser=require('body-parser')
    ,app=express()
    ,mongo=require('mongoose')
    ,accountRoutes=require('./app/account/account.e.routes')
    ,carRoutes=require('./app/car/car.e.routes')
;

mongo.connect('mongodb://warren_x_x_x:alizonmelani123@cluster0-shard-00-00-ja9t8.mongodb.net:27017,cluster0-shard-00-01-ja9t8.mongodb.net:27017,cluster0-shard-00-02-ja9t8.mongodb.net:27017/ventas?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')
    .then(()=>{
        console.log("conectado a la bd")

    })
    .catch(err=>console.log(err));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/account',accountRoutes);
app.use('/api/car',carRoutes);
module.exports=app;