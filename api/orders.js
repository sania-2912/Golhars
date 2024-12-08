import Order from '../models/order';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, paintingId, quantity, totalPrice } = req.body;

    // Create order in MongoDB
    const order = new Order({ userId, paintingId, quantity, totalPrice });
    await order.save();

    res.status(200).json({ message: 'Order created successfully!' });
  }
}
