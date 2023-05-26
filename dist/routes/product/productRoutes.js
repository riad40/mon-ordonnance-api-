"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../../controllers/productsController"));
const uploadImage_1 = __importDefault(require("../../middlewares/uploadImage"));
const productRouter = (0, express_1.Router)();
const { index, show, store, update, destroy } = productsController_1.default;
productRouter.get("/", index);
productRouter.get("/:id", show);
productRouter.post("/", uploadImage_1.default.single("avatar"), store);
productRouter.put("/:id", update);
productRouter.delete("/:id", destroy);
exports.default = productRouter;
