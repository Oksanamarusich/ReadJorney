import { styled } from 'styled-components';

export const ButtonLogOut = styled.button`
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 30px;
  width: 91px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  transition: background-color ${({ theme }) => theme.animation.transition}
    color ${({ theme }) => theme.animation.transition} border-color
    ${({ theme }) => theme.animation.transition};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.mainTxtColor};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.backgroundButton};
    color: ${({ theme }) => theme.colors.colorTxtButton};
    border: transparent;
  }

  @media only screen and (min-width: 768px) {
    display:none;
  }
`;
