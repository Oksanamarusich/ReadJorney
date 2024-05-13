import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Enter valid Name*')
    .required('This field is required'),
  email: Yup.string()
    .email('Enter a valid Email*')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required('This field is required'),
  password: Yup.string()
    .min(7, 'Enter a valid Password*')
    .required('This field is required'),
});
