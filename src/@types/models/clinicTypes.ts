import { ObjectId } from "mongoose"
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

// clinic methods
interface ClinicMethods {
    showOne(req: Request, res: Response): Promise<Response>
    update(req: Request, res: Response): Promise<Response>
}

export type { Clinic, ClinicMethods }
