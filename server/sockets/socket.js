const {io} = require('../server');

io.on('connection',(client) =>{
    console.log('usuario conectado');

    client.emit('enviarMensaje',{
        usuario: 'Admiin',
        mensaje: 'Bienvenido al Server'
    });

    client.on ('disconnect', () =>{
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) =>{
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN'
            });
            
        } else {
            callback({
                resp: 'TODO SALIO MAL!!!'
            });
        }*/
    });
});