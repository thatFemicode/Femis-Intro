import React, { useEffect, useRef } from "react";
import { HomeStyled } from "./HomeStyled";
import Svg from "../../Components/SVG/Svg";

const Home = () => {
  return (
    <HomeStyled>
      <div className="home-header">
        <p>Ogunleye Oluwafemi</p>
      </div>
      <Svg />
    </HomeStyled>
  );
};

export default Home;
