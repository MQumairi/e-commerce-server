"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
dotenv_1.default.config();
exports.app = express_1.default();
exports.app.use(body_parser_1.default.json());
var port = process.env.PORT || 3001;
exports.app.get("/", function (req, res) {
    res.json({ message: "Hello world" });
});
exports.app.listen(port, function () {
    console.log("listening on " + port);
});
//e-commerce
