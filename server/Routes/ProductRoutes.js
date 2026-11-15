const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../Controllers/ProductControllers');


const validate = require('../middlewares/validateMiddleware');
const { productSchema } = require('../validations/ProductValidation');


router.get('/', getAllProducts);
router.post('/', validate(productSchema), createProduct);


router.get('/:id', getProductById);
router.put('/:id', validate(productSchema), updateProduct);
router.delete('/:id', deleteProduct);


module.exports = router;