"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Order_1 = __importDefault(require("../Products/Order"));
var Product_1 = __importDefault(require("../Products/Product"));
var Address_1 = __importDefault(require("./Address"));
var StorageAddress = /** @class */ (function (_super) {
    __extends(StorageAddress, _super);
    function StorageAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], StorageAddress.prototype, "owner", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], StorageAddress.prototype, "phone", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Order_1.default; }, function (order) { return order.origin; }, { nullable: true }),
        __metadata("design:type", Array)
    ], StorageAddress.prototype, "orders", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Product_1.default; }, function (product) { return product.stored_in; }, {
            nullable: true,
        }),
        __metadata("design:type", Array)
    ], StorageAddress.prototype, "products_in_stock", void 0);
    StorageAddress = __decorate([
        typeorm_1.ChildEntity()
    ], StorageAddress);
    return StorageAddress;
}(Address_1.default));
exports.default = StorageAddress;
