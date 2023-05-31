"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const bodyValidator = (resource) => {
    const validationRules = () => {
        switch (resource) {
            case "updateUser":
                return [
                    (0, express_validator_1.body)("fullName").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("email").isEmail(),
                    (0, express_validator_1.body)("phone").isString().isLength({ min: 10 }),
                    (0, express_validator_1.body)("dateOfBirth").isString().isLength({ min: 10 }),
                    (0, express_validator_1.body)("speciality").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("inpe").isString().isLength({ min: 3 }),
                ];
            case "updateClinic":
                return [
                    (0, express_validator_1.body)("name").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("email").isEmail(),
                    (0, express_validator_1.body)("phone").isString().isLength({ min: 10, max: 11 }),
                    (0, express_validator_1.body)("address").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("city").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("fax").isString().isLength({ min: 3 }),
                ];
            case "createPatient":
                return [
                    (0, express_validator_1.body)("firstName").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("lastName").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("phoneNumber").isString().isLength({ min: 10 }),
                    (0, express_validator_1.body)("dateOfBirth").isString().isLength({ min: 10, max: 10 }),
                    (0, express_validator_1.body)("cin").isString().isLength({ min: 3 }),
                ];
            case "careteProduct":
                return [
                    (0, express_validator_1.body)("name").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("type").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("dci").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("teraupeticClass").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("laboratory").isString().isLength({ min: 3 }),
                    (0, express_validator_1.body)("avatar").isString().isLength({ min: 3 }),
                ];
            case "createPrescription":
                return [(0, express_validator_1.body)("patient").isString().isLength({ min: 3 }), (0, express_validator_1.body)("products").isArray()];
            default:
                return [];
        }
    };
    const validate = (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({
            errors: errors.array(),
            message: "Invalid body data",
        });
    };
    return [validationRules(), validate];
};
exports.default = bodyValidator;
