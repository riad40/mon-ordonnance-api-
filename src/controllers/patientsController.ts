import Patient from "../models/Patient"
import { Request, Response } from "express"
import { PatientMethods, Patient as PatientType } from "../@types"

class PatientsController implements PatientMethods {
    /**
     * @route   GET /api/patients
     * @desc    Get all patients
     * @access  Public
     */

    async index(req: Request, res: Response): Promise<Response> {
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

    async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            const patient = await Patient.findById(id)
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

    async store(req: Request, res: Response): Promise<Response> {
        const { firstName, lastName, cin, phoneNumber, dateOfBirth } = req.body

        try {
            const patient: PatientType = await Patient.create({
                firstName,
                lastName,
                cin,
                phoneNumber,
                dateOfBirth,
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
     * @route   PUT /api/patients/:id
     * @desc    Update a patient
     * @access  Public
     * @body    { firstName, lastName, cin, phoneNumber, dateOfBirth }
     */

    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            const patient: PatientType | null = await Patient.findById(id)

            if (!patient) {
                return res.status(404).json({ message: "Patient not found" })
            }

            const updatedPatient: PatientType | null = await Patient.findByIdAndUpdate(id, req.body, { new: true })

            return res.status(200).json({
                message: "Patient updated successfully",
                patient: updatedPatient,
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   DELETE /api/patients/:id
     * @desc    Delete a patient
     * @access  Public
     */

    async destroy(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            const patient: PatientType | null = await Patient.findById(id)

            if (!patient) {
                return res.status(404).json({ message: "Patient not found" })
            }

            const deletedPatient: PatientType | null = await Patient.findByIdAndDelete(id)

            return res.status(200).json({
                message: "Patient deleted successfully",
                patient: deletedPatient,
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

export default new PatientsController()
