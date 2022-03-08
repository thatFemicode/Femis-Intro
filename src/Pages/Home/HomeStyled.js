import styled from "styled-components";

export const HomeStyled = styled.main`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 3rem;
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .home {
    &-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      position: absolute;
      top: 0;
      p {
        text-transform: uppercase;
        /* mix-blend-mode: difference; */
        /* color: #fff; */
        clip-path: inset(0 0 0 0);
        z-index: 20;
        letter-spacing: 1rem;
        -webkit-text-stroke: 1px rgba(0, 0, 0, 5);

        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 0.8rem;
          letter-spacing: 0.4rem;
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
        }
      }
    }
    &-content {
      height: 100%;
      padding-top: 5rem;

      h1 {
        clip-path: inset(0 0 0 0);
        z-index: 20;
        color: #000;
        font-size: 4rem;
        font-weight: 900;
        -webkit-text-stroke: 4px rgba(0, 0, 0, 0.7);
        color: transparent;
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 3rem;
          letter-spacing: 0.4rem;
          -webkit-text-stroke: 4px rgba(0, 0, 0, 0.6);
        }
      }
      p {
        font-size: 8rem;
        clip-path: inset(0 0 0 0);
        font-weight: 900;
        -webkit-text-stroke: 4px rgba(0, 0, 0, 0.7);
        color: transparent;
        @media (max-width: ${({ theme }) => theme.mins}) {
          font-size: 7rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 5rem;
          letter-spacing: 0.4rem;
          -webkit-text-stroke: 4px rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`;
