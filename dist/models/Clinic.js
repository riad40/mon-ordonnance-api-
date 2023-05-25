"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class ClinicSchema extends mongoose_1.default.Schema {
    constructor() {
        super({
            name: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            fax: {
                type: String,
                required: true,
            },
            owner: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "User",
            },
        });
    }
}
exports.default = mongoose_1.default.model("Clinic", new ClinicSchema());
