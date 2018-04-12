const
    app = require('./app'),
    conf = require('./config/global');

var port = conf.app.port;

app.listen( port,()=>{
            console.log("SERVIDOR CORRIENDO EN EL PUERTO: " + port)
});