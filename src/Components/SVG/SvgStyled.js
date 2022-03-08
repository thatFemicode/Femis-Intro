import styled from "styled-components";

export const SvgStyled = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: -80px;
  right: -40px;
  animation: animate 30s linear infinite;
  transform-origin: center;
  @media (max-width: ${({ theme }) => theme.desktop}) {
    width: 200px;
    height: 200px;
    bottom: -30px;
  }

  .svg-2 textPath[data-v-4df41337] {
    font-size: 24px;
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
