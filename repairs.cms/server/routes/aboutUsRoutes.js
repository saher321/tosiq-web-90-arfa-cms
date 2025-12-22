import express from 'express';
import { aboutUsDetail, aboutUs } from '../controllers/aboutUsController.js';

const aboutUsRouter = express.Router();

aboutUsRouter.get('/website/aboutus', aboutUsDetail);

aboutUsRouter.get('/aboutus-details', aboutUsDetail);
aboutUsRouter.post('/aboutus/create', aboutUs);
aboutUsRouter.patch('/aboutus/update/:id', aboutUs);

export default aboutUsRouter;