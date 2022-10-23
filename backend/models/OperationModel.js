import mongoose from "mongoose"

const collection = "operations"

const operationsSchema = mongoose.Schema({
    idOperation: { type: String },
    timestamp: { type: Date },
    amount: { type: Number },
    description: { type: String }
})


const Operation = mongoose.model(collection, operationsSchema)



export default Operation