"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productController = express_1.Router();
//Create a product
productController.post("/products", function (req, res) { });
exports.default = productController;
