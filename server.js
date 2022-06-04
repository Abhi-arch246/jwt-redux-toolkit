const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const userRoute = require('./routes/userRoute')
const port = process.env.PORT || 5000
const connectDb = require('./config/db')
const app = express()

app.use(express.json())

connectDb()
app.use("/api/users/", userRoute)

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })
}

app.listen(port, () => console.log(`Server running on ${port}`))
