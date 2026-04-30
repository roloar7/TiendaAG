import Images from '../images';
import "../Home/Home.css";
import "./Sneakers.css";


const Home = () => {
    return (
        <>
            <main className='sneakers-container'>
                <aside className='asidebar-filter'> </aside>
                <div className='grid-box'>
                <div class="parent-grid">
                    <div class="div1" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                        <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div className="div2" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div className="div3" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div className="div4" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div className="div5" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div className="div6" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div className="div7" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div className="div8" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div class="div9" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div class="div10" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div class="div11" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div class="div12" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div class="div13" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div class="div14" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div class="div15" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                    <div class="div16" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                    </div>
                </div>
                </div>
            </main>
        </>
    )
}

export default Home