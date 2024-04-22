import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const RecommendedPage = lazy(() =>
  import('../pages/RecommendedPage/RecommendedPage')
);


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate replace to="/register" />} />
        <Route
          path="/register"
          // element={<RegisterPage
          element={
            <RestrictedRoute
              redirectTo="/recommended"
              component={<RegisterPage />}
            />
          }
        />

        {/* <Route
          path="/recommended"
          element={
            <PrivateRoute
              redirectTo="/recommended"
              component={<RecommendedPage />}
            />
          }
        /> */}
      </Route>
    </Routes>
  );
};
