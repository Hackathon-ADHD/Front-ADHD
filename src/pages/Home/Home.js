import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("login");
  };
  return (
    <div>
      <button onClick={handleClickHome}>signup</button>
    </div>
  );
};

export default Home;
