import mongoose from "mongoose";
import { UserDataType } from "./types";


const Schema = mongoose.Schema;

const UserSchema = new Schema<UserDataType>({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)