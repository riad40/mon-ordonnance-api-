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
    getPatients(req, res) {
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
    getPatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const patient = yield Patient_1.default.findById(id);
                if (!patient)
                    return res.status(404).json({ message: "Patient not found" });
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
    createPatient(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, cin, phoneNumber, dateOfBirth } = req.body;
            const avatar = req.file && `/images/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`;
            try {
                const patient = yield Patient_1.default.create({
                    firstName,
                    lastName,
                    cin,
                    phoneNumber,
                    dateOfBirth,
                    avatar,
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
     * @route   GET /api/patients/count
     * @desc    Get patients count
     * @access  Public
     */
    getPatientsCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patientsCount = yield Patient_1.default.countDocuments();
                return res.status(200).json(patientsCount);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   GET /api/patients/count/week
     * @desc    Get patients count current week
     * @access  Public
     */
    getPatientsCountCurrentWeek(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patientsCount = yield Patient_1.default.countDocuments({
                    createdAt: { $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000) },
                });
                return res.status(200).json(patientsCount);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   GET /api/patients/count/month
     * @desc    Get patients count current month
     * @access  Public
     */
    getPatientsCountCurrentMonth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patientsCount = yield Patient_1.default.countDocuments({
                    createdAt: {
                        $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                    },
                });
                return res.status(200).json(patientsCount);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.default = new PatientsController();
