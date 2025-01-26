import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login';
import { SignUp } from  './Components/signUp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
