import mongoose from "mongoose"
import { Clinic } from "../@types/models/clinicTypes"

class ClinicSchema extends mongoose.Schema {
    constructor() {
        super({
            name: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            fax: {
                type: String,
                required: true,
            },
            owner: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        })
    }
}

export default mongoose.model<Clinic>("Clinic", new ClinicSchema())
