"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prescriptionsController_1 = __importDefault(require("../../controllers/prescriptionsController"));
const uploadImage_1 = __importDefault(require("../../middlewares/uploadImage"));
const prescriptionRouter = (0, express_1.Router)();
const { getPrescription, getPrescriptions, createPrescription, getPrescriptionsCount, getPrescriptionsCountCurrentMonth, getPrescriptionsCountCurrentWeek, } = prescriptionsController_1.default;
prescriptionRouter.get("/", getPrescriptions);
prescriptionRouter.get("/count", getPrescriptionsCount);
prescriptionRouter.get("/count/week", getPrescriptionsCountCurrentWeek);
prescriptionRouter.get("/count/month", getPrescriptionsCountCurrentMonth);
prescriptionRouter.get("/:id", getPrescription);
prescriptionRouter.post("/", uploadImage_1.default.single("avatar"), createPrescription);
exports.default = prescriptionRouter;
