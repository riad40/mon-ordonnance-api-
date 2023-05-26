import { connect } from "mongoose"

const connectDB = async (): Promise<void> => {
    try {
        await connect(process.env.MONGO_DB_URI!, {})
        console.log(`⚡️[MongoDB]: Connected to database at ${process.env.MONGO_DB_URI}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB
