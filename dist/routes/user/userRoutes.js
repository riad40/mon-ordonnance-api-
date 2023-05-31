"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../../controllers/usersController"));
const bodyValidator_1 = __importDefault(require("../../middlewares/bodyValidator"));
const uploadImage_1 = __importDefault(require("../../middlewares/uploadImage"));
const userRouter = (0, express_1.Router)();
const { getUser, updateUser, updateAvatar } = usersController_1.default;
userRouter.get("/:id", getUser);
userRouter.put("/:id", (0, bodyValidator_1.default)("updateUser"), updateUser);
userRouter.patch("/:id/avatar", uploadImage_1.default.single("avatar"), updateAvatar);
exports.default = userRouter;
