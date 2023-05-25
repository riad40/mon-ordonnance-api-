import express, { Express } from "express"
import dotenv from "dotenv"
import connectDB from "./configs/db"
import initDb from "./configs/initDb"

dotenv.config()

connectDB()

initDb()

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
