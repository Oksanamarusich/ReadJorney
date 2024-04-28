import { Field, Form } from "formik";
import { styled } from "styled-components";

export const FiltersWrapper = styled.div`
display:flex:flex-direction:column;
`

export const FiltersTitle = styled.h4`
margin-bottom:8px;
font-weight: 500;
font-size: 10px;
line-height: 1.2;
letter-spacing: -0.02em;
color: ${({ theme }) => theme.colors.mainTxtColor};

@media only screen and (min-width: 768px) {
   
font-size: 14px;
line-height: 1.28571;

}
`

export const FormFilters = styled(Form)`
margin-bottom:20px;
display:flex;
flex-direction:column;
gap:8px;
`

export const FieldFilters = styled(Field)`
border-radius: 12px;
padding: 14px 14px 14px 77px;
width:100%;
height: 44px;
background-color: ${({ theme }) => theme.colors.backgroundInput};
  border: transparent;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.mainTxtColor};
  outline: none;
  transition: border-color ${({ theme }) => theme.animation.transition};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.hoverInput};
  }

  @media only screen and (man-width: 375px) {
width: 295px;
  }

  @media only screen and (min-width: 768px) {

height: 50px;
padding: 16px 16px 16px 86px;
font-size: 14px;
line-height: 1.28571;
}

@media only screen and (min-width: 1440px) {
    width:313px;
}
`

export const ButtonFilters = styled.button`
margin-top:12px;
border: 1px solid ${({theme})=>theme.colors.border};
border-radius: 30px;
padding: 10px 20px;
width: 98px;
height: 38px;
background-color:${({theme})=>theme.colors.primaryBgColor};
font-weight: 700;
font-size: 14px;
line-height: 1.28571;
letter-spacing: 0.02em;
color: ${({ theme }) => theme.colors.mainTxtColor};
white-space:nowrap;
 transition: background-color ${({ theme }) => theme.animation.transition}
      color ${({ theme }) => theme.animation.transition} border-color
      ${({ theme }) => theme.animation.transition};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.backgroundButton};
      color: ${({ theme }) => theme.colors.colorTxtButton};
      border: transparent;
    }

    @media only screen and (min-width: 768px) {
padding: 12px 28px;
width: 122px;
height: 42px;
font-size: 16px;
line-height: 1.125;

    }
  
`

