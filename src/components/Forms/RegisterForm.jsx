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
import { register } from '../../redux/auth/operations';
import { RegisterSchema } from 'schemas/RegisterSchema';


export const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
actions.resetForm();
  }
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
        <StyledForm autoComplete="off">
          <StyledLabel htmlFor="name">
            Name:
            <StyledField
              id="name"
              type="text"
              name="name"
              placeholder="Ilona Ratushnyak"
              autoComplete="off"
            />
            <ErrMsg name="name" component="p" />
          </StyledLabel>

          <StyledLabel htmlFor="email">
            Mail:
            <StyledField
              id="email"
              type="email"
              name="email"
              placeholder="Your@email.com"
              autoComplete="off"
            />
            <ErrMsg name="email" component="p" />
          </StyledLabel>

          <StyledLabel htmlFor="password">
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
              autoComplete="off"
            />
            <ErrMsg name="password" component="p" />
          </StyledLabel>

          <WrapperButtonLink>
            <ButtonForm type="submit">Registration</ButtonForm>
            <StyledLink to="/login">Already have an account?</StyledLink>
          </WrapperButtonLink>
        </StyledForm>
      </Formik>
    </>
  );
};
