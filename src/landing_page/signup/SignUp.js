// import React, { useState } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:7000/signup", { email, password });
//       window.open("http://localhost:3001/", "_blank");

//     } catch (error) {
//       console.error("Signup failed", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
 // Import the CSS
import './signup.css'
const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/signup", { email, password,username });
      window.open("https://main-phi-bice.vercel.app/", "_blank"); // Navigate to Dashboard
    } catch (error) {
      console.error("Signup failed", error);
    }
  };
  

  return (
    <div className="main">
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="signup-form">
      <input 
          type="username" 
          placeholder="UserName" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="signup-button">Signup</button>
      </form>
      <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
    </div>
    </div>
  );
};

export default Signup;
