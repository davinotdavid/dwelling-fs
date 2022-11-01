const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const creditCardRoutes = require('./features/credit-card/routes')

// Loading .env
dotenv.config()

// Setup Express
const app = express()
app.use(express.json())

// [DB] Set up mongoose connection
const mongoDB = process.env.MONGODB_CONNECTION_STRING
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Setup routes
app.use('/credit-cards', creditCardRoutes)

app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT}`))
