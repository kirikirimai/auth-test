import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_API_KEY as string)
        console.log("succecc mongoDB")
    } catch (err) {
        console.log("Failure:Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB