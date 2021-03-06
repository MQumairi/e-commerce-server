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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Address = /** @class */ (function () {
    function Address() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Address.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Address.prototype, "line_1", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Address.prototype, "line_2", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Address.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Address.prototype, "country", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Address.prototype, "postcode", void 0);
    Address = __decorate([
        typeorm_1.Entity(),
        typeorm_1.TableInheritance({ column: { type: "varchar", name: "type" } })
    ], Address);
    return Address;
}());
exports.default = Address;
