import { Request, Response } from "express"

/** ======================= PATIENT TYPES ======================= */

interface Patient {
    firstName: string
    lastName: string
    cin: string
    phoneNumber: string
    dateOfBirth: string
    avatar: string
}

// patient methods
interface PatientMethods {
    index: (req: Request, res: Response) => Promise<Response> // read all
    show: (req: Request, res: Response) => Promise<Response> // read one
    store: (req: Request, res: Response) => Promise<Response> // create
    update: (req: Request, res: Response) => Promise<Response> // update
    destroy: (req: Request, res: Response) => Promise<Response> // delete
}

export type { Patient, PatientMethods }
