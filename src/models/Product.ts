import { Schema, model, Types } from "mongoose"
import { Product, ProductDocument, ProductModel } from "../@types"

class ProductSchema extends Schema<ProductDocument> {
    constructor() {
        super(
            {
                name: { type: String, required: true },
                dci: { type: String, required: true },
                classTherapeutic: { type: String, required: true },
                laboratory: { type: String, required: true },
                avatar: { type: String },
                dosage: {
                    ageGroup: { type: String },
                    instructions: { type: String },
                },
            },
            {
                timestamps: true,
            },
        )
    }
}

const Product: ProductModel = model<ProductDocument, ProductModel>("Product", new ProductSchema())

export default Product
