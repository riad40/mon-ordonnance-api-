"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class PatientSchema extends mongoose_1.Schema {
    constructor() {
        super({
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            cin: { type: String, required: true },
            phoneNumber: { type: String, required: true },
            dateOfBirth: { type: String, required: true },
            avatar: { type: String },
            prescriptions: [{ type: mongoose_1.Types.ObjectId, ref: "Prescription" }],
        }, {
            timestamps: true,
        });
    }
}
const Patient = (0, mongoose_1.model)("Patient", new PatientSchema());
exports.default = Patient;
