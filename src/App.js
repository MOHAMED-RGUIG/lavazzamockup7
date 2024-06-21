import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import CartDetailsScreen from './screens/CartDetailsScreen';
import Footer from './components/Footer';
import CartAllOrders  from './screens/CartAllOrders';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='https://lavazzamockup7.onrender.com/' element={<Homescreen />} />
          <Route path='https://lavazzamockup7.onrender.com/cart' element={<Cartscreen />} />
          <Route path='https://lavazzamockup7.onrender.com/register' element={<Registerscreen />} />
          <Route path='/login' element={<Loginscreen />} />
          <Route path="https://lavazzamockup7.onrender.com/orders" element={<CartDetailsScreen/>} />
          <Route path="https://lavazzamockup7.onrender.com/allorders" element={<CartAllOrders/>} />
        </Routes>
      </BrowserRouter>
      <Footer style={{position:'relative',bottom:'0'}} />
    </div>
  );
}

export default App;
