import express, { Express } from "express"
import dotenv from "dotenv"
// configs
import connectDB from "./configs/db"
import initDb from "./configs/initDb"
// routes
import { userRouter, clinicRouter, patientRouter, productRouter } from "./routes"
import path from "path"

dotenv.config()

connectDB()

initDb()

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public")))

// routes
app.use("/api/users", userRouter)
app.use("/api/clinics", clinicRouter)
app.use("/api/patients", patientRouter)
app.use("/api/products", productRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
