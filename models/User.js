//import mongoose
const mongoose = require('mongoose')

// Defining schema
const userDetailsSchema = new mongoose.Schema({
    emailID: {
        type: String
    },
    password: {
        type: String
    },
    userName: {
        type: String
    }
}, {versionKey: false})

//model
const User = mongoose.model('UserDetails', userDetailsSchema)

module.exports = { User }