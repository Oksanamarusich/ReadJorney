import { styled } from 'styled-components';

export const WrapperRecommendedBooks = styled.section`
  position: relative;
  padding: 40px 20px;
  margin-bottom: 20px;
  border-radius: 30px;
  width: 100%;
  height: 382px;
  background: ${({ theme }) => theme.colors.secondaryBgColor};

  @media only screen and (max-width: 375px) {
    width: 335px;
  }

  @media only screen and (min-width: 768px) {
    padding: 40px;
    margin-bottom: 0;
    width: 704px;
    height: 663px;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
    height: 651px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 34px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.mainTxtColor};

  @media only screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14286;
    margin-bottom: 28px;
  }
`;
export const WrapperButton = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  display: flex;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    right: 40px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  
`;

export const ButtonDisabled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }`