import express from 'express';
import {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand
} from '../controllers/brandControllers.js';
import validate from '../middlewares/validateMiddleware.js';
import { brandSchema } from '../validations/brandValidation.js';

const router = express.Router();

router.get('/', getAllBrands);
router.post('/', validate(brandSchema), createBrand);

router.get('/:id', getBrandById);
router.put('/:id', validate(brandSchema), updateBrand);
router.delete('/:id', deleteBrand);

export default router;