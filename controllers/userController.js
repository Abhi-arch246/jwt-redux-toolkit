const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs/dist/bcrypt')


// User register - /api/users
const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
        return res.status(400).send("Email already exists")
    } else {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const user = await User.create({
                name,
                email,
                password: hashedPassword
            })

            if (user) {
                res.status(201).json({
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user._id),
                })
            } else {
                res.status(400).json({ msg: 'Something went wrong' })
            }

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
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    } else {
        res.status(400).json({ message: "User not logged in" })

    }
}

const getAllUsers = (req, res) => {
    User.find({}, (err, docs) => {
        if (!err)
            return res.send(docs)
        else
            return res.status(400).json({ msg: 'Error' })
    })
}

// User data - /api/users/me
const dataUser = async (req, res) => {

    res.status(200).json(req.user)
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    dataUser
}