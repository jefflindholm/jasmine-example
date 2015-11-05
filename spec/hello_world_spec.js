var request = require('request');
var helloWorld = require('../app.js');
var base_url = 'http://localhost:3000/';

describe('Hello world test', function() {
    describe("GET /", function() {
        it('returns status code 200', function() {
            request.get(base_url, function(err, res, body){
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it('returns Hello World', function() {
            request.get(base_url, function(err, res, body){
                expect(body).toBe('Hello World');
                helloWorld.closeServer();
                done();
            });
        });
    });
});