import Prescription from "../models/Prescription"
import { Request, Response } from "express"
import { Prescription as PrescriptionType, PrescriptionController } from "../@types"

class PrescriptionsController implements PrescriptionController {
    /**
     * @route   GET /api/prescriptions
     * @desc    Get all prescriptions
     * @access  Public
     */

    public async getPrescriptions(req: Request, res: Response): Promise<Response> {
        try {
            const prescriptions = await Prescription.find()
            return res.status(200).json(prescriptions)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   GET /api/prescriptions/:id
     * @desc    Get a prescription by id
     * @access  Public
     */

    public async getPrescription(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            const prescription = await Prescription.findById(id)

            if (!prescription) return res.status(404).json({ message: "Prescription not found" })

            return res.status(200).json(prescription)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   POST /api/prescriptions
     * @desc    Create a prescription
     * @access  Public
     */

    public async createPrescription(req: Request, res: Response): Promise<Response> {
        const { patient, products } = req.body

        try {
            const prescription: PrescriptionType = await Prescription.create({
                patient,
                products,
            })

            return res.status(201).json(prescription)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   GET /api/prescriptions/count
     * @desc    Get the number of prescriptions
     * @access  Public
     */

    public async getPrescriptionsCount(req: Request, res: Response): Promise<Response> {
        try {
            const count = await Prescription.countDocuments()
            return res.status(200).json(count)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   GET /api/prescriptions/count/week
     * @desc    Get the number of prescriptions of the current week
     * @access  Public
     */

    public async getPrescriptionsCountCurrentWeek(req: Request, res: Response): Promise<Response> {
        try {
            const count = await Prescription.countDocuments({
                createdAt: {
                    $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
                },
            })
            return res.status(200).json(count)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * @route   GET /api/prescriptions/count/month
     * @desc    Get the number of prescriptions of the current month
     * @access  Public
     */

    public async getPrescriptionsCountCurrentMonth(req: Request, res: Response): Promise<Response> {
        try {
            const count = await Prescription.countDocuments({
                createdAt: {
                    $gte: new Date(new Date().setDate(new Date().getDate() - 30)),
                },
            })
            return res.status(200).json(count)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

export default new PrescriptionsController()
