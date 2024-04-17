import { Loader } from "components/Loader/Loader"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
        
        </div>)
}