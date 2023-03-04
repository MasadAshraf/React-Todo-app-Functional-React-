import Todo from './components/Todo';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Profile from './components/Profile';
import { useState } from 'react';
import Login from './components/Login';


function App() {

  const [isAuth, setIsAuth] = useState(false);
  
  return (
    <Routes>
      <Route path="/" element={<Layout isAuth={isAuth} />}>
        <Route index element={isAuth? <Todo /> : null} />
        <Route path="/about" element={isAuth ? <About/> : null} />
        <Route path="/profile" element={isAuth ? <Profile/> : null} />
        <Route path="/login" element={<Login/>} />

      </Route>
    </Routes>
  );
}

export default App;