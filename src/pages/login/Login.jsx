import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userInputs, setUserInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await login(userInputs);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1 className="auth__title">Login</h1>
      <form className="auth__form">
        <input
          required
          placeholder="username"
          type="text"
          name="username"
          className="auth__form__username"
          onChange={changeHandler}
        />
        <input
          required
          placeholder="password"
          name="password"
          type="password"
          className="auth__form__password"
          onChange={changeHandler}
        />
        <button onClick={submitHandler} className="auth__form__btn">
          Login
        </button>
        {error && <p>{error}</p>}
        <span className="auth__form__option">
          Need an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
