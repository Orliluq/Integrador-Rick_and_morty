import React, { useState } from "react";
import style from "./loginForm.module.css";
import background from "../../assets/RZxQ.gif";
import validate from "../../views/utils/validation";

function LoginForm({ login }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({email: "", password: ""});

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

  function handleSubmit(e) {
    e.preventDefault(); 
    
    if (!errors.email && !errors.password) {
      login(user);
    } else {
      alert("Incorrect data");
    }
  }


  return (
    <div className={style.background}>
      <div className={style.contenedor}>
        <div className={style.login}>
          <form onSubmit={handleSubmit}>
            <h2 className={style.rmlogo}>Rick and Morty</h2>
            <div className={style.credentialsContainer}>
              <label htmlFor="username">Username</label>
              <input
                id="email"
                type="text"
                placeholder="wubalubadubdub@flarg.com"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              {errors.email && (
                <h5 style={{ color: "red" }}>
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
                <h5 style={{ color: "red" }}>
                  <span>{errors.password}</span>
                </h5>
              )}
            </div>
            <button type="submit" className={style.submitBtn}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;