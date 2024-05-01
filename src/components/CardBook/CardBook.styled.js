import { styled } from "styled-components";

export const BooksItem = styled.li`
width:calc(50%-10px);
`
export const StyledImg = styled.img`
 margin-bottom:8px;
 /* width:137px; */
 width:100%;
 height:208px;
 border-radius: 8px;
`
export const TitleBook = styled.h3`
margin-bottom:2px;
width:103px;
height:18px;
overflow:hidden;
font-weight: 700;
font-size: 14px;
line-height: 1.28571;
letter-spacing: -0.02em;
color: ${({theme})=>theme.colors.mainTxtColor};
`
export const AuthorBook = styled.p`
font-weight: 500;
font-size: 10px;
line-height: 1.2;
letter-spacing: -0.02em;
color:${({theme})=>theme.colors.darkTxtColor};
`