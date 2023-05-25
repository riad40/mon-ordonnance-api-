"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class PatientSchema extends mongoose_1.default.Schema {
    constructor() {
        super({
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
            cin: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: String,
                required: true,
            },
            dateOfBirth: {
                type: String,
                required: true,
            },
            createdAt: {
                type: String,
                default: Date.now(),
            },
        });
    }
}
exports.default = mongoose_1.default.model("Patient", new PatientSchema());
