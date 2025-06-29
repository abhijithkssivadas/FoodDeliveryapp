import express, { Router } from 'express'
import { loginUser,registerUser } from '../controllers/userController.js'
import { getUserProfile } from '../controllers/userController.js'
import authMiddleware, { requireAuth } from '../middleware/auth.js';

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/profile', authMiddleware, getUserProfile);

export default userRouter;