import React, { useEffect, useRef } from "react";
import Svg from "../../Components/SVG/Svg";
import { OuterLayout } from "../../Layout/Layout";
import { AboutStyled } from "./AboutStyled";
import Logo from "../../Images/Logo.svg";
import SplitText from "../../utils/Split3.min";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Button/Button";
import AboutAnimation from "./AboutAnimation";
import PrevButton from "../../Components/Button/PrevButton";

const About = () => {
  const header = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  const rotator = useRef(null);
  const button1 = useRef(null);
  const button2 = useRef(null);
  let demo = useRef(null);

  useEffect(() => {
    const split = new SplitText(text1, {
      type: "words",
      linesClass: "lineChildren",
    });

    const spli = new SplitText(text2, {
      type: "words",
    });
    let line1 = split.words;
    let line2 = spli.words;
    AboutAnimation(
      header.current,
      line1,
      line2,
      button1.current,
      button2.current,
      rotator.current,
      demo
    );
  }, []);
  return (
    <AboutStyled ref={(el) => (demo = el)}>
      <OuterLayout>
        <div className="about-header" ref={header}>
          <img src={Logo} alt="" />
          <h1>About Oluwafemi</h1>
        </div>
        <div className="about-content">
          <div className="top-text" ref={(el) => (text1 = el)}>
            Oluwafemi is a Frontend Developer from Lagos, Nigeria looking to
            break into the tech space and collaborate to create interactive web
            products.
          </div>
          <div className="mid-text" ref={(el) => (text2 = el)}>
            "Being the best version of myself at what i do is something i strive
            to achieve"
          </div>
          <div className="about-links">
            <Link to="/">
              <PrevButton ref={button2} name={"Prev"} bgColor={"#333"} />
            </Link>
            <Link to="/volunteer">
              <PrimaryButton ref={button1} name={"Next"} bgColor={"#333"} />
            </Link>
          </div>
        </div>

        <Svg ref={rotator} />
      </OuterLayout>
    </AboutStyled>
  );
};

export default About;
