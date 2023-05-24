import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import connectDB from "./configs/db"

dotenv.config()

connectDB()

const app: Express = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
