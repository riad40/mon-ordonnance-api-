import { ObjectId } from "mongoose"

/** ============================ Clinic Type ============================ */
interface Clinic {
    name: string
    address: string
    city: string
    phone: string
    email: string
    fax: string
    owner: ObjectId | string
}

export type { Clinic }
