import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const ListLinks = styled.ul`
/* margin-bottom:394px; */
display:flex:
flex-direction:column;
gap:22px;
`

export const StyledNavLink = styled(NavLink)`
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
letter-spacing: -0.02em;
color: ${({ theme }) => theme.colors.darkTxtColor};

&.active{
    color: ${({ theme }) => theme.colors.mainTxtColor};
    text-decoration-color:${({theme})=>theme.colors.textUnderline};
    text-decoration-line:underline;
}
`