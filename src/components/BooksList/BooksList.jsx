import { CardBook } from 'components/CardBook/CardBook';
import { ListBooks, WrapperListBooks } from './BookList.styled';

export const BooksList = ({ books }) => {
  return (
    <WrapperListBooks>
      <ListBooks>
        {books.map((book) => (
          <CardBook key={book.imageUrl} book={book} />
        ))}
      </ListBooks>
    </WrapperListBooks>
  );
};
