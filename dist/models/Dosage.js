"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class DosageSchema extends mongoose_1.Schema {
    constructor() {
        super({
            product: { type: mongoose_1.Schema.Types.ObjectId, ref: "Product" },
            dosageInstruction: [
                {
                    ageGroup: { type: String, required: true },
                    instructions: { type: String, required: true },
                },
            ],
        }, {
            timestamps: true,
        });
    }
}
const Dosage = (0, mongoose_1.model)("Dosage", new DosageSchema());
exports.default = Dosage;
