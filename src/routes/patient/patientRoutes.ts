import { Router } from "express"
import PatientsController from "../../controllers/patientsController"
import uploadImage from "../../middlewares/uploadImage"

const patientRouter: Router = Router()

const { createPatient, getPatient, getPatients } = PatientsController

patientRouter.get("/", getPatients)

patientRouter.get("/:id", getPatient)

patientRouter.post("/", uploadImage.single("avatar"), createPatient)

export default patientRouter
