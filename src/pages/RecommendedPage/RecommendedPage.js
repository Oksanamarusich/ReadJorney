import { RecommendedBooks } from "components/RecommendedBooks/RecommendedBooks";
import { RecommendedPageDashboard } from "components/RecommendedPageDashboard/RecommendedPageDashboard";
import { StyledMain } from "./RecommendedPage.styled";

export default function RecommendedPage() {
    return (
        <StyledMain>
        <RecommendedPageDashboard />
        <RecommendedBooks/>
        </StyledMain>
    )
}