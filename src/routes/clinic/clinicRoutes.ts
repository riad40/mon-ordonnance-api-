import { Router } from "express"
import ClinicsController from "../../controllers/clinicsController"

const clinicRouter: Router = Router()

const { getClinic, updateClinic } = ClinicsController

clinicRouter.get("/:id", getClinic)

clinicRouter.put("/:id", updateClinic)

export default clinicRouter
