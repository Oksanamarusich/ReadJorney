import { styled } from 'styled-components';

export const WrapperBurgerMenu = styled.div`
  position: relative;
  padding: 280px 54px 55px 40px;
  display: flex;
  flex-direction: column;
  gap: 394px;
  overflow-y: scroll;
  max-height: 100vh;
  width: 200px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonIcon = styled.button`
  position: absolute;
  top: 30px;
  right: 60px;
  background-color: transparent;
`;
