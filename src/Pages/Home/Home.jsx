import React from "react";
import { HomeStyled } from "./HomeStyled";
import logo from "../../Images/";
const Home = () => {
  return (
    <HomeStyled>
      <img src={logo} alt="" />
    </HomeStyled>
  );
};

export default Home;
