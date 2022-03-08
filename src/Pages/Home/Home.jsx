import React, { useEffect, useRef } from "react";
import { HomeStyled } from "./HomeStyled";
import Svg from "../../Components/SVG/Svg";
import { OuterLayout } from "../../Layout/Layout";
const Home = () => {
  return (
    <HomeStyled>
      <OuterLayout>
        <div className="home-header">
          <p>Ogunleye Oluwafemi</p>
          <p>Frontend Developer</p>
        </div>
        <div className="home-content">
          <h1>Hi there </h1>
          <p>Ogunleye here, Frontend Developer</p>
        </div>
        <Svg />
      </OuterLayout>
    </HomeStyled>
  );
};

export default Home;
