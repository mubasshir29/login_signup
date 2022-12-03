import express from "express";
import authRoutes from './routes/authRoute.js'
import db_Connection from './database/db.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
db_Connection(USERNAME, PASSWORD);

app.use("/auth", authRoutes)
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(5000, ()=>{
    console.log(`Server is running on port 5000`)
})

