import { Router } from "express"
import UsersController from "../../controllers/usersController"
import bodyValidator from "../../middlewares/bodyValidator"
import uploadImage from "../../middlewares/uploadImage"

const userRouter: Router = Router()

const { getUser, updateUser, updateAvatar } = UsersController

userRouter.get("/:id", getUser)

userRouter.put("/:id", bodyValidator("updateUser"), updateUser)

userRouter.patch("/:id/avatar", uploadImage.single("avatar"), updateAvatar)

export default userRouter
