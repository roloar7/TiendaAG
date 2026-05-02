import Images from '../images';
import "./Sneakers.css";
import { CaretBigDown } from '@boxicons/react';

const Sneakers = () => {
    return (
        <>
            <main className='sneakers-container'>
                <div className='asidebar-filter-hitbox'></div>
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
                    <div className="grid-sneakers">
                        <div  className='sneakers-card'>
                            <div className='img-sneakers-box'>
                                <img src={Images.jordan11} alt="" className='img-sneakers-grid' />
                            </div>
                            <p className='titulo-sneakers'>Product Name</p>
                            <p className='descripcion-sneakers'>Product Description</p>
                            <p className='precio-sneakers'>$ 99.99</p>
                        </div>
                        <div className='sneakers-card'>
                            <div className='img-sneakers-box'>
                                <img src={Images.jordan15} alt="" className='img-sneakers-grid' />
                            </div>
                            <p className='titulo-sneakers'>Product Name</p>
                            <p className='descripcion-sneakers'>Product Description</p>
                            <p className='precio-sneakers'>$ 99.99</p>
                        </div>
                        <div  className='sneakers-card'>
                            <div className='img-sneakers-box'>
                                <img src={Images.jordan3} alt="" className='img-sneakers-grid' />
                            </div>
                            <p className='titulo-sneakers'>Product Name</p>
                            <p className='descripcion-sneakers'>Product Description</p>
                            <p className='precio-sneakers'>$ 99.99</p>
                        </div>
                        <div className='sneakers-card'>
                            <div className='img-sneakers-box'>
                                <img src={Images.jordan3black} alt="" className='img-sneakers-grid' />
                            </div>
                            <p className='titulo-sneakers'>Product Name</p>
                            <p className='descripcion-sneakers'>Product Description</p>
                            <p className='precio-sneakers'>$ 99.99</p>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}

export default Sneakers