import React from "react";
import Svg from "../../Components/SVG/Svg";
import { OuterLayout } from "../../Layout/Layout";
import { AboutStyled } from "./AboutStyled";
import Logo from "../../Images/Logo.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Button/Button";
const About = () => {
  const rotate = true;
  return (
    <AboutStyled>
      <OuterLayout>
        <div className="about-header">
          <img src={Logo} alt="" />
          <h1>About Oluwafemi</h1>
        </div>
        <div className="about-content">
          <p className="top-text">
            Oluwafemi is a Frontend Developer from Lagos, Nigeria looking to
            break into the tech space and collaborate to create interactive web
            products.
          </p>
          <p className="mid-text">
            "Being the best version of myself at what i do is something i strive
            to achieve"
          </p>
          <div className="about-links">
            <Link to="/">
              <PrimaryButton rotate={rotate} name={"Prev"} bgColor={"#333"} />
            </Link>
            <Link to="/volunteer">
              <PrimaryButton name={"Next"} bgColor={"#333"} />
            </Link>
          </div>
        </div>

        <Svg />
      </OuterLayout>
    </AboutStyled>
  );
};

export default About;
