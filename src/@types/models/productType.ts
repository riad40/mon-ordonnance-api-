import { Request, Response } from "express"

/** ======================= Product Type ======================= */

interface Product {
    name: string
    dci: string
    classTherapeutic: string
    laboratory: string
    avtar: string
}

// product methods
interface ProductMethods {
    index: (req: Request, res: Response) => Promise<Response> // read all
    show: (req: Request, res: Response) => Promise<Response> // read one
    store: (req: Request, res: Response) => Promise<Response> // create
    update: (req: Request, res: Response) => Promise<Response> // update
    destroy: (req: Request, res: Response) => Promise<Response> // delete
}

export type { Product, ProductMethods }
