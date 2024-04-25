import { styled } from 'styled-components';

export const WrapperIconForm = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:45px;
  height:20px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledImgForm = styled.img`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    margin-bottom: 157px;
  }
`;
