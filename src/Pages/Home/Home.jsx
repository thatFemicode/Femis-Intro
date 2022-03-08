import React, { useEffect, useRef } from "react";
import { HomeStyled } from "./HomeStyled";
import Svg from "../../Components/SVG/Svg";
import { OuterLayout } from "../../Layout/Layout";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
const Home = () => {
  let header = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);

  useEffect(() => {
    const split = new SplitText(text1, {
      type: "lines",
    });

    const tl = gsap.timeline();
    tl.from(header, {
      opacity: 0,
      y: 100,
      duration: 1,
    }).from(split.lines, {
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);
  return (
    <HomeStyled>
      <OuterLayout>
        <div className="home-header" ref={(el) => (header = el)}>
          <p>Ogunleye Oluwafemi</p>
          <p>Frontend Developer</p>
        </div>
        <div className="home-content">
          <h1 id="header-text" ref={(el) => (text1 = el)}>
            Hi there
          </h1>
          <p ref={(el) => (text2 = el)}>Ogunleye here, Frontend Developer</p>
        </div>
        <Svg />
      </OuterLayout>
    </HomeStyled>
  );
};

export default Home;
