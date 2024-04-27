import { Dashboard } from "components/Dashboard/Dashboard"
import { Filters } from "components/Filters/Filters"
import { MyLibraryPage } from "components/MyLibraryPage/MyLibraryPage"

export const RecommendedPageDashboard = () => {
    return (<Dashboard>
        <Filters />
        <MyLibraryPage/>
    </Dashboard>)
}