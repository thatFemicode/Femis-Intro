import React from "react";
import styled from "styled-components";
import { forwardRef } from "react";

const ButtonStyled = styled.button`
  font-size: 0.9rem;
  padding: 0.25rem 0.85rem;
  border-radius: 9px 0 9px 0px;
  border-color: transparent;
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ margin }) => margin || "1rem"};
  max-width: 200px;
  svg {
    width: 1.2rem;
    transform: ${({ rotate }) => (rotate ? "rotate(180deg)" : "rotate(0deg)")};
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    }
  }
  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    padding: 0.45rem 0.95rem;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    font-size: 0.7rem;
    padding: 0.15rem 0.55rem;
  }
`;
const PrimaryButton = forwardRef(
  ({ name, bgColor, margin, color, rotate }, ref) => {
    return (
      <ButtonStyled
        rotate={rotate}
        ref={ref}
        bgColor={bgColor}
        margin={margin}
        color={color}
      >
        {name}
        <svg viewBox="0 0 20 20" fill="none">
          <path
            d="M6 10H14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10 6L14 10L10 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </ButtonStyled>
    );
  }
);

export default PrimaryButton;
