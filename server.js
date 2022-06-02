const express = require('express')
const dotenv = require('dotenv').config()
const userRoute = require('./routes/userRoute')
const port = process.env.PORT || 5000
const connectDb = require('./config/db')
const app = express()

app.use(express.json())

connectDb()
app.use("/api/users/", userRoute)

app.listen(port, () => console.log(`Server running on ${port}`))
