import mongoose from "mongoose"

const collection = "users"
const userSchema = mongoose.Schema({
    email: { type: String, require: true },
    names: { type: String },
    rol: { type: String },
})


const UserModel = mongoose.model(collection, userSchema)


export default UserModel

