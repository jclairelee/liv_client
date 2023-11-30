import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const changeHandler = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
    console.log(userInputs);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/register", userInputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1 className="auth__title">Register</h1>
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
          placeholder="email"
          type="text"
          name="email"
          className="auth__form__email"
          onChange={changeHandler}
        />
        <input
          required
          placeholder="password"
          type="password"
          name="password"
          className="auth__form__password"
          onChange={changeHandler}
        />
        <button onClick={submitHandler} className="auth__form__btn">
          Register
        </button>
        <span className="auth__form__option">
          Already have an account? <Link to="/Login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
