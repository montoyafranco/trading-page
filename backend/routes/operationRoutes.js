import Route from "express"
import OperationController from "../controllers/OperationController.js"

const route = Route()

const { save } = OperationController


route.route("/")
    .get(save)



export default route