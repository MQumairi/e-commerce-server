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
var StorageAddress_1 = __importDefault(require("../Address/StorageAddress"));
var ProductImage_1 = __importDefault(require("../Images/ProductImage"));
var Order_1 = __importDefault(require("./Order"));
var Rating_1 = __importDefault(require("./Rating"));
var UserComment_1 = __importDefault(require("./UserComment"));
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "price_gbp", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Rating_1.default; }, function (rating) { return rating.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "ratings", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return UserComment_1.default; }, function (userComment) { return userComment.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "commnets", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ProductImage_1.default; }, function (productImage) { return productImage.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "product_images", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return StorageAddress_1.default; }, function (storageAddress) { return storageAddress.products_in_stock; }),
        __metadata("design:type", StorageAddress_1.default)
    ], Product.prototype, "stored_in", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "stock", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Order_1.default; }, function (order) { return order.products; }),
        __metadata("design:type", Array)
    ], Product.prototype, "orders_for", void 0);
    Product = __decorate([
        typeorm_1.Entity()
    ], Product);
    return Product;
}());
exports.default = Product;
