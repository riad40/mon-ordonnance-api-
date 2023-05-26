import { Router } from "express"
import ProductsController from "../../controllers/productsController"
import uploadImage from "../../middlewares/uploadImage"

const productRouter: Router = Router()

const { index, show, store, update, destroy } = ProductsController

productRouter.get("/", index)

productRouter.get("/:id", show)

productRouter.post("/", uploadImage.single("avatar"), store)

productRouter.put("/:id", update)

productRouter.delete("/:id", destroy)

export default productRouter
