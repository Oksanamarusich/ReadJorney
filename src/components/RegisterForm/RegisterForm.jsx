import { Formik } from 'formik';
import { ButtonForm, StyledField, StyledForm, StyledLabel, StyledLink, WrapperButtonLink } from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <StyledForm>
          <StyledLabel>
            Name
            <StyledField
              type="text"
              name="name"
              placeholder="Ilona Ratushnyak"
            />
          </StyledLabel>

          <StyledLabel>
            Mail
            <StyledField
              type="email"
              name="mail"
              placeholder="Your@email.com"
            />
          </StyledLabel>

          <StyledLabel>
            Password
            <StyledField
              name="password"
              placeholder="Yourpasswordhere"
              type="text"
            />
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
