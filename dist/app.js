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
var UserController_1 = __importDefault(require("./Controllers/UserController"));
var StorageAddressController_1 = __importDefault(require("./Controllers/StorageAddressController"));
dotenv_1.default.config();
typeorm_1.createConnection();
// uploadSample("/Users/mqumairi/Desktop/flowers.jpg");
var app = express_1.default();
app.use(body_parser_1.default.json());
var port = process.env.PORT || 5000;
app.use("/api/users", UserController_1.default);
app.use("/api/storage-addresses", StorageAddressController_1.default);
app.listen(port, function () {
    console.log("🦻 listening on " + port);
});
// });
