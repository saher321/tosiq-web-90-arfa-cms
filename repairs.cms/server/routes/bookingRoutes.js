import express from 'express';
import { createBooking, allBooking } from '../controllers/bookingController.js';

const bookingRouter = express.Router();

bookingRouter.post('/website/bookings/create', createBooking);

bookingRouter.get('/bookings', allBooking);

export default bookingRouter;