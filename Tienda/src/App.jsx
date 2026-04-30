import './App.css'
import Icons from './icons.jsx';
import Home from './components/Home/Home.jsx';
import Sneakers from './components/Sneakers/Sneakers.jsx';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className='header'>
        <nav className='navbar'>
          <ul className='nav-logo'>
<<<<<<< HEAD
            <li>StockLA</li>
=======
            <li> <Link to="/Home"> STOCKLA </Link> </li>
>>>>>>> eb34bbe84d220b4abd130cbfcdceb08601fe6a30
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
      </Routes>

      {/* FOOTER */}
      <footer>

      </footer>
    </>
  );
}

export default App;
