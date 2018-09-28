var Appsync = require("nativescript-appsync").Appsync;
var appsync = new Appsync();

describe("greet function", function() {
    it("exists", function() {
        expect(appsync.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(appsync.greet()).toEqual("Hello, NS");
    });
});