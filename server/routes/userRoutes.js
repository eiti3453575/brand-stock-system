import express from 'express';
import { register } from '../controllers/userControllers.js';
import validate from '../middlewares/validateMiddleware.js';
import { registerSchema } from '../validations/userValidation.js';

const router = express.Router();

router.post('/register', validate(registerSchema), register);

export default router;