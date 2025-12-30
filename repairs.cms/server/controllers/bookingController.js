import Booking from "../models/bookingsModel.js";

export const booking = async (req, res) => {
    const booking = req.body;

    try {
        const response = await Booking.create(booking);
        if (response) {
            return res.send({status: true, message: "Thank you for your booking, we will inform you."})
        } else {
            return res.send({status: false, message: "Please try again later!"})
        }
    } catch (error) {
        return res.send({status: false, message: "Network error!"})        
    }
}