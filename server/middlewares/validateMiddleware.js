import AppError from './appError.js';

const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorMessage = error.details.map((detail) => detail.message).join(', ');
      throw new AppError(errorMessage, 400);
    }
    req.body = value;
    next();
  };
};

export default validate;