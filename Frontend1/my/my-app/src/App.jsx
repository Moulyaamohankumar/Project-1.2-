import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login';
import { Signup } from  './Components/signUp';
import { Home } from './page/home';
import { ProductForm } from './Components/productForm';
import { Productcard } from './Components/productCard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} ></Route>
        <Route path="/Signup" element={<Signup />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path='/productform' element={<ProductForm/>}/>
        <Route path ='/productCard' element={<Productcard/>}/>
      </Routes>
    </>
  );
}

export default App;
