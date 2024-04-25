import { styled } from 'styled-components';

export const ButtonLogOut = styled.button`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    padding: 12px 28px;
    width: 114px;
    height: 42px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 30px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.125;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.mainTxtColor};
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
    transition: background-color ${({ theme }) => theme.animation.transition}
      color ${({ theme }) => theme.animation.transition} border-color
      ${({ theme }) => theme.animation.transition};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.backgroundButton};
      color: ${({ theme }) => theme.colors.colorTxtButton};
      border: transparent;
    }
  }
`;
