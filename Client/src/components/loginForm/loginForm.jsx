import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import style from "./loginForm.module.css";
import validate from "../../views/utils/validation";
import { useUser } from "../register/useUser";

function LoginForm({ onLogin }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  }

  const { isLoginLoading, login, isLogged } = useUser();

  async function handleLogin() {
    try {
      await login(user.email, user.password);
      onLogin && onLogin();
    } catch (error) {
      alert("Incorrect credentials");
    }
  }

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
      onLogin && onLogin();
    }
  }, [isLogged, navigate, onLogin]);

  const status = "";


  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className={style.background}>
          <div className={style.contenedor}>
            <div className={style.login}>
              {isLoginLoading && <strong>Checking credentials...</strong>}
              {!isLoginLoading && (
                <>
                  <h2 className={style.rmlogo}>Rick and Morty</h2>
                  <div className={style.credentialsContainer}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="text"
                      placeholder="wubalubadubdub@flarg.com"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <h5 style={{ color: 'red' }}>
                        <span>{errors.email}</span>
                      </h5>
                    )}
                  </div>
                  <div className={style.credentialsContainer}>
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <h5 style={{ color: 'red' }}>
                        <span>{errors.password}</span>
                      </h5>
                    )}
                  </div>
                  <button type="submit" className={style.submitBtn}>
                    Login
                  </button>
                  <button type="button" className={style.submitBtn} onClick={() => navigate("/signup")}>
                    Sign Up
                  </button>
                  {status && (
                    <div>
                      {status === 409 && <p>User already exists.</p>}
                      {status === 201 && <p>Registration successful.</p>}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
