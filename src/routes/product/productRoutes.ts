import { Router } from "express"
import ProductsController from "../../controllers/productsController"
import uploadImage from "../../middlewares/uploadImage"

const productRouter: Router = Router()

const { getProduct, getProducts, createProduct } = ProductsController

productRouter.get("/", getProducts)

productRouter.get("/:id", getProduct)

productRouter.post("/", uploadImage.single("avatar"), createProduct)

export default productRouter
