"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prescriptionsController_1 = __importDefault(require("../../controllers/prescriptionsController"));
const prescriptionRouter = (0, express_1.Router)();
const { getPrescription, getPrescriptions, createPrescription } = prescriptionsController_1.default;
prescriptionRouter.get("/", getPrescriptions);
prescriptionRouter.get("/:id", getPrescription);
prescriptionRouter.post("/", createPrescription);
exports.default = prescriptionRouter;
