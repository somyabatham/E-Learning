import React from 'react'
 import "../Css/AllCources.css"
 import angular from "../img/angular.jpeg"
 import aws from "../img/aws.png"
 import jscript from "../img/jscript.jpeg"
 import dart from "../img/dart.jpeg"
 import express from "../img/express.jpeg"
 import fulter from "../img/fulter.png"
 import java from "../img/java.jpeg"
 import mongodb from "../img/mongodb.png"
 import mysql from "../img/mysql.jpeg"
 import nextjs from "../img/nextjs.jpeg"
 import nodejs from "../img/nodejs.jpeg"
 import oracle from "../img/oracle.jpeg"
 import php from "../img/php.jpeg"
 import python from "../img/python.png"
 import react from "../img/react.jpeg"
 import reactnative from "../img/reactnative.jpeg"
 import salseforce from "../img/salseforce.jpeg"
 import tailwind from "../img/tailwind.jpeg"
 import vue from "../img/vue.png"
// import Tailwindc from "../Pages/Tailwindc"

import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import { Link } from 'react-router-dom'

function AllCources(){
  return (
<div>
<div className='heading'>
    <SignLanguageIcon sx={{ width: "60px" , height: "40px"}} />
     <h1>Welcome !!!</h1> <SignLanguageIcon sx={{ width: "60px" , height: "40px"}}  />
    </div>
<div className='table'>
<table  >
<tr>
   
    <td>
        <img src={tailwind} height={"200px"} width={"200px"}  alt=""/>
        <Link to={"/Tailwindc"}><p className='imgnaam'>
        Tailwind
        </p></Link>
    </td>

    
    <td>
     <img src={aws} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        Amazon Web Services
        </p></Link>  
    </td>
   
    <td>
     <img src={jscript} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        JavaScript
        </p></Link>
    </td>
</tr>

<tr> 
   
    <td>
        
     <img src={react} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        React.Js
        </p></Link>
    </td>
    
   <td>
   <img src={vue} height={"200px"} width={"200px"} alt=""/>
        <Link to={""}><p className='imgnaam'>
        Vue.Js
        </p></Link>
   </td>
       
       <td>
       <img src={angular} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        Angular.Js
        </p></Link>
       </td>
       
</tr>

<tr>
    
    <td>
    <img src={nodejs} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        Node.js
        </p></Link>
    </td>
    
    <td>
    <img src={express} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        Express.Js
        </p></Link>
    </td>
      
       
        <td>
        <img src={reactnative} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        ReactNative
        </p></Link>
        </td>
</tr>

<tr>
    
<td>
    <img src={python} height={"200px"} width={"200px"} alt=""/>
        <Link to={"/Python"}><p className='imgnaam'>
        Python
        </p></Link>
    </td>
    
    <td>
    <img src={dart} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        Dart
        </p></Link>
    </td>
      
       
        <td>
        <img src={fulter} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        Flutter
        </p></Link>
        </td>
</tr>


<tr>
    
    <td>
    <img src={java} height={"200px"} width={"200px"} alt=""/>
        <Link to={""}><p className='imgnaam'>
        Java
        </p></Link>
    </td>
    
    <td>
        <img src={salseforce} height={"200px"} width={"200px"} alt=""/>
        <Link to={""}><p className='imgnaam'>
        SalesForce
        </p></Link>
        </td>
      
       
        <td>
        <img src={mongodb} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        Mongodb
        </p></Link>
        </td>
</tr>

<tr>
    
    <td>
    <img src={mysql} height={"200px"} width={"200px"} alt=""/>
        <Link to={""}><p className='imgnaam'>
        MySql
        </p></Link>
    </td>
    
    <td>
    <img src={nextjs} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        Next.Js
        </p></Link>
    </td>
      
       
        <td>
        <img src={oracle} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        Oracle
        </p></Link>
        </td>
</tr>

<tr>
    
    <td>
    <img src={php} height={"200px"} width={"200px"} alt=""/>
       <Link to={""}> <p className='imgnaam'>
        Php
        </p></Link>
    </td>
    
    
      
       
        
</tr>



</table>
</div>
</div>
  )
}

export default AllCources