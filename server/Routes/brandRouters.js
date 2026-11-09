const express = require('express');
const router = express.Router();
const {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand
} = require('../controllers/brandControlles');

const validate = require('../middlewares/validateMiddleware');
const { brandSchema } = require('../validations/brandValidation');


router.get('/', getAllBrands);
router.post('/', validate(brandSchema), createBrand);

router.get('/:id', getBrandById);
router.put('/:id', validate(brandSchema), updateBrand);
router.delete('/:id', deleteBrand);

module.exports = router;