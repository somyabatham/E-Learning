import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/Registation.css";

function Rajistration() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [password, setPassword] = useState();
  const [conpassword, setConpassword] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !state || !city || !password || !conpassword) {
      setError("All fields are required");
      alert("All fields are required please fill the all fields")

      return;
    }

    if (password !== conpassword) {
      setError("Passwords do not match");
      alert("Passwords do not match please enter the valid password")
      return;
    }
    
    // Check if email ends with "@gmail.com"
    if (!email.endsWith("@gmail.com")) {
      setError("Please enter a Gmail address");
      alert("please enter the valid email address")
      return;
    }


    
    // Password security checks
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (!/\d/.test(password)) {
      setError("Password must contain at least one number");
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    // Reset error and show loading state
    setError("");
    setLoading(true);
try{
    axios
      .post("http://localhost:5001/register", {
        name,
        email,
        state,
        city,
        password,
        conpassword,
      })
      Navigate("/Mainpage");
      
      alert("Registration successful!");
      // resetForm();
      console.log(response.data);
    } catch (err) {
      // If there's an error, show the error message and hide loading state
      // setLoading(false);
       setError("Registration failed. Please try again....");
      console.error("Registration error:", err);
    }
  };

  return (
    <div
      className="img"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/realistic-glassmorphism-background_23-2149441716.jpg")`,
      }}
    >
      <h2>Welcome to Registration Page</h2>
      <div className="form_div">
        <form className="fo_rm" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="state">State:</label>
          <br />
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
          />
          <br />
          <label htmlFor="city">City:</label>
          <br />
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label htmlFor="conpassword">Confirm Password:</label>
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            name="conpassword"
            id="conpassword"
            onChange={(e) => setConpassword(e.target.value)}
          />
          <br />
          <br />

          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Signup"}
          </button>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Rajistration;
