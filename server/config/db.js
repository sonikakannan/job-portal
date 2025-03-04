import mongoose from "mongoose";

// Fuction to connect to the MongoDB databse 
const connectDB = async () =>{
    mongoose.connection.on('connected',()=> console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
} 

export default connectDB