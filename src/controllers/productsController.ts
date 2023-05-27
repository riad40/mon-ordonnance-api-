import Product from "../models/Product"
import { Request, Response } from "express"
import { Product as ProductType, ProductController } from "../@types/"

class ProductsController implements ProductController {
    /**
     * @route   GET api/products
     * @desc    Get all products
     * @access  Public
     */

    public async getProducts(req: Request, res: Response): Promise<Response> {
        try {
            const products: ProductType[] = await Product.find()
            return res.status(200).json(products)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   GET api/products/:id
     * @desc    Get a product
     * @access  Public
     */

    public async getProduct(req: Request, res: Response): Promise<Response> {
        try {
            const product: ProductType | null = await Product.findById(req.params.id)
            if (!product) {
                return res.status(404).json({ message: "Product not found" })
            }
            return res.status(200).json(product)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   POST api/products
     * @desc    Create a product
     * @access  Public
     */

    public async createProduct(req: Request, res: Response): Promise<Response> {
        const { name, dci, classTherapeutic, laboratory, dosage } = req.body

        const avatar = req.file && `/images/${req.file.filename}`

        try {
            const newProduct: ProductType = await Product.create({
                name,
                dci,
                classTherapeutic,
                laboratory,
                avatar,
                dosage,
            })
            return res.status(201).json({
                message: "Product created successfully",
                newProduct,
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   GET api/products/count
     * @desc    Get products count
     * @access  Public
     */

    public async getProductsCount(req: Request, res: Response): Promise<Response> {
        try {
            const productsCount: number = await Product.countDocuments()
            return res.status(200).json({ count: productsCount })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

export default new ProductsController()
