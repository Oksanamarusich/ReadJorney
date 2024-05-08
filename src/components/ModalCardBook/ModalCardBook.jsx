import { Icon } from 'components/Icon';
import {
    ButtonIcon,
    ButtonModal,
  StyledAuthor,
  StyledImg,
  StyledSpan,
  TitleModal,
  WrapperModalCardBook,
} from './ModalCardBook.styled';



export const ModalCardBook = ({ closeModalCard, book }) => {
  const { imageUrl, title, author, totalPages } = book;
  return (
    <WrapperModalCardBook>
      <ButtonIcon onClick={closeModalCard}>
        <Icon name="x-1" width="28px" height="28px" stroke="#f9f9f9" />
      </ButtonIcon>
      <StyledImg src={imageUrl} alt={title} />
      <TitleModal>{title}</TitleModal>
      <StyledAuthor>{author}</StyledAuthor>
      <StyledSpan>{totalPages} pages</StyledSpan>
      <ButtonModal>Add to library</ButtonModal>
    </WrapperModalCardBook>
  );
};
