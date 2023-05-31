import { Router } from "express"
import PatientsController from "../../controllers/patientsController"
import uploadImage from "../../middlewares/uploadImage"
import bodyValidator from "../../middlewares/bodyValidator"

const patientRouter: Router = Router()

const {
    createPatient,
    getPatient,
    getPatients,
    getPatientsCount,
    getPatientsCountCurrentMonth,
    getPatientsCountCurrentWeek,
} = PatientsController

patientRouter.get("/", getPatients)

patientRouter.get("/count", getPatientsCount)

patientRouter.get("/count/week", getPatientsCountCurrentWeek)

patientRouter.get("/count/month", getPatientsCountCurrentMonth)

patientRouter.get("/:id", getPatient)

patientRouter.post("/", uploadImage.single("avatar"), bodyValidator("createPatient"), createPatient)

export default patientRouter
