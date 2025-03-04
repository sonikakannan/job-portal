import mongoose from "mongoose";

// Fuction to connect to the MongoDB databse 
const connectDB = async () =>{
    try {
    mongoose.connection.on('connected',()=> console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
    }catch (error) {
        console.error('Database connection error:', error.message);
    }
} 

export default connectDB