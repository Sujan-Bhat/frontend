import React, { useEffect, useState } from "react";
import "srcComponents\forgot.css";

const forgot = () => {
  return (
    <div class="body">
      <div class="row">
        <h1>Forgot Password</h1>
        <div class="form-group">
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Enter your registered email to reset your password."
            required
          />

          <button onclick="">Reset Password</button>
        </div>
        <div class="footer">
          <h5>
            New here? <a href="#">Sign Up.</a>
          </h5>
          <h5>
            Already have an account? <a href="#">Sign In.</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default forgot;
