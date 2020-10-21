"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cloudinary_1 = __importDefault(require("cloudinary"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});
var uploadSample = function (image) {
    cloudinary_1.default.v2.uploader.upload(image, function (error, result) {
        console.log(result, error);
    });
};
// What is returned (result object):
// {
//     asset_id: '69c1e0055eaba366bd123f2d7d837b75',
//     public_id: 'ixwfnzu9ibxo5dptgncw',
//     version: 1603312148,
//     version_id: '13ee5dde119d138cf69fd99be2b22d74',
//     signature: 'f428f05c460031f343cdc0340657ef8c4e31e63b',
//     width: 346,
//     height: 230,
//     format: 'jpg',
//     resource_type: 'image',
//     created_at: '2020-10-21T20:29:08Z',
//     tags: [],
//     bytes: 36072,
//     type: 'upload',
//     etag: '54017c46c5286880c1b59d1e4bd66176',
//     placeholder: false,
//     url: 'http://res.cloudinary.com/dravdc8rp/image/upload/v1603312148/ixwfnzu9ibxo5dptgncw.jpg',
//     secure_url: 'https://res.cloudinary.com/dravdc8rp/image/upload/v1603312148/ixwfnzu9ibxo5dptgncw.jpg',
//     original_filename: 'flowers'
//   }
exports.default = uploadSample;
// export const Cloudinary = {
//     upload: async (image: string) => {
//         const res = await cloudinary.v2.uploader.upload();
//     }
//   };
