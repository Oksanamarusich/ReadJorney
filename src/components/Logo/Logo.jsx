import { Icon } from 'components/Icon';
import logo from '../../img/Logo1x.webp';
import { StyledImg, WrapperIcon } from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <WrapperIcon>
        <Icon name="Logo" width="42px" height="17px" fill="#F9F9F9" />
      </WrapperIcon>
      <StyledImg src={logo} alt="logo" />
    </>
  );
};
