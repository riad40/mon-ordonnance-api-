import { ObjectId, Model } from "mongoose"
import { Request, Response } from "express"

/** ============================ Clinic Type ============================ */
interface Clinic {
    name: string
    address: string
    city: string
    phone: string
    email: string
    fax: string
    owner: ObjectId | string
}

interface ClinicDocument extends Clinic, Document {}

interface ClinicModel extends Model<ClinicDocument> {}

/** ============================ Clinic Controller ============================ */
interface ClinicController {
    getClinic(req: Request, res: Response): Promise<Response>
    updateClinic(req: Request, res: Response): Promise<Response>
}

export { Clinic, ClinicDocument, ClinicModel, ClinicController }
