import { Request, Response } from "express"

/** ============================ User Type ============================ */
interface User {
    fullName: string
    email: string
    password: string
    avatar: string
    speciality: string
    dateOfBirth: string
    inpe: string
    phone: string
}

// user methods
interface UserMethods {
    showOne(req: Request, res: Response): Promise<Response>
    update(req: Request, res: Response): Promise<Response>
}

export type { User, UserMethods }
