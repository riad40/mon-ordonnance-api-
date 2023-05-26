import mongoose from "mongoose"
import { Product } from "../@types/"

class ProductSchema extends mongoose.Schema {
    constructor() {
        super(
            {
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
            },
            { timestamps: true },
        )
    }
}

export default mongoose.model<Product>("Product", new ProductSchema())
