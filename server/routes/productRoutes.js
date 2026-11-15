import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productControllers.js';
import validate from '../middlewares/validateMiddleware.js';
import { productSchema } from '../validations/productValidation.js';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', validate(productSchema), createProduct);

router.get('/:id', getProductById);
router.put('/:id', validate(productSchema), updateProduct);
router.delete('/:id', deleteProduct);

export default router;