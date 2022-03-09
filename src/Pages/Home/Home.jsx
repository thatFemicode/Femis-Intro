import React, { useEffect, useRef } from "react";
import { HomeStyled } from "./HomeStyled";
import Svg from "../../Components/SVG/Svg";
import { OuterLayout } from "../../Layout/Layout";
import SplitText from "../../utils/Split3.min";
import PrimaryButton from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import HomeAnimation from "./HomeAnimation";

const Home = () => {
  let header = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let screen = useRef(null);
  let body = useRef(null);
  let svg = useRef(null);
  let path = useRef(null);
  const button = useRef(null);
  const rotator = useRef(null);
  useEffect(() => {
    const split = new SplitText(text1, {
      type: "lines",
    });
    const spli = new SplitText(text2, {
      type: "lines",
    });
    let line1 = split.lines;
    let line2 = spli.lines;

    HomeAnimation(
      screen,
      svg,
      path,
      body,
      header,
      line1,
      line2,
      button.current,
      rotator.current
    );
  }, []);
  return (
    <>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}>
          <svg className="svg" viewBox="0 0 556 556" ref={(el) => (svg = el)}>
            <path
              ref={(el) => (path = el)}
              className="logo"
              fill="none"
              stroke="#000000"
              d="m 15.625507,46.199537 55.767886,-32.030352 55.623047,32.281229 -0.14485,64.311586 0.14485,-64.311586 55.76788,-32.030352 55.62305,32.281229 -0.14485,64.311579 -55.76788,32.03036 -55.62305,-32.28123 55.62305,32.28123 -0.14485,64.31158 -55.76788,32.03035 L 70.958866,207.10393 71.103708,142.79235 126.87159,110.762 71.103708,142.79235 15.480664,110.51112 Z"
            />
          </svg>
        </div>
      </div>
      <HomeStyled
        data-barba="container"
        ref={(el) => (body = el)}
        className="Headd"
      >
        <OuterLayout>
          <div className="home-header" ref={(el) => (header = el)}>
            <p>Ogunleye Oluwafemi</p>
            <p>Frontend Developer</p>
          </div>
          <div className="home-content">
            <h1 id="header-text" ref={(el) => (text1 = el)}>
              Hi there
            </h1>
            <p ref={(el) => (text2 = el)}>Oluwafemi here, Frontend Developer</p>
            <Link to="/about">
              <PrimaryButton ref={button} name={"About"} bgColor={"#333"} />
            </Link>
          </div>
          <Svg ref={rotator} />
        </OuterLayout>
      </HomeStyled>
    </>
  );
};

export default Home;
