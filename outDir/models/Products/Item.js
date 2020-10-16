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
var Order_1 = __importDefault(require("./Order"));
var Product_1 = __importDefault(require("./Product"));
var Item = /** @class */ (function () {
    function Item() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Item.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.default; }, function (product) { return product.items; }),
        __metadata("design:type", Product_1.default)
    ], Item.prototype, "product", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        typeorm_1.ManyToOne(function (type) { return Order_1.default; }, function (order) { return order.items; }, {
            cascade: false,
            onDelete: "NO ACTION",
        }),
        __metadata("design:type", Order_1.default)
    ], Item.prototype, "ordered_in", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return StorageAddress_1.default; }, function (storageAddress) { return storageAddress.items_in_stock; }, { cascade: true, onDelete: "CASCADE" }),
        __metadata("design:type", StorageAddress_1.default)
    ], Item.prototype, "stored_in", void 0);
    Item = __decorate([
        typeorm_1.Entity()
    ], Item);
    return Item;
}());
exports.default = Item;
