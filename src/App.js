import Todo from './components/Todo';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux'
import { setAuthPayload } from './store/reducers/authSlice';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  useEffect(() => {
    const userToken = localStorage.getItem('user-token');
    if (!userToken || userToken === 'undefined') {
      dispatch( setAuthPayload(false))
      navigate('/login')
    }else{
      dispatch( setAuthPayload(true))
    }
}, [isAuth]);
  
  
  return (
    <Routes>
 
        <Route path="/" element={<Layout />}>
        <Route index element={<>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login />} />

      </Route>
    </Routes>
  );
}

export default App;