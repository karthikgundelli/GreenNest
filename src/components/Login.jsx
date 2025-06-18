import React from 'react';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const navigate = useNavigate(); // for navigation

  const { email, password } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Signup successful!");
      console.log("Signed up:", userCredential.user);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Email already in use. Try signing in.");
      } else {
        setError(err.message);
      }
    }
  };

  const signin = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Login successful!");
      console.log("Signed in:", userCredential.user);
      navigate("/"); // 🚀 Redirect to Home page
    } catch (err) {
      if (err.code === "auth/invalid-credential" || err.code === "auth/user-not-found") {
        setError("Invalid email or password.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div>
      <center>
        <form autoComplete='off'>
          <h1>Login to get started</h1>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          /> <br /><br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
          /> <br /><br />
          <button onClick={signin}>Sign In</button> &nbsp;
          <button onClick={signup}>Sign Up</button> <br /><br />
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </center>
    </div>
  );
};

export default Login;
