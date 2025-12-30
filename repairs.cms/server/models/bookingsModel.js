import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    issue: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;