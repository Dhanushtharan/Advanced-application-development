import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <div className="body">
    <div className="login-container">
      <h2>Login</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="button1"><Link to="/home">Login</Link></button>
        <div className="register">
          <Link to="/Register"><p>New User?<a href="#">Register</a></p></Link>
        </div>
        <br></br>
        <br></br>
        <div className="register">
          <Link to="/admin"><p>If Admin?<a href="#">Login!</a></p></Link>
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default Login;
