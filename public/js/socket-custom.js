var socket = io();  

        socket.on('connect', function(){
            console.log('conectado');
        });

        socket.on('disconnect', function(){
            console.log('Perdimos conecvion con el servidor')
        });

        //Enviar informacion
        socket.emit('enviarMensaje',{
            usuario: 'Manuel',
            mensaje: 'Hola Mundo'
        }, function(resp){
            console.log('Respuesta server',resp);
        });

        //Escuchar informacion
        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor:', mensaje);
        });