"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../../controllers/productsController"));
const uploadImage_1 = __importDefault(require("../../middlewares/uploadImage"));
const productRouter = (0, express_1.Router)();
const { getProduct, getProducts, createProduct, getProductsCount } = productsController_1.default;
productRouter.get("/", getProducts);
productRouter.get("/count", getProductsCount);
productRouter.get("/:id", getProduct);
productRouter.post("/", uploadImage_1.default.single("avatar"), createProduct);
exports.default = productRouter;
