import { Router } from "express"
import usersController from "../../controllers/usersController"

const userRouter: Router = Router()

const { showOne, update } = usersController

userRouter.get("/:id", showOne)

userRouter.put("/:id", update)

export default userRouter
