import { ErrorMessage, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledForm = styled(Form)`
  position: relative;

  @media only screen and (min-width: 768px) {
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  /* font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.darkTxtColor}; */
`;

export const StyledField = styled(Field)`
  margin-bottom: 8px;
  border-radius: 12px;
  padding: 14px 14px 14px 59px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border: transparent;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.mainTxtColor};
  outline: none;
  transition: border-color ${({ theme }) => theme.animation.transition};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.hoverInput};
  }

  @media only screen and (min-width: 768px) {
    padding: 16px 16px 16px 65px;
    margin-bottom: 14px;
    width: 472px;
    height: 50px;
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const StyledFieldError = styled(Field)`
  margin-bottom: 8px;
  border-radius: 12px;
  padding: 14px 14px 14px 59px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border: 1px solid ${({ theme }) => theme.colors.colorError};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.mainTxtColor};
  outline: none;
  transition: border-color ${({ theme }) => theme.animation.transition};

  @media only screen and (min-width: 768px) {
    padding: 16px 16px 16px 65px;
    margin-bottom: 14px;
    width: 472px;
    height: 50px;
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const StyledFieldValidate = styled(Field)`
  margin-bottom: 8px;
  border-radius: 12px;
  padding: 14px 14px 14px 59px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border: 1px solid ${({ theme }) => theme.colors.colorValidate};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.mainTxtColor};
  outline: none;
  transition: border-color ${({ theme }) => theme.animation.transition};

  @media only screen and (min-width: 768px) {
    padding: 16px 16px 16px 65px;
    margin-bottom: 14px;
    width: 472px;
    height: 50px;
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const StyledIcon = styled.i`
  position: absolute;
  top: 56%;
  right: 16px;
  width: 18px;
  height: 18px;
  border: 0;

  @media only screen and (min-width: 768px) {
    top: 46%;
    right: 18px;
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 1440px) {
    right: 90px;
  }
`;

export const ButtonForm = styled.button`
  border-radius: 30px;
  padding: 12px 29px;
  width: 140px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundButton};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.colorTxtButton};
  transition: background-color ${({ theme }) => theme.animation.transition}
    color ${({ theme }) => theme.animation.transition} border-color
    ${({ theme }) => theme.animation.transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
    color: ${({ theme }) => theme.colors.mainTxtColor};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media only screen and (min-width: 768px) {
    padding: 16px 54px;
    width: 225px;
    height: 52px;
    font-size: 20px;
    line-height: 1;
  }
`;
export const WrapperButtonLink = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 14px;

  @media only screen and (min-width: 768px) {
    margin-top: 68px;
    gap: 20px;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${({ theme }) => theme.colors.darkTxtColor};
  transition: color ${({ theme }) => theme.animation.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.backgroundButton};
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  position: absolute;
  top: 35px;
  left: 14px;
  z-index:102;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.colorError};
`;

export const StyledIconError = styled.i`
position:absolute;
top:0;
right:13px;
width:18px;
height:18px;
@media only screen and (min-width: 768px) {
  width:20px;
height:20px;
}

`
