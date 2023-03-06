import Todo from './components/Todo';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';
import Login from './components/Login';


function App() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem('user-token');
    if (!userToken || userToken === 'undefined') {
      setIsAuth(false);
      navigate('/login')
    }else{
      setIsAuth(true);
    }

}

  useEffect(() => {
    console.log('checking token')
    console.log(isAuth);
    checkUserToken();
}, [isAuth]);

  
  return (
    <Routes>
 
        <Route path="/" element={<Layout isAuth={isAuth} checkUserToken={checkUserToken} />}>
        <Route index element={isAuth ?  <Todo /> : null} />
        <Route path="/about" element={isAuth ? <About/> :  null} />
        <Route path="/profile" element={isAuth ? <Profile/> : null} />
        <Route path="/login" element={<Login isAuth={isAuth}  checkUserToken={checkUserToken}  />} />

      </Route>
    </Routes>
  );
}

export default App;