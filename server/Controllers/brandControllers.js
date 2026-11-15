const Brand = require('../models/Brand');
const AppError = require('../middlewares/appError');

exports.getAllBrands = async (req, res) => {
  const brands = await Brand.find();
  res.status(200).json(brands);
};

exports.getBrandById = async (req, res) => {
  const brand = await Brand.findById(req.params.id);
  if (!brand) {
    throw new AppError('Brand not found', 404);
  }
  res.status(200).json(brand);
};

exports.createBrand = async (req, res) => {
  const newBrand = new Brand(req.body);
  const savedBrand = await newBrand.save();
  res.status(201).json(savedBrand);
};

exports.updateBrand = async (req, res) => {
  const updatedBrand = await Brand.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!updatedBrand) {
    throw new AppError('Brand not found', 404);
  }
  res.status(200).json(updatedBrand);
};

exports.deleteBrand = async (req, res) => {
  const deletedBrand = await Brand.findByIdAndDelete(req.params.id);
  if (!deletedBrand) {
    throw new AppError('Brand not found', 404);
  }
  res.status(200).json({ message: 'Brand deleted successfully' });
};