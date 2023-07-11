import createError from 'http-errors';

export function UnauthorizedError(msg?: string) {
  return new createError.Unauthorized(msg || 'Unauthorized');
}

export function DataNotFoundError(msg?: string) {
  return new createError.NotFound(msg || 'Data Not Found');
}

export function GeneralError(msg?: string) {
  return new createError.InternalServerError(msg || 'Internal Server Error');
}

export function ValidationError(msg?: string) {
  return new createError.UnprocessableEntity(msg || 'Validation Error');
}
