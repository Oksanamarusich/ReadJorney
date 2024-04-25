import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { GlobalStyle } from './GlobalStyle';
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

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);
  
  return (<>
    <GlobalStyle />
    {isRefreshing ? (
      <Loader />
    ) : (
      <Suspense fallback={<Loader />}>
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
                <Route index element={
            <PrivateRoute
              redirectTo="/register"
              component={<RecommendedPage />}
            />
          } />
               <Route
          path="/recommended"
          element={
            <PrivateRoute
              redirectTo="/recommended"
              component={<RecommendedPage />}
            />
          }
        />
              
             </Route>
            
        </Routes>
      </Suspense>)}
        
  </>)
}
 
    
    
//     <>
//     { isRefreshing?(): ()}
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Navigate replace to="/register" />} />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute
//               redirectTo="/recommended"
//               component={<RegisterPage />}
//             />
//           }
//         />

//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute
//               redirectTo="/recommended"
//               component={<LoginPage />}
//             />
//           }
//         />

//         <Route
//           path="/recommended"
//           element={
//             <PrivateRoute
//               redirectTo="/recommended"
//               component={<RecommendedPage />}
//             />
//           }
//         />
//       </Route>
//     </Routes>
//   );
// };
