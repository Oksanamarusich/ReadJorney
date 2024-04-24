import { LogOut } from 'components/LogOut/LogOut';
import { UserNav } from 'components/UserNav/UserNav';
import { ButtonIcon, WrapperBurgerMenu } from './BurgerMenu.styled';
import { Icon } from 'components/Icon';

export const BurgerMenu = () => {
  return (
    <WrapperBurgerMenu>
      <ButtonIcon>
        <Icon name="x-1" width="28px" height="28px" stroke="#f9f9f9"/>
      </ButtonIcon>
      <UserNav />
      <LogOut />
    </WrapperBurgerMenu>
  );
};
