const express = require('express');
const router = express.Router();
const {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand
} = require('../Controllers/brandControllers');
router.get('/', getAllBrands);
router.post('/', createBrand);

router.get('/:id', getBrandById);
router.put('/:id', updateBrand);
router.delete('/:id', deleteBrand);


module.exports = router;