import AppError from './appError.js';

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  error.statusCode = err.statusCode || 500;
  error.status = err.status || 'error';

  if (err.name === 'CastError') {
    error = new AppError(`מזהה לא תקין: ${err.value}`, 400);
  }

  if (err.code === 11000) {
    error = new AppError('ערך כפול: רשומה עם פרטים אלו כבר קיימת במערכת', 400);
  }

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message).join(', ');
    error = new AppError(messages, 400);
  }

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message || 'שגיאת שרת פנימית'
  });
};

export default errorHandler;