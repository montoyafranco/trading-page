import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import dbConfig from "../config/DbConfig.js"
import operationRoutes from "../routes/operationRoutes.js"

dotenv.config()
dbConfig()

const PORT = process.env.PORT || 4000
const app = express()


const server = app.listen(PORT, () => { console.log("Server listen to PORT: " + PORT); })

app.use(cors())
app.use(express.json())
app.use("/api/operation", operationRoutes)


