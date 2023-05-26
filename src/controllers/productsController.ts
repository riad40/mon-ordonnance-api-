import Product from "../models/Product"
import { Request, Response } from "express"
import { Product as ProductType, ProductMethods } from "../@types/"

class ProductsController implements ProductMethods {
    /**
     * @route   GET api/products
     * @desc    Get all products
     * @access  Public
     */

    public async index(req: Request, res: Response): Promise<Response> {
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

    public async show(req: Request, res: Response): Promise<Response> {
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

    public async store(req: Request, res: Response): Promise<Response> {
        const { name, dci, classTherapeutic, laboratory } = req.body

        const avtar = req.file && `/images/${req.file.filename}`

        try {
            const newProduct: ProductType = await Product.create({
                name,
                dci,
                classTherapeutic,
                laboratory,
                avtar,
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
     * @route   PUT api/products/:id
     * @desc    Update a product
     * @access  Public
     */

    public async update(req: Request, res: Response): Promise<Response> {
        const avatar = req.file && `/images/${req.file.filename}`

        const product: ProductType | null = await Product.findById(req.params.id)

        if (!product) return res.status(404).json({ message: "Product not found" })

        const updatedProduct: ProductType | null = await Product.findByIdAndUpdate(
            req.params.id,
            { ...req.body, avatar },
            { new: true },
        )

        return res.status(200).json({
            message: "Product updated successfully",
            updatedProduct,
        })
    }

    /**
     * @route   DELETE api/products/:id
     * @desc    Delete a product
     * @access  Public
     */

    public async destroy(req: Request, res: Response): Promise<Response> {
        try {
            const product: ProductType | null = await Product.findById(req.params.id)

            if (!product) return res.status(404).json({ message: "Product not found" })

            const deletedProduct: ProductType | null = await Product.findByIdAndDelete(req.params.id)

            return res.status(200).json({
                message: "Product deleted successfully",
                deletedProduct,
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

export default new ProductsController()
