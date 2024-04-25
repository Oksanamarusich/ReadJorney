import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  width: 100%;
  height: 57px;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};

  @media only screen and (min-width: 768px) {
    padding: 16px;
    justify-content: start;
    align-items: center;
    height: 74px;
  }
`;
export const WrapperIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const ButtonMenu = styled.button`
  padding: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: 0;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledSpan = styled.span`
  display: none;
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 1440px) {
    display: block;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.125;
    letter-spacing: -0.02em;
    text-align: center;
    color: ${({ theme }) => theme.colors.mainTxtColor};
  }
`;

export const ButtonUserBar = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: transparent;
`;

export const customStylesModal = {
  content: {
    position: 'absolute',
    top: ' 50%',
    left: '75%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    width: '50%',
    height: '100vh',
    background: '#262626',
    border: 'none',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    background: 'rgba(0,0,0,0.5)',
  },
};
