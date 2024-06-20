import { styled } from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  margin-bottom: 8px;
  border-radius: 12px;
  padding: 14px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.darkTxtColor};
  transition: border-color ${({ theme }) => theme.animation.transition};

  &.error {
    border: 1px solid ${({ theme }) => theme.colors.colorError};
  }

  &.success {
    border: 1px solid ${({ theme }) => theme.colors.colorValidate};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.hoverInput};
  }

  @media only screen and (min-width: 768px) {
    padding: 16px;
    margin-bottom: 14px;
    width: 472px;
    height: 50px;
    font-size: 14px;
    line-height: 1.28571;
  }
`;



export const StyledIconError = styled.i`
  position: absolute;
  top: 35%;
  right: 13px;
  width: 18px;
  height: 18px;
  
  @media only screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledIconSuccess = styled.i`
  position: absolute;
  top: 35%;
  right: 13px;
  width: 18px;
  height: 18px;
   
  @media only screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SuccessMessage = styled.div`
  position: absolute;
  top: 45px;
  left: 14px;
  z-index: 102;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.colorValidate};
 
`;