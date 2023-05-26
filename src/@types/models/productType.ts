import { Request, Response } from "express"
import { Model } from "mongoose"

/** ======================= Product Type ======================= */

interface Product {
    name: string
    dci: string
    classTherapeutic: string
    laboratory: string
    avatar: string
    dosage: {
        ageGroup: string
        instructions: string
    }[]
}

interface ProductDocument extends Product, Document {}

interface ProductModel extends Model<ProductDocument> {}

/** ======================= Product Controller ======================= */

interface ProductController {
    createProduct(req: Request, res: Response): Promise<Response>
    getProduct(req: Request, res: Response): Promise<Response>
    getProducts(req: Request, res: Response): Promise<Response>
}

export { Product, ProductDocument, ProductModel, ProductController }
