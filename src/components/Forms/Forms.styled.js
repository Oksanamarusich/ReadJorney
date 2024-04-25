import { ErrorMessage, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const StyledField = styled(Field)`
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
  }
`;

export const StyledIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 7%;
  width: 18px;
  height: 18px;

  @media only screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.darkTxtColor};
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
  margin-top: 14px;
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
  top: 15px;
  right: 8px;
  font-size: 14px;
  font-style: italic;
  color: red;
`;
