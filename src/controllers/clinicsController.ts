import Clinic from "../models/Clinic"
import { Request, Response } from "express"
import { Clinic as ClinicType, ClinicMethods as IClinicMethods } from "../@types/models/clinicTypes"

class ClinicMethods implements IClinicMethods {
    /**
     * @route GET /users/:id
     * @description Show one user
     * @access Public
     */

    async showOne(req: Request, res: Response): Promise<Response> {
        const user: ClinicType | null = await Clinic.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        return res.status(200).json(user)
    }

    /**
     * @route PUT /users/:id
     * @description Update one user
     * @access Public
     */

    async update(req: Request, res: Response): Promise<Response> {
        const user: ClinicType | null = await Clinic.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const updatedUser: ClinicType | null = await Clinic.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.status(200).json(updatedUser)
    }
}

export default new ClinicMethods()
