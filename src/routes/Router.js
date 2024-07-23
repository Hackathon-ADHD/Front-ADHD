import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignupTest from "../pages/Login/SignupTest";
import GoogleAuthRedirect from "../pages/Login/GoogleAuthRedirect";
import Signup from "../pages/Signup/Signup";
import KakaoAuthRedirect from "../pages/Login/KakaoAuthRedirection";
// import NaverAuthRedirect from "../pages/Login/NaverAuthRedirection";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/google-login" element={<GoogleAuthRedirect />} />
      <Route path="/kakao-login" element={<KakaoAuthRedirect />} />
      {/* <Route path="/naver-login" element={<NaverAuthRedirect />} /> */}
      <Route path="/signuptest" element={<SignupTest />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRouter;
