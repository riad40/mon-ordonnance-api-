"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const today_1 = __importDefault(require("../helpers/today"));
const storeImage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "dist/public/images");
    },
    filename: (req, file, cb) => {
        cb(null, (0, today_1.default)() + path_1.default.extname(file.originalname));
    },
});
const uploadImage = (0, multer_1.default)({
    storage: storeImage,
});
exports.default = uploadImage;
