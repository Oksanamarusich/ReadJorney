import { ErrorMessage, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledForm = styled(Form)`
  position: relative;
  display:flex;
  flex-direction:column;

  @media only screen and (min-width: 768px) {
  }
`;

export const StyledIcon = styled.i`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
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
    top:50%;
  }
`;

export const StyledField = styled(Field)`
  padding-left: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border: transparent;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.mainTxtColor};
  outline: none;
  transition: border-color ${({ theme }) => theme.animation.transition};
  &::placeholder {
    color: ${({ theme }) => theme.colors.mainTxtColor};
  }

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  position: absolute;
  top: 45px;
  left: 14px;
  z-index: 102;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.colorError};

    @media only screen and (min-width: 768px) {
      top: 50px;
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




