import { Router } from "express"
import ClinicsController from "../../controllers/clinicsController"
import bodyValidator from "../../middlewares/bodyValidator"

const clinicRouter: Router = Router()

const { getClinic, updateClinic } = ClinicsController

clinicRouter.get("/:id", bodyValidator("updateClinic"), getClinic)

clinicRouter.put("/:id", updateClinic)

export default clinicRouter
