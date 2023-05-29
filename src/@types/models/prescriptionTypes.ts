import { Model } from "mongoose"
import { Request, Response } from "express"

/** ======================= PRESCRIPTION TYPES ======================= */

interface Prescription {
    id: number
    patient: string
    avatar: string
    status: PrescriptionStatus
    products: {
        name: string
        dosage: string
        duration: string
    }[]
}

type PrescriptionStatus = "Brouillon" | "Enregistrée"

interface PrescriptionDocument extends Prescription, Document {}

interface PrescriptionModel extends Model<Prescription> {}

/** ======================= PRESCRIPTION CONTROLLER ======================= */

interface PrescriptionController {
    createPrescription(req: Request, res: Response): Promise<Response>
    getPrescription(req: Request, res: Response): Promise<Response>
    getPrescriptions(req: Request, res: Response): Promise<Response>
    getPrescriptionsCount(req: Request, res: Response): Promise<Response>
    getPrescriptionsCountCurrentWeek(req: Request, res: Response): Promise<Response>
    getPrescriptionsCountCurrentMonth(req: Request, res: Response): Promise<Response>
}

export { Prescription, PrescriptionDocument, PrescriptionModel, PrescriptionController }
