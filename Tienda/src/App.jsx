import './App.css'
import Icons from './icons.jsx';
import Home from './components/Home/Home.jsx';
import Sneakers from './components/Sneakers/Sneakers.jsx';
import Pants from './components/Pants/Pants.jsx';
import {  Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className='header'>
        <nav className='navbar'>
          <ul className='nav-logo'>
            <li>StockLA</li>
          </ul>

          <ul className='nav-links'>
            <li><Link to="/Home">Inicio</Link></li>
            <li><Link to="/">Shop</Link></li>
          </ul>

          <ul className='carrito-box'>
            <img src={Icons.carrito} alt="Carrito" />
            <li>Carrito (0)</li>
          </ul>
        </nav>
      </header>

      {/* RUTAS */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/Pants" element={<Pants />} />
      </Routes>

      {/* FOOTER */}
      <footer>

      </footer>
      
    </>
  );
}

export default App;
