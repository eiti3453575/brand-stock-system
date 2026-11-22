import Joi from 'joi';

export const registerSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'שם משתמש הוא שדה חובה',
    'any.required': 'שם משתמש הוא שדה חובה'
  }),
  email: Joi.string().email().trim().lowercase().required().messages({
    'string.email': 'כתובת אימייל לא תקינה',
    'string.empty': 'אימייל הוא שדה חובה',
    'any.required': 'אימייל הוא שדה חובה'
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'הסיסמה חייבת להכיל לפחות 6 תווים',
    'string.empty': 'סיסמה היא שדה חובה',
    'any.required': 'סיסמה היא שדה חובה'
  })
});

export const loginSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required().messages({
    'string.email': 'כתובת אימייל לא תקינה',
    'string.empty': 'אימייל הוא שדה חובה',
    'any.required': 'אימייל הוא שדה חובה'
  }),
  password: Joi.string().required().messages({
    'string.empty': 'סיסמה היא שדה חובה',
    'any.required': 'סיסמה היא שדה חובה'
  })
});