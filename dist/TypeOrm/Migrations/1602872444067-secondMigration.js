"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondMigration1602872444067 = void 0;
var secondMigration1602872444067 = /** @class */ (function () {
    function secondMigration1602872444067() {
        this.name = 'secondMigration1602872444067';
    }
    secondMigration1602872444067.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"image_asset\" (\"id\" SERIAL NOT NULL, \"data\" bytea NOT NULL, \"type\" character varying NOT NULL, \"productId\" integer, CONSTRAINT \"PK_ebb19157be1103b6ab97049321e\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_7a4ed6f81204770dfcd5b04473\" ON \"image_asset\" (\"type\") ")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"order_to_product\" (\"id\" SERIAL NOT NULL, \"quantity\" integer NOT NULL, \"orderId\" integer, \"productsId\" integer, CONSTRAINT \"PK_eb70cc26d5787b1735fa4dda322\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user_comment\" (\"id\" SERIAL NOT NULL, \"title\" text NOT NULL, \"description\" text NOT NULL, \"date_posted\" TIMESTAMP NOT NULL, \"authorId\" integer, \"productId\" integer, \"parentCommentId\" integer, CONSTRAINT \"PK_09bced71952353c5ae4e40f0f52\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user\" (\"id\" SERIAL NOT NULL, \"username\" text NOT NULL, \"password\" text NOT NULL, \"first_name\" text NOT NULL, \"last_name\" text NOT NULL, \"email\" text NOT NULL, \"phone\" text, \"card_no\" text, \"card_exp\" TIMESTAMP, \"card_cvc\" text, \"type\" character varying NOT NULL, \"avatarId\" integer, \"roleId\" integer, \"addressId\" integer, CONSTRAINT \"REL_58f5c71eaab331645112cf8cfa\" UNIQUE (\"avatarId\"), CONSTRAINT \"REL_217ba147c5de6c107f2fa7fa27\" UNIQUE (\"addressId\"), CONSTRAINT \"PK_cace4a159ff9f2512dd42373760\" PRIMARY KEY (\"id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_31ef2b4d30675d0c15056b7f6e\" ON \"user\" (\"type\") ")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"rating\" (\"id\" SERIAL NOT NULL, \"score\" integer NOT NULL, \"customerId\" integer, \"productId\" integer, CONSTRAINT \"PK_ecda8ad32645327e4765b43649e\" PRIMARY KEY (\"id\"))")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product\" (\"id\" SERIAL NOT NULL, \"name\" text NOT NULL, \"description\" text NOT NULL, \"price_gbp\" integer NOT NULL, \"stock\" integer NOT NULL, \"storedInId\" integer, CONSTRAINT \"PK_bebc9158e480b949565b4dc7a82\" PRIMARY KEY (\"id\"))")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"order\" (\"id\" SERIAL NOT NULL, \"order_date\" TIMESTAMP NOT NULL, \"arrival_date\" TIMESTAMP NOT NULL, \"payment_gbp\" integer NOT NULL, \"is_shipped\" boolean NOT NULL, \"is_delivered\" boolean NOT NULL, \"tracking_number\" text NOT NULL, \"customerId\" integer, \"destinationId\" integer, \"originId\" integer, CONSTRAINT \"PK_1031171c13130102495201e3e20\" PRIMARY KEY (\"id\"))")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"address\" ADD \"owner\" text")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"address\" ADD \"phone\" text")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"address\" ADD \"date_assigned_to_customer\" TIMESTAMP")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"role\" ALTER COLUMN \"description\" DROP NOT NULL")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"role\" ALTER COLUMN \"description\" SET DEFAULT null")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"image_asset\" ADD CONSTRAINT \"FK_cb650c0c0829b793de422eef0cb\" FOREIGN KEY (\"productId\") REFERENCES \"product\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_to_product\" ADD CONSTRAINT \"FK_3e918511a5f968387c92e33d62c\" FOREIGN KEY (\"orderId\") REFERENCES \"order\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_to_product\" ADD CONSTRAINT \"FK_11efbd6561106f7ff069a987d8c\" FOREIGN KEY (\"productsId\") REFERENCES \"product\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_comment\" ADD CONSTRAINT \"FK_19d0406f821caa3149825fe9693\" FOREIGN KEY (\"authorId\") REFERENCES \"user\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_comment\" ADD CONSTRAINT \"FK_e79a970abccb687faf54c3074cb\" FOREIGN KEY (\"productId\") REFERENCES \"product\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_comment\" ADD CONSTRAINT \"FK_bed08e1b0ae3b0aa467794ceccd\" FOREIGN KEY (\"parentCommentId\") REFERENCES \"user_comment\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" ADD CONSTRAINT \"FK_58f5c71eaab331645112cf8cfa5\" FOREIGN KEY (\"avatarId\") REFERENCES \"image_asset\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" ADD CONSTRAINT \"FK_c28e52f758e7bbc53828db92194\" FOREIGN KEY (\"roleId\") REFERENCES \"role\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" ADD CONSTRAINT \"FK_217ba147c5de6c107f2fa7fa271\" FOREIGN KEY (\"addressId\") REFERENCES \"address\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"rating\" ADD CONSTRAINT \"FK_ab73fa66d0d302887f32e0faecb\" FOREIGN KEY (\"customerId\") REFERENCES \"user\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"rating\" ADD CONSTRAINT \"FK_1fdf6f092aa907177771948f6a1\" FOREIGN KEY (\"productId\") REFERENCES \"product\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" ADD CONSTRAINT \"FK_bb788bfc4cc86b0ae31bf56f168\" FOREIGN KEY (\"storedInId\") REFERENCES \"address\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" ADD CONSTRAINT \"FK_124456e637cca7a415897dce659\" FOREIGN KEY (\"customerId\") REFERENCES \"user\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" ADD CONSTRAINT \"FK_05d26e13d695a788abb2d01f705\" FOREIGN KEY (\"destinationId\") REFERENCES \"address\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" ADD CONSTRAINT \"FK_af3a52ad39f8b54287ff4336ed6\" FOREIGN KEY (\"originId\") REFERENCES \"address\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 29:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    secondMigration1602872444067.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" DROP CONSTRAINT \"FK_af3a52ad39f8b54287ff4336ed6\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" DROP CONSTRAINT \"FK_05d26e13d695a788abb2d01f705\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order\" DROP CONSTRAINT \"FK_124456e637cca7a415897dce659\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" DROP CONSTRAINT \"FK_bb788bfc4cc86b0ae31bf56f168\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"rating\" DROP CONSTRAINT \"FK_1fdf6f092aa907177771948f6a1\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"rating\" DROP CONSTRAINT \"FK_ab73fa66d0d302887f32e0faecb\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" DROP CONSTRAINT \"FK_217ba147c5de6c107f2fa7fa271\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" DROP CONSTRAINT \"FK_c28e52f758e7bbc53828db92194\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" DROP CONSTRAINT \"FK_58f5c71eaab331645112cf8cfa5\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_comment\" DROP CONSTRAINT \"FK_bed08e1b0ae3b0aa467794ceccd\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_comment\" DROP CONSTRAINT \"FK_e79a970abccb687faf54c3074cb\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user_comment\" DROP CONSTRAINT \"FK_19d0406f821caa3149825fe9693\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_to_product\" DROP CONSTRAINT \"FK_11efbd6561106f7ff069a987d8c\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"order_to_product\" DROP CONSTRAINT \"FK_3e918511a5f968387c92e33d62c\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"image_asset\" DROP CONSTRAINT \"FK_cb650c0c0829b793de422eef0cb\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"role\" ALTER COLUMN \"description\" DROP DEFAULT")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"role\" ALTER COLUMN \"description\" SET NOT NULL")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"address\" DROP COLUMN \"date_assigned_to_customer\"")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"address\" DROP COLUMN \"phone\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"address\" DROP COLUMN \"owner\"")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"order\"")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product\"")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"rating\"")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_31ef2b4d30675d0c15056b7f6e\"")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user\"")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user_comment\"")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"order_to_product\"")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_7a4ed6f81204770dfcd5b04473\"")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"image_asset\"")];
                    case 29:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return secondMigration1602872444067;
}());
exports.secondMigration1602872444067 = secondMigration1602872444067;
