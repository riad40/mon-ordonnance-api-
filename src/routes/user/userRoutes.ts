import { Router } from "express"
import UsersController from "../../controllers/usersController"

const userRouter: Router = Router()

const { getUser, updateUser } = UsersController

userRouter.get("/:id", getUser)

userRouter.put("/:id", updateUser)

export default userRouter
