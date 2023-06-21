import React from 'react';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useAuth } from 'hooks';
import { PrivateRoute } from './privateRoute';
import { RestrictedRoute } from './restrictedRoute';
import { refreshUser } from 'redux/auth/operations';
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);

   return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />} />
          <Route path="/login" element={ <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />} />
           <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
        </Route>
      </Routes>
  
  );
}

  
// const divStyles = {
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'start',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101',
//   flexDirection: 'column',
// };
// App.prototype = {
//   filter: PropTypes.string,
//   contacts: PropTypes.number,
// };
