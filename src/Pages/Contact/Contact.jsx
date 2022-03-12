import React, { useEffect, useRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { ContactStyled } from "./ContactStyled";
import Logo from "../../Images/Logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import contactAnimation from "./ContactAnimation";

import SplitText from "../../utils/Split3.min";
const Contact = () => {
  // const [hours, setHours] = useState();
  // const [mins, setMins] = useState();
  // const [greet, setGreet] = useState();
  const header = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let bottom = useRef(null);
  let demo = useRef(null);
  // Time function
  // const getTime = () => {
  //   let currentTime = new Date();
  //   let hours = currentTime.getHours();
  //   let mins = currentTime.getMinutes();
  //   let greet = "";
  //   if (hours >= 1 && hours <= 11) {
  //     greet = "Morning";
  //   } else if (hours >= 12 && hours <= 17) {
  //     greet = "Afternoon";
  //   } else {
  //     greet = "evening";
  //   }
  //   if (mins < 10) {
  //     mins = "0" + mins;
  //   }
  //   setGreet(greet);
  //   setHours(hours);
  //   setMins(mins);
  // };
  useEffect(() => {
    const split = new SplitText(text1, {
      type: "words",
      linesClass: "lineChildren",
    });

    const spli = new SplitText(text2, {
      type: "words",
    });

    const spl = new SplitText(text3, {
      type: "words",
    });
    let line1 = split.words;
    let line2 = spli.words;
    let line3 = spl.words;
    contactAnimation(header.current, line1, line2, line3, bottom);
    // getTime();
  }, []);
  return (
    <ContactStyled>
      <OuterLayout>
        <div className="contact-header" ref={header}>
          <h1> Swayed You?</h1>
          <Link to="/volunteer">
            <FiArrowLeft />
          </Link>
        </div>
        <div className="contact-content">
          <h1 ref={(el) => (text1 = el)}>GET IN TOUCH</h1>
          <p className="email" ref={(el) => (text2 = el)}>
            Leyedavid10@gmail.com
          </p>
          <p className="time" ref={(el) => (text3 = el)}>
            Dont Worry I'd reply your mail, lets go 🚀,
          </p>
          <div className="confused" ref={(el) => (bottom = el)}>
            <p>Still not swayed, click on the Logo to visit my portfolio</p>
            <a
              href="https://ogunleye.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Logo} alt="" />
            </a>
          </div>
        </div>
      </OuterLayout>
    </ContactStyled>
  );
};

export default Contact;
