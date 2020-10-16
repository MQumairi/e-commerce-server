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
var Role_1 = __importDefault(require("./Role"));
var Avatar_1 = __importDefault(require("../Images/Avatar"));
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], User.prototype, "first_name", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], User.prototype, "last_name", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        typeorm_1.OneToOne(function (type) { return Avatar_1.default; }, function (avatar) { return avatar.user; }, {
            cascade: true,
            onDelete: "CASCADE",
        }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Avatar_1.default)
    ], User.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        typeorm_1.ManyToOne(function (type) { return Role_1.default; }, function (role) { return role.users; }, {
            cascade: false,
        }),
        __metadata("design:type", Role_1.default)
    ], User.prototype, "role", void 0);
    User = __decorate([
        typeorm_1.Entity(),
        typeorm_1.TableInheritance({ column: { type: "varchar", name: "type" } })
    ], User);
    return User;
}());
exports.default = User;
