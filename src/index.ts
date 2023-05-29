import express, { Express } from "express"
import dotenv from "dotenv"
import cors from "cors"
// configs
import connectDB from "./configs/db"
import initDb from "./configs/initDb"
// routes
import { userRouter, clinicRouter, patientRouter, productRouter, prescriptionRouter } from "./routes"
import path from "path"

dotenv.config()

connectDB()

initDb()

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public")))

app.use(cors({ origin: true, credentials: true }))

// routes
app.use("/api/users", userRouter)
app.use("/api/clinics", clinicRouter)
app.use("/api/patients", patientRouter)
app.use("/api/products", productRouter)
app.use("/api/prescriptions", prescriptionRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
