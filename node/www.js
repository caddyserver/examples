/** 
 * @file Simple HTTP Server | Node
 * @version 1.0.0
 **/

'use strict'

const http = require('http');
const path = require('path');
const fs = require('fs')

const internal = {};

internal.template = path.join(__dirname, 'caddy.json');

internal.RequestHandler = (request, response) => {
    process.stdout.write(`${request.url} \n`);
    response.writeHead(200, {'Content-Type': 'application/json'});
    fs.createReadStream(internal.template).pipe(response);
}

const server = http.createServer(internal.RequestHandler);

process.on('uncaughtException', (err) => {
    process.stderr.write(`Something blew up: ${err.message} \n`);
    process.stderr.write(`Trace the explosion from here: \n ${err.stack}`); 
    process.exit(1);
});

module.exports = server;
