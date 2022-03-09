import styled from "styled-components";

export const AboutStyled = styled.main`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 3rem;
  /* padding-left: 5rem;
  padding-right: 5rem; */

  .about {
    &-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      position: absolute;
      top: 0;
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
        @media (max-width: ${({ theme }) => theme.service}) {
          font-size: 1.5rem;
          -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 1.2rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 0.9rem;
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
          letter-spacing: 0.4rem;
        }
      }
      img {
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 40px;
        }
      }
    }
    &-content {
      position: relative;
      padding-top: 4rem;
      width: 100%;
      height: 100%;
      @media (max-width: ${({ theme }) => theme.desktop}) {
        padding-top: 3rem;
      }
      .top-text {
        font-size: 3.5rem;
        clip-path: inset(0 0 0 0);
        z-index: 20;
        /* letter-spacing: 0.1rem; */
        -webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
        transition: all 0.2s;
        line-height: 1.6;
        color: transparent;
        @media (max-width: ${({ theme }) => theme.kobe}) {
          font-size: 3rem;
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          font-size: 2.8rem;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          font-size: 2.7rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 2.5rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 2.3rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 2.1rem;
          -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.6);
        }
      }
      .mid-text {
        position: absolute;
        bottom: 10%;
        left: 25%;
        max-width: 600px;
        font-size: 2.3rem;
        clip-path: inset(0 0 0 0);
        z-index: 20;
        /* letter-spacing: 0.1rem; */
        -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
        transition: all 0.2s;
        line-height: 1.6;
        color: transparent;
        @media (max-width: ${({ theme }) => theme.kobe}) {
          font-size: 1.9rem;
          max-width: 500px;
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          font-size: 1.6rem;
          max-width: 450px;
          bottom: 5%;
          left: 20%;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          font-size: 1.6rem;
          left: 15%;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 1.5rem;
          left: 10%;
          max-width: 400px;
          bottom: 10%;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 1.3rem;
          bottom: 15%;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 1.2rem;
          bottom: 20%;
          left: 20%;
          -webkit-text-stroke: 0.8px rgba(0, 0, 0, 0.9);
        }
      }
    }
    &-links {
      height: 100%;
      display: flex;
      justify-content: space-between;
      width: 200px;
    }
  }
`;
