import React, { useEffect, useRef } from "react";
import { HomeStyled } from "./HomeStyled";
import Svg from "../../Components/SVG/Svg";
import { OuterLayout } from "../../Layout/Layout";
import gsap from "gsap";
const Home = () => {
  let header = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  return (
    <HomeStyled>
      <OuterLayout>
        <div className="home-header" ref={(el) => (header = el)}>
          <p>Ogunleye Oluwafemi</p>
          <p>Frontend Developer</p>
        </div>
        <div className="home-content">
          <h1 ref={(el) => (text1 = el)}>Hi there </h1>
          <p ref={(el) => (text2 = el)}>Ogunleye here, Frontend Developer</p>
        </div>
        <Svg />
      </OuterLayout>
    </HomeStyled>
  );
};

export default Home;
