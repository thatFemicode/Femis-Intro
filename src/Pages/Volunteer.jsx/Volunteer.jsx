import React, { useEffect, useRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { VolunteerStyled } from "./VoulteerStyled";
import Logo from "../../Images/Logo.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Button/Button";
import PrevButton from "../../Components/Button/PrevButton";
import VolunteerAnimation from "./VolunteerAnimation";
import SplitText from "../../utils/Split3.min";

const Volunteer = () => {
  const header = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  const button1 = useRef(null);
  const button2 = useRef(null);
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
    VolunteerAnimation(
      header.current,
      line1,
      line2,
      button1.current,
      button2.current
    );
  }, []);
  return (
    <VolunteerStyled>
      <OuterLayout>
        <div className="volunteer-header" ref={header}>
          <h1> Frontend Developer</h1>
          <img src={Logo} alt="" />
        </div>
        <div className="volunteer-content">
          <p ref={(el) => (text1 = el)}>
            Oluwafemi is looking to volunteer remotely as a
            <span> frontend developer </span>
            for organizations looking for volunteers and also collaborate with
            developers, creatives and designers.
          </p>
          <div className="mid-text" ref={(el) => (text2 = el)}>
            I believe i have what it takes to make an impact in creating amazing
            web experiences
          </div>
          <div className="volunteer-links">
            <Link to="/about">
              <PrevButton ref={button2} name={"Prev"} bgColor={"#333"} />
            </Link>
            <Link to="/contact">
              <PrimaryButton ref={button1} name={"Next"} bgColor={"#333"} />
            </Link>
          </div>
        </div>
      </OuterLayout>
    </VolunteerStyled>
  );
};

export default Volunteer;
