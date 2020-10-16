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
var CustomerAddress_1 = __importDefault(require("../Address/CustomerAddress"));
var Order_1 = __importDefault(require("../Products/Order"));
var Rating_1 = __importDefault(require("../Products/Rating"));
var User_1 = __importDefault(require("./User"));
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.OneToOne(function (type) { return CustomerAddress_1.default; }, function (customerAdress) { return customerAdress.customer; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", CustomerAddress_1.default)
    ], Customer.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Customer.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Customer.prototype, "card_no", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Customer.prototype, "card_exp", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Customer.prototype, "card_cvc", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        typeorm_1.OneToMany(function (type) { return Order_1.default; }, function (order) { return order.customer; }, {
            cascade: true,
            onDelete: "NO ACTION",
        }),
        __metadata("design:type", Array)
    ], Customer.prototype, "orders", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        typeorm_1.OneToMany(function (type) { return Rating_1.default; }, function (ratings) { return ratings.customer; }),
        __metadata("design:type", Array)
    ], Customer.prototype, "published_ratings", void 0);
    Customer = __decorate([
        typeorm_1.ChildEntity()
    ], Customer);
    return Customer;
}(User_1.default));
exports.default = Customer;
