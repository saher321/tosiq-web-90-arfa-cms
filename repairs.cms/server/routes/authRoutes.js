import express from 'express';
import { login, register, verifyUser } from '../controllers/authController.js';
import Auth from '../models/authModel.js';

const authRoute = express.Router();

authRoute.post('/auth/user/register', register)
authRoute.post('/auth/user/login', login)
authRoute.post('/auth/user/verify-user', verifyUser)

// users
// authRoute.get("/users", async (req, res) => {
//     const users = await Auth.find({});
//     return res.send({status: true, users})
// })
// ---------
// authRoute.post('/user/send-otp', sendOTP);
// authRoute.post('/user/verify-otp', verifyOTP);
// authRoute.post('/user/reset-password', resetPassword);

export default authRoute;