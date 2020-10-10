"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express_1.default();
app.use(body_parser_1.default.json());
var port = process.env.PORT || 3001;
app.get("/", function (req, res) {
    res.json({ message: "Hello world" });
});
app.listen(port, function () {
    console.log("listening on " + port);
});
