import bcrypt from "bcryptjs";
import validator from 'validator';
import jwt from 'jsonwebtoken'
import Auth from "../models/authModel.js";
import { sendEmail } from "../utils/sendEmail.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    const isValidePattern = validator.isEmail(email)
    if (!isValidePattern) {
        return res.send({status: false, message: "Email pattern will be example@email.com"})
    }

    try {
        // check if email is exist
        let user = await Auth.findOne({email});
        if (user) {
            return res.send({status: false, message: "This email is already in use"})
        }

        // hash password (encrypted password)
        const salt = await bcrypt.genSalt(10);
        const myHashPassword = await bcrypt.hash(password, salt);

        // new Auth OJB
        user = new Auth({
            name,
            email,
            password: myHashPassword
        });
        const result = await Auth.create(user);

        if (result) {
            return res.send({status: true, message: "User registration successful", user})       
        } else {
            return res.send({status: false, message: "Registration failed"})
        }

    } catch (error) {
        return res.send({status: false, message: "Something went wrong"})        
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    const isValidePattern = validator.isEmail(email)
    if (!isValidePattern) {
        return res.send({status: false, message: "Email pattern will be example@email.com"})
    }

    try {
        // check if email is exist
        let user = await Auth.findOne({email});
        if (!user) {
            return res.send({status: false, message: "User not found with this email"})
        }

        // compare password (encrypted password)
        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            return res.send({status: false, message: "Password didn't matched"})
        }
        
        const content = `
        <h1>You have successfully loggedin to our system</h1>
        `;

        const userToken = jwt.sign(
            {user: {id: user._id, name: user.name, email: user.email}}, 
            process.env.JWT_SECRET, 
            { expiresIn: '7d'})
        

        if (userToken) {
            sendEmail('pnymeet@gmail.com', "Login Successful! ✨🎉", content)
            return res.send({status: true, message: "User loggedin successful", userToken})            
        } else {
            return res.send({status: false, message: "Logging failed"})
        }

    } catch (error) {
        return res.send({status: false, message: "Something went wrong"})        
    }
}

export const verifyUser = async (req, res) => {
    const userToken = req.headers.authorization;
    try {
        const token = userToken.split(" ")[1];
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenData) {
            const user = await Auth.findById(tokenData.user.id)
            if (user) {
                return res.send({status: true, user});
            } else {
                return res.send({status: false, message: "User not found"});
            }
        } else {
            return res.send({status: false, message: "Invalid token"});
        }

    } catch (error) {
        console.log("Error: ", error)
    }
}