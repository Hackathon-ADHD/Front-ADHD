import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignupNickname from "../pages/Login/SignupNickname";
import GoogleAuthRedirect from "../pages/Login/GoogleAuthRedirect";
import Signup from "../pages/Signup/Signup";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/google-login" element={<GoogleAuthRedirect />} />
            <Route path="/signupnickname" element={<SignupNickname />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default AppRouter;
