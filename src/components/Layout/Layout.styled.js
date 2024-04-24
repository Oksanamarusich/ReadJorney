import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 20px;
  background-color:${({ theme }) => theme.colors.primaryBgColor};

  @media only screen and (min-width: 375px) {
    max-width: 375px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding:32px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    display:flex;
    gap:16px;
  }
`;
