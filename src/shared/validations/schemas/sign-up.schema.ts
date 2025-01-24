import * as yup from 'yup';
import * as Yup from 'yup';

export const signUpSchema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .nullable()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});
