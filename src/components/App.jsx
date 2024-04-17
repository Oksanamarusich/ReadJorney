import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const Home = lazy(()=> import('../pages/Home/Home'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
};