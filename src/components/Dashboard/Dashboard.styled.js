import { styled } from "styled-components";

export const WrapperDashboard = styled.aside`
padding:20px;
margin-bottom:10px;
border-radius: 30px;
width: 100%;
height: 478px;
background-color:${({ theme }) => theme.colors.secondaryBgColor};

 @media only screen and (max-width: 375px) {
width: 335px;
 }

 @media only screen and (min-width: 768px) {
    padding:32px;
    margin-bottom:16px;
    display:flex;
    gap:32px;
    width: 704px;
height: 336px;
 }

 @media only screen and (min-width: 1440px) {
    padding:40px 20px 20px 20px;
    flex-direction:column;
    gap:20px;
width: 353px;
height: 651px;
}
`;