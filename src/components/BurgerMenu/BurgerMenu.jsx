import { ButtonIcon, WrapperBurgerMenu } from './BurgerMenu.styled';
import { Icon } from 'components/Icon';
import { UserNavBurger } from 'components/UserNavBurger/UserNavBurger';
import { LogOutBurger } from 'components/LogOutBurger/LogOutBurger';

export const BurgerMenu = ({closeModal}) => {
  return (
    <WrapperBurgerMenu>
      <ButtonIcon onClick = {closeModal}>
        <Icon name="x-1" width="28px" height="28px" stroke="#f9f9f9"/>
      </ButtonIcon>
      <UserNavBurger/>
      <LogOutBurger/>
    </WrapperBurgerMenu>
  );
};
