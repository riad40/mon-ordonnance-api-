import { Router } from "express"
import UsersController from "../../controllers/usersController"
import bodyValidator from "../../middlewares/bodyValidator"

const userRouter: Router = Router()

const { getUser, updateUser } = UsersController

userRouter.get("/:id", getUser)

userRouter.put("/:id", bodyValidator("updateUser"), updateUser)

export default userRouter
