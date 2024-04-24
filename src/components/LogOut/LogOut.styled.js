import { styled } from 'styled-components';

export const ButtonLogOut = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 30px;
  padding: 12px 28px;
  width: 114px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  transition: background-color ${({ theme }) => theme.animation.transition}
    color ${({ theme }) => theme.animation.transition} border-color
    ${({ theme }) => theme.animation.transition};

  font-weight: 700;
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.mainTxtColor};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.backgroundButton};
    color: ${({ theme }) => theme.colors.colorTxtButton};
    border: transparent;
  }
`;
