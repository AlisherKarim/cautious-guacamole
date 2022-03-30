import { Route, Routes } from 'react-router-dom';
import React, { useEffect} from 'react';

import Landing from './components/Landing';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from './routes/LoginPage';
import SignUpPage from './routes/SignUpPage';
import AdminPage from './routes/AdminPage';
import NavBar from './components/NavBar';

import {login, logout} from './reducers/auth/userSlice'
import { useSelector, useDispatch } from 'react-redux';
import ConnectForm from './components/ConnectForm';
import CollectedInfoPage from './routes/CollectedInfoPage';
import CollectionPage from './routes/CollectionPage';

function App() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogin = (usr) => {
    dispatch(login(usr));
  }

  const handleLogOut = () => {
    dispatch(logout());
  }

  return (
    <>
      <NavBar handleLogOut = {handleLogOut} user = {user}/>
      <Routes>
          <Route path = "/" element={<Landing />} />
          <Route path = '/login' element = {<LoginPage handleLogin = {handleLogin} />} />
          <Route path = '/signup' element = {<SignUpPage handleLogin = {handleLogin}/>} />
          <Route path = '/admin' element={  
            <ProtectedRoute user = {user}>
              <AdminPage/>
            </ProtectedRoute>
          } />
          <Route path = 'connect' element = { 
            <ProtectedRoute user = {user}>
              <ConnectForm user = {user}/>
            </ProtectedRoute> 
          }></Route>
          <Route path = 'collections' element = { 
            <ProtectedRoute user = {user}>
              <CollectedInfoPage user = {user}/>
            </ProtectedRoute> 
          }></Route>
          <Route path='/collections/:id' element = {
            <ProtectedRoute user={user}>
              <CollectionPage user={user} />
            </ProtectedRoute>
          }/>
      </Routes>
    </>
  );
}

export default App;
