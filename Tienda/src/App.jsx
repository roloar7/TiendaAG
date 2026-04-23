import './App.css'
import Images from './images.jsx';

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
          <ul className='carrito-'>
            <li> <a href=""> Carrito (0) </a> </li>
          </ul>
        </nav>
      </header>

      {/* Estructura del main */}
      <main className='main-container'>
        <section className='grid-container'>
          <div className='contenedor-card'>
            <div className='imagen-box'>
              <img src={Images.essentialUno} alt="Product 1" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'> Essential </p>
            </div>
          </div>
          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.essentialPantalon} alt="Product 2" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'> Essential Pantalon</p>
            </div>
          </div>
          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.Gorras} alt="Product 3" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'> Essential Pantalon</p>
            </div>
          </div>
          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.Supreme} alt="Product 4" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'> Essential Pantalon</p>
            </div>
          </div>
        </section>

        <section>

        </section>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
