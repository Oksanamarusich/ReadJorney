import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledForm = styled(Form)`

display:flex;
flex-direction:column;
gap:8px;
`
export const StyledField = styled(Field)`

border-radius: 12px;
padding: 14px 14px 14px 59px;
width: 295px;
height: 44px;
background-color: ${({ theme }) => theme.colors.backgroundInput};
border:transparent;
font-family: ${({theme})=>theme.fonts.fontFamily};
font-weight: 500;
font-size: 12px;
line-height: 1.33333;
letter-spacing: -0.02em;
/* text-align: center; */
color: ${({theme})=>theme.colors.mainTxtColor};
`

export const StyledLabel = styled.label`

font-family: ${({theme})=>theme.fonts.fontFamily};
font-weight: 500;
font-size: 12px;
line-height: 1.33333;
letter-spacing: -0.02em;
color:${({theme})=>theme.colors.darkTxtColor};
`;

export const ButtonForm = styled.button`
border-radius: 30px;
padding: 12px 29px;
width: 140px;
height: 42px;
background-color:${({ theme }) => theme.colors.backgroundButton};
font-family: ${({theme})=>theme.fonts.fontFamily};
font-weight: 700;
font-size: 14px;
line-height: 1.28571;
letter-spacing: 0.02em;
color: ${({theme})=>theme.colors.colorTxtButton};
`
export const WrapperButtonLink = styled.div`
display:flex;
align-items:center;
gap: 14px;
`

export const StyledLink = styled(Link)`
font-family: ${({theme})=>theme.fonts.fontFamily};
font-weight: 500;
font-size: 12px;
line-height: 1.16667;
letter-spacing: -0.02em;
text-decoration: underline;
text-decoration-skip-ink: none;
color: ${({theme})=>theme.colors.darkTxtColor};
`

