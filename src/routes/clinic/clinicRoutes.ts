import { Router } from "express"
import ClinicsController from "../../controllers/clinicsController"

const clinicRouter: Router = Router()

const { showOne, update } = ClinicsController

clinicRouter.get("/:id", showOne)

clinicRouter.put("/:id", update)

export default clinicRouter
