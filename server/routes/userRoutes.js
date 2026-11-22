import express from 'express';
import { register, login } from '../controllers/userControllers.js';
import validate from '../middlewares/validateMiddleware.js';
import { registerSchema, loginSchema } from '../validations/userValidation.js';


const router = express.Router();


router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);


export default router;