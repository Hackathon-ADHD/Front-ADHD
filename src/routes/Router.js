import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import GoogleAuthRedirect from "../pages/Login/GoogleAuthRedirect";
import KakaoAuthRedirect from "../pages/Login/KakaoAuthRedirection";
// import NaverAuthRedirect from "../pages/Login/NaverAuthRedirection";
import Signup from "../pages/Signup/Signup";
import Diary from "../pages/Diary/Diary";
import Layout from "../Layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="diary" element={<Diary />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/google-login" element={<GoogleAuthRedirect />} />
      <Route path="/kakao-login" element={<KakaoAuthRedirect />} />
      {/* <Route path="/naver-login" element={<NaverAuthRedirect />} /> */}
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRouter;
