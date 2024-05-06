import { Logo } from 'components/Logo/Logo';

import {
  ButtonMenu,
  ButtonUserBar,
  customStylesModal,
  StyledHeader,
  StyledSpan,
  WrapperIcons,
} from './Header.styled';
import { Icon } from 'components/Icon';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { useState } from 'react';
import Modal from 'react-modal';
import { UserNav } from 'components/UserNav/UserNav';
import { LogOut } from 'components/LogOut/LogOut';
import { useAuth } from 'hooks';

export const Header = () => {
  const { user } = useAuth();
  console.log(user);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    //  document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setIsOpen(false);
    // document.body.style.overflow = '';
  }
  return (
    <StyledHeader>
      <Logo />
      <UserNav />
      <WrapperIcons>
        <ButtonUserBar>
          <Icon name="block" fill="#262626" width="35px" height="35px" />
        </ButtonUserBar>
         <StyledSpan>{user.name}</StyledSpan> 

        <ButtonMenu type="button" onClick={openModal}>
          <Icon name="menu-04" width="28px" height="28px" />
        </ButtonMenu>
        <LogOut/>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          // className="modal-content"
          // overlayClassName="modal-overlay"
          style={customStylesModal}
          contentLabel="Modal"
        >
          <BurgerMenu closeModal={closeModal} />
        </Modal>
      </WrapperIcons>
    </StyledHeader>
  );
};
