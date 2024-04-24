import { styled } from "styled-components";

export const WrapperBurgerMenu = styled.div`
position:relative;
padding:280px 54px 55px 40px;
display:flex;
flex-direction:column;
justify-content:space-between;
overflow-y: scroll;
  max-height: 100vh;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

`;

export const ButtonIcon = styled.button`
position:absolute;
top:34px;
right:40px;
background-color:transparent;
`