import Product from '../models/product'; // Assuming models are inside a folder
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const products = await Product.find({});
    res.status(200).json(products);
  }
}
