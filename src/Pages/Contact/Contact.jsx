import React, { useState, useEffect, useRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { ContactStyled } from "./ContactStyled";
import Logo from "../../Images/Logo.svg";
import { Link } from "react-router-dom";
const Contact = () => {
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();
  const [greet, setGreet] = useState();
  const getTime = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let mins = currentTime.getMinutes();
    let greet = "";
    if (hours >= 1 && hours <= 11) {
      greet = "Morning";
    } else if (hours >= 12 && hours <= 17) {
      greet = "Afternoon";
    } else {
      greet = "evening";
    }
    setGreet(greet);
    setHours(hours);
    setMins(mins);
  };
  useEffect(() => {
    getTime();
  }, []);
  return (
    <ContactStyled>
      <OuterLayout>
        <div className="contact-header">
          <h1> Swayed You?</h1>
        </div>
        <div className="contact-content">
          <h1>GET IN TOUCH</h1>
          <p className="email">Leyedavid10@gmail.com</p>
          <p className="time">
            Dont Worry its just {hours}:{mins} in the {greet} in Lagos, I'd
            reply your mail 🚀
          </p>
          <div className="confused">
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
