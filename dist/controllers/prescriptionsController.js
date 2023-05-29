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
const Prescription_1 = __importDefault(require("../models/Prescription"));
class PrescriptionsController {
    /**
     * @route   GET /api/prescriptions
     * @desc    Get all prescriptions
     * @access  Public
     */
    getPrescriptions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const prescriptions = yield Prescription_1.default.find();
                return res.status(200).json(prescriptions);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   GET /api/prescriptions/:id
     * @desc    Get a prescription by id
     * @access  Public
     */
    getPrescription(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const prescription = yield Prescription_1.default.findById(id);
                if (!prescription)
                    return res.status(404).json({ message: "Prescription not found" });
                return res.status(200).json(prescription);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   POST /api/prescriptions
     * @desc    Create a prescription
     * @access  Public
     */
    createPrescription(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { patient, products, status } = req.body;
            const avatar = req.file && `/images/${req.file.filename}`;
            try {
                const prescription = yield Prescription_1.default.create({
                    patient,
                    products,
                    status,
                });
                return res.status(201).json(prescription);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   GET /api/prescriptions/count
     * @desc    Get the number of prescriptions
     * @access  Public
     */
    getPrescriptionsCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield Prescription_1.default.countDocuments();
                return res.status(200).json(count);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   GET /api/prescriptions/count/week
     * @desc    Get the number of prescriptions of the current week
     * @access  Public
     */
    getPrescriptionsCountCurrentWeek(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield Prescription_1.default.countDocuments({
                    createdAt: {
                        $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
                    },
                });
                return res.status(200).json(count);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   GET /api/prescriptions/count/month
     * @desc    Get the number of prescriptions of the current month
     * @access  Public
     */
    getPrescriptionsCountCurrentMonth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield Prescription_1.default.countDocuments({
                    createdAt: {
                        $gte: new Date(new Date().setDate(new Date().getDate() - 30)),
                    },
                });
                return res.status(200).json(count);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.default = new PrescriptionsController();
