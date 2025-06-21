import express from 'express';
import authMiddleware, { requireAuth } from '../middleware/auth.js';
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorders', requireAuth, userOrders);
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updateStatus)

export default orderRouter;
