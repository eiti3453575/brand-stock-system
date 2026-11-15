import Brand from '../models/brand.js';
import AppError from '../middlewares/appError.js';

export const getAllBrands = async (req, res) => {
  const brands = await Brand.find();
  res.json(brands);
};

export const getBrandById = async (req, res) => {
  const brand = await Brand.findById(req.params.id);
  if (!brand) {
    throw new AppError('Brand not found', 404);
  }
  res.json(brand);
};

export const createBrand = async (req, res) => {
  const newBrand = new Brand(req.body);
  const savedBrand = await newBrand.save();
  res.status(201).json(savedBrand);
};

export const updateBrand = async (req, res) => {
  const updatedBrand = await Brand.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!updatedBrand) {
    throw new AppError('Brand not found', 404);
  }
  res.json(updatedBrand);
};

export const deleteBrand = async (req, res) => {
  const deletedBrand = await Brand.findByIdAndDelete(req.params.id);
  if (!deletedBrand) {
    throw new AppError('Brand not found', 404);
  }
  res.status(204).send();
};