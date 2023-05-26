"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clinicsController_1 = __importDefault(require("../../controllers/clinicsController"));
const clinicRouter = (0, express_1.Router)();
const { getClinic, updateClinic } = clinicsController_1.default;
clinicRouter.get("/:id", getClinic);
clinicRouter.put("/:id", updateClinic);
exports.default = clinicRouter;
