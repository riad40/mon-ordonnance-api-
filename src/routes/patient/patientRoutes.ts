import { Router } from "express"
import PatientsController from "../../controllers/patientsController"

const patientRouter: Router = Router()

const { index, show, store, update, destroy } = PatientsController

patientRouter.get("/", index)

patientRouter.get("/:id", show)

patientRouter.post("/", store)

patientRouter.put("/:id", update)

patientRouter.delete("/:id", destroy)

export default patientRouter
