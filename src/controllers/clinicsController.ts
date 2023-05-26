import Clinic from "../models/Clinic"
import { Request, Response } from "express"
import { Clinic as ClinicType, ClinicController } from "../@types"

class ClinicsController implements ClinicController {
    /**
     * @route GET /users/:id
     * @description Show one user
     * @access Public
     */

    async getClinic(req: Request, res: Response): Promise<Response> {
        const user: ClinicType | null = await Clinic.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "Clinic not found" })
        }

        return res.status(200).json(user)
    }

    /**
     * @route PUT /users/:id
     * @description Update one user
     * @access Public
     */

    async updateClinic(req: Request, res: Response): Promise<Response> {
        const user: ClinicType | null = await Clinic.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "Clinic not found" })
        }

        const updatedUser: ClinicType | null = await Clinic.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.status(200).json(updatedUser)
    }
}

export default new ClinicsController()
