import Product from '../models/product.js';
import Brand from '../models/brand.js';
import AppError from '../middlewares/appError.js';

export const getAllProducts = async (req, res) => {
  const products = await Product.find().populate('brand', 'name country');
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('brand', 'name country description');
  if (!product) {
    throw new AppError('Product not found', 404);
  }
  res.json(product);
};

export const createProduct = async (req, res) => {
  const brandExists = await Brand.findById(req.body.brand);
  if (!brandExists) {
    throw new AppError('המותג המבוקש לא נמצא במערכת', 404);
  }

  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.status(201).json(savedProduct);
};

export const updateProduct = async (req, res) => {
  if (req.body.brand) {
    const brandExists = await Brand.findById(req.body.brand);
    if (!brandExists) {
      throw new AppError('המותג המבוקש לא נמצא במערכת', 404);
    }
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!updatedProduct) {
    throw new AppError('Product not found', 404);
  }

  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  if (!deletedProduct) {
    throw new AppError('Product not found', 404);
  }
  res.status(204).send();
};