import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "admin"
    }
    // otp: {
    //     type: String,
    //     default: null
    // },
    // isVerified: {
    //     type: Boolean,
    //     default: false
    // }
}, { timestamps: true });

const Auth = mongoose.model('User', authSchema);

export default Auth;