/** 
 * @file Simple HTTP Server | Node
 * @version 1.0.0
 **/

'use strict'

const server = require('./www');
const port = process.env.PORT || 5000;

server.listen(port, (err) => {
    if (err) return process.stdout.write(`Something went wrong: ${err} \n`);
    process.stdout.write(`Node Server running on port ${port} \n`);
});

process.on('uncaughtException', (err) => {
    process.stderr.write(`Something blew up: ${err.message} \n`);
    process.stderr.write(`Trace the explosion from here: \n ${err.stack}`); 
    process.exit(1);
});

