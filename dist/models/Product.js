"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class ProductSchema extends mongoose_1.default.Schema {
    constructor() {
        super({
            name: {
                type: String,
                required: true,
            },
            dci: {
                type: String,
                required: true,
            },
            classTherapeutic: {
                type: String,
                required: true,
            },
            laboratory: {
                type: String,
                required: true,
            },
            avtar: {
                type: String,
            },
        }, { timestamps: true });
    }
}
exports.default = mongoose_1.default.model("Product", new ProductSchema());
