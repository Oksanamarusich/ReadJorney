import * as Yup from 'yup';

export const FiltersSchema = Yup.object().shape({
  bookTitle: Yup.string()
    .required('This field is required'),
  author: Yup.string()
    .required('This field is required'),
});