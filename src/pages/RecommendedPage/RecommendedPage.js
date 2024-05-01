import { RecommendedBooks } from "components/RecommendedBooks/RecommendedBooks";
import { RecommendedPageDashboard } from "components/RecommendedPageDashboard/RecommendedPageDashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedBooks } from "../../redux/books/operations";
import { selectBooks } from "../../redux/books/selectors";
import { StyledMain } from "./RecommendedPage.styled";

export default function RecommendedPage() {
    const dispatch = useDispatch();
    const books = useSelector(selectBooks);
    console.log(books);

    useEffect(() => {
        dispatch(getRecommendedBooks())
    }, [dispatch]);
    return (
        <StyledMain>
        <RecommendedPageDashboard />
            <RecommendedBooks books={books} />
        </StyledMain>
    )
}