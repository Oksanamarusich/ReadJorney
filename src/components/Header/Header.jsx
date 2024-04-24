import { Logo } from 'components/Logo/Logo';

import { ButtonMenu, StyledHeader, WrapperIcons } from './Header.styled';
import { Icon } from 'components/Icon';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { useState } from 'react';
import Modal from 'react-modal';

export const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <StyledHeader>
      <Logo />
      <WrapperIcons>
        <li>
          <ButtonMenu>
            <Icon name="block" fill="#262626" width="35px" height="35px" />
          </ButtonMenu>
        </li>
        <li>
          <ButtonMenu type="button" onClick={openModal}>
            <Icon name="menu-04" width="28px" height="28px" />
          </ButtonMenu>
        </li>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
         className="modal-content"
          overlayClassName="modal-overlay"
          contentLabel="Modal"
        >
          <BurgerMenu />
        </Modal>
      </WrapperIcons>
      {/* <UserNav /> */}
      {/* <LogOut /> */}
    </StyledHeader>
  );
};
