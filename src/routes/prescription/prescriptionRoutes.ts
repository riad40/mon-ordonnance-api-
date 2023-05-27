import { Router } from "express"
import PrescriptionsController from "../../controllers/prescriptionsController"

const prescriptionRouter: Router = Router()

const {
    getPrescription,
    getPrescriptions,
    createPrescription,
    getPrescriptionsCount,
    getPrescriptionsCountCurrentMonth,
    getPrescriptionsCountCurrentWeek,
} = PrescriptionsController

prescriptionRouter.get("/", getPrescriptions)

prescriptionRouter.get("/count", getPrescriptionsCount)

prescriptionRouter.get("/count/week", getPrescriptionsCountCurrentWeek)

prescriptionRouter.get("/count/month", getPrescriptionsCountCurrentMonth)

prescriptionRouter.get("/:id", getPrescription)

prescriptionRouter.post("/", createPrescription)

export default prescriptionRouter
