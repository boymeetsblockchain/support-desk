const  express = require('express')
const { loginUser, registerUser,getUser } = require('../controllers/userController')
const {protect }= require('../middlewares/authMiddleware')
 const router = express.Router()

 router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/me',protect, getUser)


 module.exports= router