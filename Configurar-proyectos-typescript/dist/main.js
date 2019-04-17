"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var client_1 = require("./client");
var _ = __importStar(require("lodash"));
new product_1.Product();
new client_1.Client();
var Main = /** @class */ (function () {
    function Main() {
        console.log("Esta es una nueva app");
    }
    return Main;
}());
console.log('¿Es arreglo? ', _.isArray(product_1.products));
new Main();
