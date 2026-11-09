const Joi = require('joi');

const brandSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'שם המותג הוא שדה חובה',
    'any.required': 'שם המותג הוא שדה חובה'
  }),
  description: Joi.string().trim().optional().allow(''),
  country: Joi.string().trim().optional().allow('')
});

module.exports = {
  brandSchema
};