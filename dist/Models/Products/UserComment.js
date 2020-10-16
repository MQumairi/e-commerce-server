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
var Product_1 = __importDefault(require("./Product"));
var UserComment = /** @class */ (function () {
    function UserComment() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], UserComment.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], UserComment.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], UserComment.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], UserComment.prototype, "date_posted", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.default; }, function (product) { return product.commnets; }, {
            cascade: true,
        }),
        __metadata("design:type", Product_1.default)
    ], UserComment.prototype, "product", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        typeorm_1.ManyToOne(function (type) { return UserComment; }, function (child_comments) { return child_comments.child_comments; }),
        __metadata("design:type", UserComment)
    ], UserComment.prototype, "parent_comment", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        typeorm_1.OneToMany(function (type) { return UserComment; }, function (parent_comment) { return parent_comment.parent_comment; }),
        __metadata("design:type", Array)
    ], UserComment.prototype, "child_comments", void 0);
    return UserComment;
}());
exports.default = UserComment;
