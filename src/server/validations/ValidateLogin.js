import isEmpty from 'lodash/isEmpty';
import isEmail from 'validator/lib/isEmail';
import validator from 'validator';

import {AuthEnum} from "../../const/auth";

export function validateInput(type, data) {
  console.log(data);
  let errors= {};
  if (data.emailAddress === "") {
    errors.emailAddress = 'Email field is required';
  }
  if (!isEmail(data.emailAddress)) {
    errors.emailAddress = 'Email is invalid';
  }
  if (data.password === "") {
    errors.password = 'Password field is required';
  }
  if (type === AuthEnum.Register) {
    if (!validator.isStrongPassword(data.password)) {
      errors.password = 'Strong password required';
    }
    if (data.passwordConfirmation === "") {
      errors.passwordConfirmation = 'This field is required';
    }
    if (data.password !== data.passwordConfirmation) {
      errors.passwordConfirmation = 'Passwords must match';
    }
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
}
