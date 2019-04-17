"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product() {
        console.log("test product export class");
    }
    return Product;
}());
exports.Product = Product;
exports.products = [
    { id: 1, name: "iphone x" },
    { id: 2, name: "apple watch" },
    { id: 3, name: "airpods" }
];
