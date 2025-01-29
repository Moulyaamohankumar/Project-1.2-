import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login';
import { Signup } from  './Components/signUp';
import { Home } from './page/home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} ></Route>
        <Route path="/Signup" element={<Signup />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
      </Routes>
    </>
  );
}

export default App;
