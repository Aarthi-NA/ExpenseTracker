const express = require('express')

const { createUser, validateUser } = require('../controllers/userControllers')
//for routing instead of app.post or app.get
const router = express.Router()

router.post('/new', createUser)
    
router.post('/login', validateUser)

module.exports = router
    