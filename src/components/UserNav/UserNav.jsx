import { ListLinks, StyledNavLink } from './UserNav.styled';

export const UserNav = () => {
  return (
    <ListLinks>
      <li>
        <StyledNavLink to="/recommended">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/library">My library</StyledNavLink>
      </li>
    </ListLinks>
  );
};
