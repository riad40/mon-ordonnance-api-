import mongoose from "mongoose"
import { Patient } from "../@types"

class PatientSchema extends mongoose.Schema {
    constructor() {
        super({
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
            cin: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: String,
                required: true,
            },
            dateOfBirth: {
                type: String,
                required: true,
            },
            createdAt: {
                type: String,
                default: Date.now(),
            },
        })
    }
}

export default mongoose.model<Patient>("Patient", new PatientSchema())
