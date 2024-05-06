import { ModalCardBook } from 'components/ModalCardBook/ModalCardBook';
import { useState } from 'react';
import Modal from 'react-modal';
import { AuthorBook, BooksItem, StyledImg, TitleBook } from "./CardBook.styled"

export const CardBook = ({ book}) => {
    const { imageUrl, title, author } = book;
     const [isModal, setIsModal] = useState(false);
 
    const openModal = () => {
    setIsModal(true);
    // document.body.style.overflow = 'hidden';
  };

  
    const closeModal = () => {
    setIsModal(false);
    // document.body.style.overflow = '';
  };
    return (
        <BooksItem onClick={openModal}>
            <StyledImg src={imageUrl} alt={title}  />
            <TitleBook>{title}</TitleBook>
            <AuthorBook>{author}</AuthorBook>
             <Modal
        isOpen={isModal}
        className="modal-content-card"
        overlayClassName="modal-overlay"
        contentLabel="Modal"
        onRequestClose={closeModal}
      >
                <ModalCardBook onClose={closeModal} book={book} />
      </Modal>
        </BooksItem>
    )
}