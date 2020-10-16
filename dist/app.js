"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var path_1 = __importDefault(require("path"));
console.log("🏁 Start 🏁");
console.log(path_1.default.join(__dirname, "Models", "**", "*.{ts,js}"));
dotenv_1.default.config();
typeorm_1.createConnection().then(function (connection) {
    var app = express_1.default();
    app.use(body_parser_1.default.json());
    var port = process.env.PORT || 3001;
    app.get("/", function (req, res) {
        res.json({ message: "Hello world" });
    });
    app.listen(port, function () {
        console.log("listening on " + port);
    });
});
