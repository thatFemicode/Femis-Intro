import styled from "styled-components";

export const SvgStyled = styled.div`
  width: 380px;
  height: 380px;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: animate 30s linear infinite;
  transform-origin: center;

  .svg-2 textPath[data-v-4df41337] {
    font-size: 24px;
    /* font-family: "Grotesk"; */
    text-transform: uppercase;
    letter-spacing: 15.5px;
    fill: #000;
  }

  @keyframes animate {
    100% {
      transform: rotate(1turn);
    }
  }
`;
