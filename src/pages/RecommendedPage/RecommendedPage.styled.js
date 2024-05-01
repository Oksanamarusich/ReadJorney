import { styled } from 'styled-components';

export const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.colors.primaryBgColor};

  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 16px;
  }
`;
