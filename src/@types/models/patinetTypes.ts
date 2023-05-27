import { Request, Response } from "express"
import { ObjectId, Model } from "mongoose"

/** ======================= PATIENT TYPES ======================= */

interface Patient {
    firstName: string
    lastName: string
    cin: string
    phoneNumber: string
    dateOfBirth: string
    avatar: string
    prescriptions: ObjectId[]
}

interface PatientDocument extends Patient, Document {}

interface PatientModel extends Model<PatientDocument> {}

/** ======================= PATIENT CONTROLLER ======================= */

interface PatientController {
    createPatient(req: Request, res: Response): Promise<Response>
    getPatient(req: Request, res: Response): Promise<Response>
    getPatients(req: Request, res: Response): Promise<Response>
    getPatientsCount(req: Request, res: Response): Promise<Response>
    getPatientsCountCurrentWeek(req: Request, res: Response): Promise<Response>
    getPatientsCountCurrentMonth(req: Request, res: Response): Promise<Response>
}

export { Patient, PatientDocument, PatientModel, PatientController }
