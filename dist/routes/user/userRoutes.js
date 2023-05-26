"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../../controllers/usersController"));
const userRouter = (0, express_1.Router)();
const { getUser, updateUser } = usersController_1.default;
userRouter.get("/:id", getUser);
userRouter.put("/:id", updateUser);
exports.default = userRouter;
