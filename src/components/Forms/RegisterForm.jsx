import { Formik } from 'formik';
import {
  ButtonForm,
  ErrMsg,
  StyledField,
  StyledForm,
  StyledIcon,
  StyledLink,
  WrapperButtonLink,
} from './Forms.styled';
import { Icon } from 'components/Icon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { RegisterSchema } from 'schemas/RegisterSchema';
import { LabelWithError } from 'components/LabelWithError/LabelWithError';

export const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <LabelWithError name="name">
            Name:
            <StyledField
              id="name"
              type="text"
              name="name"
              placeholder="Ilona Ratushnyak"
            />
            <ErrMsg name="name" component="p" />
          </LabelWithError>
          <LabelWithError name="email">
            Mail:
            <StyledField
              id="email"
              type="email"
              name="email"
              placeholder="Your@email.com"
            />
            <ErrMsg name="email" component="p" />
          </LabelWithError>
          <LabelWithError name="password">
            Password:
           
            <StyledIcon
              onClick={() => {
                setPasswordShown(!passwordShown);
              }}
            >
              {passwordShown ? (
                <Icon name="eye" stroke="#F9F9F9" />
              ) : (
                <Icon name="eye-off" stroke="#F9F9F9" />
              )}
            </StyledIcon>
            <StyledField
              id="password"
              name="password"
              placeholder="Yourpasswordhere"
              type={passwordShown ? 'text' : 'password'}
            />
            <ErrMsg name="password" component="p" />
          </LabelWithError>
          <WrapperButtonLink>
            <ButtonForm type="submit">Registration</ButtonForm>
            <StyledLink to="/login">Already have an account?</StyledLink>
          </WrapperButtonLink>
        </StyledForm>
      </Formik>
    </>
  );
};

