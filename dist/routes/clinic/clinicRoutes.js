"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clinicsController_1 = __importDefault(require("../../controllers/clinicsController"));
const bodyValidator_1 = __importDefault(require("../../middlewares/bodyValidator"));
const clinicRouter = (0, express_1.Router)();
const { getClinic, updateClinic } = clinicsController_1.default;
clinicRouter.get("/:id", getClinic);
clinicRouter.put("/:id", (0, bodyValidator_1.default)("updateClinic"), updateClinic);
exports.default = clinicRouter;
