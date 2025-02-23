import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 // Import the CSS
 import './signup.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  /**
   * 
   * async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}
   */

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/login", { email, password });
      
      window.open("http://localhost:3001/", "_blank");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="main">
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleSignup} className="signup-form">
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
        <button type="submit" className="signup-button">Login</button>
      </form>
      <p className="login-link">Dont't have an account? <Link to="/SignUp">Signup</Link></p>
    </div>
    </div>
  );
};

export default Login;

