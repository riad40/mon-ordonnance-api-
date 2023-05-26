"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storeImage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "dist/public/images");
    },
    filename: (req, file, cb) => {
        const { firstName, lastName } = req.body;
        cb(null, `${firstName}-${lastName}-avatar${path_1.default.extname(file.originalname)}`);
    },
});
const uploadImage = (0, multer_1.default)({
    storage: storeImage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extName = fileTypes.test(path_1.default.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);
        if (extName && mimeType)
            return cb(null, true);
        cb(new Error(JSON.stringify("file uploded is invalid")));
    },
});
exports.default = uploadImage;
