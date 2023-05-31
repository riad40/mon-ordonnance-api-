import { Router } from "express"
import PrescriptionsController from "../../controllers/prescriptionsController"
import uploadImage from "../../middlewares/uploadImage"
import bodyValidator from "../../middlewares/bodyValidator"

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

prescriptionRouter.post("/", uploadImage.single("avatar"), bodyValidator("createPrescription"), createPrescription)

export default prescriptionRouter
