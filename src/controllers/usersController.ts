import User from "../models/User"
import { Request, Response } from "express"
import { User as UserType, UserMethods } from "../@types/models/userTypes"

class UsersController implements UserMethods {
    /**
     * @route GET /users/:id
     * @description Show one user
     * @access Public
     */

    async showOne(req: Request, res: Response): Promise<Response> {
        const user: UserType | null = await User.findById(req.params.id)

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
        const user: UserType | null = await User.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const updatedUser: UserType | null = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.status(200).json(updatedUser)
    }
}

export default new UsersController()
