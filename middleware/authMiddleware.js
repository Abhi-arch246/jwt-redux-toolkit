const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const protect = async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decode.id).select('-password')
            next()
        } catch (error) {
            console.log(error);
            res.json({ msg: "Something went wrong" })
        }
    }

    if (!token) {
        res.json({ msg: "Not authorised" })

    }
}

module.exports = { protect }