import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};

  @media only screen and (min-width: 768px) {
    padding: 40px 64px 214px 64px;
    margin-bottom: 0px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 40px 64px;
    width: 50%;
    /* height:736px; */
  }
`;

export const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.mainTxtColor};

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 444px;
    height: 180px;
    font-size: 64px;
    line-height: 0.9375;
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
`;

export const WrapperPicture = styled.section`
  padding: 20px 40px 0 40px;
  border-radius: 30px;
  width: 100%;
  height: 351px;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};

  @media only screen and (min-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 1440px) {
    display: block;
    padding: 80px 97px 0 98px;
    width: 50%;
    height: 100vh;
  }
`;

export const StyledImg = styled.img`
  border-radius: 30px;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: block;
    height: 100%;
  }
`;
