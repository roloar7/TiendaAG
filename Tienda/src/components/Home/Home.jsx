import Images from '../images';
import './Home.css'
import { Link } from "react-router-dom";
const Home = () => {
    return(
    <>
    <div className='home'>
       {/* Estructura del main */}
      <main className='main-container'>
        <section className='grid-container'>


          <Link to="/sneakers" className='container-hero-card'>
            <div className='imagen-box'>
              <img src={Images.zapatillas} alt="Sneakers" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>Sneakers</p>
            </div>
          </Link>
          

          <div className='container-hero-card'>
            <div className='imagen-box'>
              <img src={Images.essentialPantalon} alt="Product 2" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'> Pants & Shorts</p>
            </div>
          </div>
          <div className='container-hero-card'>
            <div className='imagen-box'>
              <img src={Images.remeras} alt="Product 3" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'> Tshirts </p>
            </div>
          </div>

          <div className='container-hero-card'>
            <div className='imagen-box'>
              <img src={Images.buzos} alt="Product 4" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>  Hoddie </p>
            </div>
          </div>

          {/* Estructura del header */}
          <div className='container-hero-card'>
            <div className='imagen-box'>
              <img src={Images.Gorras} alt="Product 5" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>  Cap </p>
            </div>
          </div>
          <div className='container-hero-card'>
            <div className='imagen-box'>
              <img src={Images.cinturones} alt="Product 6" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>  Belts </p>
            </div>
          </div>

          <div className='container-hero-card'>
            <div className='imagen-box'>
              <img src={Images.bolsos} alt="Product 6" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>  Bags </p>
            </div>
          </div>

          <div className='container-hero-card'>
            <div className='imagen-box'>
              <img src={Images.accesorios} alt="Product 7" />
            </div>
            <div className='titulo-card'>
              <p className='titulo'>  Accesories </p>
            </div>
          </div>

        </section>

        {/* Estructura productos destacados */}

        <section className='productos-destacados-section'>
          <div className='box-destacados'>
            <h2 className='destacados'>Productos Destacados</h2>
          </div>

          <div className='productos-destacados-container'>
            {/* Cards de productos destacados */}
            <div className='destacados-card'>
              <img src={Images.noctanegro} alt="" className='destacados-images' />
              <p className='title-destacados-card'>Nike x NOCTA Tech Fleece Hoodie & Joggers Set</p>
              <p className='price-destacados-card'>$80</p>
            </div>

            <div className='destacados-card'>
              <img src={Images.shortvalley} alt="" className='destacados-images' />
              <p className='title-destacados-card'>VALLEY DREAMS RHINESTONE BLACK DENIM SHORT</p>
              <p className='price-destacados-card'>$85</p>
            </div>

            <div className='destacados-card'>
              <img src={Images.corteizsupreme} alt="" className='destacados-images' />
              <p className='title-destacados-card'>Remera Supreme Corteiz Rules The World</p>
              <p className='price-destacados-card'>$30</p>
            </div>

            <div className='destacados-card'>
              <img src={Images.burberry} alt="" className='destacados-images' />
              <p className='title-destacados-card'>cinturón burberry</p>
              <p className='price-destacados-card'>$15</p>
            </div>
          </div>
        </section>
      </main> 
      </div>
    </>    
    )
}

export default Home