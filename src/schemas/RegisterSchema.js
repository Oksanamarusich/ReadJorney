import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  email: Yup.string()
    .email()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required('This field is required'),
  password: Yup.string()
    .min(7, '7 chars minimum.')
    .required('This field is required'),
});
