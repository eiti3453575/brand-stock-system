import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Brand name is required'],
      trim: true,
      unique: true
    },
    description: {
      type: String,
      trim: true
    },
    country: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Brand', brandSchema);