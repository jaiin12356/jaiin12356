'use strict';

/************* include library **************/
const http    = require('http');
const express = require('express');
const server  = express();

const serverPort = 80;


/************* Routing **************/
//웹페이지의 세부 주소를 지정한다.
server.use('/',            require('./server'));
<<<<<<< HEAD
server.use('/api',         require('./api'));
server.use('/jeje',        require('./jeje'));
server.use('/sjapi',        require('./sjapi'));
=======
server.use('/sjapi',        require('./sjapi'));
server.use('/api1',        require('./api1'));
>>>>>>> dd5ea6383faf765557ebb08b8ef2a753b0b14797

/************* Running server **************/
const httpServer = http.createServer(server);
httpServer.listen(serverPort, () => {
    const startdate = new Date();
    console.log(`[START SERVER (port ${serverPort}) ${startdate}]`);
});