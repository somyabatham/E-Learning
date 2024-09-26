import  { React,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/Login.css"

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          Navigate("/Mainpage");
          alert("Wellcome to main page")
        }
      })
      .catch((err) => console.log(err), );
  };

  return (
    
    <div className="login">
      <div
      className="imgl"
      style={{
        backgroundImage: `url(${"https://png.pngtree.com/thumb_back/fh260/background/20220112/pngtree-glass-morphim-effect-registration-banner-with-gradient-blue-image_934693.jpg"})`,
      }}
     >
      </div>
      <div className="box">
        <form action="/login" method="post" onSubmit={handleSubmit}>
          <h1>Login Page</h1>
          {/* <marquee behavior="" direction="right"><h1>Login </h1></marquee> */}
          <br />
          <label htmlFor="email">Enter your email.</label>
          <br />
          <input type="text" id="name" name="email"             placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}/> <br />
          <label htmlFor="password">Password.</label>
          <br />
          <input type="password" id="password"             placeholder="Password"
          name='password' onChange={(e)=>setPassword(e.target.value)}/> <br /> <button type="submit">Login</button>
          <input type="reset" className="btn"  />
        </form>
       
      
     </div>
    </div>
  );
}

export default Login;
