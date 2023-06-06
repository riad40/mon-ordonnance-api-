import User from "../models/User"
import { Request, Response } from "express"
import { User as UserType, UserController } from "../@types/models/userTypes"

class UsersController implements UserController {
    /**
     * @route GET /users/:id
     * @description Show one user
     * @access Public
     */

    async getUser(req: Request, res: Response): Promise<Response> {
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

    async updateUser(req: Request, res: Response): Promise<Response> {
        const user: UserType | null = await User.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const updatedUser: UserType | null = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.status(200).json(updatedUser)
    }

    /**
     * @route PATCH /users/:id/avatar
     * @description Update user avatar
     * @access Public
     */

    async updateAvatar(req: Request, res: Response): Promise<Response> {
        const user: UserType | null = await User.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const avatarExt = req.file && req.file.mimetype.split("/")[1]

        const avatar = req.file && req.file.filename.split(" ")[0] + "." + avatarExt

        const updateAvatar: UserType | null = await User.findByIdAndUpdate(req.params.id, { avatar }, { new: true })

        return res.status(200).json(updateAvatar)
    }
}

export default new UsersController()
