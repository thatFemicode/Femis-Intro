import React from "react";
import { OuterLayout } from "../../Layout/Layout";
import { VolunteerStyled } from "./VoulteerStyled";
import Logo from "../../Images/Logo.svg";
import { Link } from "react-router-dom";
const Volunteer = () => {
  return (
    <VolunteerStyled>
      <OuterLayout>
        <div className="volunteer-header">
          <h1> Frontend Developer</h1>
          <img src={Logo} alt="" />
        </div>
        <div className="volunteer-content">
          <p>
            Oluwafemi is looking to volunteer as a
            <span> frontend developer </span>
            for organizations looking for volunteers and also collaborate with
            junior developers like himself and designers.
          </p>
          <div className="mid-text">
            I believe i have what it takes to make an impact and create amazing
            web experiences
          </div>
        </div>
      </OuterLayout>
    </VolunteerStyled>
  );
};

export default Volunteer;
