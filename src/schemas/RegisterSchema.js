import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Enter valid Name*')
    .required('Enter valid Name*'),
  email: Yup.string()
    .email('Enter a valid Email*')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required('Enter a valid Email*'),
  password: Yup.string()
    .min(7, 'Enter a valid Password*')
    .required('Enter a valid Password*'),
});
