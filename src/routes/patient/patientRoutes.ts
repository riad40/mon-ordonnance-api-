import { Router } from "express"
import PatientsController from "../../controllers/patientsController"
import uploadImage from "../../middlewares/uploadImage"

const patientRouter: Router = Router()

const { index, show, store, update, destroy } = PatientsController

patientRouter.get("/", index)

patientRouter.get("/:id", show)

patientRouter.post("/", uploadImage.single("avatar"), store)

patientRouter.put("/:id", update)

patientRouter.delete("/:id", destroy)

export default patientRouter
