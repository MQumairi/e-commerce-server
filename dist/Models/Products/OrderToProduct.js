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
var Order_1 = __importDefault(require("./Order"));
var Product_1 = __importDefault(require("./Product"));
var OrderToProduct = /** @class */ (function () {
    function OrderToProduct() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], OrderToProduct.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Order_1.default; }, function (order) { return order.products; }),
        __metadata("design:type", Order_1.default)
    ], OrderToProduct.prototype, "order", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.default; }, function (product) { return product.orders; }),
        __metadata("design:type", Product_1.default)
    ], OrderToProduct.prototype, "products", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], OrderToProduct.prototype, "quantity", void 0);
    OrderToProduct = __decorate([
        typeorm_1.Entity()
    ], OrderToProduct);
    return OrderToProduct;
}());
exports.default = OrderToProduct;
