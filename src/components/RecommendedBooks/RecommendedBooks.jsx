import { BooksList } from 'components/BooksList/BooksList';
import { Icon } from 'components/Icon';

import {
  Button,
  Title,
  WrapperButton,
  WrapperRecommendedBooks,
} from './RecommendedBooks.styled';

export const RecommendedBooks = ({
  books,
  handlePrevButton,
  handleNextButton,
  page,
  totalPages,
}) => {
  
  return (
    <WrapperRecommendedBooks>
      <Title>Recommended</Title>

      <WrapperButton>
        {page <= 1 ? (
          <Button disabled>
            <Icon name="chevron-left" stroke="rgba(249, 249, 249, 0.2)" />
          </Button>
        ) : (
          <Button onClick={handlePrevButton}>
            <Icon name="chevron-left" stroke="#F9F9F9" />
          </Button>
        )}
        {page >= 1 && page < totalPages ? (
          <Button onClick={handleNextButton}>
            <Icon name="chevron-right" stroke="#F9F9F9" />
          </Button>
        ) : (
          <Button disabled>
            <Icon name="chevron-right" stroke="rgba(249, 249, 249, 0.2)" />
          </Button>
        )}

        {/* <Button onClick={handlePrevButton}>
          <Icon name="chevron-left" stroke="#F9F9F9" />
        </Button>
      <Button onClick={handleNextButton}>
          <Icon name="chevron-right" stroke="#F9F9F9" />
        </Button> */}
      </WrapperButton>
      <BooksList books={books} />
    </WrapperRecommendedBooks>
  );
};
