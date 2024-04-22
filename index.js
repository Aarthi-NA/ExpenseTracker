const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const expenseRoutes = require('./routes/expenseRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/expense',expenseRoutes)
app.use('/user',userRoutes)
async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://Aarthi:aarthi.I@mycluster.gpyxqqw.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')
        console.log("DB connection established ;)")

        const port = process.env.PORT || 8000
        app.listen(port, function() {
            console.log(`Listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
        console.log('Couldn\'t establish DB connection :(')
    }
}
connectToDb()
  