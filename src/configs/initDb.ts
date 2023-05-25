import User from "../models/User"
import Clinic from "../models/Clinic"
import { User as UserType, Clinic as ClinicType } from "../@types"

const initDb = async () => {
    const user: UserType = {
        fullName: process.env.DOCTOR_FULL_NAME!,
        email: process.env.DOCTOR_EMAIL!,
        password: process.env.DOCTOR_PASSWORD!,
        speciality: process.env.DOCTOR_SPECIALITY!,
        dateOfBirth: process.env.DOCTOR_DATE_OF_BIRTH!,
        inpe: process.env.DOCTOR_INPE!,
        phone: process.env.DOCTOR_PHONE_NUMBER!,
        avatar: "",
    }

    const clinic: ClinicType = {
        name: process.env.CLINIC_NAME!,
        address: process.env.CLINIC_ADDRESS!,
        city: process.env.CLINIC_CITY!,
        phone: process.env.CLINIC_PHONE_NUMBER!,
        email: process.env.CLINIC_EMAIL!,
        fax: process.env.CLINIC_FAX_NUMBER!,
        owner: "",
    }

    try {
        // Create a new user
        const usersCount: number = await User.countDocuments()
        const clinicsCount: number = await Clinic.countDocuments()

        if (usersCount > 0 && clinicsCount > 0) return

        const newUser = new User(user)
        await newUser.save()

        // Create a new clinic
        const newClinic = new Clinic(clinic)
        newClinic.owner = newUser._id as unknown as string
        await newClinic.save()
    } catch (error) {
        console.error(error)
    }
}

export default initDb
