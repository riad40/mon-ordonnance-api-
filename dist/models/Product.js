"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class ProductSchema extends mongoose_1.Schema {
    constructor() {
        super({
            name: { type: String, required: true },
            dci: { type: String, required: true },
            classTherapeutic: { type: String, required: true },
            laboratory: { type: String, required: true },
            avatar: { type: String },
            dosage: {
                ageGroup: { type: String },
                instructions: { type: String },
            },
        }, {
            timestamps: true,
        });
    }
}
const Product = (0, mongoose_1.model)("Product", new ProductSchema());
exports.default = Product;
