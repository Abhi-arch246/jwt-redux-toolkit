const express = require("express")
const { registerUser, loginUser, dataUser, getAllUsers } = require("../controllers/userController")
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", protect, dataUser)
router.get("/allusers", getAllUsers)


module.exports = router