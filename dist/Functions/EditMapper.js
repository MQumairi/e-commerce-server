"use strict";
//Takes two objects: original and request.
//Iterates over the properties of original.
//If a corresponding property in request exists, map it to original
//Else, leave original unchanged
//Return modified original
Object.defineProperty(exports, "__esModule", { value: true });
var EditMapper = function (original, request) {
    Object.keys(original).forEach(function (key) {
        if (request[key] != null) {
            original[key] = request[key];
        }
    });
    return original;
};
exports.default = EditMapper;
