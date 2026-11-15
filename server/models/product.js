import mongoose from 'mongoose';

const stockItemSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      required: [true, 'מידה היא שדה חובה'],
      trim: true
    },
    color: {
      type: String,
      required: [true, 'צבע הוא שדה חובה'],
      trim: true
    },
    quantity: {
      type: Number,
      required: [true, 'כמות במלאי היא שדה חובה'],
      min: [0, 'כמות לא יכולה להיות שלילית'],
      default: 0
    }
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'שם המוצר הוא שדה חובה'],
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'מחיר הוא שדה חובה'],
      min: [0, 'מחיר לא יכול להיות שלילי']
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: [true, 'חובה לשייך מוצר למותג']
    },
    stockItems: {
      type: [stockItemSchema],
      default: []
    }
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);