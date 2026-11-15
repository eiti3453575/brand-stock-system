import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'שם המוצר הוא שדה חובה',
    'any.required': 'שם המוצר הוא שדה חובה'
  }),
  price: Joi.number().min(0).required().messages({
    'number.min': 'מחיר לא יכול להיות שלילי',
    'any.required': 'מחיר הוא שדה חובה'
  }),
  brand: Joi.string().hex().length(24).required().messages({
    'string.length': 'מזהה מותג לא תקין',
    'any.required': 'חובה לציין מזהה מותג'
  }),
  stockItems: Joi.array()
    .items(
      Joi.object({
        size: Joi.string().trim().required(),
        color: Joi.string().trim().required(),
        quantity: Joi.number().min(0).required()
      })
    )
    .optional()
});