import isEmpty from 'lodash/isEmpty';
import isEmail from 'validator/lib/isEmail';

export function validateInput(data) {
  let errors = {};

  if (data.username == null) {
    errors.username = 'This field is required';
  }
  if (!isEmail(data.emailAddress)) {
    errors.email = 'Email is invalid';
  }
  if (data.password == null) {
    errors.password = 'This field is required';
  }
  if (data.passwordConfirmation == null) {
    errors.passwordConfirmation = 'This field is required';
  }
  if (data.password !== data.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  return {
    error: errors,
    isValid: isEmpty(errors)
  };
}
