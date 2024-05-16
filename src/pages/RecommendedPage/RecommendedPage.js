import { RecommendedBooks } from 'components/RecommendedBooks/RecommendedBooks';
import { RecommendedPageDashboard } from 'components/RecommendedPageDashboard/RecommendedPageDashboard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedBooks } from '../../redux/books/operations';
import { selectBooks } from '../../redux/books/selectors';
import { StyledMain } from './RecommendedPage.styled';

export default function RecommendedPage({limit}) {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const [page, setPage] = useState(1);
//     const [limit, setLimit] = useState(2);
//     console.log(limit)

//   const updateLimit = () => {
//     const windowWidth = window.innerWidth;
//     if (windowWidth <= 767) {
//       setLimit(2); // Мобільний екран
//     } else if (windowWidth <= 1023) {
//       setLimit(8); // Планшет
//     } else {
//       setLimit(10); // Десктоп
//     }
//   };

  const handleNextButton = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePrevButton = () => {
    setPage(prevState => prevState - 1);
  };

//   useEffect(() => {
//     updateLimit();
//   }, []);

    useEffect(() => {
    dispatch(getRecommendedBooks({page, limit}));
  }, [dispatch, page, limit]);
  return (
    <StyledMain>
      <RecommendedPageDashboard />
      <RecommendedBooks
        books={books}
        handlePrevButton={handlePrevButton}
        handleNextButton={handleNextButton}
      />
    </StyledMain>
  );
}
