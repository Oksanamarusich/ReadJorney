import { styled } from "styled-components";


export const Wrapper = styled.section`
margin-bottom:10px;
padding:20px;
border-radius: 30px;
width: 100%;

background-color:${({ theme }) => theme.colors.secondaryBgColor};
`;

export const Title = styled.h1`
margin-top:40px;
margin-bottom:20px;
font-family: ${({theme})=>theme.fonts.fontFamily};
font-weight: 700;
font-size: 32px;
line-height: 1;
letter-spacing: 0.02em;
color: ${({theme})=>theme.colors.mainTxtColor};
`;

export const StyledSpan = styled.span`
color: ${({theme})=>theme.colors.accentColor};
`
export const WrapperPicture = styled.section`

padding: 20px 40px;
border-radius: 30px;
width: 100%;
height:351px;
background-color:${({ theme }) => theme.colors.secondaryBgColor};
 
`

