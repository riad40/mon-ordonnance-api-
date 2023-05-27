import Patient from "../models/Patient"
import { Request, Response } from "express"
import { Patient as PatientType, PatientController } from "../@types"

class PatientsController implements PatientController {
    /**
     * @route   GET /api/patients
     * @desc    Get all patients
     * @access  Public
     */

    async getPatients(req: Request, res: Response): Promise<Response> {
        try {
            const patients = await Patient.find()
            return res.status(200).json(patients)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   GET /api/patients/:id
     * @desc    Get a patient by id
     * @access  Public
     */

    async getPatient(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            const patient = await Patient.findById(id)

            if (!patient) return res.status(404).json({ message: "Patient not found" })

            return res.status(200).json(patient)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   POST /api/patients
     * @desc    Create a patient
     * @access  Public
     * @body    { firstName, lastName, cin, phoneNumber, dateOfBirth }
     */

    async createPatient(req: Request, res: Response): Promise<Response> {
        const { firstName, lastName, cin, phoneNumber, dateOfBirth } = req.body

        const avatar = req.file && `/images/${req.file?.filename}`

        try {
            const patient: PatientType = await Patient.create({
                firstName,
                lastName,
                cin,
                phoneNumber,
                dateOfBirth,
                avatar,
            })
            return res.status(201).json({
                message: "Patient created successfully",
                patient,
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   GET /api/patients/count
     * @desc    Get patients count
     * @access  Public
     */

    public async getPatientsCount(req: Request, res: Response): Promise<Response> {
        try {
            const patientsCount = await Patient.countDocuments()
            return res.status(200).json(patientsCount)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   GET /api/patients/count/week
     * @desc    Get patients count current week
     * @access  Public
     */

    public async getPatientsCountCurrentWeek(req: Request, res: Response): Promise<Response> {
        try {
            const patientsCount = await Patient.countDocuments({
                createdAt: { $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000) },
            })
            return res.status(200).json(patientsCount)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   GET /api/patients/count/month
     * @desc    Get patients count current month
     * @access  Public
     */

    public async getPatientsCountCurrentMonth(req: Request, res: Response): Promise<Response> {
        try {
            const patientsCount = await Patient.countDocuments({
                createdAt: {
                    $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                },
            })
            return res.status(200).json(patientsCount)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

export default new PatientsController()
