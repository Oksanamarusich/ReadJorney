import { styled } from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    padding: 32px;
  }

  @media only screen and (min-width: 768px) {
    flex-direction:row;
    gap:16px;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
  border-radius: 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};

  @media only screen and (min-width: 768px) {
    padding: 40px 168px 214px 64px;
    margin-bottom: 0px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 40px 64px;
    width: 47%;
    height:736px;
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
    margin-top:0;
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

export const WrapperPicture = styled.div`
  padding: 20px 40px 0 40px;
  border-radius: 30px;
  width: 100%;
  height: 351px;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  /* transition: opsity .4s ease-out .2s */

  @media only screen and (min-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 1440px) {
    display: block;
    padding: 80px 97px 0 98px;
    width: 47%;
     height:736px;
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
