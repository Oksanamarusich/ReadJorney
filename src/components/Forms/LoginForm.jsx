import { Formik } from 'formik';
import {
  ButtonForm,
  ErrMsg,
  StyledField,
  StyledForm,
  StyledIcon,
  StyledLabel,
  StyledLink,
  WrapperButtonLink,
} from './Forms.styled';
import { Icon } from 'components/Icon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginSchema } from 'schemas/LoginSchema';
import { login } from '../../redux/auth/operations';

export const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <StyledLabel htmlFor="email">
            <StyledField
              id="email"
              type="email"
              name="email"
              placeholder="Your@email.com"
              autoComplete="off"
            />
            <ErrMsg name="email" component="div" />
          </StyledLabel>

          <StyledLabel htmlFor="password">
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
              autoComplete="off"
            />
            <ErrMsg name="password" component="p" />
          </StyledLabel>

          <WrapperButtonLink>
            <ButtonForm type="submit">Log In</ButtonForm>
            <StyledLink to="/register">Don`t have an account?</StyledLink>
          </WrapperButtonLink>
        </StyledForm>
      </Formik>
    </>
  );
};
