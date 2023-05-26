import { Schema, model, Types } from "mongoose"
import { Patient, PatientDocument, PatientModel } from "../@types"

class PatientSchema extends Schema<PatientDocument> {
    constructor() {
        super(
            {
                firstName: { type: String, required: true },
                lastName: { type: String, required: true },
                cin: { type: String, required: true },
                phoneNumber: { type: String, required: true },
                dateOfBirth: { type: String, required: true },
                avatar: { type: String },
                prescriptions: [{ type: Types.ObjectId, ref: "Prescription" }],
            },
            {
                timestamps: true,
            },
        )
    }
}

const Patient: PatientModel = model<PatientDocument, PatientModel>("Patient", new PatientSchema())

export default Patient
