import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { PrivateRoute } from "./PrivateRoute";



const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))
// const RecommendedPage = lazy(()=> import('../pages/RecommendedPage/RecommendedPage'))
 const Home = lazy(() => import('../pages/Home/Home'))

export const App = () => {
  return (
    <Routes>
      
      {/* <Route path="/recommended" element={<PrivateRoute redirectTo="/login" component={<RecommendedPage/>}/>}/> */}
      
       <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute component={<Home />} />} />
        <Route path="/register" element={<RegisterPage />} />
       </Route>
    </Routes>
  );
};
