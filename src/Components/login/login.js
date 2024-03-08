import React, { useEffect, useState } from "react";
import "../styles/desforlog.css";
import { useLoginMutation } from "../../redux/api/authApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login, { isLoading, error, data }] = useLoginMutation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error, isAuthenticated]);

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    login(loginData);
  };

  return (
    <>
      
      <div className="body">
        {/* <img src="" alt="pizza-oven" className="pizza-oven-img"></img> */}
        <div className="container">
          <form action="#" method="POST" onSubmit={submitHandler}>
            <div className="login">
              <h2>SIGN IN</h2>
            </div>
            <hr></hr>
            <div className="e-mial">
              <label htmlFor="e-mails" className="label-for-email">
                
              </label>
              <input
                type="email"
                id="e-mails"
                placeholder="E-mail"
                name="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className="password">
              <label htmlFor="password" className="label-for-password">
                
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>

            <span className="forgot-password">
              <a href="/password/forgot">Forgot password?</a>
            </span>
            
            <span className="dont-have-account">
              <a href="/register">Signup</a>
            </span>
          
            <div className="login-btn">
              <button
                className="button1"
                type="Submit"
                id="sumbit"
                name="submit"
                value="Login"
                disabled={isLoading}
              >{isLoading?"Authenthicating...":"Login"}</button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Login;