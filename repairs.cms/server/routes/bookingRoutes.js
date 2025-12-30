import express from 'express';
import { booking } from '../controllers/bookingController.js';

const bookingRouter = express.Router();

bookingRouter.post('/website/booking', booking);

export default bookingRouter;