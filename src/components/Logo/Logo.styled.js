import { styled } from 'styled-components';

export const WrapperIcon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:45px;
  height:20px;

  @media only screen and (min-width: 768px) {
    margin-right:222px;
  }

  @media only screen and (min-width: 768px) {
    display:none;
  }

`;

export const StyledImg = styled.img`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: block;
   margin-right:334px;
  }
`;
