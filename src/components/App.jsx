import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { Loader } from './Loader/Loader';
import { useAuth } from 'hooks';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RecommendedPage = lazy(() =>
  import('../pages/RecommendedPage/RecommendedPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isRefreshing } = useAuth();
  const [limit, setLimit] = useState(2);

  const updateLimit = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 767) {
      setLimit(2);
    } else if (windowWidth <= 1023) {
      setLimit(8);
    } else {
      setLimit(10);
    }
  };

  useEffect(() => {
    updateLimit();

    if (isLoggedIn) {
      return;
    }
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />} limit={limit}>
          <Routes>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/recommended"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/recommended"
                  component={<LoginPage />}
                />
              }
            />
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRoute
                    redirectTo="/register"
                    component={<RecommendedPage limit={limit} />}
                  />
                }
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};
