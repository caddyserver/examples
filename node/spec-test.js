/** 
 * @file Simple test HTTP Server | Node
 * @version 1.0.0
 **/

'use strict'

const http = require('http');
const expect = require('chai').expect;
const server = require('./www');
const port = process.env.PORT || 5000;

const internal = {};

describe('Simple Server Test', () => {
    internal.options = {
        host: 'localhost',
        path: '/',
        port: port
    }

    internal.reply = (response) => {
        internal._html = '';
        response.on('data', (chunk) => internal._html += chunk);
        response.on('end', () => {
            internal._html = JSON.parse(internal._html);
        });
        expect(internal._html).to.be.an('object');
    }

    before( () => {
        server.listen(port, (err) => {
            if (err) return process.stdout.write(`Something went wrong: ${err} \n`);
            process.stdout.write(`Node Server running on port ${port} \n`);
        });

    });

    describe('/', () => {
        it('should return a JSON template', (done) => {
            http.get(internal.options, internal.reply);
            done(); 
        });
    });
});


