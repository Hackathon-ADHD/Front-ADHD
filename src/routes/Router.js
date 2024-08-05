import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Notification from "../pages/Notification/Notification";
import Signup from "../pages/Signup/Signup";
import KakaoAuthRedirect from "../services/KakaoAuthRedirection";
import NaverAuthRedirect from "../services/NaverAuthRedirection";
import Diary from "../pages/Diary/Diary";
import Layout from "../Layout/Layout";
import DiaryReview from "../pages/Diary/DiaryReview";

import OneYearAgoToday from "../pages/OneYearAgoToday/OneYearAgoToday";
import DiaryGraph from "../pages/DiaryGraph/DiaryGraph";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="diary" element={<Diary />} />
        <Route path="review" element={<DiaryReview />} />
        <Route path="notification" element={<Notification />} />
        <Route path="oneyearagotoday" element={<OneYearAgoToday />} />
        <Route path="diary-graph" element={<DiaryGraph />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/kakao-login" element={<KakaoAuthRedirect />} />
      <Route path="/naver-login" element={<NaverAuthRedirect />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRouter;
