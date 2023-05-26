import { model, Schema, Types } from "mongoose"
import { Clinic, ClinicDocument, ClinicModel } from "../@types"

class ClinicSchema extends Schema<ClinicDocument> {
    constructor() {
        super(
            {
                name: { type: String, required: true },
                address: { type: String, required: true },
                city: { type: String, required: true },
                phone: { type: String, required: true },
                email: { type: String, required: true },
                fax: { type: String, required: true },
                owner: { type: Types.ObjectId, ref: "User" },
            },
            {
                timestamps: true,
            },
        )
    }
}

const Clinic: ClinicModel = model<ClinicDocument, ClinicModel>("Clinic", new ClinicSchema())

export default Clinic
