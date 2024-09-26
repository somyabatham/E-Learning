import React from "react";
import "../Css/FrontPage.css";
//  import "../Css/Home.css"
import { Link } from "react-router-dom";
function FrontPage(){
  return (
    <div
      className="img"
      style={{
        backgroundImage: `url(${"https://img.freepik.com/premium-photo/pens-pencils-books-glasses-table_89381-3982.jpg?w=996"})`,
      }}
    >
          <div className="dropdown">
      
          <Link to={"/Rajistration"}>
            <button >Registation</button>
          </Link>
          <Link to={"/Login"}>
            <button>Login</button>
          </Link>
        
      </div>
      
        <p className="nav">WELCOME TO THE</p>
      
     
    </div>
  );
};

export default FrontPage;
