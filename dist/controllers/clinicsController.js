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
const Clinic_1 = __importDefault(require("../models/Clinic"));
class ClinicsController {
    /**
     * @route GET /users/:id
     * @description Show one user
     * @access Public
     */
    getClinic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Clinic_1.default.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "Clinic not found" });
            }
            return res.status(200).json(user);
        });
    }
    /**
     * @route PUT /users/:id
     * @description Update one user
     * @access Public
     */
    updateClinic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Clinic_1.default.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "Clinic not found" });
            }
            const updatedUser = yield Clinic_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json(updatedUser);
        });
    }
}
exports.default = new ClinicsController();
