import { body, validationResult } from "express-validator"
import { Request, Response, NextFunction, RequestHandler } from "express"

const bodyValidator = (resource: string): RequestHandler[] | any => {
    const validationRules = () => {
        switch (resource) {
            case "updateUser":
                return [
                    body("fullNname").isString().isLength({ min: 3 }),
                    body("email").isEmail(),
                    body("phone").isString().isLength({ min: 10, max: 11 }),
                    body("dateOfBirth").isString().isLength({ min: 10, max: 10 }),
                    body("speciality").isString().isLength({ min: 3 }),
                    body("inpe").isString().isLength({ min: 3 }),
                ]

            case "updateClinic":
                return [
                    body("name").isString().isLength({ min: 3 }),
                    body("email").isEmail(),
                    body("phone").isString().isLength({ min: 10, max: 11 }),
                    body("address").isString().isLength({ min: 3 }),
                    body("city").isString().isLength({ min: 3 }),
                    body("fax").isString().isLength({ min: 3 }),
                ]

            case "createPatient":
                return [
                    body("firstName").isString().isLength({ min: 3 }),
                    body("lastName").isString().isLength({ min: 3 }),
                    body("email").isEmail(),
                    body("phone").isString().isLength({ min: 10, max: 11 }),
                    body("dateOfBirth").isString().isLength({ min: 10, max: 10 }),
                    body("cin").isString().isLength({ min: 3 }),
                ]

            case "careteProduct":
                return [
                    body("name").isString().isLength({ min: 3 }),
                    body("type").isString().isLength({ min: 3 }),
                    body("dci").isString().isLength({ min: 3 }),
                    body("teraupeticClass").isString().isLength({ min: 3 }),
                    body("laboratory").isString().isLength({ min: 3 }),
                    body("avatar").isString().isLength({ min: 3 }),
                ]

            case "createPrescription":
                return [body("patient").isString().isLength({ min: 3 }), body("products").isArray()]

            default:
                return []
        }
    }

    const validate: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            return next()
        }
        return res.status(422).json({
            errors: "Invalid inputs passed, please check your data.",
        })
    }

    return [validationRules(), validate]
}

export default bodyValidator
