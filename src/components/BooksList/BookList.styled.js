import { styled } from "styled-components";

export const WrapperListBooks = styled.div`

/* width:295px; */
width:100%;
 height:248px; 
 overflow:hidden; 
 @media only screen and (min-width: 768px) {
    height: 523px;
 }
`;

export const ListBooks = styled.ul`
display:flex;
 flex-wrap:wrap; 
gap: 21px;

@media only screen and (min-width: 768px) {
    justify-content:space-between;
    gap:27px 25px;
}

@media only screen and (min-width: 1440px) {
gap: 27px 20px;
}
`