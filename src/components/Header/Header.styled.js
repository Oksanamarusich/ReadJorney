import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  /* justify-content:center;
align-items:center; */

  border-radius: 15px;
  width: 335px;
  height: 57px;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
`;
export const WrapperIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ButtonMenu = styled.button`
background-color:transparent;
border:transparent;
`
