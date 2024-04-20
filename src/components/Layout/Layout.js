import { Loader } from "components/Loader/Loader"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container } from "./Layout.styled"

export const Layout = () => {
    return (
        <Container>
            <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
        
        </Container>)
}