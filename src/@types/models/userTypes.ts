import { Request, Response } from "express"
import { Model } from "mongoose"

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

interface UserDocument extends User, Document {}

interface UserModel extends Model<UserDocument> {}

/** ============================ User Controller ============================ */

interface UserController {
    getUser(req: Request, res: Response): Promise<Response>
    updateUser(req: Request, res: Response): Promise<Response>
}

export { User, UserDocument, UserModel, UserController }
