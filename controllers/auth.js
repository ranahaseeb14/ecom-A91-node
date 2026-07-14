const authModel = require('../models/Auth')

const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const { username, email, password } = req.body
    const existingUser = await authModel.findOne({ email })
    if (existingUser) {
        return res.status(400).json({
            msg: 'Email already exist please use another Email'
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await authModel.create({
        username: username,
        email: email,
        password: hashedPassword,
    })
    res.status(201).json({
        msg: 'User Registered Successfully',
        result
    })
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const existingUser = await authModel.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({
                msg: 'Email is not found, Please create account first'
            })
        }
        const matchedPassword = await bcrypt.compare(password, existingUser.password)
        if (!matchedPassword) {
            return res.status(400).json({
                msg: 'Invalid Email or Password'
            })
        }
        res.status(200).json({
            msg: 'User Logged In',
            user: existingUser
        })
    } catch (err) {
        console.error('LOGIN ERROR:', err)
        res.status(500).json({ msg: 'Server error', error: err.message })
    }
}

module.exports = { register, login }