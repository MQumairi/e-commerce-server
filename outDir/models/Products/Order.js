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
var CustomerAddress_1 = __importDefault(require("../Address/CustomerAddress"));
var StorageAddress_1 = __importDefault(require("../Address/StorageAddress"));
var Customer_1 = __importDefault(require("../Users/Customer"));
var Item_1 = __importDefault(require("./Item"));
var Order = /** @class */ (function () {
    function Order() {
        this.is_shipped = false;
        this.is_delivered = false;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Order.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Customer_1.default; }, function (customer) { return customer.orders; }, {
            cascade: true,
            onDelete: "NO ACTION",
        }),
        __metadata("design:type", Customer_1.default)
    ], Order.prototype, "customer", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Item_1.default; }, function (item) { return item.ordered_in; }, {
            cascade: false,
            onDelete: "NO ACTION",
        }),
        __metadata("design:type", Array)
    ], Order.prototype, "items", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return CustomerAddress_1.default; }, function (customerAddress) { return customerAddress.orders_to; }, { cascade: true, onDelete: "NO ACTION" }),
        __metadata("design:type", CustomerAddress_1.default)
    ], Order.prototype, "destination", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return StorageAddress_1.default; }, function (storageAddress) { return storageAddress.orders_from; }, { cascade: true, onDelete: "NO ACTION" }),
        __metadata("design:type", StorageAddress_1.default)
    ], Order.prototype, "origin", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Order.prototype, "order_date", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Order.prototype, "arrival_date", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Order.prototype, "payment_gbp", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Order.prototype, "is_shipped", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Order.prototype, "is_delivered", void 0);
    Order = __decorate([
        typeorm_1.Entity()
    ], Order);
    return Order;
}());
exports.default = Order;
