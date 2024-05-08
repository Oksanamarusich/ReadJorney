import { ModalCardBook } from 'components/ModalCardBook/ModalCardBook';
import { useState } from 'react';
import Modal from 'react-modal';
import { AuthorBook, BooksItem, StyledImg, TitleBook } from './CardBook.styled';

export const CardBook = ({ book }) => {
  const { imageUrl, title, author } = book;
  const [isModal, setIsModal] = useState(false);

  const openModalCard = () => {
    setIsModal(true);
     document.body.style.overflow = 'hidden';
  };

  const closeModalCard = () => {
    setIsModal(false);
    document.body.style.overflow = '';
  };

  return (
    <BooksItem onClick={openModalCard}>
      <StyledImg src={imageUrl} alt={title} />
      <TitleBook>{title}</TitleBook>
      <AuthorBook>{author}</AuthorBook>
      <Modal
        isOpen={isModal}
        onRequestClose={closeModalCard}
        className="modal-content-card"
        overlayClassName="modal-overlay"
        contentLabel="Modal book"
      >
        <ModalCardBook onClose={closeModalCard} book={book} />
      </Modal>
    </BooksItem>
  );
};
