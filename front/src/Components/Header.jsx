import React from 'react'
import "../Css/Header.css"
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='mainPage'>
<div className='icon'>
<MenuBookSharpIcon  sx={{ width: "60px" , height: "40px"}}/> Learning
</div>
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
  Basic
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><Link to={"https://www.geeksforgeeks.org/html-tutorial/"}><button className="dropdown-item" type="button">Html</button></Link></li>
    <li><Link to={"https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"}><button className="dropdown-item" type="button">CSS</button></Link></li>
    <li><Link to={"https://getbootstrap.com/docs/5.0/getting-started/introduction/"}><button className="dropdown-item" type="button">Bootstrap</button></Link></li>

  </ul>
</div>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Back-End
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><Link to={"https://www.tutorialspoint.com/csharp/index.htm"}><button className="dropdown-item" type="button">C#</button></Link></li>
    <li><Link to={"https://www.geeksforgeeks.org/ruby-tutorial/"}><button className="dropdown-item" type="button">Ruby</button></Link></li>
    <li><Link to={"https://www.w3schools.com/go/"}><button className="dropdown-item" type="button">Golang</button></Link></li>
    <li><Link to={"https://www.tutorialspoint.com/cplusplus/index.htm"}><button className="dropdown-item" type="button">C++</button></Link></li>
   
  </ul>
</div>


<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Database
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><Link to={"https://www.geeksforgeeks.org/sql-tutorial/"}><button className="dropdown-item" type="button"> SQL</button></Link></li>
    <li><Link to={"https://firebirdsql.org/file/documentation/papers_presentations/html/paper-fb-macosx-getstart.html"}><button className="dropdown-item" type="button">FireBirdSql</button></Link></li>
  </ul>
</div>


<div className="dropdown">
  <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"100px"}}>
  PaidCource
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><Link to={"/AllCources"}><button className="dropdown-item" type="button">All Cources</button></Link></li>
    
  </ul>
</div>

    </div>
  )
}

export default Header