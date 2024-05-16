import { BooksList } from 'components/BooksList/BooksList';
import { Icon } from 'components/Icon';


import {
  Button,
  Title,
  WrapperButton,
  WrapperRecommendedBooks,
} from './RecommendedBooks.styled';

export const RecommendedBooks = ({ books, handlePrevButton, handleNextButton }) => {

  return (
    <WrapperRecommendedBooks>
      <Title>Recommended</Title>

      <WrapperButton>
        <Button onClick={handlePrevButton}>
          <Icon name="chevron-left" stroke="#F9F9F9" />
        </Button>
        <Button onClick={handleNextButton}>
          <Icon name="chevron-right" stroke="#F9F9F9" />
        </Button>
      </WrapperButton>
      <BooksList books={books} />
    </WrapperRecommendedBooks>
  );
};
