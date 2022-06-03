const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs/dist/bcrypt')


// User register - /api/users
const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
        return res.status(400).json({ msg: "Exists" })
    } else {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const user = await User.create({
                name,
                email,
                password: hashedPassword
            })

            res.status(201).json(user)

        }
        catch (error) {
            console.log(error);
            res.status(400).json({ msg: 'User not registered' })
        }
    }
}

// Login user - /api/users
const loginUser = async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    } else {
        res.json({ message: "User not logged in" })

    }
}

// User data - /api/users/me
const dataUser = async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json({
        _id,
        name,
        email
    })
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = {
    registerUser,
    loginUser,
    dataUser
}