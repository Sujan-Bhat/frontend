import React, { useEffect, useState } from "react";
import "../styles/forgot.css";

const forgot = () => {
  return (
    <div className="body1">
      <div className="row">
        <h1>Forgot Password</h1>
        <hr></hr>
        <div className="form-group">
            <div className="email-2">
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Enter your registered email to reset your password."
            required
          />
          </div>
        <div className="outside-button">
          <button
          className="button2" onclick="">Reset Password</button>
          </div>
        </div>
        <div className="footer">
            <div className="reg">
          <h5 >
            New here? <a href="/register">Sign Up.</a>
          </h5>
          </div>
          <div className="reg">
          <h5>
            Already have an account? <a href="/login">Sign In.</a>
          </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forgot;
