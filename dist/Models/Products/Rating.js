"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Customer_1 = __importDefault(require("../Users/Customer"));
var Product_1 = __importDefault(require("./Product"));
var Rating = /** @class */ (function () {
    function Rating() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Rating.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Customer_1.default; }, function (customer) { return customer.published_ratings; }),
        __metadata("design:type", Customer_1.default)
    ], Rating.prototype, "customer", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.default; }, function (product) { return product.ratings; }),
        __metadata("design:type", Product_1.default)
    ], Rating.prototype, "product", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Rating.prototype, "score", void 0);
    Rating = __decorate([
        typeorm_1.Entity()
    ], Rating);
    return Rating;
}());
exports.default = Rating;
