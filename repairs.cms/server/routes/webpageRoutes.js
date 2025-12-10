import express from 'express';
import { createWebpages, deleteWebpage, detailWebpage, listWebpages, updateWebpage } from '../controllers/webpageController.js';

const webpageRouter = express.Router();

webpageRouter.get('/webpages', listWebpages);
webpageRouter.post('/webpages/create', createWebpages);
webpageRouter.get('/webpages/:id', detailWebpage);
webpageRouter.patch('/webpages/update/:id', updateWebpage);
webpageRouter.delete('/webpages/delete/:id', deleteWebpage);


export default webpageRouter;