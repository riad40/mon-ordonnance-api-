import { model, Schema } from "mongoose"
import { Prescription, PrescriptionDocument, PrescriptionModel } from "../@types"

class PrescriptionSchema extends Schema<PrescriptionDocument> {
    constructor() {
        super({
            patient: {
                type: String,
                required: true,
            },
            id: {
                type: Number,
                default: 1,
                increment: true,
            },
            avatar: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                enum: ["Brouillon", "Enregistrée"],
                default: "Brouillon",
            },
            products: [
                {
                    name: {
                        type: String,
                        required: true,
                    },
                    dosage: {
                        type: String,
                        required: true,
                    },
                    duration: {
                        type: String,
                        required: true,
                    },
                },
            ],
        })
    }
}

const Prescription: PrescriptionModel = model<PrescriptionDocument, PrescriptionModel>(
    "Prescription",
    new PrescriptionSchema(),
)

export default Prescription
