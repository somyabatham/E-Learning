
import React from 'react'
import img from "../img/img.jpg"
import Layout from '../Components/Layout'
import img2 from "../img/img2.jpg"
import img3 from "../img/img3.jpg"

 import "../Css/MainPage.css"
function Mainpage() {
  return (
    <Layout>
      <div >
        
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
       <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
       <div className="carousel-inner" >
         <div className="carousel-item active">
           <img src={img}  height={"530px"} width={"1500px"} className="d-block " alt="..." />
         </div>
         <div className="carousel-item">
           <img src={img2} height={"530px"} width={"1500px"}  className="d-block " alt="..." />
         </div>
         <div className="carousel-item">
           <img src={img3} height={"530px"} width={"1500px"}  class="d-block " alt="..." />
         </div>
       </div>
       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
       </button>
       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
       </button>
        </div>
</div>
    </Layout>
  );
}

export default Mainpage