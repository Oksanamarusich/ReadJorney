import { styled } from "styled-components";

export const WrapperDashboard = styled.div`
border-radius: 30px;
width: 100%;
height: 478px;
background-color:${({ theme }) => theme.colors.secondaryBgColor};

 @media only screen and (max-width: 375px) {
width: 335px;
 }

`;