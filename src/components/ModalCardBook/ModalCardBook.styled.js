import { styled } from "styled-components";

export const WrapperModalCardBook = styled.div`
position:relative;
padding:40px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border: 1px solid ${({theme})=>theme.colors.border};
border-radius: 12px;
width: 100%;
height: 421px;

 @media only screen and (max-width: 375px) {
   width: 335px;
}


 @media only screen and (min-width: 768px) {
padding:50px;
width: 500px;
height: 483px;
}
`
export const ButtonIcon = styled.button`
position:absolute;
top:16px;
right:16px;
 background-color: transparent;
 border:0;

`

export const StyledImg = styled.img`
margin-bottom:16px;
border-radius: 8px;
width: 140px;
height: 213px;


 @media only screen and (min-width: 768px) {

width: 153px;
height: 233px;
 }
`

export const TitleModal = styled.h4`
margin-bottom:2px;
width:66px;
height:18px;
overflow:hidden;
font-weight: 700;
font-size: 18px;
line-height: 1;
letter-spacing: -0.02em;
color: ${({ theme }) => theme.colors.mainTxtColor};


 @media only screen and (min-width: 768px) {
    font-size:20px;
    width: 76px;
    height:20px;
font-size: 20px;
 }
`

export const StyledAuthor = styled.p`
margin-bottom:4px;
font-weight: 500;
font-size: 12px;
line-height: 1.16667;
letter-spacing: -0.02em;
color: ${({ theme }) => theme.colors.darkTxtColor};

@media only screen and (min-width: 768px) {
font-size:14px;
line-height: 1.28571;
}
`
export const StyledSpan = styled.span`
margin-bottom:20px;
font-weight: 500;
font-size: 10px;
line-height: 1.2;
letter-spacing: -0.02em;
text-align: center;
color: ${({ theme }) => theme.colors.mainTxtColor};

@media only screen and (min-width: 768px) {
    margin-bottom:32px;
}
`
export const ButtonModal = styled.button`
border: 1px solid ${({theme})=>theme.colors.border};
border-radius: 30px;
padding: 12px 24px;
width: 141px;
height: 42px;
background-color:${({theme})=>theme.colors.backgroundModalContent};

font-weight: 700;
font-size: 14px;
line-height: 1.28571;
letter-spacing: 0.02em;
color: #f9f9f9;
color: ${({ theme }) => theme.colors.mainTxtColor};
white-space:nowrap;

@media only screen and (min-width: 768px) {
    padding: 14px 28px;
width: 162px;
height: 46px;
font-size: 16px;
line-height: 1.25;
}
`