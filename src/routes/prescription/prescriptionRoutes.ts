import { Router } from "express"
import PrescriptionsController from "../../controllers/prescriptionsController"

const prescriptionRouter: Router = Router()

const { getPrescription, getPrescriptions, createPrescription } = PrescriptionsController

prescriptionRouter.get("/", getPrescriptions)

prescriptionRouter.get("/:id", getPrescription)

prescriptionRouter.post("/", createPrescription)

export default prescriptionRouter
