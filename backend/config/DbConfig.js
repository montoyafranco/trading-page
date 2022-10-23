import mongoose from "mongoose"


const conf = () => {
    mongoose.connect(process.env.MONGO_URL), (err) => {
        if (err) console.log(err);
        else console.log("Connected Database");
    }
}


export default conf