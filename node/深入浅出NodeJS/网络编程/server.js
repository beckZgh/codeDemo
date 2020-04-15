
var net = require('net');

var server = net.createServer(socket => {

    socket.on('data', data => {
        socket.write('Hello ' + data);
    });

    socket.on('end', data => {
        socket.write('end');
    });


    socket.write('weclome nodejs demo');

    setTimeout(() => {
        socket.write('I am beck');
    }, 2000);
});

server.listen(8124, () => {
    console.log('server bound');
});
