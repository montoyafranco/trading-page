import Operation from "../models/OperationModel.js"



const operationController = {
    save: async (req, res) => {
        const { idOperation, amount, description } = req.body
        try {
            if (!idOperation || !amount || !description) res.json({ message: "Incomplete data", success: false })
            let transaction = {
                idOperation,
                amount,
                description,
                timestamp: new Date()
            }
            let response = await Operation.create(transaction)

            res.json({ success: true, payload: response })
        } catch (err) {
            console.log(err);
        }
    },
    getAll: async (req, res) => {
        try {
            let response = await Operation.find()
            res.json({ success: true, payload: response })
        } catch (err) {
            console.log(err);
        }
    }
}

export default operationController