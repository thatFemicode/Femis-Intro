import React from "react";
import Svg from "../../Components/SVG/Svg";
import { OuterLayout } from "../../Layout/Layout";
import { AboutStyled } from "./AboutStyled";
import Logo from "../../Images/Logo.svg";
const About = () => {
  return (
    <AboutStyled>
      <OuterLayout>
        <div className="about-header">
          <img src={Logo} alt="" />
          <h1>About Oluwafemi</h1>
        </div>
        <div className="about-content"></div>
        <Svg />
      </OuterLayout>
    </AboutStyled>
  );
};

export default About;
