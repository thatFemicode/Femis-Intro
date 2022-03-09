import styled from "styled-components";

export const AboutStyled = styled.main`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 3rem;
  h1 {
    text-transform: uppercase;
    /* mix-blend-mode: difference; */
    /* color: #fff; */
    font-size: 2rem;
    clip-path: inset(0 0 0 0);
    z-index: 20;
    letter-spacing: 0.8rem;
    -webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
    transition: all 0.2s;
    line-height: 1.6;
    color: transparent;
  }

  .about {
    &-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      position: absolute;
      top: 0;
    }
    &-content {
      padding-top: 1rem;
    }
  }
`;
