// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout";
import Forgot from './Components/forgotpass/forgotpassword';
import Signup from './Components/signup/signup';
import Login from './Components/login/login';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/password/forgot" element={<Forgot />} />
      </Routes>
    </Router>
  );
};

export default App;
