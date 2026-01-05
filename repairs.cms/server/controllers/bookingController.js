import Booking from "../models/bookingsModel.js";
import { sendEmail } from "../utils/sendEmail.js";

export const createBooking = async (req, res) => {
    const booking = req.body;
    console.log(booking);
    try {
        booking.status = "pending"; // setting default status
        const response = await Booking.create(booking);
        if (response) {

            const contentEmail = `Hi ${booking.firstName}, Thankyou for your appliance booking. We will contact you shortly \n Regards: REPAIRS EXPERTS`;

            sendEmail(booking.email, "Your booking created succesful!", contentEmail)

            return res.send({status: true, message: "Thank you for your booking, we will inform you."})
        } else {
            return res.send({status: false, message: "Please try again later!"})
        }
    } catch (error) {
        console.log("Error: ", error)
        return res.send({status: false, message: "Network error!"})        
    }
}

export const allBooking = async (req, res) => {
    try {
        const bookings = await Booking.find({}).sort({ createdAt: -1 });
        if (bookings.length > 0) {
            return res.send({status: true, bookings})
        } else {
            return res.send({status: false, message: "No bookings were found"})
        }
    } catch (error) {
        return res.send({status: false, message: "Network error!"})           
    }
}

export const updateBooking = async () => {}
export const deleteBooking = async () => {}
