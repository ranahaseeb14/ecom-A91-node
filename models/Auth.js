const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please fill Username'],
        minLength: [3, 'Username Should be atleast of 3 character'],
        maxLength: [16, 'Username cannot exceed 16 characters']
    },
    email: {
        type: String,
        required: [true, 'Please fill Email'],
        maxLength: [50, 'Email cannot exceed 50 characters']
    },
    password: {
        type: String,
        required: [true, 'Please fill Password'],
        minLength: [8, 'Password Should be atleast of 8 character'],
    },
})

const authModel = mongoose.model('auth', authSchema)
module.exports = authModel