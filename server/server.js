import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db'
import { clerkWebhooks } from './controllers/webhooks.js'

// Initialize Express 
const app = express()

// Connect to database 
await connectDB()

// Middlwares 
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=> res.send("API routes"))
app.post('/webhooks', clerkWebhooks)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('Server is running on Port',PORT);
    
})