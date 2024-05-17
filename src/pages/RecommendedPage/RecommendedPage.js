import { RecommendedBooks } from 'components/RecommendedBooks/RecommendedBooks';
import { RecommendedPageDashboard } from 'components/RecommendedPageDashboard/RecommendedPageDashboard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedBooks } from '../../redux/books/operations';
import { selectBooks, selectTotalPages } from '../../redux/books/selectors';
import { StyledMain } from './RecommendedPage.styled';

export default function RecommendedPage({ limit }) {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const totalPages = useSelector(selectTotalPages);
  const [page, setPage] = useState(1);

  const handleNextButton = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePrevButton = () => {
    setPage(prevState => prevState - 1);
  };

  useEffect(() => {
    dispatch(getRecommendedBooks({ page, limit }));
  }, [dispatch, page, limit]);
  return (
    <StyledMain>
      <RecommendedPageDashboard />
      <RecommendedBooks
        books={books}
        handlePrevButton={handlePrevButton}
        handleNextButton={handleNextButton}
        page={page}
        totalPages={totalPages}
      />
    </StyledMain>
  );
}
