
var net = require('net');
var client = net.connect({ port: 8124 }, () => {
    console.log('client connected');
    client.write('world\r\n');
});


client.on('data', data => {
    console.log(data.toString());
    client.end();
});

client.on('end', () => {
    console.log('end disconnected');
});
