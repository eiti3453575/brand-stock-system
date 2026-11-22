import User from '../models/user.js';
import AppError from '../middlewares/appError.js';
import generateToken from '../utils/generateToken.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError('משתמש עם אימייל זה כבר קיים במערכת', 400);
  }

  const newUser = new User({ name, email, password });
  const savedUser = await newUser.save();

  const token = generateToken(savedUser._id);

  res.status(201).json({
    user: {
      id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email
    },
    token
  });
};