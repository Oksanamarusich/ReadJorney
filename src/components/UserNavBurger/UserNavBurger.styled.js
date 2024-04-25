import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNav = styled.nav`
 

@media only screen and (min-width: 768px) {
  display:none;
  }
`;

export const StyledList = styled.ul`

  display: flex;
  flex-direction: column;
  gap: 20px;


`;

export const StyledItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.darkTxtColor};
  &.active {
    color: ${({ theme }) => theme.colors.mainTxtColor};
  }

  &.active::before {
    position: absolute;
    top: 140%;
    left: 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.textUnderline};
    border-radius: 8px;
  }

  
`;
