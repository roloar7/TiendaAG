import Images from '../images';
import "./Pants.css";
import { CaretBigDown } from '@boxicons/react';


const Pants = () => {
    return (
        <>
<<<<<<< Updated upstream
        <main className='sneakers-container'>
                <aside className='asidebar-filter'> 
                     <div className='title-filtros'><h3>Filtros</h3></div>
                    <div className='container-categorias'>
                        <details className='box-categorias'>
                            <summary className='summary'>
                                <p>Tipo De Prodcucto</p>
                                <span className='icon'>
                                    <CaretBigDown
                                        pack="filled"
                                        fill="#ffffff"

                                    />
                                </span>
                            </summary>
                            <div className='subcate'>
                                <label><input type="checkbox" /> Sneaker</label>
                                <label><input type="checkbox" /> Tshirts</label>
                                <label><input type="checkbox" /> Hoodie</label>
                                <label><input type="checkbox" /> Pants</label>
                                <label><input type="checkbox" /> Cap</label>
                                <label><input type="checkbox" /> Bags</label>
                                <label><input type="checkbox" /> Belts</label>
                            </div>
                        </details>

                        <details className='box-categorias'>
                            <summary className='summary'>
                                <p>Marcas</p>
                                <span className='icon'>
                                    <CaretBigDown
                                        pack="filled"
                                        fill="#ffffff"
                                    />
                                </span>
                            </summary>
                            <div className='subcate'>
                                <label><input type="checkbox" /> Nike</label>
                                <label><input type="checkbox" /> Jordan</label>
                                <label><input type="checkbox" /> Bape</label>
                                <label><input type="checkbox" /> Corteiz</label>
                                <label><input type="checkbox" /> Amiri</label>
                                <label><input type="checkbox" /> Syna World</label>
                                <label><input type="checkbox" /> Denim tears</label>
                                <label><input type="checkbox" /> Supreme</label>
                                <label><input type="checkbox" /> Essensiatls</label>
                                <label><input type="checkbox" /> Sp5der</label>
                                <label><input type="checkbox" /> Hellstar</label>
                                <label><input type="checkbox" /> Lous vuiton</label>
                                <label><input type="checkbox" /> Off-White</label>
                                <label><input type="checkbox" /> Nofs</label>
                                <label><input type="checkbox" /> Polo Ralph lauren</label>

                            </div>
                        </details>
                        <details className='box-categorias'>
                            <summary className='summary'>
                                <p>Talles</p>
                                <span>
                                    <CaretBigDown
                                        pack="filled"
                                        fill="#ffffff"

                                    />
                                </span>
                            </summary>
                            <div className='subcate'>
                                <label><input type="checkbox" /> 36</label>
                                <label><input type="checkbox" /> 38</label>
                                <label><input type="checkbox" /> 40</label>
                                <label><input type="checkbox" /> 40.5</label>
                                <label><input type="checkbox" /> 42</label>
                                <label><input type="checkbox" /> 42.5</label>
                                <label><input type="checkbox" /> 44</label>
                                <label><input type="checkbox" /> 44.5</label>
                                <label><input type="checkbox" /> 46</label>

                            </div>
                        </details>
                        <details className='box-categorias'>
                            <summary className='summary'>
                                <p>Color</p>
                                <span className='icon'>
                                    <CaretBigDown
                                        pack="filled"
                                        fill="#ffffff"

                                    />
                                </span>
                            </summary>
                            <div className='subcate'>
                                <label><input type="checkbox" /> </label>
                                <label><input type="checkbox" /> nike</label>
                                <label><input type="checkbox" /> nike</label>
                            </div>
                        </details>
                    </div>
                    <p></p>
                </aside>
                <div className='grid-box'>
                <div class="parent-grid">
                    <div class="div1" className='sneakers-card'>
                        <img src={Images.jordan11} alt="" className='img-sneakers-grid' />
                        <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div className="div2" className='sneakers-card'>
                       
                     <img src={Images.jordan15} alt="" className='img-sneakers-grid' />
                      <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div className="div3" className='sneakers-card'>
                        <img src={Images.jordan3} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div className="div4" className='sneakers-card'>
                        <img src={Images.jordan3black} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div className="div5" className='sneakers-card'>
                        <img src={Images.jordan4} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div className="div6" className='sneakers-card'>
                        <img src={Images.jordan42} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div className="div7" className='sneakers-card'>
                        <img src={Images.jordanred3} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div className="div8" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div class="div9" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div class="div10" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div class="div11" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div class="div12" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div class="div13" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div class="div14" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div class="div15" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                    <div class="div16" className='sneakers-card'>
                        <img src={Images.prueba} alt="" className='img-sneakers-grid' />
                         <p className='titulo-sneakers'>Product Name</p>
                        <p className='descripcion-sneakers'>Product Description</p>
                        <p className='precio-sneakers'>$ 99.99</p>
                    </div>
                </div>
                </div>
            </main>
               </>
=======
        
        </>
>>>>>>> Stashed changes
    )
}
     export default Pants