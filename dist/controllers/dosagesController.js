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
const Dosage_1 = __importDefault(require("../models/Dosage"));
class DosagesController {
    /**
     * @route GET /api/dosages/:productId
     * @desc Get dosage by product id
     * @access Public
     */
    getDosageByProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { productId } = req.params;
                const dosage = yield Dosage_1.default.findOne({ product: productId });
                return res.status(200).json({ dosage });
            }
            catch (error) {
                return res.status(500).json({ error });
            }
        });
    }
    /**
     * @route POST /api/dosages
     * @desc Create dosage
     * @access Public
     */
    createDosage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { product, dosageInstruction } = req.body;
                const dosage = new Dosage_1.default({
                    product,
                    dosageInstruction,
                });
                yield dosage.save();
                return res.status(201).json({ dosage });
            }
            catch (error) {
                return res.status(500).json({ error });
            }
        });
    }
}
exports.default = new DosagesController();
