import './App.css'
import Images from './images.jsx';
import Icons from './icons.jsx';

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

      {/* Estructura del main */}
      <main className='main-container'>
        <section className='grid-container'>
          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.zapatillas} alt="Product 1" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'> Sneakers </p>
            </div>
          </div>
          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.essentialPantalon} alt="Product 2" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'> Pants & Shorts</p>
            </div>
          </div>
          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.remeras} alt="Product 3" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'> Tshirts </p>
            </div>
          </div>

          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.buzos} alt="Product 4" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>  Hoddie </p>
            </div>
          </div>

          {/* Estructura del header */}
          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.Gorras} alt="Product 5" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>  Cap </p>
            </div>
          </div>
          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.cinturones} alt="Product 6" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>  Belts </p>
            </div>
          </div>

          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.bolsos} alt="Product 6" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>  Bags </p>
            </div>
          </div>

          <div className='container-card'>
            <div className='imagen-box'>
              <img src={Images.accesorios} alt="Product 7" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>  Accesories </p>
            </div>
          </div>

        </section>

        {/* Estructura productos destacados */}

        <section className='productos-destacados-container'>
          <div className='box-destacados'>
            <h2 className='destacados'>Productos Destacados</h2></div>
          <div className='section-articulos'>
            <div className='producto'>
              <img src={Images.noctanegro} alt="" className='card' />
              <p>Nike x NOCTA Tech Fleece Hoodie & Joggers Set</p>
              <p className='precio'>$80</p>




            </div>
            <div className='producto'>
              <img src={Images.shortvalley} alt="" className='card' />
              <p>VALLEY DREAMS RHINESTONE BLACK DENIM SHORT</p>
              <p className='precio'>$85</p>




            </div>
            <div className='producto'>
              <img src={Images.corteizsupreme} alt="" className='card' />
              <p> Remera Supreme Corteiz Rules The World </p>
              <p className='precio'>$30</p>


            </div>
            <div className='producto'>
              <img src={Images.burberry} alt="" className='card' />
              <p>cinturón burberry</p>
              <p className='precio'>$15</p>
            </div>
          </div>

        </section>

      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
