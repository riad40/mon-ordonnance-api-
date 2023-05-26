"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dosagesController_1 = __importDefault(require("../../controllers/dosagesController"));
const dosageRouter = (0, express_1.Router)();
const { getDosageByProduct, createDosage } = dosagesController_1.default;
dosageRouter.get("/:productId", getDosageByProduct);
dosageRouter.post("/", createDosage);
exports.default = dosageRouter;
