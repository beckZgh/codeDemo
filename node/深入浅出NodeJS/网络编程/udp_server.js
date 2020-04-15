
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    const { address, port } = rinfo
    console.log(`Server got ${msg} form ${address}:${port}`);
});

server.on('listening', () => {
    const { address, port } = server.address();
    console.log(`Server listening ${address}:${port}`);
});

server.bind(41234);
