"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class ClinicSchema extends mongoose_1.Schema {
    constructor() {
        super({
            name: { type: String, required: true },
            address: { type: String, required: true },
            city: { type: String, required: true },
            phone: { type: String, required: true },
            email: { type: String, required: true },
            fax: { type: String, required: true },
            owner: { type: mongoose_1.Types.ObjectId, ref: "User" },
        }, {
            timestamps: true,
        });
    }
}
const Clinic = (0, mongoose_1.model)("Clinic", new ClinicSchema());
exports.default = Clinic;
