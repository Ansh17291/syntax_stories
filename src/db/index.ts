import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({
    path: "../env"
})

const connectDB = async ()=>{
    try{
        console.log(process.env.MONGODB_URL)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/My_Blog}`);
        console.log(`\n MongoDb connected successfully !! DB HOST: ${connectionInstance.connection.host}`)
    }catch(error){
        console.error("MongoDb Error : ", error);
        process.exit(1);
    }
}

export default connectDB