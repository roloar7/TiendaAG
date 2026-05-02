import { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Images from '../images';
import './Home.css'
import { ChevronLeftCircle, ChevronRightCircle } from '@boxicons/react';


const Home = () => {

  const listRef = useRef(null)
  const [clickingLeft, setClickingLeft] = useState(false)
  const [clickingRight, setClickingRight] = useState(false)

  const smoothScroll = (direction) => {
  const el = listRef.current
  const distance = direction === 'right' ? 370 : -370
  const duration = 300    // ms — cuanto más alto más lento y suave
  const start = el.scrollLeft
  const startTime = performance.now()

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // easing: easeInOutQuart — arranca lento, acelera, frena suave
    const ease = progress < 1
      ? 1 * progress ** 4
      : 1 - Math.pow(2, -10 * progress)

    el.scrollLeft = start + distance * ease

    if (progress < 1) requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}

const scrollRight = () => {
  setClickingRight(true)
  smoothScroll('right')
  setTimeout(() => setClickingRight(false), 400)
}

const scrollLeft = () => {
  setClickingLeft(true)
  smoothScroll('left')
  setTimeout(() => setClickingLeft(false), 400)
}

  return (
    <>
      {/* Estructura del main */}
      <main className='main-container'>

        <section className='banner-container'>
          <div className='banner'></div>
        </section>

        {/* Estructura productos destacados */}

        <section className='productos-destacados-section'>
          <div className='box-destacados'>
            <h2 className='destacados'>Productos Destacados</h2>
          </div>

          <div className='productos-destacados-container' ref={listRef}>
            {/* Cards de productos destacados */}

            <div className='destacados-card'>
              <img src={Images.noctanegro} alt="" className='destacados-images' />
              <p className='title-destacados-card'>Nike x NOCTA Tech Fleece Hoodie & Joggers Set</p>
              <p className='price-destacados-card'>$80</p>
            </div>

            <div className='destacados-card'>
              <img src={Images.noctanegro} alt="" className='destacados-images' />
              <p className='title-destacados-card'>Nike x NOCTA Tech Fleece Hoodie & Joggers Set</p>
              <p className='price-destacados-card'>$80</p>
            </div>
            <div className='destacados-card'>
              <img src={Images.noctanegro} alt="" className='destacados-images' />
              <p className='title-destacados-card'>Nike x NOCTA Tech Fleece Hoodie & Joggers Set</p>
              <p className='price-destacados-card'>$80</p>
            </div>
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
              <img src={Images.cinturon} alt="" className='destacados-images' />
              <p className='title-destacados-card'>cinturón burberry</p>
              <p className='price-destacados-card'>$15</p>
            </div>

          </div>

          <div
            className={`arrow-left-productos-destacados ${clickingLeft ? 'arrow-clicking' : ''}`}
            onClick={scrollLeft}
          >
            <ChevronLeftCircle fill='#f0f0f0' size="lg" />
          </div>
          
          <div
            className={`arrow-right-productos-destacados ${clickingRight ? 'arrow-clicking' : ''}`}
            onClick={scrollRight}
          >
            <ChevronRightCircle 
            fill='#f0f0f0' size="lg" 
            />
          </div>

        </section>

        {/* Estructura Categorias */}
        <section className='grid-categorias-container'>
          <div className='box-categorias'>
            <h2 className='categorias'> Categorias </h2>
          </div>

          <div className="grid-categorias">

            <Link to="/Sneakers" className='container-hero-card'>
              <div className='imagen-box'>
                <img src={Images.zapatillas} alt="Sneakers" />
              </div>
              <div className='titulo-card'>
                <p className='titulo'>Sneakers</p>
              </div>
            </Link>
            <Link to="/Pants" className='container-hero-card'>
              <div className='imagen-box'>
                <img src={Images.essentialPantalon} alt="Product 2" />
              </div>
              <div className='titulo-card'>
                <p className='titulo'> Pants & Shorts</p>
              </div>
            </Link>


            <Link to="/Tshirts" className='container-hero-card'>
              <div className='imagen-box'>
                <img src={Images.remeras} alt="Product 3" />
              </div>
              <div className='titulo-card'>
                <p className='titulo'> Tshirts </p>
              </div>
            </Link>


            <Link to="/hoodie" className='container-hero-card'>
              <div className='imagen-box'>
                <img src={Images.buzos} alt="Product 4" />
              </div>
              <div className='titulo-card'>
                <p className='titulo'>  Hoddie </p>
              </div>
            </Link>

            {/* Estructura del header */}
            <Link to="/cap" className='container-hero-card'>
              <div className='imagen-box'>
                <img src={Images.Gorras} alt="Product 5" />
              </div>
              <div className='titulo-card'>
                <p className='titulo'>  Cap </p>
              </div>
            </Link>

            <Link to="/belts" className='container-hero-card'>
              <div className='imagen-box'>
                <img src={Images.cinturones} alt="Product 6" />
              </div>
              <div className='titulo-card'>
                <p className='titulo'>  Belts </p>
              </div>
            </Link>

            <Link to="/Bags" className='container-hero-card'>
              <div className='imagen-box'>
                <img src={Images.bolsos} alt="Product 6" />
              </div>
              <div className='titulo-card'>
                <p className='titulo'>  Bags </p>
              </div>
            </Link>

            <Link to="/Accesories" className='container-hero-card'>
              <div className='imagen-box'>
                <img src={Images.accesorios} alt="Product 7" />
              </div>
              <div className='titulo-card'>
                <p className='titulo'>  Accesories </p>
              </div>
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}

export default Home