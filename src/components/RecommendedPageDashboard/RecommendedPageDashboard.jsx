import { Dashboard } from "components/Dashboard/Dashboard"
import { Filters } from "components/Filters/Filters"
import { MyLibrary } from "components/MyLibrary/MyLibrary"

export const RecommendedPageDashboard = () => {
    return (<Dashboard>
        <Filters />
        <MyLibrary/>
    </Dashboard>)
}