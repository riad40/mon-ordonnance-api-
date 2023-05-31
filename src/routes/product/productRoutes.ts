import { Router } from "express"
import ProductsController from "../../controllers/productsController"
import uploadImage from "../../middlewares/uploadImage"
import bodyValidator from "../../middlewares/bodyValidator"

const productRouter: Router = Router()

const { getProduct, getProducts, createProduct, getProductsCount } = ProductsController

productRouter.get("/", getProducts)

productRouter.get("/count", getProductsCount)

productRouter.get("/:id", getProduct)

productRouter.post("/", uploadImage.single("avatar"), createProduct)

export default productRouter
