"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patientsController_1 = __importDefault(require("../../controllers/patientsController"));
const patientRouter = (0, express_1.Router)();
const { index, show, store, update, destroy } = patientsController_1.default;
patientRouter.get("/", index);
patientRouter.get("/:id", show);
patientRouter.post("/", store);
patientRouter.put("/:id", update);
patientRouter.delete("/:id", destroy);
exports.default = patientRouter;
