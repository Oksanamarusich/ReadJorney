import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const WrapperLibrary = styled.div`
padding:20px;
border-radius: 12px;
width: 100%;
height: 244px;
background-color:${({ theme }) => theme.colors.backgroundModalContent};

@media only screen and (max-width: 375px) {
    width: 295px;
}

@media only screen and (min-width: 768px) {
    width: 313px;
    height: 272px;
}
`

export const Subtitle = styled.h3`
margin-bottom:20px;
font-weight: 700;
font-size: 18px;
line-height: 1;
letter-spacing: -0.02em;
color:${({ theme }) => theme.colors.mainTxtColor};

@media only screen and (min-width: 768px) {
    margin-bottom:40px;
    font-size: 20px;
}

`
export const StyledItem = styled.li`
width: 253px;
height: 54px;
margin-bottom:20px;

`


export const WrapperItem = styled.div`
display: flex;
gap:12px;

`

export const WrapperRound = styled.div`
padding:11px 16px;
width: 40px;
height: 40px;
border-radius:50%;
background-color:${({ theme }) => theme.colors.mainTxtColor};

font-weight: 700;
font-size: 18px;
line-height: 1;
letter-spacing: -0.02em;
text-align: center;
color: ${({theme})=>theme.colors.colorTxtButton};
`
export const TextLibrary = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
letter-spacing: -0.02em;
color: ${({theme})=>theme.colors.mainTxtColor};
`
export const SpanLibrary = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
color: ${({theme})=>theme.colors.darkTxtColor};
`
export const StyledLink = styled(Link)`
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
letter-spacing: -0.02em;
text-decoration: underline;
text-decoration-skip-ink: none;
color:${({ theme }) => theme.colors.darkTxtColor};
 transition: color ${({ theme }) => theme.animation.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.backgroundButton};
  }
`

export const WrapperLink = styled.div`
display:flex;
justify-content:space-between;

@media only screen and (min-width: 768px) {
    margin-top:6px;
}
`

export const WrapperQuot = styled.div`
display:none;

@media only screen and (min-width: 1440px) {
    padding:15px 20px;
    display:flex;
    gap:14px;
border-radius: 12px;
width: 313px;
height: 83px;
background-color:${({theme})=>theme.colors.backgroundModalContent};
}
`

export const StyledQuot = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
letter-spacing: -0.02em;
color:${({ theme }) => theme.colors.darkTxtColor};
`
export const StyledSpan = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
letter-spacing: -0.02em;
color:${({ theme }) => theme.colors.mainTxtColor};
`

