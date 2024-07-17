import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { GlobalStyle } from "./assets/styles/globalStyle";
import SignupNickname from "./pages/Login/SignupNickname";
import GoogleAuthRedirect from "./pages/Login/GoogleAuthRedirect";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google-login" element={<GoogleAuthRedirect />} />
        <Route path="/signupnickname" element={<SignupNickname />} />
      </Routes>
    </>
  );
}

export default App;
