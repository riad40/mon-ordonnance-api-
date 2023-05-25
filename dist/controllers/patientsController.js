"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Patient_1 = __importDefault(require("../models/Patient"));
class PatientsController {
    /**
     * @route   GET /api/patients
     * @desc    Get all patients
     * @access  Public
     */
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patients = yield Patient_1.default.find();
                return res.status(200).json(patients);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   GET /api/patients/:id
     * @desc    Get a patient by id
     * @access  Public
     */
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const patient = yield Patient_1.default.findById(id);
                return res.status(200).json(patient);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   POST /api/patients
     * @desc    Create a patient
     * @access  Public
     * @body    { firstName, lastName, cin, phoneNumber, dateOfBirth }
     */
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, cin, phoneNumber, dateOfBirth } = req.body;
            try {
                const patient = yield Patient_1.default.create({
                    firstName,
                    lastName,
                    cin,
                    phoneNumber,
                    dateOfBirth,
                });
                return res.status(201).json({
                    message: "Patient created successfully",
                    patient,
                });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   PUT /api/patients/:id
     * @desc    Update a patient
     * @access  Public
     * @body    { firstName, lastName, cin, phoneNumber, dateOfBirth }
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const patient = yield Patient_1.default.findById(id);
                if (!patient) {
                    return res.status(404).json({ message: "Patient not found" });
                }
                const updatedPatient = yield Patient_1.default.findByIdAndUpdate(id, req.body, { new: true });
                return res.status(200).json({
                    message: "Patient updated successfully",
                    patient: updatedPatient,
                });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   DELETE /api/patients/:id
     * @desc    Delete a patient
     * @access  Public
     */
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const patient = yield Patient_1.default.findById(id);
                if (!patient) {
                    return res.status(404).json({ message: "Patient not found" });
                }
                const deletedPatient = yield Patient_1.default.findByIdAndDelete(id);
                return res.status(200).json({
                    message: "Patient deleted successfully",
                    patient: deletedPatient,
                });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.default = new PatientsController();
