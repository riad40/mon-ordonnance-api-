"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class PrescriptionSchema extends mongoose_1.Schema {
    constructor() {
        super({
            patient: {
                type: String,
                required: true,
            },
            id: {
                type: Number,
                default: 1,
                increment: true,
            },
            avatar: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                enum: ["Brouillon", "Enregistrée"],
                default: "Brouillon",
            },
            products: [
                {
                    name: {
                        type: String,
                        required: true,
                    },
                    dosage: {
                        type: String,
                        required: true,
                    },
                    duration: {
                        type: String,
                        required: true,
                    },
                },
            ],
        });
    }
}
const Prescription = (0, mongoose_1.model)("Prescription", new PrescriptionSchema());
exports.default = Prescription;
