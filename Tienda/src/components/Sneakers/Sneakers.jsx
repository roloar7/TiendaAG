import Images from '../images';
import "../Home/Home.css";
import "./Sneakers.css";


const Home = () => {
    return(
        <>



      <header>
        <div className="parent">
          <div className="div1">1</div>

          <div className="imgsnk">
         <img src={Images.bolsos} alt="" className='destacados-images' />
            <p className="title-destacados-card"></p>
            <p className="price-destacados-card"></p>
          </div>

          <div className="div2">2</div>
          <div className="div3">3</div>
          <div className="div4">4</div>
          <div className="div5">5</div>
          <div className="div6">6</div>
          <div className="div7">7</div>
          <div className="div8">8</div>
          <div className="div9">9</div>
          <div className="div10">10</div>
          <div className="div11">11</div>
          <div className="div12">12</div>
          <div className="div13">13</div>
          <div className="div14">14</div>
          <div className="div15">15</div>
          <div className="div16">16</div>
          <div className="div17">17</div>
          <div className="div18">18</div>
          <div className="div19">19</div>
          <div className="div20">20</div>
        </div>

        <img
          src={Images.prueba}
          alt=""
          className="prueba"
        />
      </header>
    </>
  );
};



export default Home