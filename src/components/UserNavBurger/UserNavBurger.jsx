import { StyledList, StyledNav, StyledNavLink } from "./UserNavBurger.styled";

export const UserNavBurger = () => {
  return (
    <StyledNav>
    <StyledList>
      <li>
        <StyledNavLink to="/recommended">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/library">My library</StyledNavLink>
      </li>
      </StyledList>
      </StyledNav>
  );
};