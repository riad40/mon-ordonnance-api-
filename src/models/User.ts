import mongoose from "mongoose"
import { User } from "../@types/models/userTypes"

class UserSchema extends mongoose.Schema {
    constructor() {
        super(
            {
                fullName: {
                    type: String,
                    required: true,
                },
                email: {
                    type: String,
                    required: true,
                },
                password: {
                    type: String,
                    required: true,
                },
                avatar: {
                    type: String,
                },
                speciality: {
                    type: String,
                    required: true,
                },
                dateOfBirth: {
                    type: String,
                    required: true,
                },
                inpe: {
                    type: String,
                    required: true,
                },
                phone: {
                    type: String,
                    required: true,
                },
            },
            {
                timestamps: true,
            },
        )
    }
}

export default mongoose.model<User>("User", new UserSchema())
