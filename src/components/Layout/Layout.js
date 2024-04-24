import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'hooks';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useAuth();

  return isLoggedIn ? (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  ) : (
    <Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
