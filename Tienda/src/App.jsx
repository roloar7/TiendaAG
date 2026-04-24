import './App.css'

import Icons from './icons.jsx';
import Home from './components/Home/Home.jsx';

function App() {

  return (
    <>
      {/* Estructura del header */}
      <header className='header'>
        <nav className='navbar'>
          <ul className='nav-logo'>
            <li>Logo</li>
          </ul>
          <ul className='nav-links'>
            <li> <a href=""> Inicio </a> </li>
            <li> <a href=""> Shop </a> </li>
          </ul>
          <ul className='carrito-box'>
            <img src={Icons.carrito} alt="Carrito" />
            <li> <a href=""> Carrito (0) </a> </li>
          </ul>
        </nav>
      </header>
    
      <Home></Home>

      <footer>

      </footer>
    </>
  )
}

export default App
