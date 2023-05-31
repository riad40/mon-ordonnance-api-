"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patientsController_1 = __importDefault(require("../../controllers/patientsController"));
const uploadImage_1 = __importDefault(require("../../middlewares/uploadImage"));
const bodyValidator_1 = __importDefault(require("../../middlewares/bodyValidator"));
const patientRouter = (0, express_1.Router)();
const { createPatient, getPatient, getPatients, getPatientsCount, getPatientsCountCurrentMonth, getPatientsCountCurrentWeek, } = patientsController_1.default;
patientRouter.get("/", getPatients);
patientRouter.get("/count", getPatientsCount);
patientRouter.get("/count/week", getPatientsCountCurrentWeek);
patientRouter.get("/count/month", getPatientsCountCurrentMonth);
patientRouter.get("/:id", getPatient);
patientRouter.post("/", uploadImage_1.default.single("avatar"), (0, bodyValidator_1.default)("createPatient"), createPatient);
exports.default = patientRouter;
