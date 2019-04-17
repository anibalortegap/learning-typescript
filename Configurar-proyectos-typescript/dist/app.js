"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./client");
var consumer_1 = require("./consumer");
var Saludo = /** @class */ (function () {
    function Saludo() {
        console.log('test tsconfig');
    }
    return Saludo;
}());
var saludo = new Saludo();
new client_1.Client();
new consumer_1.Consumer();
