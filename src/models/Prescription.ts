import { model, Schema } from "mongoose"
import { Prescription, PrescriptionDocument, PrescriptionModel } from "../@types"

class PrescriptionSchema extends Schema<PrescriptionDocument> {
    constructor() {
        super(
            {
                patient: {
                    type: String,
                    required: true,
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
            },
            {
                timestamps: true,
            },
        )
    }
}

const Prescription: PrescriptionModel = model<PrescriptionDocument, PrescriptionModel>(
    "Prescription",
    new PrescriptionSchema(),
)

export default Prescription
