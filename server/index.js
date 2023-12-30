import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
const app = express()
const PORT = 5000

import { uploadRouter } from './routes/upload.js'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())


app.use('/api/posts', uploadRouter)

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));

  app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
  })
